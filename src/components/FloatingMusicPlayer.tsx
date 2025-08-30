import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

interface FloatingMusicPlayerProps {
  autoPlay?: boolean;
}

export function FloatingMusicPlayer({ autoPlay = true }: FloatingMusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle autoplay on mount
  useEffect(() => {
    if (audioRef.current && autoPlay) {
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
        setShowPopup(true);
      });
    }
  }, [autoPlay]);

  // Play/Pause toggle
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Mute/Unmute toggle
  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Handle user interaction if autoplay is blocked
  const handlePopupClick = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setShowPopup(false);
      });
    }
  };

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        muted={isMuted}
        aria-label="Birthday Song"
      >
        <source src="/1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Popup for autoplay blocked */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <motion.button
            onClick={handlePopupClick}
            className="px-6 py-3 bg-pink-600 text-white rounded-2xl text-lg font-semibold shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            aria-label="Tap to start music"
          >
            🎵 Tap to Start Music
          </motion.button>
        </div>
      )}

      {/* Floating Music Player UI - Only Floating Ball Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
      >
        <motion.button
          onClick={togglePlay}
          className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-pink-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          animate={
            isPlaying
              ? {
                  boxShadow: [
                    "0 0 0 0 rgba(236, 72, 153, 0.7)",
                    "0 0 0 20px rgba(236, 72, 153, 0)",
                  ],
                }
              : {}
          }
          transition={
            isPlaying
              ? {
                  boxShadow: { duration: 2, repeat: Infinity },
                }
              : {}
          }
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6 ml-1" />
          )}
        </motion.button>
      </motion.div>
    </>
  );
}
