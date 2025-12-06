"use client";

import React, { useRef, useState } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Handle video end
  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="w-full bg-[#050B23] flex justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-6 lg:px-0 select-none">
      
      {/* MAIN CONTAINER: Responsive Height */}
      <div 
        className="relative w-full max-w-[1224px] h-[280px] sm:h-[350px] md:h-[450px] lg:h-[520px] xl:h-[591px] rounded-lg sm:rounded-xl lg:rounded-none overflow-hidden flex flex-col justify-center items-center cursor-pointer group"
        onClick={handlePlayPause}
      >
        
        {/* -------------------------------------------------------
            1. BACKGROUND VIDEO
           ------------------------------------------------------- */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          loop
          muted
          playsInline
          poster="/video-poster.png"
          onEnded={handleVideoEnd}
        >
          <source src="/suit.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 2. WARM TINT OVERLAY - Fades when playing */}
        <div 
          className={`absolute inset-0 bg-[#8B744B]/20 mix-blend-overlay z-10 transition-opacity duration-500 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`} 
        />
        <div 
          className={`absolute inset-0 bg-black/10 z-10 transition-opacity duration-500 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`} 
        />

        {/* 3. Dark overlay when paused for better button visibility */}
        <div 
          className={`absolute inset-0 bg-black/30 z-10 transition-opacity duration-500 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`} 
        />

        {/* -------------------------------------------------------
            4. PLAY/PAUSE BUTTON (Centered) - Responsive Size
           ------------------------------------------------------- */}
        <button 
          className={`
            relative z-20
            w-[80px] h-[80px] 
            sm:w-[100px] sm:h-[100px] 
            md:w-[115px] md:h-[115px] 
            lg:w-[125px] lg:h-[125px] 
            xl:w-[135px] xl:h-[135px] 
            rounded-full 
            border-[2.5px] sm:border-[3px] md:border-[3.5px] lg:border-[4px] 
            border-white 
            flex items-center justify-center
            backdrop-blur-[2px]
            transition-all duration-500 
            hover:scale-105 
            hover:bg-white/10
            active:scale-95
            ${isPlaying 
              ? "opacity-0 group-hover:opacity-100" 
              : "opacity-100"
            }
          `}
          aria-label={isPlaying ? "Pause Video" : "Play Video"}
          onClick={(e) => {
            e.stopPropagation();
            handlePlayPause();
          }}
        >
          {/* Play/Pause Icon */}
          {isPlaying ? (
            // Pause Icon
            <svg 
              viewBox="0 0 24 24" 
              fill="white" 
              className="w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] xl:w-[55px] xl:h-[55px]"
            >
              <path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" />
            </svg>
          ) : (
            // Play Icon
            <svg 
              viewBox="0 0 24 24" 
              fill="white" 
              className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] ml-1 sm:ml-1.5 lg:ml-2"
            >
              <path d="M8 5V19L19 12L8 5Z" />
            </svg>
          )}
        </button>

        {/* -------------------------------------------------------
            5. Mobile Text Overlay
           ------------------------------------------------------- */}
        <p 
          className={`absolute bottom-4 sm:bottom-6 left-0 right-0 text-center text-white/60 text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.2em] z-20 lg:hidden transition-opacity duration-500 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        >
          Tap to play
        </p>

        {/* -------------------------------------------------------
            6. Progress Bar (Optional - shows at bottom when playing)
           ------------------------------------------------------- */}
        <div 
          className={`absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20 transition-opacity duration-500 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
        >
          <div 
            className="h-full bg-[#D7B58A] transition-all duration-100"
            style={{ width: "0%" }}
          />
        </div>

      </div>
    </section>
  );
}