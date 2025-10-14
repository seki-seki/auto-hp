# ホームページ作成プロンプトテンプレート

このテンプレートは、Claude Codeにホームページを作成させる際に使用します。

---

## 基本プロンプト

```
以下の事業内容Markdownファイルを基に、3パターンの異なるデザインのホームページを作成してください。

# 入力ファイル
@gaia_kumamoto.md （または該当する事業内容ファイル）

# 参照すべき分析結果
- @DESIGN_PATTERNS.md - レイアウトパターンとコンポーネントの特徴
- @analysis/analysis-report.json - 実績サイトの詳細分析データ
- @analysis/screenshots/ - 実績サイトのスクリーンショット（視覚的参考）

# 作成パターン

**重要: 3パターンはレイアウト・構造で差別化し、ブランドカラーは全パターン共通で使用してください。**

## パターンA: シンプル・1カラムレイアウト
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

## パターンB: グリッド・カードベースレイアウト
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

## パターンC: 非対称・ビジュアル重視レイアウト
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

# 共通要件

## 必須セクション（分析結果より）
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

## コンポーネントガイドライン（分析結果より）

### 見出し構造
- H2: 5個程度（主要セクション）
- H3: 5個程度（サブセクション）
- 英語ラベル併記を推奨（例: "会社概要 COMPANY"）

### リンク・ナビゲーション
- 平均48個のリンク
- 横型ナビゲーション推奨（70%のサイトで採用）

### 視覚要素
- 適度な画像配置（平均2-8枚）
- Google Maps iframe（1個）

## 技術仕様

### HTML/CSS/JS版の場合
- HTML5セマンティックタグを使用
- CSS3カスタムプロパティでテーマ管理
- レスポンシブデザイン対応
- バニラJavaScript（最小限）
- フォルダ構成:
  ```
  /[client-name]-pattern-[A/B/C]/
  ├── index.html
  ├── css/
  │   ├── reset.css
  │   ├── variables.css
  │   ├── style.css
  │   └── responsive.css
  ├── js/
  │   └── main.js
  ├── images/
  └── README.md
  ```

### React版の場合
- React 18+
- コンポーネントベース設計
- CSS Modules or Styled Components
- フォルダ構成:
  ```
  /[client-name]-pattern-[A/B/C]/
  ├── src/
  │   ├── components/
  │   ├── data/
  │   ├── styles/
  │   ├── App.jsx
  │   └── index.jsx
  ├── public/
  └── package.json
  ```

## 出力形式

各パターンを以下の形式で出力してください：

1. **ディレクトリ作成**
   - `gaia-pattern-a/`
   - `gaia-pattern-b/`
   - `gaia-pattern-c/`

2. **各ディレクトリ内容**
   - 完全に動作するホームページ一式
   - README.md（デザインコンセプトと特徴を記載）

3. **プレビュー用説明**
   - 各パターンの特徴を簡潔に説明
   - デザインの意図・コンセプト
   - 推奨する利用シーン

# 実行手順

1. 入力Markdownを読み込み、会社情報を抽出
2. 分析結果を参照し、適切なレイアウト・コンポーネントを選択
3. パターンAから順番に作成
4. 各パターン完成後、次のパターンへ
5. 3パターン完成後、比較表を作成

よろしくお願いします。
```

---

## カスタマイズオプション

### 業種別の調整

#### 企業・不動産業の場合（Gaia LLCなど）
```
# 追加指示

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
# 追加指示

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
# 追加指示

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

## 画像・素材指定

```
# 画像素材について

## ブランドに適した画像の自動生成

お客様から提供された画像がない場合、ブランドプロファイルを抽出し、それに基づいて適切な画像を生成または選定してください。

### ステップ1: ブランドプロファイル抽出

事業内容Markdownから以下の要素を抽出:

```javascript
{
  "brandProfile": {
    "industry": "保育園" | "医療" | "企業" | "飲食" | "不動産" | "その他",
    "valueProps": ["価値提案1", "価値提案2", "価値提案3"],
    "audience": "ターゲット層の説明",
    "tone": "親しみやすい" | "プロフェッショナル" | "信頼感重視" | "革新的" | "伝統的",
    "colors": {
      "primary": "#hex",
      "secondary": "#hex",
      "accent": "#hex"
    },
    "motifs": ["関連するモチーフ1", "モチーフ2"]
  }
}
```

