'use client';

import { Download, Share2, Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGeneratorStore } from '@/lib/store';
import { HATS, BODIES, ACCESSORIES, BACKGROUNDS } from '@/lib/constants';
import { particles } from '@/lib/particles';
import { sounds } from '@/lib/sounds';

export default function ActionButtons() {
  const { setSelectedHat, setSelectedBody, setSelectedAccessory, setSelectedBackground } = useGeneratorStore();

  const handleDownload = async () => {
    const canvas = document.getElementById('dolan-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    try {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `dolan-pfp-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
      
      sounds.download();
      particles.successRain();
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  const handleShare = () => {
    const text = encodeURIComponent('Check out my Dolan the Duck PFP! 🦆 #DolanTheDuck #PFP');
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(twitterUrl, '_blank');
    
    sounds.share();
    particles.stars();
  };

  const handleRandomize = () => {
    const randomHat = Math.random() < 0.3 ? null : HATS[Math.floor(Math.random() * HATS.length)].id;
    const randomBody = BODIES[Math.floor(Math.random() * BODIES.length)].id;
    const randomAccessory = Math.random() < 0.5 ? null : ACCESSORIES[Math.floor(Math.random() * ACCESSORIES.length)].id;
    const randomBg = BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)].id;
    
    setSelectedHat(randomHat);
    setSelectedBody(randomBody);
    setSelectedAccessory(randomAccessory);
    setSelectedBackground(randomBg);
    
    sounds.random();
    particles.randomExplosion();
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6">
      <Button
        onClick={handleRandomize}
        size="lg"
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 border-4 border-black shadow-lg transition-transform hover:scale-105 w-full"
      >
        <Shuffle className="mr-1 sm:mr-2 h-5 w-5 sm:h-6 sm:w-6" />
        I&apos;m Feeling Ducky! 🦆
      </Button>
      
      <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center">
        <Button
          onClick={handleDownload}
          size="lg"
          className="bg-black hover:bg-gray-800 text-white font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-4 border-black shadow-lg transition-transform hover:scale-105 flex-1"
        >
          <Download className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          <span className="hidden sm:inline">Download PNG</span>
          <span className="sm:hidden">Download</span>
        </Button>
        <Button
          onClick={handleShare}
          size="lg"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-4 border-black shadow-lg transition-transform hover:scale-105 flex-1"
        >
          <Share2 className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          <span className="hidden sm:inline">Share to X</span>
          <span className="sm:hidden">Share</span>
        </Button>
      </div>
    </div>
  );
}
