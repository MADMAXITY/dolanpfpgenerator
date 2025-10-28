# 🦆 Dolan the Duck PFP Generator

A fun, meme-themed profile picture generator where you can create custom Dolan the Duck avatars with different hats, bodies, and backgrounds!

## Features

- **10 Different Hats**: Choose from various colorful berets or go without one
- **6 Different Bodies**: Select from different Dolan outfits (suits, casual wear, etc.)
- **12 Background Options**: Pick from solid colors and vibrant gradients
- **Download as PNG**: Export your creation in high quality (800x800px)
- **Share to X (Twitter)**: Instantly share your PFP on social media

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Zustand** - Lightweight state management
- **Canvas API** - Layer composition and image rendering
- **Framer Motion** - Smooth animations (ready for future enhancements)

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd dolanpfpgenerator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
dolanpfpgenerator/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main generator page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Base UI components (Button, Tabs, Card)
│   ├── Canvas.tsx          # Canvas rendering with layering
│   ├── ComponentGrid.tsx   # Grid selector for items
│   ├── Selector.tsx        # Tab navigation for categories
│   ├── ActionButtons.tsx   # Download & Share buttons
│   └── PreviewCard.tsx     # Canvas preview wrapper
├── lib/
│   ├── store.ts            # Zustand state management
│   ├── utils.ts            # Utility functions
│   └── constants.ts        # Asset definitions & configs
├── types/
│   └── index.ts            # TypeScript type definitions
└── public/
    └── media/              # Hat and body images
        ├── hats/
        └── bodies/
```

## How It Works

1. **Select Components**: Choose your favorite hat (or none), body, and background from the tabs
2. **Preview in Real-time**: See your Dolan PFP update instantly on the canvas
3. **Download**: Click "Download PNG" to save your creation
4. **Share**: Click "Share to X" to post directly to Twitter/X

## Customization

### Adding New Hats/Bodies

1. Add PNG files (with transparent backgrounds) to `public/media/hats/` or `public/media/bodies/`
2. Update the `HATS` or `BODIES` array in `lib/constants.ts`:

```typescript
export const HATS: ComponentItem[] = [
  { id: 'new-hat', name: 'New Hat', path: '/media/hats/new-hat.PNG', thumbnail: '/media/hats/new-hat.PNG' },
  // ... existing hats
];
```

### Adding New Backgrounds

Update the `BACKGROUNDS` array in `lib/constants.ts`:

```typescript
export const BACKGROUNDS: Background[] = [
  { id: 'bg-custom', name: 'Custom', type: 'solid', value: '#FF00FF' },
  { id: 'grad-custom', name: 'Custom Gradient', type: 'gradient', value: 'linear-gradient(135deg, #FF0000 0%, #0000FF 100%)' },
  // ... existing backgrounds
];
```

## Canvas Specifications

- **Size**: 800x800px (optimized for profile pictures)
- **Layer Order**: Background → Body → Hat
- **Image Scaling**: Automatic, maintains aspect ratio
- **Export Quality**: High-resolution PNG with 2x scaling for retina displays

## Future Enhancements

- Accessories layer (glasses, chains, etc.)
- Custom text overlay
- Background patterns/textures
- Animation export (GIF)
- Save/load presets
- Random combination generator
- Gallery of user creations
- More customization options

## License

MIT License - Feel free to use and modify!

## Credits

Made with memes and love 💚

Dolan the Duck is a popular internet meme character.