**抽出例（Gaia LLCの場合）:**
```javascript
{
  "brandProfile": {
    "industry": "不動産・建築",
    "valueProps": ["価値創造", "独自性", "総合的なソリューション"],
    "audience": "不動産投資家、企業経営者",
    "tone": "プロフェッショナル",
    "colors": {
      "primary": "#2c5f2d",
      "secondary": "#f5f5f5",
      "accent": "#97ba97"
    },
    "motifs": ["地球", "成長", "建築", "グリーン"]
  }
}
```

### ステップ2: モチーフ→ビジュアルマッピング

抽出したブランドプロファイルから視覚的要素を決定:

| Industry | Suggested Motifs | Visual Elements |
|----------|------------------|-----------------|
| 保育園・福祉 | 子ども、成長、温かさ | 柔らかい曲線、暖色系、自然光 |
| 医療 | 清潔感、信頼、技術 | 清潔な白基調、青系、シャープな線 |
| 企業・不動産 | 成長、信頼、革新 | 幾何学模様、グリーン/ブルー、都市景観 |
| 飲食 | 美味しさ、新鮮さ、温かさ | 食材、温かい照明、オーガニック感 |

### ステップ3: 画像生成アプローチ（用途別優先順位）

画像の用途によって最適なアプローチが異なります：

**優先順位の使い分け:**

| 用途 | 第1優先 | 第2優先 | 理由 |
|------|---------|---------|------|
| ヒーロー画像（メインビジュアル） | フリー画像 | ジェネレーティブアート | 第一印象を決める重要な要素。具体的で高品質な実写が効果的 |
| セクション画像（事業紹介など） | フリー画像 | ジェネレーティブアート | 内容を視覚的に伝えるため、具体的な画像が必要 |
| セクション背景（装飾的） | ジェネレーティブアート | フリー画像 | 抽象的なパターンでブランドカラーを表現 |
| アクセント要素（区切り線など） | ジェネレーティブアート | - | 装飾目的なのでブランドカラーのパターンが最適 |

#### アプローチ1: フリー画像（ヒーロー・セクション画像に優先）

ブランドに適した高品質なフリー画像を選定:

**推奨サービス:**
- Unsplash: `https://source.unsplash.com/1920x1080/?{keyword}`
- Pexels API: `https://www.pexels.com/photo/{id}/`

**キーワード選定ルール:**

```javascript
function selectImageKeywords(brandProfile, usage) {
  const keywordMap = {
    '保育園': {
      hero: ['happy-children', 'kindergarten-playground', 'colorful-toys', 'children-learning'],
      section: ['classroom', 'educational-toys', 'outdoor-play', 'teacher-children']
    },
    '医療': {
      hero: ['modern-clinic', 'medical-technology', 'healthcare-professional', 'clean-medical-space'],
      section: ['dental-equipment', 'medical-consultation', 'clinic-reception', 'medical-instruments']
    },
    '企業': {
      hero: ['modern-office-building', 'business-skyline', 'professional-workspace', 'corporate-architecture'],
      section: ['team-meeting', 'business-handshake', 'office-collaboration', 'professional-presentation']
    },
    '不動産': {
      hero: ['modern-architecture', 'luxury-building', 'real-estate-development', 'urban-skyline'],
      section: ['building-exterior', 'property-interior', 'construction-site', 'architectural-design']
    },
    '飲食': {
      hero: ['restaurant-interior', 'fine-dining', 'chef-cooking', 'elegant-food-presentation'],
      section: ['fresh-ingredients', 'food-preparation', 'dining-experience', 'culinary-art']
    }
  };

  const industryKeywords = keywordMap[brandProfile.industry] || {
    hero: ['business', 'professional', 'modern', 'elegant'],
    section: ['workspace', 'team', 'service', 'quality']
  };

  return industryKeywords[usage] || industryKeywords.hero;
}

// 使用例
const heroKeywords = selectImageKeywords(brandProfile, 'hero');
const heroImageUrl = `https://source.unsplash.com/1920x1080/?${heroKeywords.join(',')}`;
```

**画像選定時の注意点:**
- 明るく高品質な画像を選ぶ
- ブランドのトーンに合った雰囲気
- テキストオーバーレイが可能な構図（ヒーロー画像の場合）
- 著作権フリーであることを確認

#### アプローチ2: ジェネレーティブアート（背景・装飾に優先）

ブランドカラーとモチーフを活用した抽象的なビジュアルを生成:

**生成コード例（HTML + Canvas）:**

```javascript
// セクション背景用のグラデーション生成
function generateSectionBackground(brandProfile, sectionType) {
  const canvas = document.createElement('canvas');
  canvas.width = 1920;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');

  // ブランドカラーを使用したグラデーション
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, brandProfile.colors.primary + '20'); // 透明度20%
  gradient.addColorStop(0.5, brandProfile.colors.secondary);
  gradient.addColorStop(1, brandProfile.colors.accent + '20');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // モチーフに応じたパターン追加
  if (brandProfile.motifs.includes('幾何学')) {
    drawGeometricPattern(ctx, brandProfile.colors);
  } else if (brandProfile.motifs.includes('自然')) {
    drawOrganicPattern(ctx, brandProfile.colors);
  }

  return canvas.toDataURL('image/png');
}

