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
  <text x="210" y="132" font-family="sans-serif" font-size="22" font-weight="700" fill="#7c3aed" text-anchor="middle">✨ MBTI 性格ブレンド診断</text>

  <!-- headline -->
  <text x="80" y="260" font-family="sans-serif" font-size="72" font-weight="900" fill="#1e1533">あなたの性格は</text>
  <text x="80" y="345" font-family="sans-serif" font-size="72" font-weight="900" fill="url(#grad)">2タイプのブレンド</text>

  <!-- subtext -->
  <text x="80" y="410" font-family="sans-serif" font-size="28" fill="#6b5b7b">「静かな夢想家」のような、あなただけの名前で診断</text>

  <!-- blend bar mock: INFJ 64.2% / ENFP 35.8%, widths exactly proportional -->
  <g>
    <text x="780" y="150" font-family="sans-serif" font-size="26" font-weight="900" fill="#7c3aed" text-anchor="middle">「静かな夢想家」</text>
    <rect x="700" y="180" width="500" height="36" rx="10" fill="#f3e8ff"/>
    <rect x="700" y="180" width="321" height="36" rx="10" fill="#db2777"/>
    <rect x="1021" y="180" width="179" height="36" rx="10" fill="#7c3aed"/>
    <text x="710" y="205" font-family="sans-serif" font-size="18" font-weight="700" fill="#fff">INFJ 64.2%</text>
    <text x="1190" y="205" font-family="sans-serif" font-size="18" font-weight="700" fill="#fff" text-anchor="end">35.8% ENFP</text>
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
