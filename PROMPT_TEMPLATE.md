# ホームページ作成プロンプトテンプレート

このテンプレートは、Claude Codeにホームページを作成させる際に使用します。

---

## 基本プロンプト

```
【作業指示】確認や質問はせず、直ちにホームページ作成作業を開始してください。

🔴🔴🔴 【超重要】ヒーロー画像は必須です！必ず実装してください！ 🔴🔴🔴

【必須実装事項 - 最優先】
1. ✅ images/フォルダを作成
2. ✅ 業種を特定し、適切なキーワードを選定
3. ✅ Unsplash Source APIから業種に適した画像をダウンロード
4. ✅ <img>タグでヒーロー画像を必ず表示（images/hero-X.jpg）

【禁止事項】
❌ CSSグラデーションだけでヒーロー背景を済ませること
❌ 画像なしでヒーローセクションを作成すること
❌ ランダム画像（random=1など）を使用すること → 必ず業種別キーワードを使用

以下の事業内容Markdownファイルを基に、3パターンの異なるデザインのホームページを作成し、
`dist/[client-name]/` ディレクトリに統合して出力してください。

## 入力ファイル
@gaia_kumamoto.md （または該当する事業内容ファイル）

## 参照すべき分析結果
- @DESIGN_PATTERNS.md - レイアウトパターンとコンポーネントの特徴
- @analysis/analysis-report.json - 実績サイトの詳細分析データ
- @analysis/screenshots/ - 実績サイトのスクリーンショット（視覚的参考）

## 出力先
`dist/[client-name]/` （例: `dist/gaia-llc/`）
- index.html（pattern-aと同じ内容、トップページ）
- pattern-a.html, pattern-b.html, pattern-c.html（ナビゲーション付き）
- **images/** （ヒーロー画像やその他の画像を配置）

## 作成パターン

**重要: 3パターンはレイアウト・構造で差別化し、ブランドカラーは全パターン共通で使用してください。**

### パターンA: シンプル・1カラムレイアウト
**レイアウトの特徴:**
- 縦スクロール中心の1カラムレイアウト
- 大きな余白とタイポグラフィ重視
- セクションは全幅で、センター寄せのコンテンツ
- ミニマルなアニメーション効果（フェードイン、スライド）

**コンポーネント配置:**
- ヒーロー: フルスクリーン、中央配置テキスト
- セクション: 1カラムで縦に並べる
- 画像: 大きく見せる（全幅または80%幅）
- カード: 横並び（1-3列）、均等な余白

### パターンB: グリッド・カードベースレイアウト
**レイアウトの特徴:**
- 2カラムグリッドを基本とした構造
- 情報をカード形式で整理
- 伝統的で読みやすいレイアウト
- セクションごとに背景色で区切り

**コンポーネント配置:**
- ヒーロー: 左右2分割（テキスト+画像）
- セクション: 2-3カラムグリッド
- 画像: カード内に収める（サムネイル的）
- カード: グリッド配置、ボーダーまたは影で区別

### パターンC: 非対称・ビジュアル重視レイアウト
**レイアウトの特徴:**
- 非対称なレイアウト（左右で異なる幅）
- 画像を大きく配置、テキストとオーバーラップ
- ダイナミックな視差効果（パララックス）
- セクションごとに異なるレイアウトパターン

**コンポーネント配置:**
- ヒーロー: 斜め分割、または画像全面+テキストオーバーレイ
- セクション: 交互レイアウト（左右入れ替え）
- 画像: はみ出し配置、オーバーラップ
- カード: 非対称グリッド、サイズ違い

## 共通要件

### 必須セクション（分析結果より）
全サイトで以下のセクションを含めてください：

1. **ヘッダー**
   - ロゴエリア
   - ナビゲーションメニュー
   - お問い合わせボタン/電話番号

2. **ヒーローセクション** （100%のサイトで採用）
   - メインビジュアル
   - キャッチコピー
   - スクロール誘導

3. **メインコンテンツセクション**（平均5個のH2見出し）
   - 事業内容・サービス紹介
   - 会社概要・メッセージ
   - 特徴・強み

4. **CTAセクション**
   - お問い合わせへの誘導
   - 電話番号（クリッカブル）
   - アクションボタン

5. **アクセス・地図セクション**
   - 住所情報
   - Google Maps埋め込み（iframe）

6. **フッター**
   - ナビゲーション（再掲）
   - 会社情報
   - コピーライト

### コンポーネントガイドライン（分析結果より）

#### 見出し構造
- H2: 5個程度（主要セクション）
- H3: 5個程度（サブセクション）
- 英語ラベル併記を推奨（例: "会社概要 COMPANY"）

#### リンク・ナビゲーション
- 平均48個のリンク
- 横型ナビゲーション推奨（70%のサイトで採用）

#### 視覚要素
- 適度な画像配置（平均2-8枚）
- Google Maps iframe（1個）

### 技術仕様

#### HTML/CSS/JS版の場合
- HTML5セマンティックタグを使用
- CSS3カスタムプロパティでテーマ管理
- レスポンシブデザイン対応
- バニラJavaScript（最小限）
- フォルダ構成:
  ```
  dist/[client-name]/
  ├── index.html              # パターンAと同じ内容（トップページ）
  ├── pattern-a.html          # パターンA（ナビゲーション付き）
  ├── pattern-b.html          # パターンB（ナビゲーション付き）
  ├── pattern-c.html          # パターンC（ナビゲーション付き）
  ├── images/                 # 【必須】画像ファイル
  │   ├── hero-a.jpg          # パターンA用ヒーロー画像
  │   ├── hero-b.jpg          # パターンB用ヒーロー画像
  │   ├── hero-c.jpg          # パターンC用ヒーロー画像
  │   └── placeholder.jpg     # 汎用プレースホルダー
  ├── css/
  │   ├── pattern-a/
  │   │   ├── reset.css
  │   │   ├── variables.css
  │   │   ├── style.css
  │   │   └── responsive.css
  │   ├── pattern-b/
  │   └── pattern-c/
  └── js/
      ├── pattern-a/
      │   └── main.js
      ├── pattern-b/
      └── pattern-c/
  ```

#### React版の場合
- React 18+
- コンポーネントベース設計
- CSS Modules or Styled Components
- フォルダ構成:
  ```
  dist/[client-name]/
  ├── index.html              # ビルド後のエントリーポイント
  ├── assets/                 # ビルド後のアセット
  └── ...（ビルド成果物）

  src/                        # 開発用ソース（distとは別）
  ├── patterns/
  │   ├── PatternA/
  │   ├── PatternB/
  │   └── PatternC/
  ├── components/
  ├── App.jsx                 # パターン切り替えロジック
  └── index.jsx
  ```

### 出力形式

3つのパターンを統合した形で以下の形式で出力してください：

1. **ディレクトリ作成**
   - `dist/[client-name]/` （統合出力ディレクトリ）

2. **ディレクトリ内容**
   - `index.html` - パターンAと同じ内容（トップページ）
   - `pattern-a.html` - パターンA（ナビゲーションヘッダー付き）
   - `pattern-b.html` - パターンB（ナビゲーションヘッダー付き）
   - `pattern-c.html` - パターンC（ナビゲーションヘッダー付き）
   - `css/pattern-{a,b,c}/` - 各パターンのCSS
   - `js/pattern-{a,b,c}/` - 各パターンのJS

3. **ヘッダーナビゲーション（全HTMLに必須）**
   ```html
   <header class="header">
     <div class="header-inner">
       <a href="index.html" class="logo">[クライアント名]</a>
       <nav class="nav">
         <a href="pattern-a.html">Pattern A</a>
         <a href="pattern-b.html">Pattern B</a>
         <a href="pattern-c.html">Pattern C</a>
       </nav>
       <button class="mobile-menu-toggle" aria-label="Menu">
         <span></span>
         <span></span>
         <span></span>
       </button>
     </div>
   </header>
   ```
   - 現在表示中のパターンには `style="font-weight: 700; color: var(--color-accent);"` を追加

4. **CSS/JSパス**
   - pattern-a.html: `css/pattern-a/`, `js/pattern-a/`
   - pattern-b.html: `css/pattern-b/`, `js/pattern-b/`
   - pattern-c.html: `css/pattern-c/`, `js/pattern-c/`

## 実行手順

1. 入力Markdownを読み込み、会社情報・業種を抽出
2. 分析結果を参照し、適切なレイアウト・コンポーネントを選択
3. `dist/[client-name]/` と `dist/[client-name]/images/` ディレクトリを作成

4. **【最重要】ヒーロー画像を必ずダウンロード・配置**

   **業種別の画像キーワード:**
   - 企業・不動産: `office-building`, `architecture`, `business-district`, `modern-building`
   - 保育園・福祉: `children-playing`, `kindergarten`, `happy-kids`, `playground`
   - 医療機関: `hospital`, `medical-clinic`, `healthcare`, `clean-environment`
   - 飲食店: `restaurant`, `food`, `dining`, `chef`
   - 一般企業: `office`, `workspace`, `team`, `professional`

   ```bash
   # 必ず実行してください！
   mkdir -p dist/[client-name]/images

   # 業種に合わせて画像をダウンロード
   # 例: 企業・不動産の場合
   curl -L -o dist/[client-name]/images/hero-a.jpg "https://source.unsplash.com/1920x1080/?office-building,architecture"
   curl -L -o dist/[client-name]/images/hero-b.jpg "https://source.unsplash.com/1920x1080/?modern-building,business"
   curl -L -o dist/[client-name]/images/hero-c.jpg "https://source.unsplash.com/1920x1080/?architecture,cityscape"

   # 例: 保育園の場合
   # curl -L -o dist/[client-name]/images/hero-a.jpg "https://source.unsplash.com/1920x1080/?children-playing,kindergarten"
   # curl -L -o dist/[client-name]/images/hero-b.jpg "https://source.unsplash.com/1920x1080/?happy-kids,playground"
   # curl -L -o dist/[client-name]/images/hero-c.jpg "https://source.unsplash.com/1920x1080/?children-learning,education"
   ```

5. パターンA、B、Cをそれぞれ作成（pattern-{a,b,c}.html）
   - 各HTMLには最初からパターン切り替えヘッダーを含める
   - **【必須】各HTMLに必ず `<img src="images/hero-X.jpg" class="hero-image">` タグを含める**
   - CSS/JSは `css/pattern-{a,b,c}/`, `js/pattern-{a,b,c}/` に配置

6. `index.html` を作成（pattern-a.html と同じ内容）

7. **画像の存在確認**
   ```bash
   ls -lh dist/[client-name]/images/
   # hero-a.jpg, hero-b.jpg, hero-c.jpg が存在することを確認
   ```

8. デプロイ準備完了（`npm run deploy` で即座にデプロイ可能）

【重要】上記の手順に従って、今すぐホームページ作成を開始してください。
確認や質問は不要です。直ちに作業を進めてください。
```