// 幾何学パターンの例
function drawGeometricPattern(ctx, colors) {
  ctx.strokeStyle = colors.primary + '30';
  ctx.lineWidth = 2;

  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * ctx.canvas.width,
      Math.random() * ctx.canvas.height,
      Math.random() * 200 + 50,
      0, Math.PI * 2
    );
    ctx.stroke();
  }
}
```

**生成画像の配置:**
- セクション背景: 淡いグラデーション + ブランドモチーフのパターン
- アクセント要素: 幾何学的な装飾
- 区切り線: ブランドカラーの波線やパターン

**ヒーロー画像にジェネレーティブアートを使う場合:**
フリー画像が見つからない、またはブランドイメージとして抽象的表現が適切な場合のみ:
```javascript
function generateHeroBackground(brandProfile) {
  const canvas = document.createElement('canvas');
  canvas.width = 1920;
  canvas.height = 1080;
  const ctx = canvas.getContext('2d');

  // より印象的なグラデーション
  const gradient = ctx.createRadialGradient(
    canvas.width / 2, canvas.height / 2, 0,
    canvas.width / 2, canvas.height / 2, canvas.width
  );
  gradient.addColorStop(0, brandProfile.colors.primary);
  gradient.addColorStop(0.6, brandProfile.colors.secondary);
  gradient.addColorStop(1, brandProfile.colors.accent);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 大きなモチーフパターン
  drawLargeMotif(ctx, brandProfile);

  return canvas.toDataURL('image/png');
}
```

### ステップ4: images.manifest.json の作成

生成・選定した画像の情報を記録:

```json
{
  "brandProfile": {
    "industry": "不動産・建築",
    "colors": {
      "primary": "#2c5f2d",
      "secondary": "#f5f5f5",
      "accent": "#97ba97"
    },
    "motifs": ["地球", "成長", "建築"]
  },
  "images": [
    {
      "id": "hero-bg",
      "type": "unsplash",
      "url": "https://source.unsplash.com/1920x1080/?modern-architecture,urban-skyline,green-building",
      "description": "モダンな建築物と都市景観のヒーロー画像",
      "size": "1920x1080",
      "usage": "Hero section background",
      "keywords": ["modern-architecture", "urban-skyline", "green-building"],
      "accessibility": {
        "alt": "モダンな都市景観と緑豊かな建築デザイン",
        "role": "img"
      }
    },
    {
      "id": "section-business-bg",
      "type": "generative",
      "description": "ブランドカラーを使用した淡いグラデーション背景",
      "size": "1920x600",
      "usage": "Business section background (decorative)",
      "colors": ["#2c5f2d20", "#f5f5f5", "#97ba9720"],
      "accessibility": {
        "alt": "",
        "role": "decorative"
      }
    },
    {
      "id": "section-business-content",
      "type": "unsplash",
      "url": "https://source.unsplash.com/800x600/?real-estate,building-exterior",
      "description": "不動産事業を表す建物外観の画像",
      "size": "800x600",
      "usage": "Business section content image",
      "keywords": ["real-estate", "building-exterior"],
      "accessibility": {
        "alt": "Gaia LLCが手がける不動産物件の外観",
        "title": "不動産事業"
      }
    },
    {
      "id": "section-company-bg",
      "type": "generative",
      "description": "幾何学的なパターンの装飾背景",
      "size": "1920x600",
      "usage": "Company section background (decorative)",
      "colors": ["#2c5f2d", "#97ba97"],
      "accessibility": {
        "alt": "",
        "role": "decorative"
      }
    },
    {
      "id": "section-features",
      "type": "unsplash",
      "url": "https://source.unsplash.com/800x600/?architectural-design,construction",
      "description": "建築設計の特徴を示す画像",
      "size": "800x600",
      "usage": "Features section image",
      "keywords": ["architectural-design", "construction"],
      "accessibility": {
        "alt": "建築工事設計における専門性とデザイン力",
        "title": "建築工事設計事業"
      }
    }
  ]
}
```

### ステップ5: アクセシビリティ要件

すべての画像に適切なアクセシビリティ属性を設定:

**装飾的画像（背景など）:**
```html
<div class="hero" role="img" aria-label=""></div>
```

**情報を含む画像:**
```html
<img
  src="images/business-architecture.jpg"
  alt="モダンな建築デザインの建物"
  title="Gaia LLCの建築工事設計事業"
  loading="lazy"
