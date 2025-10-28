# サイトデータ収集タスク

以下の90サイト（レスポンシブ対応サイトのみ）について、**デスクトップ版とモバイル版の両方**のデータを収集してください。

## 収集するデータ
- スクリーンショット（fullPage）
- DOM スナップショット（a11y tree）

## 手順

各サイトについて以下の手順を実行してください：

### 1. 大井保育園

**URL**: https://ooi-hoikuen.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://ooi-hoikuen.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/ooi-hoikuen.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/ooi-hoikuen.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://ooi-hoikuen.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/ooi-hoikuen-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/ooi-hoikuen-mobile.txt` に保存

---

### 2. 社会福祉法人ヒトトナリ

**URL**: https://hitotonari.or.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://hitotonari.or.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/hitotonari.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/hitotonari.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://hitotonari.or.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/hitotonari-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/hitotonari-mobile.txt` に保存

---

### 3. 原中央保育園

**URL**: https://harachuou-hoikuen.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://harachuou-hoikuen.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/harachuou-hoikuen.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/harachuou-hoikuen.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://harachuou-hoikuen.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/harachuou-hoikuen-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/harachuou-hoikuen-mobile.txt` に保存

---

### 4. 医療法人徳治会

**URL**: https://motoki-ortho.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://motoki-ortho.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/motoki-ortho.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/motoki-ortho.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://motoki-ortho.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/motoki-ortho-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/motoki-ortho-mobile.txt` に保存

---

### 5. まごころ保育園

**URL**: https://magokoro-hoikuen.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://magokoro-hoikuen.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/magokoro-hoikuen.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/magokoro-hoikuen.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://magokoro-hoikuen.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/magokoro-hoikuen-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/magokoro-hoikuen-mobile.txt` に保存

---

### 6. 熊本空港レンタカー

**URL**: https://kumamoto-rentacar.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kumamoto-rentacar.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kumamotokuukou-rentacar.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kumamotokuukou-rentacar.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kumamoto-rentacar.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kumamotokuukou-rentacar-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kumamotokuukou-rentacar-mobile.txt` に保存

---

### 7. 空港前保育園

**URL**: https://kukomae-hoikuen.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kukomae-hoikuen.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kukomae-hoikuen.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kukomae-hoikuen.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kukomae-hoikuen.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kukomae-hoikuen-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kukomae-hoikuen-mobile.txt` に保存

---

### 8. 医療法人徳治会

**URL**: https://www.motoki-implant.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://www.motoki-implant.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/motoki-implant.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/motoki-implant.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://www.motoki-implant.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/motoki-implant-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/motoki-implant-mobile.txt` に保存

---

### 9. 宗像市株式会社KKS（海神）

**URL**: https://kks-wadatsumi.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kks-wadatsumi.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kks-wadatsumi.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kks-wadatsumi.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kks-wadatsumi.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kks-wadatsumi-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kks-wadatsumi-mobile.txt` に保存

---

### 10. 小倉南区株式会社ヤスキグループ

**URL**: https://yasuki-group.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://yasuki-group.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/yasuki-group.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/yasuki-group.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://yasuki-group.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/yasuki-group-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/yasuki-group-mobile.txt` に保存

---

### 11. 医療法人徳治会

**URL**: https://www.motoki-dental-prevention.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://www.motoki-dental-prevention.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/motoki-dental-prevention.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/motoki-dental-prevention.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://www.motoki-dental-prevention.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/motoki-dental-prevention-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/motoki-dental-prevention-mobile.txt` に保存

---

### 12. 博多区株式会社フードチャンネル

**URL**: https://food-ch.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://food-ch.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/food-ch.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/food-ch.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://food-ch.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/food-ch-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/food-ch-mobile.txt` に保存

---

### 13. 宮崎市一口餃子の大明神

**URL**: https://daimyojin.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://daimyojin.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/daimyojin.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/daimyojin.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://daimyojin.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/daimyojin-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/daimyojin-mobile.txt` に保存

---

### 14. 朝倉市株式会社えん

**URL**: https://en-corporation.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://en-corporation.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/en-corporation.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/en-corporation.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://en-corporation.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/en-corporation-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/en-corporation-mobile.txt` に保存

---

### 15. 株式会社ミナタ工業

**URL**: https://minata.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://minata.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/minata.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/minata.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://minata.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/minata-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/minata-mobile.txt` に保存

---

### 16. 春日市はらだ歯科

**URL**: https://harada-dentalclinic.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://harada-dentalclinic.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/harada-dentalclinic.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/harada-dentalclinic.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://harada-dentalclinic.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/harada-dentalclinic-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/harada-dentalclinic-mobile.txt` に保存

---

### 17. 宇佐市末宗建設株式会社

**URL**: https://suemune.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://suemune.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/suemune.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/suemune.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://suemune.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/suemune-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/suemune-mobile.txt` に保存

---

### 18. 税理士法人TIC

**URL**: https://tictax.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://tictax.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/tictax.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/tictax.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://tictax.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/tictax-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/tictax-mobile.txt` に保存

---

### 19. 延岡市株式会社黒田建築

**URL**: https://kurodakenchiku.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kurodakenchiku.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kurodakenchiku.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kurodakenchiku.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kurodakenchiku.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kurodakenchiku-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kurodakenchiku-mobile.txt` に保存

---

### 20. 小倉北区有吉祐睡眠クリニック

**URL**: https://you-sleepclinic.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://you-sleepclinic.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/you-sleepclinic.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/you-sleepclinic.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://you-sleepclinic.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/you-sleepclinic-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/you-sleepclinic-mobile.txt` に保存

---

### 21. 朝倉市からだよかよね

**URL**: https://yokayone.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://yokayone.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/yokayone.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/yokayone.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://yokayone.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/yokayone-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/yokayone-mobile.txt` に保存

---