---

## カスタマイズオプション

### 業種別の調整

#### 企業・不動産業の場合（Gaia LLCなど）
```
## 追加指示

業種: 企業（不動産事業・広告看板事業など）

推奨ナビゲーション項目:
- ホーム / HOME
- 事業内容 / BUSINESS
- 会社概要 / COMPANY
- メッセージ / MESSAGE
- お問い合わせ / CONTACT

重点セクション:
- 事業内容の詳細説明
- 代表メッセージ
- 会社の強み・独自性
- 実績（あれば）
```

#### 保育園・福祉施設の場合
```
## 追加指示

業種: 保育園・福祉施設

推奨ナビゲーション項目:
- お知らせ
- 施設概要
- 施設紹介
- 保育方針
- 保育内容
- 入園について
- よくある質問
- お問い合わせ

重点セクション:
- 温かみのあるデザイン
- 保護者向けの丁寧な情報提供
- 施設の雰囲気が伝わる画像配置
```

#### 医療機関の場合
```
## 追加指示

業種: 医療機関（歯科・クリニックなど）

推奨ナビゲーション項目:
- ホーム
- 診療内容
- 設備紹介
- 医師紹介
- お知らせ
- 予約・お問い合わせ
- アクセス

重点セクション:
- 清潔感と信頼感のあるデザイン
- 治療内容の詳細説明
- 設備・技術のアピール
```

