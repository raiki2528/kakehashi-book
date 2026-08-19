# 架け橋ブック ウェブサイト

## ファイル

| ファイル | 内容 |
|---------|------|
| `index.html` | トップページ（LP） |
| `story.html` | 創業の思い |
| `flow.html` | ご利用の流れ（詳細） |
| `contact.html` | 無料相談（Calendly）・問い合わせ（Tally） |
| `apply.html` | 正式申込（Tally） |
| `styles.css` | 共通スタイル |
| `config.js` | 外部サービスURL（要設定） |
| `main.js` | ナビ・フォーム埋め込み |

## ローカルでプレビュー

```bash
cd site
npm install   # 初回のみ
npm run dev
```

ブラウザで http://localhost:8080 を開く。

（Python でも可: `python3 -m http.server 8080`）

## Tally・Calendly の接続

`config.js` を編集：

```javascript
window.KAKEHASHI_CONFIG = {
  calendlyUrl: 'https://calendly.com/あなたのURL',
  tallyInquiryUrl: 'https://tally.so/r/問い合わせ',
  tallyApplyUrl: 'https://tally.so/r/申込',
};
```

URL を設定すると `contact.html` / `apply.html` に自動埋め込みされます。未設定時はプレースホルダーが表示されます。

## 構成ドキュメント

`docs/03-resources/サイト構成_下書き.md` — 文案・設計の元ネタ