### 22. 那珂川市株式会社三正

**URL**: https://sanshou340.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://sanshou340.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/sanshou340.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/sanshou340.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://sanshou340.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/sanshou340-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/sanshou340-mobile.txt` に保存

---

### 23. 門司区医療法人辻医院

**URL**: https://tsuji-iin.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://tsuji-iin.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/tsuji-clinic.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/tsuji-clinic.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://tsuji-iin.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/tsuji-clinic-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/tsuji-clinic-mobile.txt` に保存

---

### 24. 株式会社優和コンサルティング

**URL**: https://yuuwa-consulting.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://yuuwa-consulting.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/yuuwa-consulting.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/yuuwa-consulting.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://yuuwa-consulting.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/yuuwa-consulting-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/yuuwa-consulting-mobile.txt` に保存

---

### 25. 株式会社羽野組

**URL**: https://hanogumi.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://hanogumi.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/hanogumi.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/hanogumi.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://hanogumi.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/hanogumi-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/hanogumi-mobile.txt` に保存

---

### 26. 小倉北区株式会社connecthome

**URL**: https://connecthome.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://connecthome.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/connecthome.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/connecthome.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://connecthome.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/connecthome-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/connecthome-mobile.txt` に保存

---

### 27. モトキデンタルクリニック

**URL**: https://motoki-dental.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://motoki-dental.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/motoki-dental.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/motoki-dental.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://motoki-dental.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/motoki-dental-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/motoki-dental-mobile.txt` に保存

---

### 28. 小倉北区ストレスケアクリニック小倉

**URL**: https://s-care-cl-kokura.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://s-care-cl-kokura.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/s-care-cl-kokura.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/s-care-cl-kokura.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://s-care-cl-kokura.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/s-care-cl-kokura-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/s-care-cl-kokura-mobile.txt` に保存

---

### 29. 若松区株式会社銘酒館倉松

**URL**: https://kuramatsu.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kuramatsu.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kuramatsu.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kuramatsu.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kuramatsu.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kuramatsu-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kuramatsu-mobile.txt` に保存

---

### 30. オスカー整骨院 六本松院

**URL**: https://oscar-japan.co.jp/ropponmatsu/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://oscar-japan.co.jp/ropponmatsu/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/oscar-seikotsu-ropponmatsu.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/oscar-seikotsu-ropponmatsu.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://oscar-japan.co.jp/ropponmatsu/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/oscar-seikotsu-ropponmatsu-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/oscar-seikotsu-ropponmatsu-mobile.txt` に保存

---

### 31. 筑前町株式会社佐藤木材

**URL**: https://sato-mokuzai.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://sato-mokuzai.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/sato-mokuzai.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/sato-mokuzai.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://sato-mokuzai.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/sato-mokuzai-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/sato-mokuzai-mobile.txt` に保存

---

### 32. 粕屋町株式会社パワーupレンタリース福岡

**URL**: https://powerup-fukuoka.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://powerup-fukuoka.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/powerup-rentacar.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/powerup-rentacar.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://powerup-fukuoka.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/powerup-rentacar-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/powerup-rentacar-mobile.txt` に保存

---

### 33. 八幡西区ミクニ建設株式会社

**URL**: https://mikunikensetsu.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://mikunikensetsu.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/mikunikensetsu.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/mikunikensetsu.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://mikunikensetsu.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/mikunikensetsu-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/mikunikensetsu-mobile.txt` に保存

---

### 34. 博多区株式会社ニシトク

**URL**: https://nishitoku.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://nishitoku.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/nishitoku.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/nishitoku.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://nishitoku.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/nishitoku-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/nishitoku-mobile.txt` に保存

---

### 35. 博多区勝king株式会社

**URL**: https://repeater.ne.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://repeater.ne.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/repeater.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/repeater.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://repeater.ne.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/repeater-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/repeater-mobile.txt` に保存

---

### 36. 延岡市株式会社日章ビルテック

**URL**: https://nissho-bt.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://nissho-bt.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/nissho-bt.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/nissho-bt.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://nissho-bt.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/nissho-bt-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/nissho-bt-mobile.txt` に保存

---

### 37. 株式会社FSKホールディングス

**URL**: https://fsk-kumamoto.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://fsk-kumamoto.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/fsk-kumamoto.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/fsk-kumamoto.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://fsk-kumamoto.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/fsk-kumamoto-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/fsk-kumamoto-mobile.txt` に保存

---

### 38. 城南区マイスタディ九州

**URL**: https://mystudy-kyushu.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://mystudy-kyushu.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/mystudy-kyushu.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/mystudy-kyushu.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://mystudy-kyushu.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/mystudy-kyushu-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/mystudy-kyushu-mobile.txt` に保存

---

### 39. 大木町株式会社ファーストパック

**URL**: https://firstpack.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://firstpack.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/firstpack.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/firstpack.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://firstpack.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/firstpack-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/firstpack-mobile.txt` に保存

---

### 40. 佐賀市はっとり歯科医院

**URL**: https://hattori-d.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://hattori-d.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/hattori-d.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/hattori-d.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://hattori-d.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/hattori-d-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/hattori-d-mobile.txt` に保存

---

### 41. 延岡市炭火焼ダイニング禄

**URL**: https://sumibiyaki-roku.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://sumibiyaki-roku.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/sumibiyaki-roku.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/sumibiyaki-roku.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://sumibiyaki-roku.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/sumibiyaki-roku-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/sumibiyaki-roku-mobile.txt` に保存

---

### 42. 久留米市梅原建設株式会社

**URL**: https://umehara-cc.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://umehara-cc.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/umehara-cc.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/umehara-cc.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://umehara-cc.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/umehara-cc-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/umehara-cc-mobile.txt` に保存

---

### 43. 八幡西区武巳建設株式会社

