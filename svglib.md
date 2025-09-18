# SVG Library for Gaia LLC Concepts

以下は各パターンで使用している主なSVGの構造メモです。再利用や調整時の参考にしてください。

## グラデーション基本形
```svg
<defs>
  <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#0f62fe" stop-opacity="0.8" />
    <stop offset="100%" stop-color="#61a6ff" stop-opacity="0.4" />
  </linearGradient>
</defs>
```

## ネットワークノード
```svg
<g stroke="#0f62fe" stroke-width="1.5" fill="none">
  <path d="M40 120l60-70 40 35 50-55" />
</g>
<g fill="#0f62fe">
  <circle cx="40" cy="120" r="6" />
  <circle cx="100" cy="50" r="5" />
</g>
```

## 光彩とネビュラ
```svg
<defs>
  <radialGradient id="nebula" cx="50%" cy="50%" r="70%">
    <stop offset="0%" stop-color="rgba(150, 205, 255, 0.9)" />
    <stop offset="70%" stop-color="rgba(49, 69, 180, 0.2)" />
  </radialGradient>
</defs>
<circle cx="160" cy="100" r="120" fill="url(#nebula)" />
```

## Boldヒーローの多角形
```svg
<g fill="url(#hero3Gradient)" opacity="0.85">
  <polygon points="80,260 120,180 160,260" />
  <polygon points="180,260 230,190 260,260" />
</g>
```
