const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../public/favicon-original.jpg');
const outputPath = path.join(__dirname, '../public/favicon.png');

async function processImage() {
  try {
    const image = await loadImage(inputPath);
    const size = Math.min(image.width, image.height);
    
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    
    const offsetX = (image.width - size) / 2;
    const offsetY = (image.height - size) / 2;
    ctx.drawImage(image, -offsetX, -offsetY, image.width, image.height);
    
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
    
    console.log('✅ Favicon processed successfully!');
    console.log('📁 Output:', outputPath);
    
    const sizes = [16, 32, 48];
    for (const s of sizes) {
      const smallCanvas = createCanvas(s, s);
      const smallCtx = smallCanvas.getContext('2d');
      
      smallCtx.beginPath();
      smallCtx.arc(s / 2, s / 2, s / 2, 0, Math.PI * 2);
      smallCtx.closePath();
      smallCtx.clip();
      
      smallCtx.drawImage(image, 0, 0, s, s);
      
      const smallBuffer = smallCanvas.toBuffer('image/png');
      const smallPath = path.join(__dirname, `../public/favicon-${s}x${s}.png`);
      fs.writeFileSync(smallPath, smallBuffer);
      console.log(`✅ Generated ${s}x${s} favicon`);
    }
    
  } catch (error) {
    console.error('❌ Error processing image:', error);
    process.exit(1);
  }
}

processImage();