**URL**: https://takemi-cons.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://takemi-cons.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/takemi-cons.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/takemi-cons.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://takemi-cons.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/takemi-cons-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/takemi-cons-mobile.txt` に保存

---

### 44. 桜一心

**URL**: https://sakura-isshin.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://sakura-isshin.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/sakura-isshin.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/sakura-isshin.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://sakura-isshin.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/sakura-isshin-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/sakura-isshin-mobile.txt` に保存

---

### 45. 筑前町株式会社CENTRY

**URL**: https://centry.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://centry.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/centry.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/centry.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://centry.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/centry-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/centry-mobile.txt` に保存

---

### 46. 糟屋郡オスカー整骨院 志免院

**URL**: https://oscar-japan.co.jp/shime/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://oscar-japan.co.jp/shime/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/oscar-seikotsu-shime.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/oscar-seikotsu-shime.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://oscar-japan.co.jp/shime/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/oscar-seikotsu-shime-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/oscar-seikotsu-shime-mobile.txt` に保存

---

### 47. 花田歯科医院 馬出院

**URL**: https://hanada-dental.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://hanada-dental.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/hanada-dental-maidashi.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/hanada-dental-maidashi.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://hanada-dental.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/hanada-dental-maidashi-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/hanada-dental-maidashi-mobile.txt` に保存

---

### 48. 霧島市彩本舗

**URL**: https://irodori-honpo.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://irodori-honpo.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/irodori-honpo.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/irodori-honpo.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://irodori-honpo.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/irodori-honpo-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/irodori-honpo-mobile.txt` に保存

---

### 49. 株式会社サステナブル建築研究所

**URL**: https://sal-1996.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://sal-1996.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/sal-1996.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/sal-1996.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://sal-1996.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/sal-1996-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/sal-1996-mobile.txt` に保存

---

### 50. 株式会社ニシジマ

**URL**: https://nishijima-paint.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://nishijima-paint.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/nishijima-paint.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/nishijima-paint.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://nishijima-paint.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/nishijima-paint-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/nishijima-paint-mobile.txt` に保存

---

### 51. 筑前町よね整骨院

**URL**: https://yone-seikotsuin.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://yone-seikotsuin.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/yone-seikotsuin.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/yone-seikotsuin.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://yone-seikotsuin.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/yone-seikotsuin-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/yone-seikotsuin-mobile.txt` に保存

---

### 52. 宮崎市光和建装株式会社

**URL**: https://kowakensou.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kowakensou.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kowakensou.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kowakensou.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kowakensou.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kowakensou-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kowakensou-mobile.txt` に保存

---

### 53. 春日市採用サイト オスカー整骨院

**URL**: https://recruit.oscar-japan.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://recruit.oscar-japan.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/recruit-oscar-japan.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/recruit-oscar-japan.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://recruit.oscar-japan.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/recruit-oscar-japan-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/recruit-oscar-japan-mobile.txt` に保存

---

### 54. 春日市株式会社オスカージャパン

**URL**: https://oscar-japan.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://oscar-japan.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/oscar-japan.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/oscar-japan.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://oscar-japan.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/oscar-japan-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/oscar-japan-mobile.txt` に保存

---

### 55. 久留米市オスカー整骨院 久留米院

**URL**: https://oscar-japan.co.jp/kurume/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://oscar-japan.co.jp/kurume/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/oscar-seikotsuin-kurume.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/oscar-seikotsuin-kurume.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://oscar-japan.co.jp/kurume/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/oscar-seikotsuin-kurume-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/oscar-seikotsuin-kurume-mobile.txt` に保存

---

### 56. 宗像市めし処 春乃日

**URL**: https://meshidokoro-harunohi.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://meshidokoro-harunohi.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/meshidokoro-harunohi.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/meshidokoro-harunohi.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://meshidokoro-harunohi.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/meshidokoro-harunohi-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/meshidokoro-harunohi-mobile.txt` に保存

---

### 57. 春日市花田歯科医院 春日院

**URL**: https://hanada-dental.net/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://hanada-dental.net/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/hanada-dental-kasuga.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/hanada-dental-kasuga.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://hanada-dental.net/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/hanada-dental-kasuga-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/hanada-dental-kasuga-mobile.txt` に保存

---

### 58. 肉のひみつ基地

**URL**: https://29kichi.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://29kichi.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/29kichi.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/29kichi.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://29kichi.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/29kichi-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/29kichi-mobile.txt` に保存

---

### 59. 若松区若戸整骨院

**URL**: https://wakato-seikotsuin.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://wakato-seikotsuin.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/wakato-seikotsuin.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/wakato-seikotsuin.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://wakato-seikotsuin.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/wakato-seikotsuin-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/wakato-seikotsuin-mobile.txt` に保存

---

### 60. 若松区昇真s'ダイニング我笑

**URL**: https://dining-gaya.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://dining-gaya.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/dining-gaya.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/dining-gaya.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://dining-gaya.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/dining-gaya-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/dining-gaya-mobile.txt` に保存

---

### 61. 株式会社Gスタイル熊本

**URL**: https://g-style111.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://g-style111.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/gstyle-kumamoto.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/gstyle-kumamoto.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://g-style111.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/gstyle-kumamoto-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/gstyle-kumamoto-mobile.txt` に保存

---

### 62. 株式会社野口建設

**URL**: https://noguchi-kensetu.co.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://noguchi-kensetu.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/noguchi-kensetu.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/noguchi-kensetu.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://noguchi-kensetu.co.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/noguchi-kensetu-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/noguchi-kensetu-mobile.txt` に保存

---

### 63. 株式会社yach

**URL**: https://yach-film.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://yach-film.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/yach-film.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/yach-film.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://yach-film.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/yach-film-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/yach-film-mobile.txt` に保存

---

### 64. 株式会社FSK

