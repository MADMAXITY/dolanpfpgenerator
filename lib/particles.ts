import confetti from 'canvas-confetti';

export const particles = {
  confettiBurst: () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      disableForReducedMotion: true,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
        spread: 100,
        startVelocity: 55,
        decay: 0.94,
        ticks: 200,
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  },

  randomExplosion: () => {
    const duration = 1500;
    const animationEnd = Date.now() + duration;
    
    const defaults = { 
      startVelocity: 35, 
      spread: 360, 
      ticks: 80,
      zIndex: 9999,
      decay: 0.94,
      disableForReducedMotion: true,
    };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    function frame() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return;
      }

      const particleCount = 3;

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#FF1493', '#00FFFF', '#FFD700', '#FF4500', '#8B00FF', '#00FF00'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FF1493', '#00FFFF', '#FFD700', '#FF4500', '#8B00FF', '#00FF00'],
      });

      requestAnimationFrame(frame);
    }

    frame();
  },

  sparkles: (x?: number, y?: number) => {
    const defaults = {
      disableForReducedMotion: true,
    };

    confetti({
      ...defaults,
      particleCount: 20,
      spread: 70,
      origin: { 
        x: x || 0.5, 
        y: y || 0.5 
      },
      colors: ['#FFD700', '#FFA500', '#FF69B4', '#00FFFF', '#FF1493'],
      shapes: ['star', 'circle'],
      scalar: 1,
      gravity: 0.8,
      drift: 0,
      ticks: 120,
      startVelocity: 20,
      decay: 0.92,
    });
  },

  stars: () => {
    const defaults = {
      disableForReducedMotion: true,
    };

    confetti({
      ...defaults,
      particleCount: 40,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FFA500', '#FFFF00'],
      shapes: ['star'],
      scalar: 1,
      gravity: 1,
      ticks: 150,
      startVelocity: 30,
      decay: 0.92,
    });
    
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 20,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#FFA500', '#FFFF00'],
        shapes: ['star'],
        scalar: 0.8,
        gravity: 0.9,
        ticks: 120,
        startVelocity: 25,
        decay: 0.93,
      });
    }, 100);
  },

  successRain: () => {
    const duration = 2000;
    const animationEnd = Date.now() + duration;

    function frame() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return;
      }

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0 },
        colors: ['#00FF00', '#00FF7F', '#32CD32', '#7FFF00'],
        shapes: ['circle'],
        gravity: 1,
        drift: 0.3,
        startVelocity: 30,
        ticks: 200,
        decay: 0.94,
        disableForReducedMotion: true,
      });
      
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0 },
        colors: ['#00FF00', '#00FF7F', '#32CD32', '#7FFF00'],
        shapes: ['circle'],
        gravity: 1,
        drift: -0.3,
        startVelocity: 30,
        ticks: 200,
        decay: 0.94,
        disableForReducedMotion: true,
      });

      requestAnimationFrame(frame);
    }

    frame();
  },

  emojiRain: () => {
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: -0.1 },
      angle: 90,
      shapes: ['circle'],
      colors: ['#FFD700'],
      gravity: 0.5,
      drift: 1,
      ticks: 300,
      scalar: 2,
    });
  },

  quickBurst: () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF1493', '#00FFFF', '#FFD700', '#FF4500', '#8B00FF'],
      ticks: 120,
      decay: 0.93,
      startVelocity: 30,
      disableForReducedMotion: true,
    });
  },

  side: (originX: number) => {
    confetti({
      particleCount: 40,
      angle: originX === 0 ? 60 : 120,
      spread: 55,
      origin: { x: originX, y: 0.6 },
      colors: ['#FF1493', '#00FF00', '#FFD700'],
      ticks: 120,
      decay: 0.93,
      startVelocity: 30,
      disableForReducedMotion: true,
    });
  }
};
