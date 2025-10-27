/**
 * 収集したサイトスナップショットを分析して
 * レイアウトパターンとコンポーネントの特徴を抽出
 */

const fs = require('fs').promises;
const path = require('path');

// スナップショットファイルのリスト
const snapshotFiles = [
  'harachuou-hoikuen.txt',
  'motoki-ortho.txt',
  'magokoro-hoikuen.txt',
  'kukomae-hoikuen.txt',
  'motoki-implant.txt',
  'kks-wadatsumi.txt',
  'yasuki-group.txt',
  'motoki-dental-prevention.txt',
  'food-ch.txt',
  'daimyojin.txt'
];

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

  let currentHeading = null;

  for (const line of lines) {
    const trimmed = line.trim();

    // 見出しの検出とカウント
    const headingMatch = trimmed.match(/heading "([^"]*)" level="(\d+)"/);
    if (headingMatch) {
      const level = parseInt(headingMatch[2]);
      const text = headingMatch[1];

      if (level >= 1 && level <= 6) {
        analysis.components.headings[`h${level}`]++;

        if (level <= 3 && text.length > 0) {
          analysis.sections.push({
            level,
            title: text
          });
        }
      }

      currentHeading = text;
    }

    // コンポーネントのカウント
    if (trimmed.startsWith('uid=') && trimmed.includes('link ')) {
      analysis.components.links++;
    }
    if (trimmed.includes('button ')) {
      analysis.components.buttons++;
    }
    if (trimmed.includes('image ')) {
      analysis.components.images++;
    }
    if (trimmed.includes('form ')) {
      analysis.components.forms++;
    }
    if (trimmed.includes('Iframe ')) {
      analysis.components.iframes++;
    }
    if (trimmed.includes('listitem ')) {
      analysis.components.lists++;
    }

    // ナビゲーションアイテムの検出
    const linkMatch = trimmed.match(/link "([^"]*)"/);
    if (linkMatch && linkMatch[1].length > 0 && linkMatch[1].length < 30) {
      const linkText = linkMatch[1];
      // 一般的なナビゲーション項目を検出
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
function identifyLayoutPattern(analysis) {
  const patterns = [];

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

// すべてのスナップショットを分析
async function analyzeAllSites() {
  console.log('サイト分析を開始します...\n');

  const results = [];

  for (const filename of snapshotFiles) {
    const filePath = path.join('./analysis/snapshots', filename);

    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const siteName = filename.replace('.txt', '');

      console.log(`${siteName} を分析中...`);

      const analysis = analyzePageStructure(content);
      const patterns = identifyLayoutPattern(analysis);

      results.push({
        site: siteName,
        analysis,
        patterns
      });

    } catch (error) {
      console.error(`${filename} の読み込みエラー:`, error.message);
    }
  }

  return results;
}

// 共通パターンを抽出
function extractCommonPatterns(results) {
  const patternCounts = {};
  const componentAverages = {
    headings: { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 },
    links: 0,
    buttons: 0,
    images: 0,
    forms: 0,
    iframes: 0,
    lists: 0
  };
  const navItems = {};

  // パターンのカウント
  results.forEach(result => {
    result.patterns.forEach(pattern => {
      patternCounts[pattern] = (patternCounts[pattern] || 0) + 1;
    });

    // コンポーネントの集計
    Object.keys(componentAverages).forEach(key => {
      if (key === 'headings') {
        Object.keys(componentAverages.headings).forEach(level => {
          componentAverages.headings[level] += result.analysis.components.headings[level];
        });
      } else {
        componentAverages[key] += result.analysis.components[key];
      }
    });

    // ナビゲーション項目の集計
    result.analysis.navigation.forEach(item => {
      navItems[item] = (navItems[item] || 0) + 1;
    });
  });

  // 平均値を計算
  const count = results.length;
  Object.keys(componentAverages).forEach(key => {
    if (key === 'headings') {
      Object.keys(componentAverages.headings).forEach(level => {
        componentAverages.headings[level] = Math.round(componentAverages.headings[level] / count);
      });
    } else {
      componentAverages[key] = Math.round(componentAverages[key] / count);
    }
  });

  return {
    patternCounts,
    componentAverages,
    commonNavItems: Object.entries(navItems)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15)
      .map(([item, count]) => ({ item, count, percentage: Math.round(count / results.length * 100) }))
  };
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
    commonPatterns,
    summary: {
      description: "東海岸制作所の実績サイト群の分析結果",
      averageComponents: commonPatterns.componentAverages,
      commonLayouts: Object.entries(commonPatterns.patternCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([pattern, count]) => ({
          pattern,
          count,
          percentage: Math.round(count / results.length * 100)
        })),
      commonNavigationItems: commonPatterns.commonNavItems
    }
  };

  await fs.writeFile(
    './analysis/analysis-report.json',
    JSON.stringify(report, null, 2),
    'utf-8'
  );

  console.log('分析レポートを analysis/analysis-report.json に保存しました');

  // サマリーを表示
  console.log('\n=== 分析サマリー ===\n');
  console.log('平均コンポーネント数:');
  console.log(`  - 見出し (H2): ${commonPatterns.componentAverages.headings.h2}`);
  console.log(`  - 見出し (H3): ${commonPatterns.componentAverages.headings.h3}`);
  console.log(`  - リンク: ${commonPatterns.componentAverages.links}`);
  console.log(`  - 画像: ${commonPatterns.componentAverages.images}`);

  console.log('\n共通レイアウトパターン:');
  report.summary.commonLayouts.forEach(layout => {
    console.log(`  - ${layout.pattern}: ${layout.count}サイト (${layout.percentage}%)`);
  });

  console.log('\n共通ナビゲーション項目 (トップ10):');
  report.summary.commonNavigationItems.slice(0, 10).forEach(nav => {
    console.log(`  - "${nav.item}": ${nav.count}サイト (${nav.percentage}%)`);
  });

  return report;
}

// 実行
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { analyzePageStructure, identifyLayoutPattern, analyzeAllSites, extractCommonPatterns };