**URL**: https://fsk-clean.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://fsk-clean.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/fsk-clean.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/fsk-clean.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://fsk-clean.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/fsk-clean-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/fsk-clean-mobile.txt` に保存

---

### 65. Ballet Ecrin-エクラン-

**URL**: https://ecrin-ballet.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://ecrin-ballet.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/ecrin-ballet.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/ecrin-ballet.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://ecrin-ballet.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/ecrin-ballet-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/ecrin-ballet-mobile.txt` に保存

---

### 66. SMART×SMART

**URL**: https://s-m-a-r-t.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://s-m-a-r-t.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/s-m-a-r-t.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/s-m-a-r-t.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://s-m-a-r-t.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/s-m-a-r-t-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/s-m-a-r-t-mobile.txt` に保存

---

### 67. すいれん法律事務所

**URL**: https://suiren-law.net/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://suiren-law.net/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/suiren-law.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/suiren-law.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://suiren-law.net/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/suiren-law-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/suiren-law-mobile.txt` に保存

---

### 68. 八幡東区医療法人田原整形外科医院

**URL**: https://tahara-seikeigeka.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://tahara-seikeigeka.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/tahara-seikeigeka.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/tahara-seikeigeka.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://tahara-seikeigeka.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/tahara-seikeigeka-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/tahara-seikeigeka-mobile.txt` に保存

---

### 69. 春日市オスカー整骨院 春日院

**URL**: https://oscar-japan.co.jp/kasuga/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://oscar-japan.co.jp/kasuga/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/oscar-seikotsu-kasuga.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/oscar-seikotsu-kasuga.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://oscar-japan.co.jp/kasuga/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/oscar-seikotsu-kasuga-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/oscar-seikotsu-kasuga-mobile.txt` に保存

---

### 70. 八幡東区デイサービスセンターたはら

**URL**: https://tahara-dayservice.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://tahara-dayservice.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/tahara-dayservice.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/tahara-dayservice.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://tahara-dayservice.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/tahara-dayservice-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/tahara-dayservice-mobile.txt` に保存

---

### 71. 八幡東区メディカルセンタースマート

**URL**: https://tahara-smart.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://tahara-smart.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/tahara-smart.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/tahara-smart.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://tahara-smart.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/tahara-smart-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/tahara-smart-mobile.txt` に保存

---

### 72. 小倉南区やす鍼灸整骨院

**URL**: https://yasu-shinkyuseikotsuin.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://yasu-shinkyuseikotsuin.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/yasu-shinkyuseikotsuin.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/yasu-shinkyuseikotsuin.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://yasu-shinkyuseikotsuin.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/yasu-shinkyuseikotsuin-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/yasu-shinkyuseikotsuin-mobile.txt` に保存

---

### 73. 日置市大工の内野

**URL**: https://kagoshima-daiku.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kagoshima-daiku.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kagoshima-daiku.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kagoshima-daiku.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kagoshima-daiku.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kagoshima-daiku-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kagoshima-daiku-mobile.txt` に保存

---

### 74. 筑紫野市オスカー整骨院 二日市院

**URL**: https://oscar-japan.co.jp/futsukaichi/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://oscar-japan.co.jp/futsukaichi/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/oscar-seikotsu-futsukaichi.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/oscar-seikotsu-futsukaichi.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://oscar-japan.co.jp/futsukaichi/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/oscar-seikotsu-futsukaichi-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/oscar-seikotsu-futsukaichi-mobile.txt` に保存

---

### 75. 株式会社後藤純志建築設計事務所

**URL**: https://goto-sekkei.net/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://goto-sekkei.net/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/goto-sekkei.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/goto-sekkei.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://goto-sekkei.net/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/goto-sekkei-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/goto-sekkei-mobile.txt` に保存

---

### 76. 宇佐市株式会社いもとや

**URL**: http://www.imotoya.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `http://www.imotoya.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/imotoya.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/imotoya.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `http://www.imotoya.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/imotoya-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/imotoya-mobile.txt` に保存

---

### 77. 早良区オスカー整骨院 飯倉院

**URL**: https://oscar-japan.co.jp/iikura/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://oscar-japan.co.jp/iikura/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/oscar-seikotsu-iikura.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/oscar-seikotsu-iikura.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://oscar-japan.co.jp/iikura/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/oscar-seikotsu-iikura-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/oscar-seikotsu-iikura-mobile.txt` に保存

---

### 78. 城南区株式会社グランムート

**URL**: https://grandmut.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://grandmut.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/grandmut.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/grandmut.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://grandmut.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/grandmut-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/grandmut-mobile.txt` に保存

---

### 79. 株式会社ティーエムシー

**URL**: https://www.tmc-fudousan.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://www.tmc-fudousan.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/tmc-fudousan.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/tmc-fudousan.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://www.tmc-fudousan.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/tmc-fudousan-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/tmc-fudousan-mobile.txt` に保存

---

### 80. 小倉北区勝しんきゅう整骨院

**URL**: https://katsushin516.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://katsushin516.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/katsushin516.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/katsushin516.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://katsushin516.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/katsushin516-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/katsushin516-mobile.txt` に保存

---

### 81. 熊本市東区熊本レンタカー

**URL**: https://g-style111.jp/kumamoto-rentacar/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://g-style111.jp/kumamoto-rentacar/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kumamoto-rentacar.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kumamoto-rentacar.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://g-style111.jp/kumamoto-rentacar/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kumamoto-rentacar-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kumamoto-rentacar-mobile.txt` に保存

---

### 82. 宗像市九蘭会

**URL**: https://kyurankai.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kyurankai.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kyurankai.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kyurankai.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kyurankai.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kyurankai-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kyurankai-mobile.txt` に保存

---

### 83. 城南区株式会社店創ニュートン

**URL**: http://dnote-office.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `http://dnote-office.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/dnote-office.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/dnote-office.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `http://dnote-office.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/dnote-office-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/dnote-office-mobile.txt` に保存

