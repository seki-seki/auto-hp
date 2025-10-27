// グローバル状態
let sessionId = null;
let messages = [];
let currentPreviewUrl = null;
let hasPreview = false; // プレビューが表示されたかどうか

// DOM要素
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const sessionIdDisplay = document.getElementById('session-id');
const newSessionBtn = document.getElementById('new-session-btn');
const clearChatBtn = document.getElementById('clear-chat-btn');
const previewIframe = document.getElementById('preview-iframe');
const previewPlaceholder = document.querySelector('.preview-placeholder');
const patternSelect = document.getElementById('pattern-select');
const refreshPreviewBtn = document.getElementById('refresh-preview-btn');
const openNewTabBtn = document.getElementById('open-new-tab-btn');

// 初期化
document.addEventListener('DOMContentLoaded', () => {
  sendBtn.addEventListener('click', handleSend);
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleSend();
    }
  });

  newSessionBtn.addEventListener('click', handleNewSession);
  clearChatBtn.addEventListener('click', handleClearChat);
  refreshPreviewBtn.addEventListener('click', handleRefreshPreview);
  openNewTabBtn.addEventListener('click', handleOpenNewTab);
  patternSelect.addEventListener('change', handlePatternChange);

  // Example prompt buttons
  document.querySelectorAll('.example-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      chatInput.value = btn.dataset.prompt;
      chatInput.focus();
    });
  });

  // ページ離脱時にセッションをクローズ
  window.addEventListener('beforeunload', () => {
    if (sessionId) {
      navigator.sendBeacon(`/api/session/${sessionId}/close`);
    }
  });
});

// メッセージ送信
async function handleSend() {
  const message = chatInput.value.trim();
  if (!message) return;

  // UI更新
  chatInput.value = '';
  chatInput.disabled = true;
  sendBtn.disabled = true;
  sendBtn.querySelector('.btn-text').style.display = 'none';
  sendBtn.querySelector('.btn-loading').style.display = 'inline';

  // 作業中は入力欄を非表示
  chatInput.style.display = 'none';
  sendBtn.style.display = 'none';

  // ウェルカムメッセージを削除
  const welcomeMessage = document.querySelector('.welcome-message');
  if (welcomeMessage) {
    welcomeMessage.remove();
  }

  // ユーザーメッセージを表示
  addMessage('user', message);

  // ローディングインジケーターを表示
  const loadingId = addLoadingIndicator();

  try {
    // APIリクエスト
    const isFirstMessage = messages.length === 1; // ユーザーメッセージを1つ追加した直後
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId,
        message,
        isFirstMessage
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to send message');
    }

    const data = await response.json();

    // セッションIDを保存
    if (!sessionId) {
      sessionId = data.sessionId;
      sessionIdDisplay.textContent = sessionId;
      newSessionBtn.style.display = 'inline-block';
    }

    // アシスタントの応答を表示
    removeLoadingIndicator(loadingId);
    addMessage('assistant', data.response);

    // プレビューを更新
    if (data.previewUrl) {
      updatePreview(data.previewUrl);

      // プレビューが表示されたら、入力欄を表示して修正依頼用に変更
      chatInput.placeholder = '修正依頼を入力してください...\n\n例:\n- ヒーローセクションの文字を大きくしてください\n- 背景色を明るくしてください\n- 会社概要セクションに画像を追加してください';
    }

  } catch (error) {
    console.error('Error sending message:', error);
    removeLoadingIndicator(loadingId);
    addMessage('assistant', `❌ Error: ${error.message}`);
  } finally {
    // UI復元
    chatInput.disabled = false;
    sendBtn.disabled = false;
    sendBtn.querySelector('.btn-text').style.display = 'inline';
    sendBtn.querySelector('.btn-loading').style.display = 'none';

    // プレビューが表示されている場合のみ入力欄を再表示
    if (hasPreview) {
      chatInput.style.display = 'block';
      sendBtn.style.display = 'inline-block';
      chatInput.focus();
    }
  }
}

