import React, { useState } from "react";

interface BackgroundMusicProps {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  isOpened: boolean;
}

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
  audioRef,
  isOpened,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Updated to local file as requested
  const musicUrl = "/mp3.mp3";

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((e) => console.error("Play failed:", e));
      }
    }
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 transition-opacity duration-1000 ${
        isOpened ? "opacity-100" : "opacity-0"
      }`}
    >
      <audio
        ref={audioRef}
        loop
        src={musicUrl}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button
        onClick={toggleMusic}
        className="w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-sage-600 hover:bg-sage-100 transition-colors border border-sage-200"
        title={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6 animate-spin-slow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="1" y1="1" x2="23" y2="23"></line>
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        )}
      </button>
    </div>
  );
};
