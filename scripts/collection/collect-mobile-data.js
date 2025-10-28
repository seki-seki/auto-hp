/**
 * Chrome DevTools MCPを使用してモバイル版のサイトデータを収集するスクリプト
 * デスクトップ版とモバイル版の両方を収集します
 *
 * 全90サイト（レスポンシブ対応サイトのみ）を対象とします
 */

const fs = require('fs').promises;
const path = require('path');

// サイトリストをall-sites.jsonから読み込み
let sites = [];

async function loadSites() {
  try {
    const data = await fs.readFile(path.join(__dirname, '../data/all-sites.json'), 'utf-8');
    sites = JSON.parse(data);
    return sites;
  } catch (error) {
    console.error('Error loading all-sites.json:', error.message);
    console.log('Using fallback site list...');
    // フォールバック用の最小限のリスト
    sites = [
      { name: "原中央保育園", url: "https://harachuou-hoikuen.com/", filename: "harachuou-hoikuen" },
      { name: "元木矯正歯科", url: "https://motoki-ortho.com/", filename: "motoki-ortho" },
      { name: "まごころ保育園", url: "https://magokoro-hoikuen.com/", filename: "magokoro-hoikuen" }
    ];
    return sites;
  }
}

// デバイスサイズ設定
const devices = {
  desktop: {
    name: 'デスクトップ',
    width: 1920,
    height: 1080,
    suffix: ''
  },
  mobile: {
    name: 'モバイル',
    width: 375,
    height: 812,
    suffix: '-mobile'
  }
};

/**
 * Claude Code用の収集手順を生成
 */
function generateCollectionInstructions() {
  const instructions = [];

  for (const site of sites) {
    const siteInstructions = {
      site: site.name,
      url: site.url,
      steps: []
    };

    // デスクトップ版の収集
    siteInstructions.steps.push({
      device: 'desktop',
      commands: [
        `# ${site.name} - デスクトップ版`,
        `mcp__chrome-devtools__navigate_page { url: "${site.url}" }`,
        `mcp__chrome-devtools__resize_page { width: 1920, height: 1080 }`,
        `Wait for page load (3 seconds)`,
        `mcp__chrome-devtools__take_screenshot { fullPage: true, filePath: "./analysis/screenshots/${site.filename}.png" }`,
        `mcp__chrome-devtools__take_snapshot { save output to: ./analysis/snapshots/${site.filename}.txt }`
      ]
    });

    // モバイル版の収集
    siteInstructions.steps.push({
      device: 'mobile',
      commands: [
        `# ${site.name} - モバイル版`,
        `mcp__chrome-devtools__navigate_page { url: "${site.url}" }`,
        `mcp__chrome-devtools__resize_page { width: 375, height: 812 }`,
        `Wait for page load (3 seconds)`,
        `mcp__chrome-devtools__take_screenshot { fullPage: true, filePath: "./analysis/screenshots/${site.filename}-mobile.png" }`,
        `mcp__chrome-devtools__take_snapshot { save output to: ./analysis/snapshots/${site.filename}-mobile.txt }`
      ]
    });

    instructions.push(siteInstructions);
  }

  return instructions;
}

/**
 * Claude Code用のプロンプトを生成
 */
