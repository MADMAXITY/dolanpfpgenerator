export interface ComponentItem {
  id: string;
  name: string;
  path: string;
  thumbnail: string;
  layer?: 'behind' | 'front'; // For accessories: behind body or in front
}

export interface Background {
  id: string;
  name: string;
  type: 'solid' | 'gradient' | 'image';
  value: string;
  path?: string;
  thumbnail?: string;
}

export type ComponentType = 'hat' | 'body' | 'background' | 'accessory';

export interface GeneratorState {
  selectedHat: string | null;
  selectedBody: string | null;
  selectedAccessory: string | null;
  selectedBackground: string;
  setSelectedHat: (id: string | null) => void;
  setSelectedBody: (id: string | null) => void;
  setSelectedAccessory: (id: string | null) => void;
  setSelectedBackground: (id: string) => void;
}
