import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
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

  console.log('🖼️  Starting image optimization...');
  
  // Get file sizes before optimization
  const beforeSizes = {};
  const files = ['Julius.png', 'ntale.png', 'favicon.png'];
  
  files.forEach(file => {
    const filePath = path.join(publicDir, file);
    if (fs.existsSync(filePath)) {
      beforeSizes[file] = fs.statSync(filePath).size;
    }
  });

  try {
    // Optimize PNG files (Julius.png, ntale.png, favicon.png)
    console.log('🔧 Optimizing PNG files...');
    
    await imagemin([path.join(publicDir, '*.png')], {
      destination: outputDir,
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8], // Reduce quality significantly for large files
          strip: true // Remove metadata
        }),
        imageminWebp({
          quality: 75, // Good quality for WebP
          method: 6, // Best compression
          preset: 'photo'
        })
      ]
    });

    // Optimize JPG files (project images)
    console.log('🔧 Optimizing JPG files...');
    
    await imagemin([path.join(publicDir, '*.jpg')], {
      destination: outputDir,
      plugins: [
        imageminMozjpeg({
          quality: 80, // Good quality for project images
          progressive: true
        }),
        imageminWebp({
          quality: 80,
          method: 6,
          preset: 'photo'
        })
      ]
    });

    // Calculate savings
    console.log('\n📊 Optimization Results:');
    console.log('========================');
    
    let totalBefore = 0;
    let totalAfter = 0;
    
    files.forEach(file => {
      if (beforeSizes[file]) {
        const beforeKB = (beforeSizes[file] / 1024).toFixed(2);
        
        // Find corresponding optimized file
        const baseName = path.parse(file).name;
        const optimizedPath = path.join(outputDir, `${baseName}.png`);
        const webpPath = path.join(outputDir, `${baseName}.webp`);
        
        let afterSize = 0;
        let format = 'PNG';
        
        if (fs.existsSync(webpPath)) {
          afterSize = fs.statSync(webpPath).size;
          format = 'WebP';
        } else if (fs.existsSync(optimizedPath)) {
          afterSize = fs.statSync(optimizedPath).size;
        }
        
        const afterKB = (afterSize / 1024).toFixed(2);
        const savings = ((beforeSizes[file] - afterSize) / beforeSizes[file] * 100).toFixed(1);
        
        console.log(`${file}:`);
        console.log(`  Before: ${beforeKB} KB`);
        console.log(`  After:  ${afterKB} KB (${format})`);
        console.log(`  Saved:  ${savings}%`);
        console.log('');
        
        totalBefore += beforeSizes[file];
        totalAfter += afterSize;
      }
    });
    
    const totalSavings = ((totalBefore - totalAfter) / totalBefore * 100).toFixed(1);
    console.log(`Total Savings: ${totalSavings}% (${((totalBefore - totalAfter) / 1024 / 1024).toFixed(2)} MB)`);
    
    console.log('\n✅ Image optimization complete!');
    console.log('📁 Optimized images saved to: public/optimized/');
    console.log('\n📝 Next steps:');
    console.log('1. Replace original images with optimized versions');
    console.log('2. Update image imports to use Next.js Image component');
    console.log('3. Add WebP format support with fallbacks');
    
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

optimizeImages();
