'use client';

import Image from 'next/image';
import { ComponentItem, Background } from '@/types';
import { cn } from '@/lib/utils';
import { particles } from '@/lib/particles';

interface ComponentGridProps {
  items: ComponentItem[] | Background[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  type: 'hat' | 'body' | 'background' | 'accessory';
}

export default function ComponentGrid({ items, selectedId, onSelect, type }: ComponentGridProps) {
  const isBackground = type === 'background';
  const showNoneOption = type === 'hat' || type === 'accessory';

  const handleSelect = (id: string | null, event: React.MouseEvent<HTMLButtonElement>) => {
    onSelect(id);
    
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    
    particles.sparkles(x, y);
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
      {showNoneOption && (
        <button
          onClick={(e) => handleSelect(null, e)}
          className={cn(
            "relative aspect-square rounded-lg border-4 transition-all hover:scale-105",
            "bg-gray-200 flex items-center justify-center",
            selectedId === null
              ? "border-black shadow-lg scale-105"
              : "border-gray-300 hover:border-gray-400"
          )}
        >
          <span className="text-2xl font-bold text-gray-500">✕</span>
        </button>
      )}
      
      {items.map((item) => {
        const isSelected = selectedId === item.id;
        
        if (isBackground) {
          const bg = item as Background;
          return (
            <button
              key={bg.id}
              onClick={(e) => handleSelect(bg.id, e)}
              className={cn(
                "relative aspect-square rounded-lg border-4 transition-all hover:scale-105",
                isSelected
                  ? "border-black shadow-lg scale-105"
                  : "border-gray-300 hover:border-gray-400"
              )}
              style={{
                background: bg.type === 'solid' ? bg.value : bg.value,
              }}
            >
            </button>
          );
        }

        const component = item as ComponentItem;
        return (
          <button
            key={component.id}
            onClick={(e) => handleSelect(component.id, e)}
            className={cn(
              "relative aspect-square rounded-lg border-4 transition-all hover:scale-105 bg-gray-100",
              isSelected
                ? "border-black shadow-lg scale-105"
                : "border-gray-300 hover:border-gray-400"
            )}
          >
            <Image
              src={component.thumbnail}
              alt={component.name}
              fill
              className="object-contain p-2"
              unoptimized
            />
          </button>
        );
      })}
    </div>
  );
}
