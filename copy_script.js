import fs from 'fs';
import path from 'path';

const srcPath = path.join(process.cwd(), 'src', 'main.js');
const destDir = path.join(process.cwd(), 'dist', 'src');
const destPath = path.join(destDir, 'main.js');

if (fs.existsSync(srcPath)) {
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(srcPath, destPath);
  console.log(`Copied ${srcPath} to ${destPath}`);
} else {
  console.error(`Source file not found: ${srcPath}`);
}
