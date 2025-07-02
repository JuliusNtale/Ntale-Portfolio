import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImages() {
  const publicDir = path.join(__dirname, '..', 'public');
  const outputDir = path.join(publicDir, 'optimized');
  
  // Create optimized directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  console.log('🖼️  Starting image optimization with Sharp...');
  
  // Images to optimize
  const images = [
    { name: 'Julius.png', quality: 75, width: 800 },
    { name: 'ntale.png', quality: 75, width: 600 },
    { name: 'favicon.png', quality: 90, width: 192 }
  ];

  let totalBefore = 0;
  let totalAfter = 0;

  console.log('📊 Optimization Results:');
  console.log('========================');

  for (const img of images) {
    const inputPath = path.join(publicDir, img.name);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  ${img.name} not found, skipping...`);
      continue;
    }

    const beforeSize = fs.statSync(inputPath).size;
    const beforeKB = (beforeSize / 1024).toFixed(2);
    
    const baseName = path.parse(img.name).name;
    
    // Create WebP version (best compression)
    const webpPath = path.join(outputDir, `${baseName}.webp`);
    await sharp(inputPath)
      .resize(img.width, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: img.quality, effort: 6 })
      .toFile(webpPath);

    // Create optimized PNG version (fallback)
    const pngPath = path.join(outputDir, `${baseName}.png`);
    await sharp(inputPath)
      .resize(img.width, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .png({ quality: img.quality, compressionLevel: 9 })
      .toFile(pngPath);

    // Get optimized sizes
    const webpSize = fs.statSync(webpPath).size;
    const pngSize = fs.statSync(pngPath).size;
    
    const webpKB = (webpSize / 1024).toFixed(2);
    const pngKB = (pngSize / 1024).toFixed(2);
    
    const webpSavings = ((beforeSize - webpSize) / beforeSize * 100).toFixed(1);
    const pngSavings = ((beforeSize - pngSize) / beforeSize * 100).toFixed(1);

    console.log(`${img.name}:`);
    console.log(`  Before: ${beforeKB} KB`);
    console.log(`  WebP:   ${webpKB} KB (${webpSavings}% smaller)`);
    console.log(`  PNG:    ${pngKB} KB (${pngSavings}% smaller)`);
    console.log('');
    
    totalBefore += beforeSize;
    totalAfter += webpSize; // Use WebP for total calculation
  }

  // Also optimize project images
  const projectImages = ['project1.jpg', 'project2.jpg', 'project3.jpg', 'project4.jpg'];
  
  console.log('🎨 Optimizing project images...');
  
  for (const img of projectImages) {
    const inputPath = path.join(publicDir, img);
    
    if (!fs.existsSync(inputPath)) continue;

    const beforeSize = fs.statSync(inputPath).size;
    const baseName = path.parse(img).name;
    
    // Create WebP version
    const webpPath = path.join(outputDir, `${baseName}.webp`);
    await sharp(inputPath)
      .resize(800, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);

    // Create optimized JPEG version
    const jpegPath = path.join(outputDir, `${baseName}.jpg`);
    await sharp(inputPath)
      .resize(800, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: 85, progressive: true })
      .toFile(jpegPath);

    const webpSize = fs.statSync(webpPath).size;
    const jpegSize = fs.statSync(jpegPath).size;
    
    const webpSavings = ((beforeSize - webpSize) / beforeSize * 100).toFixed(1);
    const jpegSavings = ((beforeSize - jpegSize) / beforeSize * 100).toFixed(1);

    console.log(`${img}: WebP ${webpSavings}% smaller, JPEG ${jpegSavings}% smaller`);
    
    totalBefore += beforeSize;
    totalAfter += webpSize;
  }

  const totalSavings = ((totalBefore - totalAfter) / totalBefore * 100).toFixed(1);
  const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(2);
  
  console.log('\n🎉 Optimization Complete!');
  console.log(`Total Savings: ${totalSavings}% (${savedMB} MB saved)`);
  console.log(`From: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`To:   ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
  
  console.log('\n📝 Next Steps:');
  console.log('1. Review optimized images in public/optimized/');
  console.log('2. Replace original images with optimized versions');
  console.log('3. Update code to use Next.js Image component with WebP support');
}

optimizeImages().catch(console.error);
