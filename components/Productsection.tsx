"use client";

import Image from "next/image";
import React from "react";
import { Cormorant_Garamond, Montserrat, Poppins } from "next/font/google";

// 1. CONFIGURE FONTS
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["200"], 
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["500"], 
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export default function ProductSection() {
  
  // =====================================================================
  //  CUTOUT CONFIGURATION
  // =====================================================================
  const arcWidth = "150px";
  const arcHeight = "130px";
  const cornerPos = "100% 100%"; 

  // --- GRADIENT CONFIGURATION ---
  const glowColor = "rgba(215, 181, 138, 0.5)"; 
  const solidAccentColor = "#D7B58A"; 
  const solidBg = "#050B23"; 

  // --- NOISE TEXTURE (Base64 SVG) ---
  // This creates the "grain" effect without needing an external image file
  const noiseTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`;

  // --- DYNAMIC MASKS ---
  const topMask = `radial-gradient(${arcWidth} ${arcHeight} at ${cornerPos}, transparent 98%, black 100%)`; 
  const topMaskRight = `radial-gradient(${arcWidth} ${arcHeight} at 0% 100%, transparent 98%, black 100%)`;
  const bottomMask = `radial-gradient(160px 130px at 50% 0%, transparent 98%, black 100%)`;

  // --- CARD BACKGROUNDS (LAYERED GRADIENTS) ---
  const leftCardBg = `
    radial-gradient(circle at 100% 100%, ${solidAccentColor} 0%, transparent 10%),
    radial-gradient(circle at 100% 100%, ${glowColor} 0%, transparent 55%),
    linear-gradient(0deg, ${solidBg}, ${solidBg})
  `;

  const rightCardBg = `
    radial-gradient(circle at 0% 100%, ${solidAccentColor} 0%, transparent 10%),
    radial-gradient(circle at 0% 100%, ${glowColor} 0%, transparent 55%),
    linear-gradient(0deg, ${solidBg}, ${solidBg})
  `;

  const bottomCardBg = `
    radial-gradient(circle at 50% 0%, ${solidAccentColor} 0%, transparent 10%),
    radial-gradient(circle at 50% 0%, ${glowColor} 0%, transparent 55%),
    linear-gradient(0deg, ${solidBg}, ${solidBg})
  `;

  const cardBorderStyles = {
      border: "1px solid rgba(255, 255, 255, 0.05)",
      boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)"
  }

  // --- TYPOGRAPHY STYLES ---
  const descStyle = `${montserrat.className} text-[16px] font-extralight leading-[100%] tracking-[0.05em] capitalize text-white/70 antialiased`;
  const verticalTextStyle = `${cormorant.className} text-[20px] font-medium leading-[100%] tracking-[0.44em] uppercase text-[#D7B58A] whitespace-nowrap`;

  return (
    <section className={`w-full bg-[#050B23] text-white pt-16 pb-32 flex flex-col items-center select-none overflow-hidden ${poppins.className}`}>
      
      {/* RESPONSIVE WRAPPER */}
      <div className="transform scale-[0.8] lg:scale-[0.85] xl:scale-[0.9] 2xl:scale-100 origin-top transition-transform duration-300 relative">
          
          {/* ---- HEADER ---- */}
          <div className="w-[1224px] flex items-center gap-3 border-b border-white/10 pb-4 mb-12">
            <div className="w-3 h-3 rounded-full bg-[#D7B58A]" />
            <p className="text-[20px] tracking-wider font-semibold uppercase">
              OUR PRODUCTS
            </p>
          </div>

          {/* ---- UPPER PART: LEFT + RIGHT CARDS ---- */}
          <div className="w-[1224px] flex justify-between relative z-10">
            
            {/* ======================= LEFT CARD (TAILORING) ======================= */}
            <div
              className="w-[600px] h-[420px] rounded-[30px] relative overflow-hidden"
              style={{
                background: leftCardBg,
                ...cardBorderStyles,
                maskImage: topMask,
                WebkitMaskImage: topMask,
              }}
            >
              <div className="absolute left-10 top-10 w-[117px] h-[117px] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#D7B58A]/30 bg-[#D7B58A]/5" />
                <Image src="/sewing.png" alt="Tailoring" width={95} height={95} className="opacity-90 relative z-10" />
              </div>
              <p className={`absolute top-12 left-[190px] w-[400px] ${descStyle}`}>
                Expertly Tailored Uniforms Designed For <br /> Precision, Comfort, And Lasting Elegance.
              </p>
              <div className="absolute left-10 top-[130px] bottom-0 w-[117px] flex items-center justify-center">
                 <p className={verticalTextStyle} style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                   TAILORING
                 </p>
              </div>
            </div>


            {/* ======================= RIGHT CARD (EMBROIDERY) ======================= */}
            <div
              className="w-[600px] h-[420px] rounded-[30px] relative overflow-hidden"
              style={{
                background: rightCardBg,
                  ...cardBorderStyles,
                maskImage: topMaskRight,
                WebkitMaskImage: topMaskRight,
              }}
            >
              <div className="absolute right-10 top-10 w-[117px] h-[117px] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#D7B58A]/30 bg-[#D7B58A]/5" />
                <Image src="/embroidery.png" alt="Embroidery" width={75} height={75} className="opacity-90 relative z-10 left-2 top-1" />
              </div>
              <p className={`absolute top-12 right-[170px] w-[400px] text-right ${descStyle}`}>
                Intricate Embroidery That Brings Your Brand’s <br /> Identity To Life — One Stitch At A Time.
              </p>
              <div className="absolute right-10 top-[130px] bottom-0 w-[117px] flex items-center justify-center">
                 <p className={verticalTextStyle} style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                   EMBROIDERY
                 </p>
              </div>
            </div>
          </div>
          
          {/* ---- MIDDLE PART: TEXT ROW & CENTER LOGO ---- */}
          <div className="w-[1224px] flex justify-between items-center py-2 relative z-20">
              <p className={`${cormorant.className} text-[24px] tracking-[0.84em] uppercase`}>DANNY TAILORS</p>
              
              {/* === CENTRAL GRAIN GLOW === */}
              {/* This container sits behind the logo but above the background */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] z-25 pointer-events-none flex items-center justify-center"
              >
                  {/* 1. The Gradient: Soft Golden Light */}
                  <div className="absolute inset-0 rounded-full" 
                       style={{ background: `radial-gradient(circle, rgba(215, 181, 138, 0.45) 0%, transparent 70%)`, filter: 'blur(30px)' }} 
                  />
                  
                  {/* 2. The Grain Texture: Blended on top */}
                  <div className="absolute inset-0 rounded-full opacity-0"
                       style={{ backgroundImage: noiseTexture, mixBlendMode: 'overlay' }} 
                  />
              </div>

              {/* --- CENTER LOGO --- */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] z-30">
                 <Image src="/centerlogo.png" alt="Center Logo" fill className="object-contain" />
              </div>
              <p className={`${cormorant.className} text-[24px] tracking-[0.84em] uppercase`}>AND CLOTHIERS</p>
          </div>

          {/* ---- LOWER PART: BOTTOM CARD (UNIFORM) ---- */}
          <div
              className="w-[1224px] h-[450px] rounded-[30px] relative overflow-hidden flex items-end justify-between px-12 pb-16 z-10"
              style={{
                background: bottomCardBg,
                ...cardBorderStyles,
                maskImage: bottomMask,
                WebkitMaskImage: bottomMask,
              }}
            >
              <p className={`w-[400px] ${descStyle}`}>
                Professional Uniforms That Combine Style, <br /> Durability, And A Perfect Brand Fit.
              </p>
              <div className="flex flex-col items-center">
                  <div className="w-[117px] h-[117px] flex items-center justify-center relative mb-6">
                    <div className="absolute inset-0 rounded-full border border-[#D7B58A]/30 bg-[#D7B58A]/5" />
                    <Image src="/uniform.png" alt="Uniforms" width={65} height={65} className="opacity-90" />
                  </div>
                  <p className={`${verticalTextStyle} !whitespace-normal text-center indent-[0.44em]`}>
                    UNIFORM
                  </p>
              </div>
              <div className="w-[400px] flex justify-end">
                <a href="#" className={`${cormorant.className} text-[18px] tracking-[0.2em] text-[#D7B58A] uppercase underline underline-offset-8`}>
                  LEARN MORE
                </a>
              </div>
          </div>
      
      </div> 
    </section>
  );
}