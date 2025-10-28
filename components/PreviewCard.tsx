'use client';

import { Card, CardContent } from '@/components/ui/card';
import Canvas from './Canvas';

export default function PreviewCard() {
  return (
    <Card className="border-4 border-black shadow-2xl">
      <CardContent className="p-3 sm:p-4 md:p-6">
        <div className="aspect-square w-full max-w-[500px] mx-auto bg-white rounded-lg overflow-hidden border-4 border-black">
          <Canvas />
        </div>
      </CardContent>
    </Card>
  );
}
