import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC_DIR = './public';
const QUALITY = 80;

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    console.log(`Converted: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const entries = await readdir(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stats = await stat(fullPath);

    if (stats.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = extname(entry).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const name = basename(entry, ext);
        const outputPath = join(dir, `${name}.webp`);
        await convertToWebP(fullPath, outputPath);
      }
    }
  }
}

console.log('Converting images to WebP...\n');
processDirectory(PUBLIC_DIR)
  .then(() => console.log('\nConversion complete!'))
  .catch(console.error);