---

### 84. 八幡東区SMART×SMART LP

**URL**: https://restart-diet.s-m-a-r-t.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://restart-diet.s-m-a-r-t.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/restart-diet.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/restart-diet.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://restart-diet.s-m-a-r-t.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/restart-diet-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/restart-diet-mobile.txt` に保存

---

### 85. 八幡西区一般社団法人北九州法面防災協会

**URL**: https://kitakyushu-norimen.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kitakyushu-norimen.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kitakyushu-norimen.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kitakyushu-norimen.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `https://kitakyushu-norimen.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/kitakyushu-norimen-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/kitakyushu-norimen-mobile.txt` に保存

---

### 86. 春日市株式会社ブリッジ・カンパニー

**URL**: http://bridge-company.net/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `http://bridge-company.net/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/bridge-company.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/bridge-company.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `http://bridge-company.net/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/bridge-company-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/bridge-company-mobile.txt` に保存

---

### 87. 博多区博多祇園メンタルクリニック

**URL**: http://gionmental.jp/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `http://gionmental.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/gionmental.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/gionmental.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `http://gionmental.jp/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/gionmental-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/gionmental-mobile.txt` に保存

---

### 88. 太宰府市吉塚歯科医院

**URL**: http://yoshizuka-dental-office.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `http://yoshizuka-dental-office.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/yoshizuka-dental-office.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/yoshizuka-dental-office.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `http://yoshizuka-dental-office.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/yoshizuka-dental-office-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/yoshizuka-dental-office-mobile.txt` に保存

---

### 89. 飯塚市花元建設

**URL**: http://hanamotokensetsu.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `http://hanamotokensetsu.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/hanamotokensetsu.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/hanamotokensetsu.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `http://hanamotokensetsu.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/hanamotokensetsu-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/hanamotokensetsu-mobile.txt` に保存

---

### 90. 中津市Mono工房・自由設計

**URL**: http://mono-house.com/

#### デスクトップ版（1920x1080）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `http://mono-house.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 1920, height: 1080`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/mono-house.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/mono-house.txt` に保存

#### モバイル版（375x812 - iPhone X サイズ）
1. `mcp__chrome-devtools__navigate_page` でページを開く: `http://mono-house.com/`
2. `mcp__chrome-devtools__resize_page` で画面サイズを設定: `width: 375, height: 812`
3. 3秒待機（ページの読み込み完了を待つ）
4. `mcp__chrome-devtools__take_screenshot` でスクリーンショット撮影:
   - `fullPage: true`
   - `filePath: "./analysis/screenshots/mono-house-mobile.png"`
5. `mcp__chrome-devtools__take_snapshot` でDOMスナップショット取得
   - 出力を `./analysis/snapshots/mono-house-mobile.txt` に保存

---

## 注意事項

1. **必ず各サイトでデスクトップ版とモバイル版の両方を収集してください**
2. 画面サイズ変更後は必ず3秒待機してレイアウトが安定するのを待ってください
3. スクリーンショットは必ず `fullPage: true` で全体を撮影してください
4. スナップショットの出力は必ずファイルに保存してください
5. エラーが発生した場合は次のサイトに進んでください

## 期待される出力ファイル

