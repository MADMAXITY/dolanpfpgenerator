'use client';

import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sounds } from '@/lib/sounds';

export default function MobileSoundToggle() {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsMuted(sounds.isMuted());
  }, []);

  const handleToggle = () => {
    const newMutedState = sounds.toggleMute();
    setIsMuted(newMutedState);
    
    // Play a test sound when unmuting
    if (!newMutedState) {
      setTimeout(() => sounds.select(), 100);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="flex flex-col items-center gap-1 text-black hover:text-gray-700 transition-colors"
      title={isMuted ? 'Unmute sounds' : 'Mute sounds'}
    >
      {isMuted ? (
        <VolumeX className="w-6 h-6" />
      ) : (
        <Volume2 className="w-6 h-6" />
      )}
      <span className="text-xs font-bold">Sound</span>
    </button>
  );
}
