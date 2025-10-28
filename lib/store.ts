import { create } from 'zustand';
import { GeneratorState } from '@/types';

export const useGeneratorStore = create<GeneratorState>((set) => ({
  selectedHat: null,
  selectedBody: 'image00003',
  selectedBackground: 'bg-cyan',
  setSelectedHat: (id) => set({ selectedHat: id }),
  setSelectedBody: (id) => set({ selectedBody: id }),
  setSelectedBackground: (id) => set({ selectedBackground: id }),
}));