>
```

**図表・インフォグラフィック:**
```html
<figure>
  <img
    src="images/company-stats.jpg"
    alt="Gaia LLCの事業実績：不動産取引200件、建築設計50件"
  >
  <figcaption>事業実績（2023年）</figcaption>
</figure>
```

## 推奨画像サイズ
- ヒーロー背景: 1920x1080px
- セクション画像: 800x600px
- カードサムネイル: 400x300px
- アイコン: 64x64px または SVG

## 実装フロー

1. **ブランドプロファイル抽出** → brandProfile オブジェクト作成
2. **画像戦略決定** → ジェネレーティブアート or フリー画像
3. **画像生成/選定** → 各セクションに必要な画像を準備
4. **manifest作成** → images.manifest.json に記録
5. **HTML実装** → 適切なalt/title属性と共に配置
6. **アクセシビリティ検証** → スクリーンリーダーでの確認

## お客様提供画像がある場合

お客様から画像素材が提供されている場合は、それを優先的に使用してください：

- ロゴ: そのまま使用
- 施設写真: そのまま使用（必要に応じて最適化）
- 製品画像: そのまま使用
- スタッフ写真: そのまま使用

提供された画像が不足している箇所のみ、上記のブランドベース生成アプローチを適用してください。
```

---

## カラーパレット指定（重要）

```
# カラーパレット

**重要: 全パターン共通でブランドカラーを使用してください。色で差別化せず、レイアウトで差別化します。**

## 全パターン共通（A/B/C）
- Primary: #[hex] （ブランドのメインカラー）
- Secondary: #[hex] （背景や補助的な色）
- Accent: #[hex] （強調色、CTA、リンクなど）
- Background: #ffffff または #f5f5f5
- Text: #333333 または #2c2c2c

**各パターンでの色の使用量の違い:**
- パターンA: 色使いは控えめ。白背景メイン、アクセントカラーは最小限
- パターンB: バランス型。適度に背景色を使用、セクションごとに区切り
- パターンC: ダイナミック。アクセントカラーを大胆に使用、グラデーション活用

※ ブランドカラーが指定されていない場合は、事業内容から適切な配色を抽出してください（PROMPT_TEMPLATE.md:228-257参照）
```

---

## 使用例

### Gaia LLCの場合

```
以下の事業内容Markdownファイルを基に、3パターンの異なるデザインのホームページを作成してください。

# 入力ファイル
@gaia_kumamoto.md

# 参照すべき分析結果
- @DESIGN_PATTERNS.md
- @analysis/analysis-report.json
- @analysis/screenshots/

# 業種
企業（不動産事業・建築工事設計・広告看板事業）

# 推奨ナビゲーション
- ホーム / HOME
- 事業内容 / BUSINESS
- 会社概要 / COMPANY
- メッセージ / MESSAGE
- お問い合わせ / CONTACT

# 作成パターン
（上記の基本プロンプトと同じ）

# 技術仕様
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

## デプロイ準備（統合ギャラリー版）

3つのパターンを1つのサイトとして統合し、ヘッダーで切り替えられるようにデプロイする手順です。

### プロンプト例

```
3つのデザインパターンをヘッダーで切り替えられるデザインギャラリーとしてデプロイしてください。

