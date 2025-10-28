#!/usr/bin/env python3
"""
Automated Site Data Collection using Selenium
Collects screenshots and DOM snapshots for all 90 sites (desktop + mobile)

Prerequisites:
    pip install selenium webdriver-manager

Usage:
    python3 selenium-collect-all.py
"""

import json
import time
import os
from pathlib import Path
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

# Configuration
CONFIG = {
    'sites_path': '/home/yuki/git/web-page-ai/auto-hp/scripts/data/all-sites.json',
    'screenshot_dir': '/home/yuki/git/web-page-ai/auto-hp/analysis/screenshots',
    'snapshot_dir': '/home/yuki/git/web-page-ai/auto-hp/analysis/snapshots',
    'desktop': {'width': 1920, 'height': 1080},
    'mobile': {'width': 375, 'height': 812},
    'timeout': 30,
    'wait_after_load': 3,
    'max_retries': 3
}

class SiteCollector:
    def __init__(self):
        self.results = {
            'success': [],
            'failed': [],
            'start_time': datetime.now().isoformat()
        }
        self.driver = None

    def init_driver(self):
        """Initialize Chrome WebDriver"""
        print('=' * 70)
        print('AUTOMATED SITE DATA COLLECTION (Selenium)')
        print('=' * 70)
        print(f'Start time: {self.results["start_time"]}\n')
        print('Initializing Chrome WebDriver...')

        chrome_options = Options()
        chrome_options.add_argument('--headless')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--disable-web-security')
        chrome_options.add_argument('--ignore-certificate-errors')
        chrome_options.add_argument('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')

        service = Service(ChromeDriverManager().install())
        self.driver = webdriver.Chrome(service=service, options=chrome_options)
        print('✓ WebDriver initialized\n')

    def collect_version(self, site, version='desktop'):
        """Collect screenshot and snapshot for a specific version"""
        is_mobile = version == 'mobile'
        suffix = '-mobile' if is_mobile else ''
        viewport = CONFIG['mobile'] if is_mobile else CONFIG['desktop']

        print(f'  - Collecting {version} version...')

        # Set viewport size
        self.driver.set_window_size(viewport['width'], viewport['height'])

        # Navigate to URL with retry logic
        retries = 0
        while retries < CONFIG['max_retries']:
            try:
                self.driver.get(site['url'])
                # Wait for page to be somewhat loaded
                WebDriverWait(self.driver, CONFIG['timeout']).until(
                    lambda d: d.execute_script('return document.readyState') == 'complete'
                )
                break
            except Exception as e:
                retries += 1
                if retries >= CONFIG['max_retries']:
                    raise Exception(f"Failed to load after {CONFIG['max_retries']} attempts: {str(e)}")
                print(f'    Retry {retries}/{CONFIG["max_retries"]}...')
                time.sleep(2)

        # Wait for page to stabilize
        time.sleep(CONFIG['wait_after_load'])

        # Take screenshot
        screenshot_path = os.path.join(
            CONFIG['screenshot_dir'],
            f"{site['filename']}{suffix}.png"
        )

        # Get full page height for full-page screenshot
        total_height = self.driver.execute_script("return document.body.scrollHeight")
        self.driver.set_window_size(viewport['width'], total_height)
        time.sleep(0.5)  # Wait for resize
        self.driver.save_screenshot(screenshot_path)

        # Get DOM snapshot (simplified)
        snapshot = self.driver.execute_script("""
            function getSimplifiedDOM(element, depth = 0, uid = {counter: 0}) {
                const indent = '  '.repeat(depth);
                let output = '';

                const tag = element.tagName.toLowerCase();
                const text = element.textContent?.trim().substring(0, 100) || '';
                const id = element.id ? `#${element.id}` : '';
                const classes = element.className ? `.${element.className.split(' ')[0]}` : '';

                const label = text.length < 50 ? text : '';
                const uidStr = `uid=${uid.counter++}`;

                output += `${indent}${uidStr} ${tag}${id}${classes}${label ? ` "${label}"` : ''}\\n`;

                // Process children
                for (const child of element.children) {
                    output += getSimplifiedDOM(child, depth + 1, uid);
                }

                return output;
            }

            return getSimplifiedDOM(document.body);
        """)

        # Save snapshot
        snapshot_path = os.path.join(
            CONFIG['snapshot_dir'],
            f"{site['filename']}{suffix}.txt"
        )
        with open(snapshot_path, 'w', encoding='utf-8') as f:
            f.write(snapshot)

        print(f'    ✓ {version} complete')

    def collect_site(self, site, site_num, total):
        """Collect data for a single site (both desktop and mobile)"""
        print(f'\n[{site_num}/{total}] {site["name"]}')
        print(f'URL: {site["url"]}')

        try:
            # Desktop version
            self.collect_version(site, 'desktop')

            # Mobile version
            self.collect_version(site, 'mobile')

            self.results['success'].append({
                'name': site['name'],
                'url': site['url'],
                'filename': site['filename']
            })

            print(f'  ✓ Completed successfully')

        except Exception as e:
            print(f'  ✗ Failed: {str(e)}')
            self.results['failed'].append({
                'name': site['name'],
                'url': site['url'],
                'filename': site['filename'],
                'error': str(e)
            })

    def process_all_sites(self):
        """Process all sites from the JSON file"""
        with open(CONFIG['sites_path'], 'r', encoding='utf-8') as f:
            sites = json.load(f)

        print(f'Total sites to process: {len(sites)}\n')

        for i, site in enumerate(sites, 1):
            self.collect_site(site, i, len(sites))

            # Progress report every 10 sites
            if i % 10 == 0:
                self.print_progress(i, len(sites))

    def print_progress(self, current, total):
        """Print progress report"""
        print('\n' + '━' * 70)
        print(f'PROGRESS: {current}/{total} sites processed')
        print(f'Success: {len(self.results["success"])} | Failed: {len(self.results["failed"])}')
        print('━' * 70)

    def print_summary(self):
        """Print final summary and save results"""
        end_time = datetime.now().isoformat()
        self.results['end_time'] = end_time

        print('\n' + '=' * 70)
        print('COLLECTION COMPLETE')
        print('=' * 70)
        total_processed = len(self.results['success']) + len(self.results['failed'])
        print(f'Total sites processed: {total_processed}')
        print(f'Successful: {len(self.results["success"])}')
        print(f'Failed: {len(self.results["failed"])}')
        print(f'Success rate: {(len(self.results["success"]) / 90 * 100):.2f}%')

        if self.results['failed']:
            print('\nFailed sites:')
            for site in self.results['failed']:
                print(f'  - {site["name"]} ({site["filename"]})')
                print(f'    Error: {site["error"]}')

        # Count files
        screenshots = list(Path(CONFIG['screenshot_dir']).glob('*.png'))
        snapshots = list(Path(CONFIG['snapshot_dir']).glob('*.txt'))

        print(f'\nFiles created:')
        print(f'  Screenshots: {len(screenshots)} / 180')
        print(f'  Snapshots: {len(snapshots)} / 180')
        print(f'  Total: {len(screenshots) + len(snapshots)} / 360')

        # Save summary
        summary_path = '/home/yuki/git/web-page-ai/auto-hp/analysis/final-collection-summary.json'
        with open(summary_path, 'w', encoding='utf-8') as f:
            json.dump(self.results, f, indent=2, ensure_ascii=False)

        print(f'\nSummary saved to: {summary_path}')
        print('=' * 70)

    def run(self):
        """Main execution method"""
        try:
            self.init_driver()
            self.process_all_sites()
        except Exception as e:
            print(f'Fatal error: {str(e)}')
        finally:
            if self.driver:
                self.driver.quit()
            self.print_summary()

def main():
    collector = SiteCollector()
    collector.run()

if __name__ == '__main__':
    main()