// メッセージを追加
function addMessage(role, content) {
  messages.push({ role, content });

  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${role}`;
  messageDiv.innerHTML = `
    <div class="message-header">
      <span class="message-role ${role}">${role}</span>
      <span class="message-time">${new Date().toLocaleTimeString()}</span>
    </div>
    <div class="message-content">${escapeHtml(content)}</div>
  `;

  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ローディングインジケーターを追加
function addLoadingIndicator() {
  const loadingId = `loading-${Date.now()}`;
  const loadingDiv = document.createElement('div');
  loadingDiv.id = loadingId;
  loadingDiv.className = 'loading-indicator';
  loadingDiv.innerHTML = `
    <div class="spinner"></div>
    <span>Claude Code is processing...</span>
  `;

  chatMessages.appendChild(loadingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  return loadingId;
}

// ローディングインジケーターを削除
function removeLoadingIndicator(loadingId) {
  const loadingDiv = document.getElementById(loadingId);
  if (loadingDiv) {
    loadingDiv.remove();
  }
}

// プレビューを更新
function updatePreview(previewUrl) {
  currentPreviewUrl = previewUrl;
  hasPreview = true; // プレビューが表示されたことを記録

  previewPlaceholder.style.display = 'none';
  previewIframe.style.display = 'block';
  previewIframe.src = previewUrl;

  // コントロールを表示
  patternSelect.style.display = 'inline-block';
  refreshPreviewBtn.style.display = 'inline-block';
  openNewTabBtn.style.display = 'inline-block';

  // 入力欄を再表示（finally句で制御されるが、ここでも念のため）
  chatInput.style.display = 'block';
  sendBtn.style.display = 'inline-block';
}

// パターンを変更
function handlePatternChange() {
  if (!sessionId) return;

  const pattern = patternSelect.value;
  const newUrl = `/preview/${sessionId}/${pattern}`;
  previewIframe.src = newUrl;
  currentPreviewUrl = newUrl;
}

// プレビューをリフレッシュ
function handleRefreshPreview() {
  if (currentPreviewUrl) {
    previewIframe.src = currentPreviewUrl + '?t=' + Date.now();
  }
}

// 新しいタブで開く
function handleOpenNewTab() {
  if (currentPreviewUrl) {
    window.open(currentPreviewUrl, '_blank');
  }
}

// 新しいセッションを開始
async function handleNewSession() {
  if (sessionId) {
    // 現在のセッションをクローズ
    try {
      await fetch(`/api/session/${sessionId}/close`, { method: 'POST' });
    } catch (error) {
      console.error('Error closing session:', error);
    }
  }

  // 状態をリセット
  sessionId = null;
  messages = [];
  currentPreviewUrl = null;
  hasPreview = false; // プレビューフラグをリセット

  sessionIdDisplay.textContent = 'Not started';
  newSessionBtn.style.display = 'none';

  // プレースホルダーを初回用に戻す
  chatInput.placeholder = '事業内容をMarkdown形式で入力してください...\n\n例:\n# 会社名\n\n## 事業内容\n- 事業1\n- 事業2\n\n## 会社概要\n...';

  // 入力欄を表示
  chatInput.style.display = 'block';
  sendBtn.style.display = 'inline-block';

  // チャットをクリア
  chatMessages.innerHTML = `
    <div class="welcome-message">
      <h3>👋 Welcome to Chat HP Builder</h3>
      <p>事業内容を入力するだけで、Claude Codeが自動的にホームページを3パターン作成します。</p>
      <div class="example-prompts">
        <p><strong>入力例:</strong></p>
        <div class="example-format">
          <pre># 株式会社ガイア

## 事業内容
- 不動産事業
- 建築工事設計
- 広告看板事業

## 会社概要
- 会社住所: 熊本県熊本市中央区...
- 設立日: 平成25年11月1日
...</pre>
        </div>
        <p style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
          💡 ヒント: Markdown形式で会社名、事業内容、会社概要などを入力してください。<br>
          PROMPT_TEMPLATE_FOR_BUILDER.md（デプロイ不要版）は自動的に適用されます。
        </p>
        <button class="example-btn" data-prompt="# 株式会社ガイア&#10;&#10;## VALUE CREATION&#10;### 価値創造&#10;&#10;## 事業の目的&#10;- 不動産事業&#10;- 建築の工事設計&#10;- 広告看板事業&#10;&#10;## 会社概要&#10;**Gaiya LLC**  &#10;**合同会社ガイア**&#10;&#10;- **資本金**: 200万円&#10;- **会社住所**: 熊本県熊本市中央区帯山５丁目３８番２５号&#10;- **設立日**: 平成25年１１月１日">📄 サンプルを読み込む（Gaia LLC）</button>
      </div>
    </div>
  `;

  // Example buttons に再度イベントリスナーを追加
  document.querySelectorAll('.example-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      chatInput.value = btn.dataset.prompt;
      chatInput.focus();
    });
  });

  // プレビューをリセット
  previewIframe.style.display = 'none';
  previewIframe.src = '';
  previewPlaceholder.style.display = 'flex';
  patternSelect.style.display = 'none';
  refreshPreviewBtn.style.display = 'none';
  openNewTabBtn.style.display = 'none';

  chatInput.focus();
}

// チャットをクリア
function handleClearChat() {
  if (confirm('Clear all messages? (Session will remain active)')) {
    messages = [];
    chatMessages.innerHTML = '';
  }
}

// HTML エスケープ
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