async function generateClaudeCodePrompt() {
  await loadSites();

  let prompt = `# サイトデータ収集タスク

以下の${sites.length}サイト（レスポンシブ対応サイトのみ）について、**デスクトップ版とモバイル版の両方**のデータを収集してください。

## 収集するデータ
- スクリーンショット（fullPage）
- DOM スナップショット（a11y tree）

## 手順

各サイトについて以下の手順を実行してください：

`;

  sites.forEach((site, index) => {
    prompt += `### ${index + 1}. ${site.name}\n\n`;
    prompt += `**URL**: ${site.url}\n\n`;

    // デスクトップ版
    prompt += `#### デスクトップ版（1920x1080）\n`;
    prompt += `1. \`mcp__chrome-devtools__navigate_page\` でページを開く: \`${site.url}\`\n`;
    prompt += `2. \`mcp__chrome-devtools__resize_page\` で画面サイズを設定: \`width: 1920, height: 1080\`\n`;
    prompt += `3. 3秒待機（ページの読み込み完了を待つ）\n`;
    prompt += `4. \`mcp__chrome-devtools__take_screenshot\` でスクリーンショット撮影:\n`;
    prompt += `   - \`fullPage: true\`\n`;
    prompt += `   - \`filePath: "./analysis/screenshots/${site.filename}.png"\`\n`;
    prompt += `5. \`mcp__chrome-devtools__take_snapshot\` でDOMスナップショット取得\n`;
    prompt += `   - 出力を \`./analysis/snapshots/${site.filename}.txt\` に保存\n\n`;

    // モバイル版
    prompt += `#### モバイル版（375x812 - iPhone X サイズ）\n`;
    prompt += `1. \`mcp__chrome-devtools__navigate_page\` でページを開く: \`${site.url}\`\n`;
    prompt += `2. \`mcp__chrome-devtools__resize_page\` で画面サイズを設定: \`width: 375, height: 812\`\n`;
    prompt += `3. 3秒待機（ページの読み込み完了を待つ）\n`;
    prompt += `4. \`mcp__chrome-devtools__take_screenshot\` でスクリーンショット撮影:\n`;
    prompt += `   - \`fullPage: true\`\n`;
    prompt += `   - \`filePath: "./analysis/screenshots/${site.filename}-mobile.png"\`\n`;
    prompt += `5. \`mcp__chrome-devtools__take_snapshot\` でDOMスナップショット取得\n`;
    prompt += `   - 出力を \`./analysis/snapshots/${site.filename}-mobile.txt\` に保存\n\n`;

    prompt += `---\n\n`;
  });

  prompt += `## 注意事項

1. **必ず各サイトでデスクトップ版とモバイル版の両方を収集してください**
2. 画面サイズ変更後は必ず3秒待機してレイアウトが安定するのを待ってください
3. スクリーンショットは必ず \`fullPage: true\` で全体を撮影してください
4. スナップショットの出力は必ずファイルに保存してください
5. エラーが発生した場合は次のサイトに進んでください

## 期待される出力ファイル

analysis/screenshots/ ディレクトリ:
${sites.map(s => `- ${s.filename}.png (デスクトップ版)\n- ${s.filename}-mobile.png (モバイル版)`).join('\n')}

analysis/snapshots/ ディレクトリ:
${sites.map(s => `- ${s.filename}.txt (デスクトップ版)\n- ${s.filename}-mobile.txt (モバイル版)`).join('\n')}

合計: ${sites.length * 2} 枚のスクリーンショット、${sites.length * 2} 個のスナップショット

## 開始

上記の手順に従って、今すぐデータ収集を開始してください。
`;

  return prompt;
}

/**
 * チェックリストを生成
 */
async function generateChecklist() {
  await loadSites();

  let checklist = "# サイトデータ収集チェックリスト（デスクトップ + モバイル）\n\n";

  sites.forEach((site, index) => {
    checklist += `## ${index + 1}. ${site.name}\n`;
    checklist += `- [ ] デスクトップ版スクリーンショット (${site.filename}.png)\n`;
    checklist += `- [ ] デスクトップ版スナップショット (${site.filename}.txt)\n`;
    checklist += `- [ ] モバイル版スクリーンショット (${site.filename}-mobile.png)\n`;
    checklist += `- [ ] モバイル版スナップショット (${site.filename}-mobile.txt)\n\n`;
  });

  return checklist;
}

/**
 * 収集プランを表示
 */
async function displayCollectionPlan() {
  await loadSites();

  console.log("=== サイトデータ収集プラン (デスクトップ + モバイル) ===\n");
  console.log(`対象サイト数: ${sites.length}（レスポンシブ対応サイトのみ）`);
  console.log(`収集ファイル数: ${sites.length * 4} (各サイト: スクリーンショット2枚 + スナップショット2個)\n`);

  console.log("デバイスサイズ:");
  console.log(`  - デスクトップ: ${devices.desktop.width}x${devices.desktop.height}px`);
  console.log(`  - モバイル: ${devices.mobile.width}x${devices.mobile.height}px (iPhone X サイズ)\n`);

  sites.forEach((site, index) => {
    console.log(`${index + 1}. ${site.name}`);
    console.log(`   URL: ${site.url}`);
    console.log(`   出力ファイル:`);
    console.log(`     Desktop:`);
    console.log(`       - ./analysis/screenshots/${site.filename}.png`);
    console.log(`       - ./analysis/snapshots/${site.filename}.txt`);
    console.log(`     Mobile:`);
    console.log(`       - ./analysis/screenshots/${site.filename}-mobile.png`);
    console.log(`       - ./analysis/snapshots/${site.filename}-mobile.txt`);
    console.log('');
  });

  console.log("\n次のステップ:");
  console.log("1. このスクリプトで生成されたプロンプトをClaude Codeに渡す");
  console.log("2. Claude Codeがchrome-dev-mcpを使ってデータを収集");
  console.log("3. 収集完了後、run-analysis.jsを実行して分析\n");
}

module.exports = {
  sites,
  devices,
  generateCollectionInstructions,
  generateClaudeCodePrompt,
  generateChecklist,
  displayCollectionPlan
};

// CLI実行時
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];

  (async () => {
    switch (command) {
      case 'prompt':
        console.log(await generateClaudeCodePrompt());
        break;
      case 'checklist':
        console.log(await generateChecklist());
        break;
      case 'plan':
      default:
        await displayCollectionPlan();
        break;
    }
  })();
}
