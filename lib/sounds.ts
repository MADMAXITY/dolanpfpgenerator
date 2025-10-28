// Sound Effects Manager for Dolan PFP Generator

type SoundType = 'select' | 'random' | 'download' | 'share' | 'clear';

class SoundManager {
  private audioContext: AudioContext | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.3;

  constructor() {
    if (typeof window !== 'undefined') {
      this.loadMutedState();
    }
  }

  private getAudioContext(): AudioContext {
    if (!this.audioContext && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.audioContext = new AudioContextClass();
      }
    }
    return this.audioContext!;
  }

  private loadMutedState() {
    const saved = localStorage.getItem('dolan-sounds-muted');
    this.isMuted = saved === 'true';
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    localStorage.setItem('dolan-sounds-muted', String(this.isMuted));
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  private playTone(frequency: number, duration: number, type: OscillatorType = 'sine') {
    if (this.isMuted) return;

    try {
      const ctx = this.getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.type = type;
      oscillator.frequency.value = frequency;

      gainNode.gain.setValueAtTime(this.volume, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + duration);
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }

  private playClick() {
    // Crisp click sound
    this.playTone(1200, 0.05, 'sine');
  }

  private playPop() {
    // Satisfying pop sound
    if (this.isMuted) return;
    
    try {
      const ctx = this.getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(400, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.1);

      gainNode.gain.setValueAtTime(this.volume, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.1);
    } catch (error) {
      console.error('Error playing pop:', error);
    }
  }

  private playSuccess() {
    // Success chime
    if (this.isMuted) return;
    
    try {
      const ctx = this.getAudioContext();
      const frequencies = [523.25, 659.25, 783.99]; // C, E, G chord
      
      frequencies.forEach((freq, i) => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.type = 'sine';
        oscillator.frequency.value = freq;

        const startTime = ctx.currentTime + (i * 0.05);
        gainNode.gain.setValueAtTime(this.volume * 0.5, startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);

        oscillator.start(startTime);
        oscillator.stop(startTime + 0.3);
      });
    } catch (error) {
      console.error('Error playing success:', error);
    }
  }

  private playQuack() {
    // Fun duck quack sound
    if (this.isMuted) return;
    
    try {
      const ctx = this.getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(300, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.2);

      gainNode.gain.setValueAtTime(this.volume * 0.8, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.2);
    } catch (error) {
      console.error('Error playing quack:', error);
    }
  }

  private playSwoosh() {
    // Swoosh sound for random generator
    if (this.isMuted) return;
    
    try {
      const ctx = this.getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.15);

      gainNode.gain.setValueAtTime(this.volume * 0.6, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.15);
    } catch (error) {
      console.error('Error playing swoosh:', error);
    }
  }

  // Public API
  public playSound(type: SoundType) {
    if (this.isMuted) return;

    switch (type) {
      case 'select':
        this.playPop();
        break;
      case 'random':
        this.playSwoosh();
        setTimeout(() => this.playQuack(), 150);
        break;
      case 'download':
        this.playSuccess();
        break;
      case 'share':
        this.playClick();
        setTimeout(() => this.playClick(), 100);
        break;
      case 'clear':
        this.playTone(300, 0.08, 'sine');
        break;
    }
  }
}

// Singleton instance
export const soundManager = new SoundManager();

// Convenience functions
export const sounds = {
  select: () => soundManager.playSound('select'),
  random: () => soundManager.playSound('random'),
  download: () => soundManager.playSound('download'),
  share: () => soundManager.playSound('share'),
  clear: () => soundManager.playSound('clear'),
  toggleMute: () => soundManager.toggleMute(),
  isMuted: () => soundManager.getMuted(),
};
