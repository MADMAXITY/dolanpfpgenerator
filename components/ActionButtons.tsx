'use client';

import { Download, Share2, Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGeneratorStore } from '@/lib/store';
import { HATS, BODIES, BACKGROUNDS } from '@/lib/constants';
import { particles } from '@/lib/particles';

export default function ActionButtons() {
  const { setSelectedHat, setSelectedBody, setSelectedBackground } = useGeneratorStore();

  const handleDownload = async () => {
    const canvas = document.getElementById('dolan-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    try {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `dolan-pfp-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
      
      particles.successRain();
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  const handleShare = () => {
    const text = encodeURIComponent('Check out my Dolan the Duck PFP! 🦆 #DolanTheDuck #PFP');
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(twitterUrl, '_blank');
    
    particles.stars();
  };

  const handleRandomize = () => {
    const randomHat = Math.random() < 0.3 ? null : HATS[Math.floor(Math.random() * HATS.length)].id;
    const randomBody = BODIES[Math.floor(Math.random() * BODIES.length)].id;
    const randomBg = BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)].id;
    
    setSelectedHat(randomHat);
    setSelectedBody(randomBody);
    setSelectedBackground(randomBg);
    
    particles.randomExplosion();
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
      <Button
        onClick={handleRandomize}
        size="lg"
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-xl px-10 py-7 border-4 border-black shadow-lg transition-transform hover:scale-105 w-full"
      >
        <Shuffle className="mr-2 h-6 w-6" />
        I&apos;m Feeling Ducky! 🦆
      </Button>
      
      <div className="flex gap-4 justify-center">
        <Button
          onClick={handleDownload}
          size="lg"
          className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8 py-6 border-4 border-black shadow-lg transition-transform hover:scale-105"
        >
          <Download className="mr-2 h-5 w-5" />
          Download PNG
        </Button>
        <Button
          onClick={handleShare}
          size="lg"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg px-8 py-6 border-4 border-black shadow-lg transition-transform hover:scale-105"
        >
          <Share2 className="mr-2 h-5 w-5" />
          Share to X
        </Button>
      </div>
    </div>
  );
}
