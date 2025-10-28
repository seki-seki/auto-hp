/**
 * デスクトップ版とモバイル版の両方のスナップショットを分析
 *
 * 全90サイト（レスポンシブ対応サイトのみ）を対象とします
 */

const fs = require('fs').promises;
const path = require('path');

// サイトリストをall-sites.jsonから読み込み
let siteNames = [];

async function loadSiteNames() {
  try {
    const data = await fs.readFile(path.join(__dirname, '../data/all-sites.json'), 'utf-8');
    const sites = JSON.parse(data);
    siteNames = sites.map(site => site.filename);
    return siteNames;
  } catch (error) {
    console.error('Error loading all-sites.json:', error.message);
    console.log('Using fallback site list...');
    // フォールバック用の最小限のリスト
    siteNames = [
      'harachuou-hoikuen',
      'motoki-ortho',
      'magokoro-hoikuen'
    ];
    return siteNames;
  }
}

// ページ構造を分析
function analyzePageStructure(snapshot) {
  const lines = snapshot.split('\n');

  const analysis = {
    components: {
      headings: { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 },
      links: 0,
      buttons: 0,
      images: 0,
      forms: 0,
      iframes: 0,
      lists: 0
    },
    sections: [],
    navigation: []
  };

  for (const line of lines) {
    const trimmed = line.trim();

    // 見出しの検出とカウント (Playwright形式: uid=N h2 "text")
    const headingMatch = trimmed.match(/uid=\d+\s+(h[1-6])(?:\s+"([^"]*)")?/);
    if (headingMatch) {
      const tag = headingMatch[1]; // h1, h2, etc.
      const level = parseInt(tag.substring(1)); // 1, 2, etc.
      const text = headingMatch[2] || '';

      if (level >= 1 && level <= 6) {
        analysis.components.headings[`h${level}`]++;

        if (level <= 3 && text.length > 0) {
          analysis.sections.push({
            level,
            title: text
          });
        }
      }
    }

    // コンポーネントのカウント (Playwright形式)
    // リンク検出: uid=N a または uid=N a "text"
    if (trimmed.match(/uid=\d+\s+a(\s|$|")/)) {
      analysis.components.links++;
    }

    // ボタン検出: uid=N button
    if (trimmed.match(/uid=\d+\s+button(\s|$|")/)) {
      analysis.components.buttons++;
    }

    // 画像検出: uid=N img
    if (trimmed.match(/uid=\d+\s+img(\s|$|")/)) {
      analysis.components.images++;
    }

    // フォーム検出: uid=N form
    if (trimmed.match(/uid=\d+\s+form(\s|$|")/)) {
      analysis.components.forms++;
    }

    // iframe検出: uid=N iframe
    if (trimmed.match(/uid=\d+\s+iframe(\s|$|")/)) {
      analysis.components.iframes++;
    }

    // リスト検出: uid=N li
    if (trimmed.match(/uid=\d+\s+li(\s|$|")/)) {
      analysis.components.lists++;
    }

    // ナビゲーションアイテムの検出 (Playwright形式: uid=N a "text")
    const linkTextMatch = trimmed.match(/uid=\d+\s+a\s+"([^"]*)"/);
    if (linkTextMatch && linkTextMatch[1].length > 0 && linkTextMatch[1].length < 30) {
      const linkText = linkTextMatch[1];
      if (linkText.match(/(お知らせ|施設|保育|入園|採用|会社|サービス|メニュー|アクセス|お問い合わせ|TOP|HOME|ABOUT|CONTACT)/i)) {
        if (!analysis.navigation.includes(linkText)) {
          analysis.navigation.push(linkText);
        }
      }
    }
  }

  return analysis;
}

// レイアウトパターンを特定
function identifyLayoutPattern(analysis, device) {
  const patterns = [];

  // デバイス情報を追加
  patterns.push(device);

  // ヒーローセクションの有無
  if (analysis.sections.length > 0) {
    patterns.push('hero-section');
  }

  // 複数セクション構成
  if (analysis.sections.length >= 3) {
    patterns.push('multi-section');
  }

  // ナビゲーション
  if (analysis.navigation.length >= 3) {
    patterns.push('horizontal-nav');
  }

  // リッチコンテンツ
  if (analysis.components.images > 5) {
    patterns.push('image-rich');
  }

  // フォーム有り
  if (analysis.components.forms > 0) {
    patterns.push('with-forms');
  }

  return patterns;
}

// デスクトップ版とモバイル版の両方を分析
async function analyzeSite(siteName) {
  const result = {
    site: siteName,
    desktop: null,
    mobile: null
  };

  // デスクトップ版
  try {
    const desktopPath = path.join(__dirname, '../../analysis/snapshots', `${siteName}.txt`);
    const desktopContent = await fs.readFile(desktopPath, 'utf-8');
    const desktopAnalysis = analyzePageStructure(desktopContent);
    const desktopPatterns = identifyLayoutPattern(desktopAnalysis, 'desktop');

    result.desktop = {
      analysis: desktopAnalysis,
      patterns: desktopPatterns
    };
  } catch (error) {
    console.error(`${siteName} (desktop) の読み込みエラー:`, error.message);
  }

  // モバイル版
  try {
    const mobilePath = path.join(__dirname, '../../analysis/snapshots', `${siteName}-mobile.txt`);
    const mobileContent = await fs.readFile(mobilePath, 'utf-8');
    const mobileAnalysis = analyzePageStructure(mobileContent);
    const mobilePatterns = identifyLayoutPattern(mobileAnalysis, 'mobile');

    result.mobile = {
      analysis: mobileAnalysis,
      patterns: mobilePatterns
    };
  } catch (error) {
    console.error(`${siteName} (mobile) の読み込みエラー:`, error.message);
  }

  return result;
}

// すべてのサイトを分析
async function analyzeAllSites() {
  await loadSiteNames();

  console.log(`サイト分析を開始します（デスクトップ + モバイル）...`);
  console.log(`対象サイト数: ${siteNames.length}（レスポンシブ対応サイトのみ）\n`);

  const results = [];

  for (const siteName of siteNames) {
    console.log(`${siteName} を分析中...`);
    const result = await analyzeSite(siteName);
    results.push(result);
  }

  return results;
}

// 共通パターンを抽出（デスクトップとモバイル別々に）
function extractCommonPatterns(results) {
  const desktop = {
    patternCounts: {},
    componentAverages: {
      headings: { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 },
      links: 0,
      buttons: 0,
      images: 0,
      forms: 0,
      iframes: 0,
      lists: 0
    },
    navItems: {}
  };

  const mobile = {
    patternCounts: {},
    componentAverages: {
      headings: { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 },
      links: 0,
      buttons: 0,
      images: 0,
      forms: 0,
      iframes: 0,
      lists: 0
    },
    navItems: {}
  };

  let desktopCount = 0;
  let mobileCount = 0;

  // 集計
  results.forEach(result => {
    // デスクトップ版
    if (result.desktop) {
      desktopCount++;
      result.desktop.patterns.forEach(pattern => {
        desktop.patternCounts[pattern] = (desktop.patternCounts[pattern] || 0) + 1;
      });

      Object.keys(desktop.componentAverages).forEach(key => {
        if (key === 'headings') {
          Object.keys(desktop.componentAverages.headings).forEach(level => {
            desktop.componentAverages.headings[level] += result.desktop.analysis.components.headings[level];
          });
        } else {
          desktop.componentAverages[key] += result.desktop.analysis.components[key];
        }
      });

      result.desktop.analysis.navigation.forEach(item => {
        desktop.navItems[item] = (desktop.navItems[item] || 0) + 1;
      });
    }

    // モバイル版
    if (result.mobile) {
      mobileCount++;
      result.mobile.patterns.forEach(pattern => {
        mobile.patternCounts[pattern] = (mobile.patternCounts[pattern] || 0) + 1;
      });

      Object.keys(mobile.componentAverages).forEach(key => {
        if (key === 'headings') {
          Object.keys(mobile.componentAverages.headings).forEach(level => {
            mobile.componentAverages.headings[level] += result.mobile.analysis.components.headings[level];
          });
        } else {
          mobile.componentAverages[key] += result.mobile.analysis.components[key];
        }
      });

      result.mobile.analysis.navigation.forEach(item => {
        mobile.navItems[item] = (mobile.navItems[item] || 0) + 1;
      });
    }
  });

  // 平均値を計算
  [desktop, mobile].forEach((deviceData, index) => {
    const count = index === 0 ? desktopCount : mobileCount;
    if (count > 0) {
      Object.keys(deviceData.componentAverages).forEach(key => {
        if (key === 'headings') {
          Object.keys(deviceData.componentAverages.headings).forEach(level => {
            deviceData.componentAverages.headings[level] = Math.round(deviceData.componentAverages.headings[level] / count);
          });
        } else {
          deviceData.componentAverages[key] = Math.round(deviceData.componentAverages[key] / count);
        }
      });

      deviceData.commonNavItems = Object.entries(deviceData.navItems)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 15)
        .map(([item, itemCount]) => ({ item, count: itemCount, percentage: Math.round(itemCount / count * 100) }));
    }
  });

  return { desktop, mobile };
}

// メイン処理
async function main() {
  const results = await analyzeAllSites();

  console.log(`\n✓ ${results.length} サイトの分析が完了しました\n`);

  const commonPatterns = extractCommonPatterns(results);

  // 結果をファイルに保存
  const report = {
    timestamp: new Date().toISOString(),
    totalSitesAnalyzed: results.length,
    individualAnalysis: results,
    commonPatterns: {
      desktop: {
        patternCounts: commonPatterns.desktop.patternCounts,
        componentAverages: commonPatterns.desktop.componentAverages,
        commonNavItems: commonPatterns.desktop.commonNavItems
      },
      mobile: {
        patternCounts: commonPatterns.mobile.patternCounts,
        componentAverages: commonPatterns.mobile.componentAverages,
        commonNavItems: commonPatterns.mobile.commonNavItems
      }
    },
    summary: {
      description: "東海岸制作所の実績サイト群の分析結果（デスクトップ + モバイル）",
      desktop: {
        averageComponents: commonPatterns.desktop.componentAverages,
        commonLayouts: Object.entries(commonPatterns.desktop.patternCounts)
          .sort((a, b) => b[1] - a[1])
          .map(([pattern, count]) => ({
            pattern,
            count,
            percentage: Math.round(count / results.filter(r => r.desktop).length * 100)
          })),
        commonNavigationItems: commonPatterns.desktop.commonNavItems
      },
      mobile: {
        averageComponents: commonPatterns.mobile.componentAverages,
        commonLayouts: Object.entries(commonPatterns.mobile.patternCounts)
          .sort((a, b) => b[1] - a[1])
          .map(([pattern, count]) => ({
            pattern,
            count,
            percentage: Math.round(count / results.filter(r => r.mobile).length * 100)
          })),
        commonNavigationItems: commonPatterns.mobile.commonNavItems
      }
    }
  };

  await fs.writeFile(
    path.join(__dirname, '../../analysis/analysis-report-mobile.json'),
    JSON.stringify(report, null, 2),
    'utf-8'
  );

  console.log('分析レポートを analysis/analysis-report-mobile.json に保存しました');

  // サマリーを表示
  console.log('\n=== 分析サマリー（デスクトップ版） ===\n');
  console.log('平均コンポーネント数:');
  console.log(`  - 見出し (H2): ${commonPatterns.desktop.componentAverages.headings.h2}`);
  console.log(`  - 見出し (H3): ${commonPatterns.desktop.componentAverages.headings.h3}`);
  console.log(`  - リンク: ${commonPatterns.desktop.componentAverages.links}`);
  console.log(`  - 画像: ${commonPatterns.desktop.componentAverages.images}`);

  console.log('\n共通レイアウトパターン:');
  report.summary.desktop.commonLayouts.forEach(layout => {
    console.log(`  - ${layout.pattern}: ${layout.count}サイト (${layout.percentage}%)`);
  });

  console.log('\n=== 分析サマリー（モバイル版） ===\n');
  console.log('平均コンポーネント数:');
  console.log(`  - 見出し (H2): ${commonPatterns.mobile.componentAverages.headings.h2}`);
  console.log(`  - 見出し (H3): ${commonPatterns.mobile.componentAverages.headings.h3}`);
  console.log(`  - リンク: ${commonPatterns.mobile.componentAverages.links}`);
  console.log(`  - 画像: ${commonPatterns.mobile.componentAverages.images}`);

  console.log('\n共通レイアウトパターン:');
  report.summary.mobile.commonLayouts.forEach(layout => {
    console.log(`  - ${layout.pattern}: ${layout.count}サイト (${layout.percentage}%)`);
  });

  console.log('\n=== デスクトップ vs モバイルの違い ===\n');
  console.log('ナビゲーション項目数:');
  console.log(`  - デスクトップ: 平均 ${commonPatterns.desktop.commonNavItems.length} 項目`);
  console.log(`  - モバイル: 平均 ${commonPatterns.mobile.commonNavItems.length} 項目`);

  return report;
}

// 実行
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { analyzeSite, analyzeAllSites, extractCommonPatterns };
