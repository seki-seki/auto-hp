/**
 * Chrome DevTools MCPを使用してサイトデータを収集するヘルパースクリプト
 * このスクリプトはClaude Codeと連携して動作します
 */

const fs = require("fs").promises;
const path = require("path");

// 残りのサイトリスト（既に収集済みの3サイトを除く）
const remainingSites = [
  {
    name: "元木矯正歯科",
    url: "https://motoki-ortho.com/",
    filename: "motoki-ortho",
  },
  {
    name: "まごころ保育園",
    url: "https://magokoro-hoikuen.com/",
    filename: "magokoro-hoikuen",
  },
  {
    name: "熊本空港レンタカー",
    url: "https://kumamoto-rentacar.jp/",
    filename: "kumamoto-rentacar",
  },
  {
    name: "空港前保育園",
    url: "https://kukomae-hoikuen.com/",
    filename: "kukomae-hoikuen",
  },
  {
    name: "医療法人徳治会 インプラントサイト",
    url: "https://www.motoki-implant.com/",
    filename: "motoki-implant",
  },
  {
    name: "株式会社海神",
    url: "https://kks-wadatsumi.com/",
    filename: "kks-wadatsumi",
  },
  {
    name: "安岐グループ",
    url: "https://yasuki-group.co.jp/",
    filename: "yasuki-group",
  },
  {
    name: "元木歯科予防サイト",
    url: "https://www.motoki-dental-prevention.com/",
    filename: "motoki-dental-prevention",
  },
  {
    name: "株式会社フードチャネル",
    url: "https://food-ch.co.jp/",
    filename: "food-ch",
  },
  { name: "大明神", url: "https://daimyojin.com/", filename: "daimyojin" },
];

// 収集指示を生成
function generateCollectionInstructions() {
  const instructions = [];

  for (const site of remainingSites) {
    instructions.push({
      site: site.name,
      url: site.url,
      steps: [
        `mcp__chrome-devtools__navigate_page: ${site.url}`,
        `mcp__chrome-devtools__take_screenshot (fullPage: true, filePath: ./analysis/screenshots/${site.filename}.png)`,
        `mcp__chrome-devtools__take_snapshot (save to: ./analysis/snapshots/${site.filename}.txt)`,
      ],
    });
  }

  return instructions;
}

// マークダウン形式のチェックリストを生成
function generateChecklist() {
  let checklist = "# サイトデータ収集チェックリスト\n\n";
  checklist += "## 完了済み\n";
  checklist += "- [x] 大井保育園 (ooi-hoikuen.com)\n";
  checklist += "- [x] ひととなり (hitotonari.or.jp)\n";
  checklist += "- [x] 原中央保育園 (harachuou-hoikuen.com)\n\n";
  checklist += "## 残り\n";

  for (const site of remainingSites) {
    checklist += `- [ ] ${site.name} (${site.url})\n`;
  }

  return checklist;
}

// 各サイトの収集手順を表示
function displayCollectionPlan() {
  console.log("=== サイトデータ収集プラン ===\n");
  console.log(`残り ${remainingSites.length} サイト\n`);

  remainingSites.forEach((site, index) => {
    console.log(`${index + 1}. ${site.name}`);
    console.log(`   URL: ${site.url}`);
    console.log(`   Screenshot: ./analysis/screenshots/${site.filename}.png`);
    console.log(`   Snapshot: ./analysis/snapshots/${site.filename}.txt\n`);
  });
}

module.exports = {
  remainingSites,
  generateCollectionInstructions,
  generateChecklist,
  displayCollectionPlan,
};

if (require.main === module) {
  displayCollectionPlan();
  console.log("\n" + generateChecklist());
}