---

## 画像・素材指定（必須実装）

```
## ヒーロー画像の実装 - 必ず実装してください

**重要原則: お客様提供画像がない場合、必ず業種に適したフリー画像を使用してください。**

### 【必須】フリー画像を使用したヒーロー画像の実装

#### ステップ1: 業種の特定と適切なキーワードの選定

事業内容Markdownから業種を特定し、以下のキーワードマッピングを使用してください：

| 業種 | パターンA キーワード | パターンB キーワード | パターンC キーワード |
|------|---------------------|---------------------|---------------------|
| 企業・不動産 | office-building,architecture | modern-building,business | architecture,cityscape |
| 保育園・福祉 | children-playing,kindergarten | happy-kids,playground | children-learning,education |
| 医療機関 | hospital,medical-clinic | healthcare,clean-environment | medical-technology,care |
| 飲食店 | restaurant,food | dining,chef | culinary,cuisine |
| 一般企業 | office,workspace | team,professional | business,collaboration |

#### ステップ2: images/ディレクトリの作成と画像ダウンロード

```bash
# ディレクトリ作成
mkdir -p dist/[client-name]/images

# 業種に合わせてUnsplash Source APIから画像をダウンロード（必須）
# 例: 企業・不動産の場合（Gaia LLCなど）
curl -L -o dist/[client-name]/images/hero-a.jpg "https://source.unsplash.com/1920x1080/?office-building,architecture"
curl -L -o dist/[client-name]/images/hero-b.jpg "https://source.unsplash.com/1920x1080/?modern-building,business"
curl -L -o dist/[client-name]/images/hero-c.jpg "https://source.unsplash.com/1920x1080/?architecture,cityscape"
```

#### ステップ3: HTMLでの実装（必須）

**方法1: <img>タグを使用した実装（推奨）**

```html
<!-- ヒーローセクションの構造 -->
<section class="hero">
  <!-- ヒーロー画像（必須） -->
  <img src="images/hero-a.jpg" alt="企業のビジョンを表現する建築物" class="hero-image" loading="eager">

  <!-- 暗いオーバーレイでテキストを読みやすく -->
  <div class="hero-overlay"></div>

  <div class="hero-content">
    <h1>VALUE CREATION</h1>
    <p>価値創造</p>
  </div>