# 要件

## 1. ギャラリートップページ作成

### ファイル名
`index.html`

### ヘッダー構造
```html
<header class="header">
  <div class="header-inner">
    <a href="index.html" class="logo">[クライアント名] Design Gallery</a>
    <nav>
      <ul class="nav-menu" role="menubar">
        <li role="none"><a href="pattern-a.html" role="menuitem">Pattern A</a></li>
        <li role="none"><a href="pattern-b.html" role="menuitem">Pattern B</a></li>
        <li role="none"><a href="pattern-c.html" role="menuitem">Pattern C</a></li>
      </ul>
    </nav>
  </div>
</header>
```

### コンテンツ要素
- 3つのデザインパターンを紹介するランディングページ
- 各パターンの特徴説明とプレビューカード
- 各パターンへのリンクボタン

## 2. 各パターンページの統合（pattern-a.html, pattern-b.html, pattern-c.html）

### ベースファイル
既存の各パターンの `index.html` をコピーして作成

### ヘッダーナビゲーションの置き換え

**既存のナビゲーション部分を削除し、以下に置き換え:**

#### Pattern A (pattern-a.html) の場合:
```html
<header class="header">
  <div class="header-inner">
    <a href="index.html" class="logo">[元のロゴ名]</a>

    <nav class="nav">
      <a href="index.html">Gallery</a>
      <a href="pattern-a.html" style="font-weight: 700; color: var(--color-accent);">Pattern A</a>
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

#### Pattern B (pattern-b.html) の場合:
```html
<header class="header">
  <div class="header-inner">
    <a href="index.html" class="logo">[元のロゴ名]</a>

    <nav class="nav">
      <a href="index.html">Gallery</a>
      <a href="pattern-a.html">Pattern A</a>
      <a href="pattern-b.html" style="font-weight: 700; color: var(--color-accent);">Pattern B</a>
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

#### Pattern C (pattern-c.html) の場合:
```html
<header class="header">
  <div class="header-inner">
    <a href="index.html" class="logo">[元のロゴ名]</a>

    <nav class="nav">
      <a href="index.html">Gallery</a>
      <a href="pattern-a.html">Pattern A</a>
      <a href="pattern-b.html">Pattern B</a>
      <a href="pattern-c.html" style="font-weight: 700; color: var(--color-accent);">Pattern C</a>
    </nav>

    <button class="mobile-menu-toggle" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</header>
```

**重要ポイント:**
- 現在表示中のパターンには `style="font-weight: 700; color: var(--color-accent);"` を追加
- 元のヘッダーの構造（`.header-inner` や `.mobile-menu-toggle` など）は維持
- 元のナビゲーション項目（Business, Company, Message など）は削除し、Gallery/Pattern A/B/C に置き換え

### CSS/JSのパス修正

**元のパス:**
```html
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/responsive.css">
<script src="js/main.js"></script>
```

**修正後（pattern-a.html の場合）:**
```html
<link rel="stylesheet" href="css/pattern-a/reset.css">
<link rel="stylesheet" href="css/pattern-a/variables.css">
<link rel="stylesheet" href="css/pattern-a/style.css">
<link rel="stylesheet" href="css/pattern-a/responsive.css">
<script src="js/pattern-a/main.js"></script>
```

※ pattern-b.html は `css/pattern-b/`, pattern-c.html は `css/pattern-c/` に変更

## 3. ディレクトリ構造
```
dist/[client-name]-designs/
├── index.html              # ギャラリートップページ
├── pattern-a.html          # パターンA（ナビゲーション付き）
├── pattern-b.html          # パターンB（ナビゲーション付き）
├── pattern-c.html          # パターンC（ナビゲーション付き）
├── css/
│   ├── pattern-a/          # パターンAのCSS一式
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── style.css
│   │   └── responsive.css
│   ├── pattern-b/          # パターンBのCSS一式
│   └── pattern-c/          # パターンCのCSS一式
└── js/
    ├── pattern-a/          # パターンAのJS
    │   └── main.js
    ├── pattern-b/          # パターンBのJS
    └── pattern-c/          # パターンCのJS
```

