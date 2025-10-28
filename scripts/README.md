# Favicon Processing Script

## Overview
This directory contains the script to process the Dolan Duck favicon from the original square image to circular PNG favicons in multiple sizes.

## Script: `process-favicon.js`

### What it does:
1. Loads the original favicon image (`favicon-original.jpg`)
2. Extracts the circular portion using canvas clipping
3. Generates multiple sizes for different use cases:
   - `favicon-16x16.png` - Browser tab icon (small)
   - `favicon-32x32.png` - Browser tab icon (medium)
   - `favicon-48x48.png` - Browser tab icon (large)
   - `favicon.png` - Apple touch icon and general use (full size)

### Requirements:
- Node.js
- `canvas` package (installed as dependency)

### Usage:
```bash
# Run directly
node scripts/process-favicon.js

# Or use npm script
npm run favicon
```

### How it works:
1. Creates a canvas with circular clipping path
2. Draws the original image centered within the circular clip
3. Exports as PNG with transparency
4. Generates multiple sizes for browser compatibility

### When to run:
- When the original favicon image is updated
- When adding new favicon sizes
- During initial setup

### Output files:
All files are saved to the `public/` directory and automatically served by Next.js:
- `/favicon-16x16.png`
- `/favicon-32x32.png`
- `/favicon-48x48.png`
- `/favicon.png`

These are referenced in `app/layout.tsx` metadata for automatic favicon loading.
