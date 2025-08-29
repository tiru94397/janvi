import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

interface FloatingMusicPlayerProps {
  autoPlay?: boolean;
}

export function FloatingMusicPlayer({ autoPlay = true }: FloatingMusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && autoPlay) {
      // Attempt to auto-play (browsers may block this)
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [autoPlay]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Audio element - replace src with your actual music file */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {/* 
          IMPORTANT: Replace "/your-birthday-song.mp3" with your actual music file path
          You can either:
          1. Put your music file in the public folder and reference it like "/my-song.mp3"
          2. Import it as an asset and use the imported path
          3. Use a URL to an external music file
        */}
        <source src="/your-birthday-song.mp3" type="audio/mpeg" />
        <source src="/your-birthday-song.wav" type="audio/wav" />
        <source src="/your-birthday-song.ogg" type="audio/ogg" />
        {/* Fallback for browsers that don't support the audio element */}
        Your browser does not support the audio element.
      </audio>

      {/* Floating Music Player */}
      <motion.div
        className="fixed bottom-8 right-8 z-50 flex flex-col gap-2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
      >
        {/* Main Play/Pause Button */}
        <motion.button
          onClick={togglePlay}
          className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={isPlaying ? { 
            boxShadow: ["0 0 0 0 rgba(236, 72, 153, 0.7)", "0 0 0 20px rgba(236, 72, 153, 0)"],
          } : {}}
          transition={isPlaying ? { 
            boxShadow: { duration: 2, repeat: Infinity }
          } : {}}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6 ml-1" />
          )}
        </motion.button>

        {/* Volume Control */}
        <motion.button
          onClick={toggleMute}
          className="w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white text-pink-600 rounded-full shadow-md flex items-center justify-center transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </motion.button>

        {/* Music Note Animation */}
        {isPlaying && (
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              y: [-20, -40, -60],
              x: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <span className="text-2xl">🎵</span>
          </motion.div>
        )}

        {/* Song Info Tooltip */}
        <motion.div
          className="absolute bottom-full right-0 mb-2 bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
        >
          🎂 Birthday Song for Janvi
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95"></div>
        </motion.div>
      </motion.div>
    </>
  );
}