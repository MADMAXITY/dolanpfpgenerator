'use client';

import { Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ActionButtons() {
  const handleDownload = async () => {
    const canvas = document.getElementById('dolan-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    try {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `dolan-pfp-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  const handleShare = () => {
    const text = encodeURIComponent('Check out my Dolan the Duck PFP! 🦆 #DolanTheDuck #PFP');
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className="flex gap-4 justify-center mt-6">
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
  );
}
