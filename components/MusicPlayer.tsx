'use client';

import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function SimpleMusicToggle() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio.play().catch((err) => console.error("Autoplay error:", err));
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-gray-900 text-white p-3 rounded-full shadow-lg flex items-center justify-center">
      <button
        onClick={toggleMusic}
        className="text-xl hover:text-blue-400 transition-colors"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      <audio
        ref={audioRef}
        src="/Gangsta's Paradise-BarmanMusic (mp3cut.net).mp3"
        autoPlay
        loop
      />
    </div>
  );
}
