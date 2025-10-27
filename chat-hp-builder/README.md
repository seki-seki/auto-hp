# Chat HP Builder

チャットでホームページを作成・修正できるWebアプリケーション。Claude CodeをバックエンドでPTY経由で起動し、会話形式でHP作成から修正まで同一セッションで実行できます。

## 特徴

- 💬 **チャットベースUI**: 自然言語でHP作成を依頼
- 🔄 **同一セッションで修正**: 生成したHPをそのまま修正可能
- 👁️ **リアルタイムプレビュー**: 生成されたHPを即座に確認
- 🎨 **3パターン生成**: 異なるデザインパターンを一度に生成
- 🖥️ **Claude Code統合**: Claude Codeの全機能を活用

## システム構成

```
┌─────────────────────────────────────────┐
│  フロントエンド (HTML/CSS/JS)           │
│  - チャットUI                           │
│  - プレビュー表示                       │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│  バックエンド (Node.js/Express)         │
│  - PTYでClaude Code起動                 │
│  - セッション管理                       │
│  - REST API                             │
└─────────────────────────────────────────┘
                    ↓
          Claude Code CLI (実行中)
                    ↓
      dist/[session-id]/ にファイル生成
```

## 必要要件

- Node.js 16以上
- Claude Code CLI がインストール済み
- Claude Maxプランでログイン済み（APIキー不要）

## インストール

```bash
cd chat-hp-builder
npm install
```

## 起動方法

```bash
# サーバー起動
npm start

# または開発モード（自動リロード）
npm run dev
```

※ Claude Maxプランでログイン済みの場合、APIキーの設定は不要です

ブラウザで http://localhost:3000 にアクセス

## 使い方

### 1. 初回HP生成（事業内容を入力するだけ）

チャット欄に事業内容をMarkdown形式で入力：

```markdown
# 株式会社ガイア

## VALUE CREATION
### 価値創造

## 事業の目的
- 不動産事業
- 建築の工事設計
- 広告看板事業
- 生命保険募集に関する業務
- 損害保険代理店事業

## 会社概要
**Gaiya LLC**
**合同会社ガイア**

- **資本金**: 200万円
- **会社住所**: 熊本県熊本市中央区帯山５丁目３８番２５号
- **設立日**: 平成25年１１月１日

## Message
私たちの使命は「価値を創造し、社会に還元すること」です。
...
```

→ **自動的にPROMPT_TEMPLATE_FOR_BUILDER.mdが適用され**、Claude Codeが3パターンのHPを生成
→ `dist/session-xxx/` にファイル生成（デプロイ機能なし）

💡 **重要**: ユーザーは事業内容だけを入力すればOK。PROMPT_TEMPLATE_FOR_BUILDER.md（デプロイ不要版）の内容はサーバー側で自動的に組み込まれます。

### 2. 修正リクエスト（同じセッション）

```
ヒーローセクションの文字を大きくしてください
```

→ 同じClaude Codeセッションで既存ファイルを修正

### 3. さらに修正

```
全パターンの背景色を明るくしてください
```

→ 継続的に修正可能

### 4. パターン切り替え

プレビュー画面のドロップダウンで Pattern A/B/C を切り替え

## API エンドポイント

### POST /api/chat
チャットメッセージを送信

**Request:**
```json
{
  "sessionId": "session-xxx",
  "message": "HPを作成してください",
  "isFirstMessage": false
}
```

**Response:**
```json
{
  "sessionId": "session-xxx",
  "response": "Claude Codeの応答",
  "previewUrl": "/preview/session-xxx/index.html"
}
```

### GET /api/session/:id
セッション情報を取得

### GET /api/sessions
アクティブなセッション一覧

### POST /api/session/:id/close
セッションを終了

## ディレクトリ構造

```
chat-hp-builder/
├── backend/
│   ├── server.js              # Expressサーバー
│   └── ClaudeCodeSession.js   # PTYラッパークラス
├── public/
│   ├── index.html             # フロントエンドHTML
│   ├── style.css              # スタイルシート
│   └── app.js                 # フロントエンドJS
├── dist/                      # 生成されたHP（各セッション）
│   └── session-xxx/
│       ├── index.html
│       ├── pattern-a.html
│       ├── pattern-b.html
│       ├── pattern-c.html
│       ├── css/
│       ├── js/
│       └── images/
└── package.json
```

## セッション管理

- 各ユーザーに独立したClaude Codeプロセスが割り当てられる
- 30分間アイドル状態が続くと自動的にセッションがクローズされる
- ブラウザを閉じるとセッションが終了する

## 制限事項

- 同時に複数のClaude Codeプロセスを起動するため、サーバーのメモリに注意
- PTYの出力解析は簡易的なため、複雑な応答では完了判定が遅れる場合がある
- ファイル生成完了の検知は出力の安定性で判断（3秒間出力なし）

## トラブルシューティング

### Claude Codeが起動しない

```bash
# Claude Codeが正しくインストールされているか確認
claude code --version

# Claude Maxでログインしているか確認
claude auth status
```

### セッションがタイムアウトする

HP生成には1-3分かかる場合があります。タイムアウト設定を調整：

```javascript
// ClaudeCodeSession.js
async waitForResponse(timeout = 300000) { // 5分に延長
```

### プレビューが表示されない

ファイルが生成されているか確認：

```bash
ls -la dist/session-xxx/
```

## ライセンス

ISC
