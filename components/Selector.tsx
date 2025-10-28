'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import ComponentGrid from './ComponentGrid';
import { useGeneratorStore } from '@/lib/store';
import { HATS, BODIES, BACKGROUNDS } from '@/lib/constants';

export default function Selector() {
  const [activeTab, setActiveTab] = useState('hats');
  const { selectedHat, selectedBody, selectedBackground, setSelectedHat, setSelectedBody, setSelectedBackground } = useGeneratorStore();

  return (
    <Card className="border-4 border-black shadow-lg">
      <CardContent className="p-4">
        <Tabs>
          <TabsList className="grid w-full grid-cols-3 mb-4 bg-gray-200 p-1 rounded-lg">
            <TabsTrigger
              active={activeTab === 'hats'}
              onClick={() => setActiveTab('hats')}
              className="font-bold data-[state=active]:bg-white"
            >
              🎩 Hats
            </TabsTrigger>
            <TabsTrigger
              active={activeTab === 'bodies'}
              onClick={() => setActiveTab('bodies')}
              className="font-bold data-[state=active]:bg-white"
            >
              👕 Bodies
            </TabsTrigger>
            <TabsTrigger
              active={activeTab === 'backgrounds'}
              onClick={() => setActiveTab('backgrounds')}
              className="font-bold data-[state=active]:bg-white"
            >
              🎨 Backgrounds
            </TabsTrigger>
          </TabsList>

          {activeTab === 'hats' && (
            <TabsContent className="mt-0">
              <div className="h-[400px] overflow-y-auto pb-8">
                <ComponentGrid
                  items={HATS}
                  selectedId={selectedHat}
                  onSelect={setSelectedHat}
                  type="hat"
                />
              </div>
            </TabsContent>
          )}

          {activeTab === 'bodies' && (
            <TabsContent className="mt-0">
              <div className="h-[400px] overflow-y-auto pb-8">
                <ComponentGrid
                  items={BODIES}
                  selectedId={selectedBody}
                  onSelect={setSelectedBody}
                  type="body"
                />
              </div>
            </TabsContent>
          )}

          {activeTab === 'backgrounds' && (
            <TabsContent className="mt-0">
              <div className="h-[400px] overflow-y-auto pb-8">
                <ComponentGrid
                  items={BACKGROUNDS}
                  selectedId={selectedBackground}
                  onSelect={(id) => id && setSelectedBackground(id)}
                  type="background"
                />
              </div>
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
}