</section>
```

```css
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #000; /* 画像読み込み中の背景色 */
}

/* ヒーロー画像（必須） */
.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

/* テキストを読みやすくするためのオーバーレイ */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  padding: 2rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}
```

**方法2: background-imageを使用した実装**

```html
<section class="hero" style="background-image: url('images/hero-a.jpg');">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>VALUE CREATION</h1>
    <p>価値創造</p>
  </div>
</section>
```

```css
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #000; /* 画像読み込み中の背景色 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding: 2rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}
```

---

### パターン別の実装チェックリスト

#### パターンA実装チェックリスト
- ✅ **`images/hero-a.jpg` ファイルが存在する（必須）**
- ✅ **ヒーローセクションに`<img src="images/hero-a.jpg">`タグが存在（必須）**
- ✅ 業種に適した画像キーワードでダウンロードされている
- ✅ `.hero-image` のCSSが正しく設定されている（object-fit: cover）
- ✅ `.hero-overlay` でテキストが読みやすくなっている
- ✅ `.hero-content` が最前面に表示される（`z-index: 2`）

#### パターンB実装チェックリスト
- ✅ **`images/hero-b.jpg` ファイルが存在する（必須）**
- ✅ **ヒーローセクションに`<img src="images/hero-b.jpg">`タグが存在（必須）**
- ✅ パターンAとは異なる画像キーワードを使用
- ✅ 画像とテキストの重なり順が正しい（z-index設定）

#### パターンC実装チェックリスト
- ✅ **`images/hero-c.jpg` ファイルが存在する（必須）**
- ✅ **ヒーローセクションに`<img src="images/hero-c.jpg">`タグが存在（必須）**
- ✅ パターンA・Bとは異なる画像キーワードを使用
- ✅ 斜め分割やパララックス効果（オプション）
- ✅ JavaScriptでのパララックススクロール実装（オプション）

---

### アクセシビリティ要件

すべてのヒーロー画像には適切なalt属性を設定してください：

```html
<section class="hero" aria-label="メインビジュアル">
  <img src="images/hero-a.jpg" alt="企業のビジョンを表現する建築物" class="hero-image" loading="eager">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>VALUE CREATION</h1>
    <p>価値創造</p>
  </div>
