const fs = require('fs').promises;
const path = require('path');

// クライアントWebサイトのURLリストを読み込む
async function loadWebsites() {
  const data = await fs.readFile('./client-websites.json', 'utf-8');
  return JSON.parse(data);
}

// ページの構造を分析してレイアウトパターンを抽出
function analyzePageStructure(snapshot) {
  const analysis = {
    layout: {
      hasHeader: false,
      hasNavigation: false,
      hasHero: false,
      sections: [],
      hasFooter: false,
      hasSidebar: false
    },
    components: {
      buttons: 0,
      links: 0,
      headings: { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 },
      images: 0,
      forms: 0,
      cards: 0,
      lists: 0
    },
    navigation: {
      type: null, // 'horizontal', 'vertical', 'hamburger'
      items: []
    },
    contentSections: []
  };

  const lines = snapshot.split('\n');

  for (const line of lines) {
    const trimmed = line.trim();

    // ヘッダーやナビゲーションの検出
    if (trimmed.includes('header') || trimmed.includes('Header')) {
      analysis.layout.hasHeader = true;
    }
    if (trimmed.includes('nav') || trimmed.includes('navigation') || trimmed.includes('menu')) {
      analysis.layout.hasNavigation = true;
    }

    // フッターの検出
    if (trimmed.includes('footer') || trimmed.includes('Footer')) {
      analysis.layout.hasFooter = true;
    }

    // コンポーネントのカウント
    if (trimmed.includes('button ')) {
      analysis.components.buttons++;
    }
    if (trimmed.includes('link ')) {
      analysis.components.links++;
    }
    if (trimmed.includes('image ')) {
      analysis.components.images++;
    }
    if (trimmed.includes('form ')) {
      analysis.components.forms++;
    }
    if (trimmed.includes('listitem ')) {
      analysis.components.lists++;
    }

    // 見出しレベルのカウント
    const headingMatch = trimmed.match(/heading "([^"]*)" level="(\d+)"/);
    if (headingMatch) {
      const level = parseInt(headingMatch[2]);
      if (level >= 1 && level <= 6) {
        analysis.components.headings[`h${level}`]++;
      }
    }
  }

  return analysis;
}

// セクションを識別
function identifySections(snapshot) {
  const sections = [];
  const lines = snapshot.split('\n');

  let currentSection = null;

  for (const line of lines) {
    const trimmed = line.trim();

    // 主要なセクション見出しを検出
    const headingMatch = trimmed.match(/heading "([^"]*)" level="(\d+)"/);
    if (headingMatch && parseInt(headingMatch[2]) <= 3) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        title: headingMatch[1],
        level: parseInt(headingMatch[2]),
        content: []
      };
    } else if (currentSection && trimmed.includes('StaticText ')) {
      const textMatch = trimmed.match(/StaticText "([^"]*)"/);
      if (textMatch && textMatch[1].length > 10) {
        currentSection.content.push(textMatch[1]);
      }
    }
  }

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}

// ナビゲーション構造を抽出
function extractNavigation(snapshot) {
  const navItems = [];
  const lines = snapshot.split('\n');

  let inNav = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.includes('navigation') || trimmed.includes('menu')) {
      inNav = true;
    }

    if (inNav && trimmed.includes('link ')) {
      const textMatch = trimmed.match(/StaticText "([^"]*)"/);
      if (textMatch) {
        navItems.push(textMatch[1]);
      }
    }

    // ナビゲーションセクションの終了を検出（簡易的）
    if (inNav && trimmed.includes('heading ') && navItems.length > 0) {
      inNav = false;
    }
  }

  return navItems;
}

async function main() {
  console.log('サイト分析を開始します...\n');

  const websitesData = await loadWebsites();
  const websites = websitesData.websites;

  const analysisResults = {
    timestamp: new Date().toISOString(),
    totalSites: websites.length,
    sites: []
  };

  console.log(`合計 ${websites.length} サイトを分析します\n`);

  // 各サイトの分析結果を処理
  // 注意: このスクリプトはchrome-devtools-mcpツールと組み合わせて使用することを想定
  // 実際のスクリーンショットとスナップショットはClaude Codeのツールで取得

  for (let i = 0; i < websites.length; i++) {
    const site = websites[i];
    console.log(`[${i + 1}/${websites.length}] ${site.name} を分析中...`);

    const siteAnalysis = {
      name: site.name,
      url: site.url,
      category: site.category,
      analysis: {
        // ここにchrome-devtools-mcpツールで取得した情報を格納
        structure: null,
        components: null,
        navigation: null,
        sections: null
      },
      screenshotPath: `analysis/screenshots/${site.name.replace(/[\/\\:]/g, '_')}.png`,
      snapshotPath: `analysis/snapshots/${site.name.replace(/[\/\\:]/g, '_')}.txt`
    };

    analysisResults.sites.push(siteAnalysis);
  }

  // 結果を保存
  await fs.writeFile(
    './analysis/analysis-results.json',
    JSON.stringify(analysisResults, null, 2),
    'utf-8'
  );

  console.log('\n分析結果を analysis/analysis-results.json に保存しました');

  return analysisResults;
}

// スナップショットファイルを分析する関数
async function analyzeSnapshot(snapshotPath) {
  try {
    const snapshot = await fs.readFile(snapshotPath, 'utf-8');

    const structure = analyzePageStructure(snapshot);
    const sections = identifySections(snapshot);
    const navigation = extractNavigation(snapshot);

    return {
      structure,
      sections,
      navigation
    };
  } catch (error) {
    console.error(`スナップショットの分析中にエラーが発生しました: ${error.message}`);
    return null;
  }
}

// エクスポート
module.exports = {
  loadWebsites,
  analyzePageStructure,
  identifySections,
  extractNavigation,
  analyzeSnapshot,
  main
};

// 直接実行された場合
if (require.main === module) {
  main().catch(console.error);
}
