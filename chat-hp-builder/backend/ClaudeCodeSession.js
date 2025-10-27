const pty = require("node-pty-prebuilt-multiarch");
const fs = require("fs/promises");
const path = require("path");

class ClaudeCodeSession {
  constructor(sessionId, workingDir, outputDir) {
    this.sessionId = sessionId;
    this.workingDir = workingDir;
    this.outputDir = outputDir || `dist/${sessionId}`;
    this.ptyProcess = null;
    this.outputBuffer = "";
    this.isReady = false;
    this.isProcessing = false;
    this.messageQueue = [];
    this.lastOutputTime = Date.now();
  }

  async start() {
    console.log(`[${this.sessionId}] Starting Claude Code session`);
    console.log(`[${this.sessionId}] Working dir: ${this.workingDir}`);
    console.log(`[${this.sessionId}] Output dir: ${this.outputDir}`);

    // Claude Codeをptyで起動（Maxプランは認証済みなのでAPIキー不要）
    // --permission-mode acceptEdits: すべての編集を自動許可
    // --allowed-tools: HP作成に必要なツールを列挙
    const claudeArgs = [
      "--permission-mode",
      "acceptEdits",
      "--allowed-tools",
      "Bash(curl:*)",
      "Bash(mkdir:*)",
      "Bash(cp:*)",
      "Bash(npm:*)",
      "Bash(node:*)",
      "Bash(ls:*)",
      "Bash(cat:*)",
      "Bash(tree:*)",
      "Edit",
      "Write",
      "Read",
      "Glob",
      "Grep",
    ];

    this.ptyProcess = pty.spawn("claude", claudeArgs, {
      name: "xterm-color",
      cols: 120,
      rows: 40,
      cwd: this.workingDir,
      env: {
        ...process.env,
        TERM: "xterm-color",
      },
    });

    // 出力をキャプチャ
    let lastLoggedContent = "";
    this.ptyProcess.onData((data) => {
      this.outputBuffer += data;
      this.lastOutputTime = Date.now(); // 最後の出力時刻を記録

      // ANSIエスケープコードを簡易的に削除（ログ表示用）
      const cleanData = data.replace(/\x1b\[[0-9;]*m/g, "");
      const cleanBuffer = this.outputBuffer.replace(/\x1b\[[0-9;]*m/g, "");

      // 意味のある出力のみログ表示
      // - 5文字以上
      // - 直前のログと異なる内容
      // - 英数字や記号を含む
      const trimmedData = cleanData.trim();
      if (
        trimmedData.length >= 5 &&
        trimmedData !== lastLoggedContent &&
        /[a-zA-Z0-9\u3000-\u9FFF]/.test(trimmedData)
      ) {
        console.log(`[${this.sessionId}] ${trimmedData}`);
        lastLoggedContent = trimmedData;
      }

      // プロンプトが表示されたら準備完了（複数パターンを確認）
      const isPromptReady =
        cleanBuffer.includes("How can I help") ||
        cleanBuffer.includes("What would you like") ||
        cleanBuffer.includes("> ") || // シンプルに「> 」を検知
        cleanBuffer.match(/>\s*$/); // 末尾に > がある

      if (isPromptReady && !this.isReady && this.outputBuffer.length > 50) {
        console.log(`[${this.sessionId}] ✓ Claude Code ready`);
        this.isReady = true;
        this.isProcessing = false;
      }
    });

    this.ptyProcess.onExit((exitCode) => {
      console.log(
        `[${this.sessionId}] Claude Code exited with code ${exitCode}`
      );
      this.isReady = false;
    });

    // 起動完了を待つ（30秒タイムアウト）
    await this.waitForReady(30000);
    console.log(`[${this.sessionId}] Claude Code is ready`);
  }

  async waitForReady(timeout = 30000) {
    const startTime = Date.now();
    let lastLog = 0;
    const idleThreshold = 3000; // 3秒間出力がなければ準備完了とみなす

    while (!this.isReady && Date.now() - startTime < timeout) {
      await new Promise((resolve) => setTimeout(resolve, 200));

      // 5秒ごとに進捗をログ出力
      const elapsed = Date.now() - startTime;
      if (elapsed - lastLog > 5000) {
        console.log(
          `[${this.sessionId}] Waiting for Claude Code... (${Math.floor(
            elapsed / 1000
          )}s)`
        );
        lastLog = elapsed;
      }

      // 3秒間出力がなく、最低限の出力があれば準備完了とみなす
      const idleTime = Date.now() - this.lastOutputTime;
      if (idleTime > idleThreshold && this.outputBuffer.length > 50) {
        console.log(
          `[${this.sessionId}] ✓ Output idle for ${idleTime}ms, assuming ready`
        );
        this.isReady = true;
        break;
      }
    }

    if (!this.isReady) {
      console.error(
        `[${this.sessionId}] Timeout! Last output buffer:`,
        this.outputBuffer.slice(-500)
      );
      throw new Error("Claude Code failed to start within timeout");
    }
  }

  async sendMessage(message) {
    if (!this.isReady) {
      throw new Error("Claude Code is not ready");
    }

    if (this.isProcessing) {
      console.log(`[${this.sessionId}] Already processing, queueing message`);
      return new Promise((resolve, reject) => {
        this.messageQueue.push({ message, resolve, reject });
      });
    }

    console.log(
      `[${this.sessionId}] Sending message: ${message.substring(0, 100)}...`
    );
    console.log(
      `[${this.sessionId}] Message length: ${message.length} characters`
    );

    this.isProcessing = true;
    this.outputBuffer = ""; // バッファをクリア
    this.lastOutputTime = Date.now(); // タイマーをリセット

    // メッセージを送信
    this.ptyProcess.write(message);

    // 少し待機してからもう一度Enterを送る（これがないと動かない）
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.ptyProcess.write("\r");

    console.log(`[${this.sessionId}] Message sent (${message.length} bytes)`);

    // 応答を待つ（HP生成は15分程度かかるため、余裕を持って20分に設定）
    try {
      const response = await this.waitForResponse(1200000); // 20分タイムアウト

      // キューに溜まっているメッセージを処理
      if (this.messageQueue.length > 0) {
        const next = this.messageQueue.shift();
        this.sendMessage(next.message).then(next.resolve).catch(next.reject);
      }

      return response;
    } catch (error) {
      this.isProcessing = false;
      throw error;
    }
  }

  async checkFilesGenerated() {
    // 必須ファイル：index.html, pattern-a.html, pattern-b.html, pattern-c.html
    const requiredFiles = [
      "index.html",
      "pattern-a.html",
      "pattern-b.html",
      "pattern-c.html",
    ];
    const outputPath = path.join(this.workingDir, this.outputDir);

    try {
      const checks = await Promise.all(
        requiredFiles.map(async (file) => {
          try {
            await fs.access(path.join(outputPath, file));
            return true;
          } catch {
            return false;
          }
        })
      );

      const allExist = checks.every((exists) => exists);
      if (allExist) {
        console.log(`[${this.sessionId}] ✓ All required files generated`);
      }
      return allExist;
    } catch (error) {
      return false;
    }
  }

  async waitForResponse(timeout = 1200000) {
    const startTime = Date.now();
    let lastOutputLength = 0;
    let stableCount = 0;
    const requiredStableSeconds = 10; // 10秒間出力がなければ完了（3秒は短すぎた）
    let lastProgressLog = 0;
    let lastFileCheck = 0;

    console.log(
      `[${this.sessionId}] Waiting for response (timeout: ${
        timeout / 1000
      }s)...`
    );

    while (Date.now() - startTime < timeout) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const elapsed = Date.now() - startTime;

      // 5秒ごとにファイルの存在をチェック
      if (elapsed - lastFileCheck > 5000) {
        const filesReady = await this.checkFilesGenerated();
        if (filesReady) {
          console.log(
            `[${this.sessionId}] ✓ Response completed (all files generated)`
          );
          this.isReady = true;
          this.isProcessing = false;
          return this.cleanOutput(this.outputBuffer);
        }
        lastFileCheck = elapsed;
      }

      // 60秒ごとに進捗をログ出力
      if (elapsed - lastProgressLog > 60000) {
        const cleanBuffer = this.outputBuffer.replace(/\x1b\[[0-9;]*m/g, "");
        const isThinking = cleanBuffer.includes("Thinking on");
        console.log(
          `[${this.sessionId}] Working... (${Math.floor(elapsed / 60)}m${
            isThinking ? ", thinking" : ""
          })`
        );
        lastProgressLog = elapsed;
      }

      // プロンプトが再度表示されたかチェック（最優先）
      const cleanBuffer = this.outputBuffer.replace(/\x1b\[[0-9;]*m/g, "");

      // "Thinking on" が表示されている間は処理中とみなす
      const isThinking = cleanBuffer.includes("Thinking on");

      // プロンプト検知（最後の500文字を確認）
      const lastPart = cleanBuffer.slice(-500);
      const hasPrompt =
        lastPart.includes("How can I help") ||
        lastPart.includes("What would you like") ||
        /^>\s*$/m.test(lastPart) ||  // 行頭の > だけの行
        (lastPart.includes('? for shortcuts') && lastPart.includes('>'));

      if (hasPrompt && this.outputBuffer.length > 100 && !isThinking) {
        console.log(`[${this.sessionId}] ✓ Response completed (prompt detected)`);
        this.isReady = true;
        this.isProcessing = false;
        return this.cleanOutput(this.outputBuffer);
      }

      // 出力が安定したかチェック（副次的、かつThinking中でない場合のみ）
      if (this.outputBuffer.length === lastOutputLength) {
        stableCount++;
        // Thinking中は安定判定しない
        if (
          !isThinking &&
          stableCount >= requiredStableSeconds &&
          this.outputBuffer.length > 0
        ) {
          console.log(
            `[${this.sessionId}] Response completed (stable for ${requiredStableSeconds}s)`
          );
          return this.cleanOutput(this.outputBuffer);
        }
      } else {
        stableCount = 0;
        lastOutputLength = this.outputBuffer.length;
      }
    }

    const elapsed = Date.now() - startTime;
    console.error(
      `[${this.sessionId}] Response timeout after ${Math.floor(
        elapsed / 1000
      )}s (buffer size: ${(this.outputBuffer.length / 1024).toFixed(1)}KB)`
    );
    console.error(
      `[${this.sessionId}] Last output:`,
      this.outputBuffer.slice(-500)
    );
    throw new Error(`Response timeout after ${Math.floor(elapsed / 1000)}s`);
  }

  cleanOutput(output) {
    // ANSIエスケープコードを削除
    let cleaned = output.replace(/\x1b\[[0-9;]*m/g, "");

    // 制御文字を削除
    cleaned = cleaned.replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, "");

    // 入力したメッセージをレスポンスから削除（エコーバック対策）
    // cleaned = cleaned.replace(/^.*?\n/, '');

    return cleaned.trim();
  }

  async close() {
    console.log(`[${this.sessionId}] Closing Claude Code session`);
    if (this.ptyProcess) {
      this.ptyProcess.write("exit\n");
      await new Promise((resolve) => setTimeout(resolve, 500));
      this.ptyProcess.kill();
      this.ptyProcess = null;
    }
    this.isReady = false;
  }

  isAlive() {
    return this.ptyProcess !== null && this.isReady;
  }
}

module.exports = ClaudeCodeSession;
