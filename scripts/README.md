# サイト分析スクリプト

東海岸制作所の実績サイト（レスポンシブ対応90サイト）からレイアウトパターンとコンポーネントの特徴を学習するためのスクリプト群です。

## 📁 ファイル構成

```
scripts/
├── data/                         # データファイル
│   └── all-sites.json            # 全90サイトのリスト（レスポンシブ対応サイトのみ）
├── collection/                   # データ収集用スクリプト
│   ├── collect-mobile-data.js    # データ収集スクリプト
│   └── COLLECTION_PROMPT.md      # Claude Code用プロンプト（90サイト × デスクトップ + モバイル）
├── analysis/                     # 分析用スクリプト
│   └── run-analysis-mobile.js    # デスクトップ + モバイル版分析スクリプト
└── README.md                     # このドキュメント
```

## 🚀 使い方

### ステップ1: モバイル版データの収集

#### 1-1. 収集プロンプトの生成

```bash
# Claude Code用のプロンプトを生成
node scripts/collection/collect-mobile-data.js prompt

# または、ファイルに保存
node scripts/collection/collect-mobile-data.js prompt > scripts/collection/COLLECTION_PROMPT.md
```

#### 1-2. Claude Codeでデータ収集

`scripts/collection/COLLECTION_PROMPT.md` の内容をClaude Codeに渡して実行します。

Claude Codeは `chrome-dev-mcp` を使用して以下を収集します：

**各サイトについて**:
- デスクトップ版（1920x1080px）
  - スクリーンショット → `analysis/screenshots/[site-name].png`
  - DOMスナップショット → `analysis/snapshots/[site-name].txt`
- モバイル版（375x812px - iPhone X）
  - スクリーンショット → `analysis/screenshots/[site-name]-mobile.png`
  - DOMスナップショット → `analysis/snapshots/[site-name]-mobile.txt`

**合計**: 90サイト × 2バージョン × 2ファイル = **360ファイル**

#### 1-3. 収集プランの確認

```bash
# 収集計画を表示
node scripts/collection/collect-mobile-data.js plan
```

#### 1-4. チェックリストの生成

```bash
# 収集チェックリストを生成
node scripts/collection/collect-mobile-data.js checklist
```

### ステップ2: データの分析

#### 2-1. モバイル版を含めた分析

```bash
# デスクトップ版 + モバイル版を分析
node scripts/analysis/run-analysis-mobile.js
```

**出力ファイル**:
- `analysis/analysis-report-mobile.json` - デスクトップ版とモバイル版の両方の分析結果

## 📊 分析結果の構造

### analysis-report-mobile.json

```json
{
  "timestamp": "2025-10-28T...",
  "totalSitesAnalyzed": 90,
  "individualAnalysis": [
    {
      "site": "harachuou-hoikuen",
      "desktop": {
        "analysis": { "components": {...}, "sections": [...], "navigation": [...] },
        "patterns": ["desktop", "hero-section", "multi-section", ...]
      },
      "mobile": {
        "analysis": { "components": {...}, "sections": [...], "navigation": [...] },
        "patterns": ["mobile", "hero-section", "multi-section", ...]
      }
    },
    ...
  ],
  "commonPatterns": {
    "desktop": {
      "patternCounts": {...},
      "componentAverages": {...},
      "commonNavItems": [...]
    },
    "mobile": {
      "patternCounts": {...},
      "componentAverages": {...},
      "commonNavItems": [...]
    }
  },
  "summary": {
    "desktop": {...},
    "mobile": {...}
  }
}
```

## 🎯 対象サイト

https://higashikaigan.co.jp/works/ のレスポンシブ対応サイト **90サイト**

**選定基準**:
- 実績ページに「PC」と「MOBILE」の両方のタブが表示されているサイト
- レスポンシブデザイン実装済みのサイトのみ

**サイトリスト**: `scripts/all-sites.json` に全90サイトのリストがあります

**主なサイト（例）**:
1. 大井保育園 - https://ooi-hoikuen.com/
2. 社会福祉法人ヒトトナリ - https://hitotonari.or.jp/
3. 原中央保育園 - https://harachuou-hoikuen.com/
4. 元木矯正歯科 - https://motoki-ortho.com/
5. まごころ保育園 - https://magokoro-hoikuen.com/
...（全90サイト）

## 📐 デバイスサイズ

- **デスクトップ**: 1920x1080px（標準的なフルHD）
- **モバイル**: 375x812px（iPhone X / iPhone 11 Pro サイズ）

