'use client';

import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sounds } from '@/lib/sounds';

export default function SoundToggle() {
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
      className="fixed top-4 right-4 z-50 bg-white/90 hover:bg-white backdrop-blur-sm p-3 rounded-full border-4 border-black shadow-lg transition-all hover:scale-110"
      title={isMuted ? 'Unmute sounds' : 'Mute sounds'}
    >
      {isMuted ? (
        <VolumeX className="w-6 h-6 text-black" />
      ) : (
        <Volume2 className="w-6 h-6 text-black" />
      )}
    </button>
  );
}
