'use client';

import { useEffect, useRef, useState } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  trackUrl: string;
  title: string;
  artist: string;
}

export function MusicPlayer({ trackUrl, title, artist }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.55);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = async () => {
    if (!audioRef.current || !trackUrl) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !muted;
    audioRef.current.muted = nextMuted;
    setMuted(nextMuted);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 w-[min(92vw,360px)] rounded-2xl border border-primary/25 bg-paper/95 p-3 shadow-paper backdrop-blur">
      <audio ref={audioRef} src={trackUrl} loop preload="none" aria-label={`Pista de fondo ${title} de ${artist}`} />
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-primary/80">Musica</p>
          <p className="font-display text-base text-ink">{title}</p>
          <p className="text-xs text-ink/65">{artist}</p>
        </div>

        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pausar musica' : 'Reproducir musica'}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition hover:bg-accent"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? 'Activar sonido' : 'Silenciar sonido'}
          className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-white/90 text-primary"
        >
          {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>
        <label htmlFor="volume" className="sr-only">
          Control de volumen
        </label>
        <input
          id="volume"
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={volume}
          onChange={(event) => setVolume(Number(event.target.value))}
          aria-label="Volumen de musica"
          className="focus-ring h-2 w-full cursor-pointer appearance-none rounded-lg bg-primary/15"
        />
      </div>
    </div>
  );
}
