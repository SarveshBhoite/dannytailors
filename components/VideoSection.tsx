"use client";

import React from "react";

export default function VideoSection() {
  return (
    <section className="w-full bg-[#050B23] flex justify-center py-24 select-none">
      
      {/* MAIN CONTAINER: 1224px Width / 591px Height */}
      <div className="relative w-full max-w-[1224px] h-[591px] flex flex-col justify-center items-center overflow-hidden">
        
        {/* -------------------------------------------------------
            1. BACKGROUND VIDEO
           ------------------------------------------------------- */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/video-poster.png" // Optional: Add a fallback image here
        >
          <source src="/sut.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 2. WARM TINT OVERLAY 
            This matches the sepia/golden tone seen in your screenshot 
        */}
        <div className="absolute inset-0 bg-[#8B744B]/20 mix-blend-overlay z-10" />
        <div className="absolute inset-0 bg-black/10 z-10" /> {/* Slight darkener */}


        {/* -------------------------------------------------------
            3. PLAY BUTTON (Centered)
            Size: ~155px (154.83px from Figma)
           ------------------------------------------------------- */}
        <button 
          className="
            relative z-20 group
            w-[135px] h-[135px] 
            rounded-full 
            border-[4px] border-white 
            flex items-center justify-center
            backdrop-blur-[2px]
            transition-transform duration-500 hover:scale-105
          "
          aria-label="Play Video"
        >
          {/* Inner Play Icon (Triangle) */}
          <svg 
            width="150" 
            height="150" 
            viewBox="0 0 24 24" 
            fill="white" 
            className="ml-2" // Optical adjustment to center the triangle visually
          >
            <path d="M8 5V19L19 12L8 5Z" />
          </svg>
        </button>

      </div>
    </section>
  );
}