analysis/screenshots/ ディレクトリ:
- ooi-hoikuen.png (デスクトップ版)
- ooi-hoikuen-mobile.png (モバイル版)
- hitotonari.png (デスクトップ版)
- hitotonari-mobile.png (モバイル版)
- harachuou-hoikuen.png (デスクトップ版)
- harachuou-hoikuen-mobile.png (モバイル版)
- motoki-ortho.png (デスクトップ版)
- motoki-ortho-mobile.png (モバイル版)
- magokoro-hoikuen.png (デスクトップ版)
- magokoro-hoikuen-mobile.png (モバイル版)
- kumamotokuukou-rentacar.png (デスクトップ版)
- kumamotokuukou-rentacar-mobile.png (モバイル版)
- kukomae-hoikuen.png (デスクトップ版)
- kukomae-hoikuen-mobile.png (モバイル版)
- motoki-implant.png (デスクトップ版)
- motoki-implant-mobile.png (モバイル版)
- kks-wadatsumi.png (デスクトップ版)
- kks-wadatsumi-mobile.png (モバイル版)
- yasuki-group.png (デスクトップ版)
- yasuki-group-mobile.png (モバイル版)
- motoki-dental-prevention.png (デスクトップ版)
- motoki-dental-prevention-mobile.png (モバイル版)
- food-ch.png (デスクトップ版)
- food-ch-mobile.png (モバイル版)
- daimyojin.png (デスクトップ版)
- daimyojin-mobile.png (モバイル版)
- en-corporation.png (デスクトップ版)
- en-corporation-mobile.png (モバイル版)
- minata.png (デスクトップ版)
- minata-mobile.png (モバイル版)
- harada-dentalclinic.png (デスクトップ版)
- harada-dentalclinic-mobile.png (モバイル版)
- suemune.png (デスクトップ版)
- suemune-mobile.png (モバイル版)
- tictax.png (デスクトップ版)
- tictax-mobile.png (モバイル版)
- kurodakenchiku.png (デスクトップ版)
- kurodakenchiku-mobile.png (モバイル版)
- you-sleepclinic.png (デスクトップ版)
- you-sleepclinic-mobile.png (モバイル版)
- yokayone.png (デスクトップ版)
- yokayone-mobile.png (モバイル版)
- sanshou340.png (デスクトップ版)
- sanshou340-mobile.png (モバイル版)
- tsuji-clinic.png (デスクトップ版)
- tsuji-clinic-mobile.png (モバイル版)
- yuuwa-consulting.png (デスクトップ版)
- yuuwa-consulting-mobile.png (モバイル版)
- hanogumi.png (デスクトップ版)
- hanogumi-mobile.png (モバイル版)
- connecthome.png (デスクトップ版)
- connecthome-mobile.png (モバイル版)
- motoki-dental.png (デスクトップ版)
- motoki-dental-mobile.png (モバイル版)
- s-care-cl-kokura.png (デスクトップ版)
- s-care-cl-kokura-mobile.png (モバイル版)
- kuramatsu.png (デスクトップ版)
- kuramatsu-mobile.png (モバイル版)
- oscar-seikotsu-ropponmatsu.png (デスクトップ版)
- oscar-seikotsu-ropponmatsu-mobile.png (モバイル版)
- sato-mokuzai.png (デスクトップ版)
- sato-mokuzai-mobile.png (モバイル版)
- powerup-rentacar.png (デスクトップ版)
- powerup-rentacar-mobile.png (モバイル版)
- mikunikensetsu.png (デスクトップ版)
- mikunikensetsu-mobile.png (モバイル版)
- nishitoku.png (デスクトップ版)
- nishitoku-mobile.png (モバイル版)
- repeater.png (デスクトップ版)
- repeater-mobile.png (モバイル版)
- nissho-bt.png (デスクトップ版)
- nissho-bt-mobile.png (モバイル版)
- fsk-kumamoto.png (デスクトップ版)
- fsk-kumamoto-mobile.png (モバイル版)
- mystudy-kyushu.png (デスクトップ版)
- mystudy-kyushu-mobile.png (モバイル版)
- firstpack.png (デスクトップ版)
- firstpack-mobile.png (モバイル版)
- hattori-d.png (デスクトップ版)
- hattori-d-mobile.png (モバイル版)
- sumibiyaki-roku.png (デスクトップ版)
- sumibiyaki-roku-mobile.png (モバイル版)
- umehara-cc.png (デスクトップ版)
- umehara-cc-mobile.png (モバイル版)
- takemi-cons.png (デスクトップ版)
- takemi-cons-mobile.png (モバイル版)
- sakura-isshin.png (デスクトップ版)
- sakura-isshin-mobile.png (モバイル版)
- centry.png (デスクトップ版)
- centry-mobile.png (モバイル版)
- oscar-seikotsu-shime.png (デスクトップ版)
- oscar-seikotsu-shime-mobile.png (モバイル版)
- hanada-dental-maidashi.png (デスクトップ版)
- hanada-dental-maidashi-mobile.png (モバイル版)
- irodori-honpo.png (デスクトップ版)
- irodori-honpo-mobile.png (モバイル版)
- sal-1996.png (デスクトップ版)
- sal-1996-mobile.png (モバイル版)
- nishijima-paint.png (デスクトップ版)
- nishijima-paint-mobile.png (モバイル版)
- yone-seikotsuin.png (デスクトップ版)
- yone-seikotsuin-mobile.png (モバイル版)
- kowakensou.png (デスクトップ版)
- kowakensou-mobile.png (モバイル版)
- recruit-oscar-japan.png (デスクトップ版)
- recruit-oscar-japan-mobile.png (モバイル版)
- oscar-japan.png (デスクトップ版)
- oscar-japan-mobile.png (モバイル版)
- oscar-seikotsuin-kurume.png (デスクトップ版)
- oscar-seikotsuin-kurume-mobile.png (モバイル版)
- meshidokoro-harunohi.png (デスクトップ版)
- meshidokoro-harunohi-mobile.png (モバイル版)
- hanada-dental-kasuga.png (デスクトップ版)
- hanada-dental-kasuga-mobile.png (モバイル版)
- 29kichi.png (デスクトップ版)
- 29kichi-mobile.png (モバイル版)
- wakato-seikotsuin.png (デスクトップ版)
- wakato-seikotsuin-mobile.png (モバイル版)
- dining-gaya.png (デスクトップ版)
- dining-gaya-mobile.png (モバイル版)
- gstyle-kumamoto.png (デスクトップ版)
- gstyle-kumamoto-mobile.png (モバイル版)
- noguchi-kensetu.png (デスクトップ版)
- noguchi-kensetu-mobile.png (モバイル版)
- yach-film.png (デスクトップ版)
- yach-film-mobile.png (モバイル版)
- fsk-clean.png (デスクトップ版)
- fsk-clean-mobile.png (モバイル版)
- ecrin-ballet.png (デスクトップ版)
- ecrin-ballet-mobile.png (モバイル版)
- s-m-a-r-t.png (デスクトップ版)
- s-m-a-r-t-mobile.png (モバイル版)
- suiren-law.png (デスクトップ版)
- suiren-law-mobile.png (モバイル版)
- tahara-seikeigeka.png (デスクトップ版)
- tahara-seikeigeka-mobile.png (モバイル版)
- oscar-seikotsu-kasuga.png (デスクトップ版)
- oscar-seikotsu-kasuga-mobile.png (モバイル版)
- tahara-dayservice.png (デスクトップ版)
- tahara-dayservice-mobile.png (モバイル版)
- tahara-smart.png (デスクトップ版)
- tahara-smart-mobile.png (モバイル版)
- yasu-shinkyuseikotsuin.png (デスクトップ版)
- yasu-shinkyuseikotsuin-mobile.png (モバイル版)
- kagoshima-daiku.png (デスクトップ版)
- kagoshima-daiku-mobile.png (モバイル版)
- oscar-seikotsu-futsukaichi.png (デスクトップ版)
- oscar-seikotsu-futsukaichi-mobile.png (モバイル版)
- goto-sekkei.png (デスクトップ版)
- goto-sekkei-mobile.png (モバイル版)
- imotoya.png (デスクトップ版)
- imotoya-mobile.png (モバイル版)
- oscar-seikotsu-iikura.png (デスクトップ版)
- oscar-seikotsu-iikura-mobile.png (モバイル版)
- grandmut.png (デスクトップ版)
- grandmut-mobile.png (モバイル版)
- tmc-fudousan.png (デスクトップ版)
- tmc-fudousan-mobile.png (モバイル版)
- katsushin516.png (デスクトップ版)
- katsushin516-mobile.png (モバイル版)
- kumamoto-rentacar.png (デスクトップ版)
- kumamoto-rentacar-mobile.png (モバイル版)
- kyurankai.png (デスクトップ版)
- kyurankai-mobile.png (モバイル版)
- dnote-office.png (デスクトップ版)
- dnote-office-mobile.png (モバイル版)
- restart-diet.png (デスクトップ版)
- restart-diet-mobile.png (モバイル版)
- kitakyushu-norimen.png (デスクトップ版)
- kitakyushu-norimen-mobile.png (モバイル版)
- bridge-company.png (デスクトップ版)
- bridge-company-mobile.png (モバイル版)
- gionmental.png (デスクトップ版)
- gionmental-mobile.png (モバイル版)
- yoshizuka-dental-office.png (デスクトップ版)
- yoshizuka-dental-office-mobile.png (モバイル版)
- hanamotokensetsu.png (デスクトップ版)
- hanamotokensetsu-mobile.png (モバイル版)
- mono-house.png (デスクトップ版)
- mono-house-mobile.png (モバイル版)

