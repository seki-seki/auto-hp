const express = require('express');
const path = require('path');
const fs = require('fs/promises');
const ClaudeCodeSession = require('./ClaudeCodeSession');

const app = express();
const PORT = process.env.PORT || 3000;

// ミドルウェア
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, '../public')));

// プレビュー用の静的ファイル配信（プロジェクトルートのdist/を配信）
app.use('/preview', express.static(path.join(__dirname, '../../dist')));

// セッション管理
const sessions = new Map();

// PROMPT_TEMPLATE_FOR_BUILDERを起動時に読み込む
let PROMPT_TEMPLATE = '';
async function loadPromptTemplate() {
  try {
    const templatePath = path.join(__dirname, '../../PROMPT_TEMPLATE_FOR_BUILDER.md');
    const rawTemplate = await fs.readFile(templatePath, 'utf-8');

    // ```で囲まれた部分を抽出（最初の```から最後の```まで）
    const match = rawTemplate.match(/```\n([\s\S]*?)```/);
    if (match && match[1]) {
      PROMPT_TEMPLATE = match[1].trim();
      console.log('✅ PROMPT_TEMPLATE_FOR_BUILDER.md loaded successfully');
      console.log(`   Extracted ${PROMPT_TEMPLATE.length} characters of instructions`);
    } else {
      // マッチしない場合は全体を使用
      PROMPT_TEMPLATE = rawTemplate;
      console.log('⚠️  Could not extract template from code block, using entire file');
    }
  } catch (error) {
    console.error('❌ Failed to load PROMPT_TEMPLATE_FOR_BUILDER.md:', error.message);
    console.error('   Make sure PROMPT_TEMPLATE_FOR_BUILDER.md exists at:', path.join(__dirname, '../../'));
  }
}

