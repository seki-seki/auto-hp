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
