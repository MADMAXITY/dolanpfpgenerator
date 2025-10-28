import { ComponentItem, Background } from '@/types';

export const HATS: ComponentItem[] = [
  { id: 'hat00001', name: 'Blue Beret', path: '/media/hats/hat00001.PNG', thumbnail: '/media/hats/hat00001.PNG' },
  { id: 'hat00002', name: 'Red Beret', path: '/media/hats/hat00002.PNG', thumbnail: '/media/hats/hat00002.PNG' },
  { id: 'hat00004', name: 'Purple Beret', path: '/media/hats/hat00004.PNG', thumbnail: '/media/hats/hat00004.PNG' },
  { id: 'hat00005', name: 'Pink Beret', path: '/media/hats/hat00005.PNG', thumbnail: '/media/hats/hat00005.PNG' },
  { id: 'hat00006', name: 'Yellow Beret', path: '/media/hats/hat00006.PNG', thumbnail: '/media/hats/hat00006.PNG' },
  { id: 'hat00008', name: 'Green Beret', path: '/media/hats/hat00008.PNG', thumbnail: '/media/hats/hat00008.PNG' },
  { id: 'hat00009', name: 'Orange Beret', path: '/media/hats/hat00009.PNG', thumbnail: '/media/hats/hat00009.PNG' },
  { id: 'hat00015', name: 'Cyan Beret', path: '/media/hats/hat00015.PNG', thumbnail: '/media/hats/hat00015.PNG' },
  { id: 'hat00016', name: 'Magenta Beret', path: '/media/hats/hat00016.PNG', thumbnail: '/media/hats/hat00016.PNG' },
  { id: 'hat00017', name: 'Teal Beret', path: '/media/hats/hat00017.PNG', thumbnail: '/media/hats/hat00017.PNG' },
];

export const BODIES: ComponentItem[] = [
  { id: 'image00003', name: 'Suit', path: '/media/bodies/image00003.PNG', thumbnail: '/media/bodies/image00003.PNG' },
  { id: 'image00010', name: 'Blue Tank', path: '/media/bodies/image00010.PNG', thumbnail: '/media/bodies/image00010.PNG' },
  { id: 'image00011', name: 'Green Polo', path: '/media/bodies/image00011.PNG', thumbnail: '/media/bodies/image00011.PNG' },
  { id: 'image00012', name: 'Red Jacket', path: '/media/bodies/image00012.PNG', thumbnail: '/media/bodies/image00012.PNG' },
  { id: 'image00013', name: 'Yellow Hoodie', path: '/media/bodies/image00013.PNG', thumbnail: '/media/bodies/image00013.PNG' },
  { id: 'image00014', name: 'Purple Tee', path: '/media/bodies/image00014.PNG', thumbnail: '/media/bodies/image00014.PNG' },
];

export const BACKGROUNDS: Background[] = [
  { id: 'bg-gold', name: 'Yellow Gold', type: 'solid', value: '#FFD700' },
  { id: 'bg-pink', name: 'Hot Pink', type: 'solid', value: '#FF1493' },
  { id: 'bg-lime', name: 'Lime Green', type: 'solid', value: '#00FF00' },
  { id: 'bg-cyan', name: 'Cyan', type: 'solid', value: '#00FFFF' },
  { id: 'bg-orange', name: 'Orange Red', type: 'solid', value: '#FF4500' },
  { id: 'bg-purple', name: 'Electric Purple', type: 'solid', value: '#8B00FF' },
  { id: 'grad-sunset', name: 'Sunset', type: 'gradient', value: 'linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)' },
  { id: 'grad-ocean', name: 'Ocean', type: 'gradient', value: 'linear-gradient(135deg, #667EEA 0%, #00D4FF 100%)' },
  { id: 'grad-meme', name: 'Meme', type: 'gradient', value: 'linear-gradient(135deg, #FF1493 0%, #00FF00 100%)' },
  { id: 'grad-fire', name: 'Fire', type: 'gradient', value: 'linear-gradient(135deg, #FF4500 0%, #FFD700 100%)' },
  { id: 'grad-purple', name: 'Purple Haze', type: 'gradient', value: 'linear-gradient(135deg, #8B00FF 0%, #FF1493 100%)' },
  { id: 'grad-rainbow', name: 'Rainbow', type: 'gradient', value: 'linear-gradient(135deg, #FF0080 0%, #FF8C00 20%, #FFD700 40%, #00FF00 60%, #00FFFF 80%, #8B00FF 100%)' },
];

export const CANVAS_SIZE = 800;
