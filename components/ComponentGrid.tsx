'use client';

import Image from 'next/image';
import { ComponentItem, Background } from '@/types';
import { cn } from '@/lib/utils';

interface ComponentGridProps {
  items: ComponentItem[] | Background[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  type: 'hat' | 'body' | 'background';
}

export default function ComponentGrid({ items, selectedId, onSelect, type }: ComponentGridProps) {
  const isBackground = type === 'background';
  const showNoneOption = type === 'hat';

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-10 p-4">
      {showNoneOption && (
        <button
          onClick={() => onSelect(null)}
          className={cn(
            "relative aspect-square rounded-lg border-4 transition-all hover:scale-105",
            "bg-gray-200 flex items-center justify-center",
            selectedId === null
              ? "border-black shadow-lg scale-105"
              : "border-gray-300 hover:border-gray-400"
          )}
        >
          <span className="text-2xl font-bold text-gray-500">✕</span>
          <div className="absolute -bottom-6 left-0 right-0 text-center">
            <span className="text-xs font-medium bg-white px-2 py-1 rounded">None</span>
          </div>
        </button>
      )}
      
      {items.map((item) => {
        const isSelected = selectedId === item.id;
        
        if (isBackground) {
          const bg = item as Background;
          return (
            <button
              key={bg.id}
              onClick={() => onSelect(bg.id)}
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
              <div className="absolute -bottom-6 left-0 right-0 text-center">
                <span className="text-xs font-medium bg-white px-2 py-1 rounded">{bg.name}</span>
              </div>
            </button>
          );
        }

        const component = item as ComponentItem;
        return (
          <button
            key={component.id}
            onClick={() => onSelect(component.id)}
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
            <div className="absolute -bottom-6 left-0 right-0 text-center">
              <span className="text-xs font-medium bg-white px-2 py-1 rounded">{component.name}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