// セッションIDを生成
function generateSessionId() {
  return `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// セッションのクリーンアップ（30分アイドルで自動削除）
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30分
const sessionTimestamps = new Map();

setInterval(() => {
  const now = Date.now();
  for (const [sessionId, timestamp] of sessionTimestamps.entries()) {
    if (now - timestamp > SESSION_TIMEOUT) {
      console.log(`[${sessionId}] Session timeout, cleaning up`);
      const session = sessions.get(sessionId);
      if (session) {
        session.close();
        sessions.delete(sessionId);
      }
      sessionTimestamps.delete(sessionId);
    }
  }
}, 60000); // 1分ごとにチェック

// API: チャットメッセージを送信
app.post('/api/chat', async (req, res) => {
  try {
    const { sessionId, message, isFirstMessage } = req.body;

    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message is required' });
    }

    let session;
    let sid = sessionId;

    if (isFirstMessage || !sessionId) {
      // 新規セッション作成
      sid = generateSessionId();
      // プロジェクトルート（auto-hp/）をworking dirに設定
      const workingDir = path.join(__dirname, '../../');
      const outputDir = `dist/${sid}`; // 出力先はdist/session-xxx/

      console.log(`\n=== Creating session: ${sid} ===`);

      session = new ClaudeCodeSession(sid, workingDir, outputDir);

      try {
        await session.start();
        sessions.set(sid, session);
        sessionTimestamps.set(sid, Date.now());

        console.log(`[${sid}] Session created successfully`);
      } catch (error) {
        console.error(`[${sid}] Failed to start session:`, error);
        return res.status(500).json({
          error: 'Failed to start Claude Code session',
          details: error.message
        });
      }
    } else {
      // 既存セッションを再利用（修正依頼など）
      session = sessions.get(sessionId);

      if (!session || !session.isAlive()) {
        return res.status(404).json({
          error: 'Session not found or expired',
          sessionId
        });
      }

      sessionTimestamps.set(sessionId, Date.now());
      console.log(`\n=== Using existing session: ${sessionId} ===`);
      console.log(`[${sessionId}] User modification request: "${message.substring(0, 100)}..."`);
    }

    // メッセージを準備
    let messageToSend = message;

    if (isFirstMessage || !sessionId) {
      // 初回メッセージ: PROMPT_TEMPLATEを組み込む
      console.log(`[${sid}] First message - applying PROMPT_TEMPLATE`);

      if (!PROMPT_TEMPLATE) {
        console.warn(`[${sid}] ⚠️  No PROMPT_TEMPLATE loaded`);
      } else {
        // 出力ディレクトリを事前に作成
        const outputPath = path.join(session.workingDir, session.outputDir);
        await fs.mkdir(outputPath, { recursive: true });

        // 事業内容をファイルに保存（session dirの中に）
        const businessInfoPath = path.join(outputPath, 'business_info.md');
        await fs.writeFile(businessInfoPath, message, 'utf-8');

        // PROMPT_TEMPLATE内の [client-name] を session-id に置き換え
        const customizedTemplate = PROMPT_TEMPLATE.replace(/\[client-name\]/g, sid);

        // 完全な作業指示をファイルに保存
        const fullInstructions = `${customizedTemplate}

# 入力ファイル
@${session.outputDir}/business_info.md

# 出力先
${session.outputDir}/

上記の内容で、すぐにホームページ作成を開始してください。`;

        const instructionsPath = path.join(outputPath, 'instructions.md');
        await fs.writeFile(instructionsPath, fullInstructions, 'utf-8');
        console.log(`[${sid}] Saved instructions (${fullInstructions.length} chars)`);

        // Claude Codeには短い指示だけを送る
        messageToSend = `@${session.outputDir}/instructions.md の指示に従って作業を開始してください。`;
      }
    }

    // メッセージを送信
    console.log(`[${sid}] Sending message to Claude Code...`);
    const response = await session.sendMessage(messageToSend);

    // プレビューURLを生成
    const previewUrl = `/preview/${sid}/index.html`;

    // ファイルが存在するかチェック（プロジェクトルートのdist/）
    const indexPath = path.join(__dirname, '../../dist', sid, 'index.html');
    let hasPreview = false;
    try {
      await fs.access(indexPath);
      hasPreview = true;
      console.log(`[${sid}] ✓ Preview available`);
    } catch (error) {
      // ファイルがまだない場合
      hasPreview = false;
    }

    res.json({
      sessionId: sid,
      response,
      previewUrl: hasPreview ? previewUrl : null
    });

  } catch (error) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({
      error: 'Internal server error',
      details: error.message
    });
  }
});

// API: セッション情報を取得
app.get('/api/session/:id', async (req, res) => {
  const sessionId = req.params.id;
  const session = sessions.get(sessionId);

  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }

  // 生成されたファイル一覧を取得（プロジェクトルートのdist/）
  const outputDir = path.join(__dirname, '../../dist', sessionId);
  let files = [];
  try {
    const entries = await fs.readdir(outputDir, { withFileTypes: true });
    files = entries
      .filter(entry => entry.isFile() && entry.name.endsWith('.html'))
      .map(entry => ({
        name: entry.name,
        url: `/preview/${sessionId}/${entry.name}`
      }));
  } catch (error) {
    // ディレクトリがまだない場合
  }

  res.json({
    sessionId,
    isAlive: session.isAlive(),
    files
  });
});

// API: アクティブなセッション一覧
app.get('/api/sessions', (req, res) => {
  const sessionList = Array.from(sessions.keys()).map(sessionId => ({
    sessionId,
    isAlive: sessions.get(sessionId).isAlive(),
    lastActivity: sessionTimestamps.get(sessionId)
  }));

  res.json({
    count: sessionList.length,
    sessions: sessionList
  });
});

// API: セッションを終了
app.post('/api/session/:id/close', async (req, res) => {
  const sessionId = req.params.id;
  const session = sessions.get(sessionId);

  if (session) {
    await session.close();
    sessions.delete(sessionId);
    sessionTimestamps.delete(sessionId);
    console.log(`[${sessionId}] Session manually closed`);
  }

  res.json({ success: true });
});

// ヘルスチェック
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    activeSessions: sessions.size,
    uptime: process.uptime()
  });
});

// エラーハンドリング
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error',
    details: err.message
  });
});

// サーバー起動
app.listen(PORT, async () => {
  console.log(`
╔════════════════════════════════════════════╗
║   Chat HP Builder Server                  ║
║   http://localhost:${PORT}                   ║
╚════════════════════════════════════════════╝
`);

  // PROMPT_TEMPLATEを読み込む
  await loadPromptTemplate();

  console.log(`
Ready to create homepages with Claude Code!
  `);
});

// グレースフルシャットダウン
process.on('SIGTERM', async () => {
  console.log('\nSIGTERM received, closing all sessions...');
  for (const session of sessions.values()) {
    await session.close();
  }
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('\nSIGINT received, closing all sessions...');
  for (const session of sessions.values()) {
    await session.close();
  }
  process.exit(0);
});