analysis/snapshots/ ディレクトリ:
- ooi-hoikuen.txt (デスクトップ版)
- ooi-hoikuen-mobile.txt (モバイル版)
- hitotonari.txt (デスクトップ版)
- hitotonari-mobile.txt (モバイル版)
- harachuou-hoikuen.txt (デスクトップ版)
- harachuou-hoikuen-mobile.txt (モバイル版)
- motoki-ortho.txt (デスクトップ版)
- motoki-ortho-mobile.txt (モバイル版)
- magokoro-hoikuen.txt (デスクトップ版)
- magokoro-hoikuen-mobile.txt (モバイル版)
- kumamotokuukou-rentacar.txt (デスクトップ版)
- kumamotokuukou-rentacar-mobile.txt (モバイル版)
- kukomae-hoikuen.txt (デスクトップ版)
- kukomae-hoikuen-mobile.txt (モバイル版)
- motoki-implant.txt (デスクトップ版)
- motoki-implant-mobile.txt (モバイル版)
- kks-wadatsumi.txt (デスクトップ版)
- kks-wadatsumi-mobile.txt (モバイル版)
- yasuki-group.txt (デスクトップ版)
- yasuki-group-mobile.txt (モバイル版)
- motoki-dental-prevention.txt (デスクトップ版)
- motoki-dental-prevention-mobile.txt (モバイル版)
- food-ch.txt (デスクトップ版)
- food-ch-mobile.txt (モバイル版)
- daimyojin.txt (デスクトップ版)
- daimyojin-mobile.txt (モバイル版)
- en-corporation.txt (デスクトップ版)
- en-corporation-mobile.txt (モバイル版)
- minata.txt (デスクトップ版)
- minata-mobile.txt (モバイル版)
- harada-dentalclinic.txt (デスクトップ版)
- harada-dentalclinic-mobile.txt (モバイル版)
- suemune.txt (デスクトップ版)
- suemune-mobile.txt (モバイル版)
- tictax.txt (デスクトップ版)
- tictax-mobile.txt (モバイル版)
- kurodakenchiku.txt (デスクトップ版)
- kurodakenchiku-mobile.txt (モバイル版)
- you-sleepclinic.txt (デスクトップ版)
- you-sleepclinic-mobile.txt (モバイル版)
- yokayone.txt (デスクトップ版)
- yokayone-mobile.txt (モバイル版)
- sanshou340.txt (デスクトップ版)
- sanshou340-mobile.txt (モバイル版)
- tsuji-clinic.txt (デスクトップ版)
- tsuji-clinic-mobile.txt (モバイル版)
- yuuwa-consulting.txt (デスクトップ版)
- yuuwa-consulting-mobile.txt (モバイル版)
- hanogumi.txt (デスクトップ版)
- hanogumi-mobile.txt (モバイル版)
- connecthome.txt (デスクトップ版)
- connecthome-mobile.txt (モバイル版)
- motoki-dental.txt (デスクトップ版)
- motoki-dental-mobile.txt (モバイル版)
- s-care-cl-kokura.txt (デスクトップ版)
- s-care-cl-kokura-mobile.txt (モバイル版)
- kuramatsu.txt (デスクトップ版)
- kuramatsu-mobile.txt (モバイル版)
- oscar-seikotsu-ropponmatsu.txt (デスクトップ版)
- oscar-seikotsu-ropponmatsu-mobile.txt (モバイル版)
- sato-mokuzai.txt (デスクトップ版)
- sato-mokuzai-mobile.txt (モバイル版)
- powerup-rentacar.txt (デスクトップ版)
- powerup-rentacar-mobile.txt (モバイル版)
- mikunikensetsu.txt (デスクトップ版)
- mikunikensetsu-mobile.txt (モバイル版)
- nishitoku.txt (デスクトップ版)
- nishitoku-mobile.txt (モバイル版)
- repeater.txt (デスクトップ版)
- repeater-mobile.txt (モバイル版)
- nissho-bt.txt (デスクトップ版)
- nissho-bt-mobile.txt (モバイル版)
- fsk-kumamoto.txt (デスクトップ版)
- fsk-kumamoto-mobile.txt (モバイル版)
- mystudy-kyushu.txt (デスクトップ版)
- mystudy-kyushu-mobile.txt (モバイル版)
- firstpack.txt (デスクトップ版)
- firstpack-mobile.txt (モバイル版)
- hattori-d.txt (デスクトップ版)
- hattori-d-mobile.txt (モバイル版)
- sumibiyaki-roku.txt (デスクトップ版)
- sumibiyaki-roku-mobile.txt (モバイル版)
- umehara-cc.txt (デスクトップ版)
- umehara-cc-mobile.txt (モバイル版)
- takemi-cons.txt (デスクトップ版)
- takemi-cons-mobile.txt (モバイル版)
- sakura-isshin.txt (デスクトップ版)
- sakura-isshin-mobile.txt (モバイル版)
- centry.txt (デスクトップ版)
- centry-mobile.txt (モバイル版)
- oscar-seikotsu-shime.txt (デスクトップ版)
- oscar-seikotsu-shime-mobile.txt (モバイル版)
- hanada-dental-maidashi.txt (デスクトップ版)
- hanada-dental-maidashi-mobile.txt (モバイル版)
- irodori-honpo.txt (デスクトップ版)
- irodori-honpo-mobile.txt (モバイル版)
- sal-1996.txt (デスクトップ版)
- sal-1996-mobile.txt (モバイル版)
- nishijima-paint.txt (デスクトップ版)
- nishijima-paint-mobile.txt (モバイル版)
- yone-seikotsuin.txt (デスクトップ版)
- yone-seikotsuin-mobile.txt (モバイル版)
- kowakensou.txt (デスクトップ版)
- kowakensou-mobile.txt (モバイル版)
- recruit-oscar-japan.txt (デスクトップ版)
- recruit-oscar-japan-mobile.txt (モバイル版)
- oscar-japan.txt (デスクトップ版)
- oscar-japan-mobile.txt (モバイル版)
- oscar-seikotsuin-kurume.txt (デスクトップ版)
- oscar-seikotsuin-kurume-mobile.txt (モバイル版)
- meshidokoro-harunohi.txt (デスクトップ版)
- meshidokoro-harunohi-mobile.txt (モバイル版)
- hanada-dental-kasuga.txt (デスクトップ版)
- hanada-dental-kasuga-mobile.txt (モバイル版)
- 29kichi.txt (デスクトップ版)
- 29kichi-mobile.txt (モバイル版)
- wakato-seikotsuin.txt (デスクトップ版)
- wakato-seikotsuin-mobile.txt (モバイル版)
- dining-gaya.txt (デスクトップ版)
- dining-gaya-mobile.txt (モバイル版)
- gstyle-kumamoto.txt (デスクトップ版)
- gstyle-kumamoto-mobile.txt (モバイル版)
- noguchi-kensetu.txt (デスクトップ版)
- noguchi-kensetu-mobile.txt (モバイル版)
- yach-film.txt (デスクトップ版)
- yach-film-mobile.txt (モバイル版)
- fsk-clean.txt (デスクトップ版)
- fsk-clean-mobile.txt (モバイル版)
- ecrin-ballet.txt (デスクトップ版)
- ecrin-ballet-mobile.txt (モバイル版)
- s-m-a-r-t.txt (デスクトップ版)
- s-m-a-r-t-mobile.txt (モバイル版)
- suiren-law.txt (デスクトップ版)
- suiren-law-mobile.txt (モバイル版)
- tahara-seikeigeka.txt (デスクトップ版)
- tahara-seikeigeka-mobile.txt (モバイル版)
- oscar-seikotsu-kasuga.txt (デスクトップ版)
- oscar-seikotsu-kasuga-mobile.txt (モバイル版)
- tahara-dayservice.txt (デスクトップ版)
- tahara-dayservice-mobile.txt (モバイル版)
- tahara-smart.txt (デスクトップ版)
- tahara-smart-mobile.txt (モバイル版)
- yasu-shinkyuseikotsuin.txt (デスクトップ版)
- yasu-shinkyuseikotsuin-mobile.txt (モバイル版)
- kagoshima-daiku.txt (デスクトップ版)
- kagoshima-daiku-mobile.txt (モバイル版)
- oscar-seikotsu-futsukaichi.txt (デスクトップ版)
- oscar-seikotsu-futsukaichi-mobile.txt (モバイル版)
- goto-sekkei.txt (デスクトップ版)
- goto-sekkei-mobile.txt (モバイル版)
- imotoya.txt (デスクトップ版)
- imotoya-mobile.txt (モバイル版)
- oscar-seikotsu-iikura.txt (デスクトップ版)
- oscar-seikotsu-iikura-mobile.txt (モバイル版)
- grandmut.txt (デスクトップ版)
- grandmut-mobile.txt (モバイル版)
- tmc-fudousan.txt (デスクトップ版)
- tmc-fudousan-mobile.txt (モバイル版)
- katsushin516.txt (デスクトップ版)
- katsushin516-mobile.txt (モバイル版)
- kumamoto-rentacar.txt (デスクトップ版)
- kumamoto-rentacar-mobile.txt (モバイル版)
- kyurankai.txt (デスクトップ版)
- kyurankai-mobile.txt (モバイル版)
- dnote-office.txt (デスクトップ版)
- dnote-office-mobile.txt (モバイル版)
- restart-diet.txt (デスクトップ版)
- restart-diet-mobile.txt (モバイル版)
- kitakyushu-norimen.txt (デスクトップ版)
- kitakyushu-norimen-mobile.txt (モバイル版)
- bridge-company.txt (デスクトップ版)
- bridge-company-mobile.txt (モバイル版)
- gionmental.txt (デスクトップ版)
- gionmental-mobile.txt (モバイル版)
- yoshizuka-dental-office.txt (デスクトップ版)
- yoshizuka-dental-office-mobile.txt (モバイル版)
- hanamotokensetsu.txt (デスクトップ版)
- hanamotokensetsu-mobile.txt (モバイル版)
- mono-house.txt (デスクトップ版)
- mono-house-mobile.txt (モバイル版)

合計: 180 枚のスクリーンショット、180 個のスナップショット

## 開始

上記の手順に従って、今すぐデータ収集を開始してください。

