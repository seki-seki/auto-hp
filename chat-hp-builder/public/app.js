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
document.addEventListener('DOMContentLoaded', async () => {
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

  // URLからセッションIDを取得して復元
  const urlSessionId = getSessionIdFromUrl();
  if (urlSessionId) {
    await restoreSession(urlSessionId);
  }
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

      // URLを更新
      updateUrl(sessionId);
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

  // URLをルートに戻す
  updateUrl(null);

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
          <pre># Gaia LLC

## VALUE CREATION
### 価値創造

## 事業の目的
- 不動産事業
- 建築の工事設計
- 広告看板事業
- 生命保険募集に関する業務
- 損害保険代理店事業

## 会社概要
**合同会社ガイア**
- 資本金: 200万円
- 会社住所: 熊本県熊本市中央区帯山５丁目３８番２５号
- 設立日: 平成25年１１月１日

## Message
私たちの使命は「価値を創造し、社会に還元すること」です。
...</pre>
        </div>
        <p style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
          💡 ヒント: Markdown形式で会社名、事業内容、会社概要などを入力してください。<br>
          PROMPT_TEMPLATE_FOR_BUILDER.md（デプロイ不要版）は自動的に適用されます。
        </p>
        <button class="example-btn" data-prompt="# Gaia LLC&#10;&#10;## VALUE CREATION&#10;### 価値創造&#10;&#10;## 事業の目的&#10;&#10;- 不動産事業&#10;- 建築の工事設計&#10;- 広告看板事業&#10;- 生命保険募集に関する業務&#10;- 損害保険代理店事業&#10;- 不動産コンサルタント業務&#10;- 住宅地・別荘地の開発造成&#10;&#10;---&#10;&#10;## 会社概要&#10;&#10;**Gaiya LLC**  &#10;**合同会社ガイア**&#10;&#10;- **資本金**: 200万円&#10;- **会社住所**: 熊本県熊本市中央区帯山５丁目３８番２５号&#10;- **設立日**: 平成25年１１月１日&#10;- **法人番号**: 5330003005421&#10;&#10;---&#10;&#10;## 会社プレゼンテーション&#10;&#10;### 陶芸&#10;**Design × Place**  &#10;最高のデザインと独自性&#10;&#10;### Creation&#10;自由な創造力&#10;&#10;### Signboard Business&#10;お客様の希望の看板広告を独自のデザインで最適化し不動産条件も含め他にはない唯一無二の広告を提案&#10;&#10;### 看板・ストリートサイド広告&#10;これからの時代はデジタルでは再現出来ない独自性とメディアミックス&#10;&#10;### 感性と価値の裏付けをサービスに&#10;&#10;---&#10;&#10;## Message&#10;&#10;私たちの使命は「価値を創造し、社会に還元すること」です。&#10;&#10;激しく変化する現代社会において、単にモノやサービスを提供するだけではなく、人々の期待を超える「新たな価値」を生み出すことこそが企業に求められる本質的な役割だと私たちは考えています。&#10;&#10;創業以来、私たちは常に「本質は何か」「誰のためにあるのか」を問い続け、ユーザー視点と未来志向を大切にしながら事業を展開してまいりました。&#10;&#10;お客様、パートナー企業、そして地域社会とのつながりを大切にし、共に成長していける関係を築いていくことが、さらなる価値創造につながると確信しております。&#10;&#10;これからも変化を恐れず挑戦を続け、持続可能な社会の実現に貢献してまいります。&#10;&#10;皆様にとってなくてはならない存在であり続けるために、社員一同、心を一つにして邁進してまいります。&#10;&#10;今後とも一層のご支援とご指導を賜りますよう、よろしくお願い申し上げます。&#10;&#10;**代表社員　井上真意**&#10;&#10;---&#10;&#10;## Mission&#10;&#10;お客様にとって最適な価値の創造を常に考え提案し形にするのが弊社の役割だと考えています&#10;&#10;### Realestate&#10;独自のネットワークと不動産の知識で賃貸から不動産投資まで幅広い範囲で対応致します">📄 サンプルを読み込む（Gaia LLC）</button>
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

// URLからセッションIDを取得
function getSessionIdFromUrl() {
  const path = window.location.pathname;
  // /session-xxx のような形式を期待
  if (path.startsWith('/session-')) {
    return path.substring(1); // 先頭の / を除去
  }
  return null;
}

// URLを更新
function updateUrl(sid) {
  if (sid) {
    // セッションIDがある場合は /${sessionId} に更新
    window.history.pushState({ sessionId: sid }, '', `/${sid}`);
  } else {
    // セッションIDがない場合はルートに戻す
    window.history.pushState({}, '', '/');
  }
}

// セッションを復元
async function restoreSession(sid) {
  try {
    console.log(`Restoring session: ${sid}`);

    // セッション情報を取得
    const response = await fetch(`/api/session/${sid}`);
    if (!response.ok) {
      console.error('Session not found and no output files exist');
      // セッションも成果物も存在しない場合はルートに戻す
      updateUrl(null);
      return;
    }

    const data = await response.json();

    // セッションIDを設定
    sessionId = data.sessionId;
    sessionIdDisplay.textContent = data.isExpired ? `${sessionId} (expired)` : sessionId;
    newSessionBtn.style.display = 'inline-block';

    // ウェルカムメッセージを削除
    const welcomeMessage = document.querySelector('.welcome-message');
    if (welcomeMessage) {
      welcomeMessage.remove();
    }

    // タイムアウトしたセッションの場合はメッセージを表示
    if (data.isExpired) {
      addMessage('assistant', 'このセッションはタイムアウトしましたが、成果物は保存されています。\nプレビューを確認し、修正が必要な場合は指示を送信してください。新しいセッションが自動的に作成されます。');
    }

    // メッセージ履歴を復元（生きているセッションの場合のみ）
    if (data.isAlive && data.messages && data.messages.length > 0) {
      messages = data.messages;
      data.messages.forEach(msg => {
        addMessage(msg.role, msg.content);
      });
    }

    // プレビューURLを設定（ファイルがある場合）
    const hasFiles = data.files && data.files.length > 0;
    if (hasFiles) {
      const previewUrl = `/preview/${sessionId}/index.html`;
      updatePreview(previewUrl);

      // 入力欄を修正依頼用に変更
      chatInput.placeholder = '修正依頼を入力してください...\n\n例:\n- ヒーローセクションの文字を大きくしてください\n- 背景色を明るくしてください\n- 会社概要セクションに画像を追加してください';
      chatInput.style.display = 'block';
      sendBtn.style.display = 'inline-block';
    } else {
      // ファイルがない場合は新規セッションとして扱う
      chatInput.style.display = 'block';
      sendBtn.style.display = 'inline-block';
    }

    console.log(`Session restored: ${sessionId}`);
  } catch (error) {
    console.error('Error restoring session:', error);
    // エラーが発生した場合はルートに戻す
    updateUrl(null);
  }
}
