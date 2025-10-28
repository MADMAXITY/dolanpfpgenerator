export interface ComponentItem {
  id: string;
  name: string;
  path: string;
  thumbnail: string;
}

export interface Background {
  id: string;
  name: string;
  type: 'solid' | 'gradient';
  value: string;
}

export type ComponentType = 'hat' | 'body' | 'background';

export interface GeneratorState {
  selectedHat: string | null;
  selectedBody: string | null;
  selectedBackground: string;
  setSelectedHat: (id: string | null) => void;
  setSelectedBody: (id: string | null) => void;
  setSelectedBackground: (id: string) => void;
}
