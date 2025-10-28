#!/usr/bin/env node

/**
 * Automated Site Data Collection using Playwright
 * Collects screenshots and DOM snapshots for all 90 sites (desktop + mobile)
 *
 * Prerequisites:
 *   npm install playwright
 *   npx playwright install chromium
 *
 * Usage:
 *   node playwright-collect-all.js
 */

const { chromium } = require('playwright');
const fs = require('fs').promises;
const path = require('path');

// Configuration
const CONFIG = {
  sitesPath: '/home/yuki/git/web-page-ai/auto-hp/scripts/data/all-sites.json',
  screenshotDir: '/home/yuki/git/web-page-ai/auto-hp/analysis/screenshots',
  snapshotDir: '/home/yuki/git/web-page-ai/auto-hp/analysis/snapshots',
  desktop: { width: 1920, height: 1080 },
  mobile: { width: 375, height: 812 },
  timeout: 30000,
  waitAfterLoad: 3000,
  maxRetries: 3
};

class SiteCollector {
  constructor() {
    this.results = {
      success: [],
      failed: [],
      startTime: new Date().toISOString()
    };
    this.browser = null;
  }

  async init() {
    console.log('='.repeat(70));
    console.log('AUTOMATED SITE DATA COLLECTION');
    console.log('='.repeat(70));
    console.log(`Start time: ${this.results.startTime}\n`);

    this.browser = await chromium.launch({
      headless: true,
      args: ['--disable-web-security', '--disable-features=IsolateOrigins,site-per-process']
    });
  }

  async collectSite(site, siteNum, total) {
    console.log(`\n[${siteNum}/${total}] ${site.name}`);
    console.log(`URL: ${site.url}`);

    const context = await this.browser.newContext({
      ignoreHTTPSErrors: true,
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    });

    try {
      // Desktop version
      await this.collectVersion(context, site, 'desktop');

      // Mobile version
      await this.collectVersion(context, site, 'mobile');

      this.results.success.push({
        name: site.name,
        url: site.url,
        filename: site.filename
      });

      console.log(`  ✓ Completed successfully`);

    } catch (error) {
      console.error(`  ✗ Failed: ${error.message}`);
      this.results.failed.push({
        name: site.name,
        url: site.url,
        filename: site.filename,
        error: error.message
      });
    } finally {
      await context.close();
    }
  }

  async collectVersion(context, site, version) {
    const isMobile = version === 'mobile';
    const suffix = isMobile ? '-mobile' : '';
    const viewport = isMobile ? CONFIG.mobile : CONFIG.desktop;

    console.log(`  - Collecting ${version} version...`);

    const page = await context.newPage();
    await page.setViewportSize(viewport);

    let retries = 0;
    while (retries < CONFIG.maxRetries) {
      try {
        await page.goto(site.url, {
          waitUntil: 'networkidle',
          timeout: CONFIG.timeout
        });
        break;
      } catch (error) {
        retries++;
        if (retries >= CONFIG.maxRetries) {
          throw new Error(`Failed to load after ${CONFIG.maxRetries} attempts: ${error.message}`);
        }
        console.log(`    Retry ${retries}/${CONFIG.maxRetries}...`);
        await page.waitForTimeout(2000);
      }
    }

    // Wait for page to stabilize
    await page.waitForTimeout(CONFIG.waitAfterLoad);

    // Take screenshot
    const screenshotPath = path.join(
      CONFIG.screenshotDir,
      `${site.filename}${suffix}.png`
    );
    await page.screenshot({
      path: screenshotPath,
      fullPage: true
    });

    // Get DOM snapshot (simplified accessibility tree)
    const snapshot = await page.evaluate(() => {
      function getAccessibilityTree(element, depth = 0, uid = { counter: 0 }) {
        const indent = '  '.repeat(depth);
        let output = '';

        const role = element.getAttribute('role') || element.tagName.toLowerCase();
        const text = element.textContent?.trim().substring(0, 100) || '';
        const ariaLabel = element.getAttribute('aria-label') || '';
        const label = ariaLabel || (text && text.length < 50 ? text : '');

        const id = `uid=${uid.counter++}`;
        output += `${indent}${id} ${role}${label ? ` "${label}"` : ''}\n`;

        // Process children
        for (const child of element.children) {
          if (child.offsetParent !== null || child.tagName === 'SCRIPT' || child.tagName === 'STYLE') {
            output += getAccessibilityTree(child, depth + 1, uid);
          }
        }

        return output;
      }

      return getAccessibilityTree(document.body);
    });

    // Save snapshot
    const snapshotPath = path.join(
      CONFIG.snapshotDir,
      `${site.filename}${suffix}.txt`
    );
    await fs.writeFile(snapshotPath, snapshot, 'utf-8');

    await page.close();
    console.log(`    ✓ ${version} complete`);
  }

  async processAllSites() {
    const sites = JSON.parse(await fs.readFile(CONFIG.sitesPath, 'utf-8'));
    console.log(`Total sites to process: ${sites.length}\n`);

    for (let i = 0; i < sites.length; i++) {
      await this.collectSite(sites[i], i + 1, sites.length);

      // Progress report every 10 sites
      if ((i + 1) % 10 === 0) {
        this.printProgress(i + 1, sites.length);
      }
    }
  }

  printProgress(current, total) {
    console.log('\n' + '━'.repeat(70));
    console.log(`PROGRESS: ${current}/${total} sites processed`);
    console.log(`Success: ${this.results.success.length} | Failed: ${this.results.failed.length}`);
    console.log('━'.repeat(70));
  }

  async printSummary() {
    const endTime = new Date().toISOString();
    this.results.endTime = endTime;

    console.log('\n' + '='.repeat(70));
    console.log('COLLECTION COMPLETE');
    console.log('='.repeat(70));
    console.log(`Total sites processed: ${this.results.success.length + this.results.failed.length}`);
    console.log(`Successful: ${this.results.success.length}`);
    console.log(`Failed: ${this.results.failed.length}`);
    console.log(`Success rate: ${((this.results.success.length / 90) * 100).toFixed(2)}%`);

    if (this.results.failed.length > 0) {
      console.log('\nFailed sites:');
      this.results.failed.forEach(site => {
        console.log(`  - ${site.name} (${site.filename})`);
        console.log(`    Error: ${site.error}`);
      });
    }

    // Count files
    const screenshots = await fs.readdir(CONFIG.screenshotDir);
    const snapshots = await fs.readdir(CONFIG.snapshotDir);

    console.log(`\nFiles created:`);
    console.log(`  Screenshots: ${screenshots.length} / 180`);
    console.log(`  Snapshots: ${snapshots.length} / 180`);
    console.log(`  Total: ${screenshots.length + snapshots.length} / 360`);

    // Save summary
    const summaryPath = '/home/yuki/git/web-page-ai/auto-hp/analysis/final-collection-summary.json';
    await fs.writeFile(summaryPath, JSON.stringify(this.results, null, 2), 'utf-8');
    console.log(`\nSummary saved to: ${summaryPath}`);
    console.log('='.repeat(70));
  }

  async run() {
    try {
      await this.init();
      await this.processAllSites();
    } catch (error) {
      console.error('Fatal error:', error);
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
      await this.printSummary();
    }
  }
}

// Main execution
if (require.main === module) {
  const collector = new SiteCollector();
  collector.run().catch(console.error);
}

module.exports = SiteCollector;