</section>
```

---

### 推奨画像サイズ
- ヒーロー画像: 1920x1080px（Unsplash Source APIで自動）
- セクション画像: 800x600px
- カードサムネイル: 400x300px

---

### お客様提供画像がある場合

お客様から画像素材が提供されている場合は、それを優先的に使用してください：

- **ヒーロー画像**: お客様提供画像を優先（images/フォルダに配置）
- ロゴ: そのまま使用
- 施設写真: そのまま使用（必要に応じて最適化）
- 製品画像: そのまま使用
- スタッフ写真: そのまま使用

**ヒーロー画像がない場合は、必ず業種に適したUnsplash画像をダウンロードしてください。**
```

---

## カラーパレット指定（重要）

```
## カラーパレット

**重要: 全パターン共通でブランドカラーを使用してください。色で差別化せず、レイアウトで差別化します。**

### 全パターン共通（A/B/C）
- Primary: #[hex] （ブランドのメインカラー）
- Secondary: #[hex] （背景や補助的な色）
- Accent: #[hex] （強調色、CTA、リンクなど）
- Background: #ffffff または #f5f5f5
- Text: #333333 または #2c2c2c

**各パターンでの色の使用量の違い:**
- パターンA: 色使いは控えめ。白背景メイン、アクセントカラーは最小限
- パターンB: バランス型。適度に背景色を使用、セクションごとに区切り
- パターンC: ダイナミック。アクセントカラーを大胆に使用、グラデーション活用

※ ブランドカラーが指定されていない場合は、事業内容から適切な配色を抽出してください
```

---

## 使用例

### Gaia LLCの場合

```
以下の事業内容Markdownファイルを基に、3パターンの異なるデザインのホームページを作成し、
`dist/gaia-llc/` ディレクトリに統合して出力してください。

## 入力ファイル
@gaia_kumamoto.md

## 参照すべき分析結果
- @DESIGN_PATTERNS.md
- @analysis/analysis-report.json
- @analysis/screenshots/

## 出力先
`dist/gaia-llc/`
- index.html（pattern-aと同じ内容、トップページ）
- pattern-a.html, pattern-b.html, pattern-c.html（パターン切り替えナビゲーション付き）

## 業種
企業（不動産事業・建築工事設計・広告看板事業）

## 作成パターン
（上記の基本プロンプトと同じ）

## 技術仕様
HTML/CSS/JS版で作成してください。

よろしくお願いします。
```

---

## 注意事項

1. **分析結果の活用**
   - 必ず@DESIGN_PATTERNS.mdと@analysis/analysis-report.jsonを参照する
   - 実績サイトの共通パターン（ヒーローセクション、複数セクション構成など）を踏襲する

2. **3パターンの差別化**
   - 各パターンは明確に異なるデザインアプローチを取る
   - お客様が選択肢を比較できるよう、それぞれの特徴を明確にする

3. **レスポンシブ対応**
   - モバイル、タブレット、デスクトップすべてに対応
   - 分析結果にはモバイル情報が少ないため、独自の判断も必要

4. **アクセシビリティ**
   - セマンティックHTML
   - 適切なalt属性
   - キーボード操作対応

5. **パフォーマンス**
   - 画像最適化
   - CSSの効率化
   - 不要なJavaScriptを避ける

---

## デプロイ

上記の手順に従って生成されたファイルは、そのままデプロイ可能です。

### デプロイコマンド

```bash
# package.jsonに以下のスクリプトがあることを確認
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}

# デプロイ実行
npm run deploy
```

### デプロイURL
`https://[username].github.io/[repo-name]/[client-name]/`

### 確認事項

デプロイ後、以下を確認:
- ✅ index.html（パターンA）がトップページとして表示される
- ✅ **ヒーロー画像が全パターンで正しく表示されている**
- ✅ **images/hero-a.jpg, hero-b.jpg, hero-c.jpgが読み込まれている**
- ✅ ヘッダーナビゲーションで各パターン間を移動できる
- ✅ CSS/JSが正しく読み込まれている
- ✅ レスポンシブデザインが機能している
- ✅ ブラウザの開発者ツールでネットワークエラーがない（画像404エラーなし）

### デプロイ実例

**Gaia LLCの場合:**
- トップ: https://seki-seki.github.io/auto-hp/gaia-llc/
- Pattern A: https://seki-seki.github.io/auto-hp/gaia-llc/pattern-a.html
- Pattern B: https://seki-seki.github.io/auto-hp/gaia-llc/pattern-b.html
- Pattern C: https://seki-seki.github.io/auto-hp/gaia-llc/pattern-c.html