## 4. デプロイ手順
1. 上記のディレクトリ構造でファイルを作成
2. `npm run deploy` を実行してGitHub Pagesにデプロイ
3. デプロイURL: `https://[username].github.io/[repo-name]/[client-name]-designs/`

よろしくお願いします。
```

### 実装のポイント

#### ギャラリートップページ（index.html）
- 3つのパターンカードを横並びまたは縦並びで配置
- 各カードに:
  - パターン名（Pattern A: Modern Minimal など）
  - コンセプト説明（2-3行）
  - 「View Pattern」ボタン
- レスポンシブデザイン対応
- 統一感のあるシンプルなデザイン

#### ナビゲーション統合の詳細

各パターンページのヘッダー全体を置き換えます。**元のヘッダー構造は維持しつつ、ナビゲーション部分のみを変更**します。

**変更前の典型的なヘッダー:**
```html
<header class="header">
  <div class="header-inner">
    <a href="#home" class="logo">GAIA</a>

    <nav class="nav">
      <a href="#business">Business</a>
      <a href="#company">Company</a>
      <a href="#message">Message</a>
      <a href="#contact">Contact</a>
    </nav>

    <button class="mobile-menu-toggle" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</header>
```

**変更後（Pattern A の場合）:**
```html
<header class="header">
  <div class="header-inner">
    <a href="index.html" class="logo">GAIA</a>

    <nav class="nav">
      <a href="index.html">Gallery</a>
      <a href="pattern-a.html" style="font-weight: 700; color: var(--color-accent);">Pattern A</a>
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

**変更のポイント:**
1. ロゴのhrefを `#home` から `index.html` に変更
2. `<nav class="nav">` 内のリンクを全て置き換え
3. 現在のページに該当するリンクにインラインスタイルを追加
4. その他の要素（`.header-inner`, `.mobile-menu-toggle` など）は変更しない

#### アセットパスの修正

元のパターンディレクトリから統合版へコピーする際、すべてのCSS/JSのパスを修正します。

**変更前（元のindex.html）:**
```html
<head>
  <!-- ... -->
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
  <!-- ... -->
  <script src="js/main.js"></script>
</body>
```

**変更後（pattern-a.html の場合）:**
```html
<head>
  <!-- ... -->
  <link rel="stylesheet" href="css/pattern-a/reset.css">
  <link rel="stylesheet" href="css/pattern-a/variables.css">
  <link rel="stylesheet" href="css/pattern-a/style.css">
  <link rel="stylesheet" href="css/pattern-a/responsive.css">
</head>
<body>
  <!-- ... -->
  <script src="js/pattern-a/main.js"></script>
</body>
```

**一括置換の例:**
- Pattern A: `css/` → `css/pattern-a/`, `js/` → `js/pattern-a/`
- Pattern B: `css/` → `css/pattern-b/`, `js/` → `js/pattern-b/`
- Pattern C: `css/` → `css/pattern-c/`, `js/` → `js/pattern-c/`

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

### 確認事項

デプロイ後、以下を確認:
- ✅ ギャラリートップページが表示される
- ✅ 各パターンへのリンクが機能する
- ✅ ヘッダーナビゲーションで各パターン間を移動できる
- ✅ CSS/JSが正しく読み込まれている
- ✅ レスポンシブデザインが機能している

---

## デプロイ実例

### Gaia LLCの場合

```
https://seki-seki.github.io/auto-hp/gaia-designs/のように
各デザインをヘッダーで切り替えられるようにしてデプロイしてください。
```

**完成例:**
- トップ: https://seki-seki.github.io/auto-hp/gaia-designs/
- Pattern A: https://seki-seki.github.io/auto-hp/gaia-designs/pattern-a.html
- Pattern B: https://seki-seki.github.io/auto-hp/gaia-designs/pattern-b.html
- Pattern C: https://seki-seki.github.io/auto-hp/gaia-designs/pattern-c.html
