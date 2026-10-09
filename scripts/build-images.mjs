import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
const out = 'public/assets';
mkdirSync(out, { recursive: true });
const source = out + '/aneesh-portrait.jpeg';
for (const width of [420, 720, 1100]) {
  await sharp(source).rotate().resize({ width }).webp({ quality: 86 })
    .toFile(out + '/portrait-' + width + '.webp');
}
console.log('Aneesh portrait sizes generated.');
