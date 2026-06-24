const sharp = require('sharp');
const path = require('path');

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff5f9"/>
      <stop offset="55%" stop-color="#fdf4ff"/>
      <stop offset="100%" stop-color="#f0f4ff"/>
    </linearGradient>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#db2777"/>
      <stop offset="100%" stop-color="#9333ea"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- eyebrow pill -->
  <rect x="80" y="100" width="260" height="48" rx="24" fill="#f3e8ff"/>
  <text x="210" y="132" font-family="sans-serif" font-size="22" font-weight="700" fill="#7c3aed" text-anchor="middle">✨ MBTI 割合診断</text>

  <!-- headline -->
  <text x="80" y="260" font-family="sans-serif" font-size="72" font-weight="900" fill="#1e1533">あなたの個性を</text>
  <text x="80" y="345" font-family="sans-serif" font-size="72" font-weight="900" fill="url(#grad)">割合で診断しよう</text>

  <!-- subtext -->
  <text x="80" y="410" font-family="sans-serif" font-size="28" fill="#6b5b7b">INFJ 45% / ENFJ 26% / ...のように細かく可視化</text>

  <!-- bars mock -->
  <g>
    <rect x="780" y="160" width="340" height="26" rx="13" fill="#f3e8ff"/>
    <rect x="780" y="160" width="290" height="26" rx="13" fill="#059669"/>
    <text x="1120" y="178" font-family="sans-serif" font-size="20" fill="#a89db8" text-anchor="end">INFJ 45%</text>

    <rect x="780" y="210" width="340" height="26" rx="13" fill="#f3e8ff"/>
    <rect x="780" y="210" width="190" height="26" rx="13" fill="#059669"/>
    <text x="1120" y="228" font-family="sans-serif" font-size="20" fill="#a89db8" text-anchor="end">ENFJ 26%</text>

    <rect x="780" y="260" width="340" height="26" rx="13" fill="#f3e8ff"/>
    <rect x="780" y="260" width="70" height="26" rx="13" fill="#7c3aed"/>
    <text x="1120" y="278" font-family="sans-serif" font-size="20" fill="#a89db8" text-anchor="end">INTJ 7%</text>
  </g>

  <!-- footer -->
  <text x="80" y="560" font-family="sans-serif" font-size="24" fill="#a89db8">32問・約5分で診断 🌸</text>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(__dirname, '..', 'og-image.png'))
  .then(() => console.log('og-image.png created'))
  .catch(err => { console.error(err); process.exit(1); });