## 📝 分析項目

### コンポーネント
- 見出し（H1〜H6）
- リンク
- ボタン
- 画像
- フォーム
- iframe（Google Mapsなど）
- リスト

### レイアウトパターン
- ヒーローセクション
- 複数セクション構成
- 横型ナビゲーション
- 画像リッチ
- フォーム有り

### ナビゲーション
- 共通ナビゲーション項目
- 使用頻度の高い項目

## 🔄 ワークフロー

```
1. データ収集（Claude Code + chrome-dev-mcp）
   ├── デスクトップ版スクリーンショット撮影
   ├── デスクトップ版DOMスナップショット取得
   ├── モバイル版スクリーンショット撮影
   └── モバイル版DOMスナップショット取得

2. データ分析（Node.js）
   ├── スナップショットファイルを読み込み
   ├── コンポーネント/セクション/ナビゲーションを抽出
   ├── レイアウトパターンを特定
   └── デスクトップ vs モバイルの違いを分析

3. 分析結果の活用
   ├── DESIGN_PATTERNS.md の更新
   ├── analysis-report-mobile.json の参照
   └── PROMPT_TEMPLATE_FOR_BUILDER.md への反映
```

## 🛠️ トラブルシューティング

### データ収集時のエラー

**エラー**: `Cannot navigate to page`
- **原因**: サイトがダウンしている、またはアクセス制限がある
- **対処**: 次のサイトに進む

**エラー**: `Screenshot failed`
- **原因**: ページの読み込みが完了していない
- **対処**: 待機時間を増やす（3秒 → 5秒）

### 分析時のエラー

**エラー**: `ENOENT: no such file or directory`
- **原因**: スナップショットファイルが存在しない
- **対処**: データ収集を再実行

**エラー**: `Unexpected token in JSON`
- **原因**: スナップショットファイルが破損している
- **対処**: 該当ファイルを削除して再収集

## 💡 ヒント

### 効率的なデータ収集

1. **バッチ処理**: Claude Codeに全サイトの収集を一括で依頼
2. **並列実行**: 可能であれば複数のClaude Codeセッションで並列実行
3. **エラーハンドリング**: エラーが発生しても次のサイトに進むよう指示

### 分析結果の活用

1. **デスクトップ vs モバイル**:
   - レイアウトの違いを把握
   - ナビゲーション項目の削減パターンを理解
   - 画像の配置変更を確認

2. **レスポンシブ設計**:
   - 共通パターンを抽出
   - ブレークポイントの決定
   - コンポーネントの優先順位付け

3. **プロンプト改善**:
   - `PROMPT_TEMPLATE_FOR_BUILDER.md` にモバイル版の学習データを反映
   - レスポンシブデザインの指示を具体化

## 📚 関連ドキュメント

- `DESIGN_PATTERNS.md` - レイアウトパターンの詳細
- `PROMPT_TEMPLATE_FOR_BUILDER.md` - ホームページ生成用プロンプト
- `analysis/analysis-report-mobile.json` - 分析結果（デスクトップ + モバイル）
- `analysis/analysis-report.json` - 分析結果（デスクトップのみ・旧版）

## 🔄 サイトリスト更新ワークフロー

新しい実績サイトが追加された場合は、以下の手順でリストを更新：

### 1. 全サイトリストの再収集

Claude Codeでhttps://higashikaigan.co.jp/works/のレスポンシブ対応サイトを再収集し、`scripts/data/all-sites.json` を更新

### 2. データ収集・分析の再実行

```bash
# 新しいCOLLECTION_PROMPTを生成
node scripts/collection/collect-mobile-data.js prompt > scripts/collection/COLLECTION_PROMPT.md

# Claude Codeでデータ収集を実行

# 分析を実行
node scripts/analysis/run-analysis-mobile.js
```

## 📱 デバイス優先度

**スマホ優先**: 評価者がスマホで見て評価するため、モバイル版のレイアウトを重視します。

- **デスクトップ版（1920x1080）**: PC閲覧用
- **モバイル版（375x812）**: スマホ閲覧用（iPhone X サイズ）**← 優先**

タブレットやダークモードは対象外です。

## 🔮 今後の展開

- [x] レスポンシブ対応サイト90サイトの学習データ収集
- [ ] アニメーション・トランジションの分析
- [ ] カラースキームの自動抽出
- [ ] フォントファミリーの分析
- [ ] モバイル版レイアウトパターンの詳細分析
