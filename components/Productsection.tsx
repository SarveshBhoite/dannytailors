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
  // CONFIGURATION
  const cutoutSize = "150px";
  const bottomCutoutSize = "160px";

  // COLORS & STYLES
  const cardBackgroundGradient = "linear-gradient(180deg, #1A2138 0%, #050B23 100%)";
  const cardBorderStyles = {
      border: "1px solid rgba(255, 255, 255, 0.05)",
      boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)"
  }

  // --- TYPOGRAPHY STYLES ---
  // UPDATED: Added 'antialiased' for crispness, changed opacity to /70 for lightness, set leading to 100%
  const descStyle = `${montserrat.className} text-[16px] font-extralight leading-[100%] tracking-[0.05em] capitalize text-white/70 antialiased`;
  const verticalTextStyle = `${cormorant.className} text-[20px] font-medium leading-[100%] tracking-[0.44em] uppercase text-[#D7B58A] whitespace-nowrap`;

  return (
    <section className={`w-full bg-[#050B23] text-white pt-16 pb-32 flex flex-col items-center select-none overflow-hidden ${poppins.className}`}>
      
      {/* RESPONSIVE WRAPPER */}
      <div className="transform scale-[0.8] lg:scale-[0.85] xl:scale-[0.9] 2xl:scale-100 origin-top transition-transform duration-300">
          
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
                background: cardBackgroundGradient,
                ...cardBorderStyles,
                maskImage: `radial-gradient(circle at 100% 100%, transparent ${cutoutSize}, black ${parseInt(cutoutSize) + 1}px)`,
                WebkitMaskImage: `radial-gradient(circle at 100% 100%, transparent ${cutoutSize}, black ${parseInt(cutoutSize) + 1}px)`,
              }}
            >
              {/* Icon Container: 117px width */}
              <div className="absolute left-10 top-10 w-[117px] h-[117px] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#D7B58A]/30 bg-[#D7B58A]/5" />
                <Image src="/sewing.png" alt="Tailoring" width={95} height={95} className="opacity-90 relative z-10" />
              </div>

              {/* Text Description */}
              <p className={`absolute top-12 left-[190px] w-[400px] ${descStyle}`}>
                Expertly Tailored Uniforms Designed For <br /> Precision, Comfort, And Lasting Elegance.
              </p>

              {/* Vertical Text */}
              <div className="absolute left-10 top-[130px] bottom-0 w-[117px] flex items-center justify-center">
                 <p 
                    className={verticalTextStyle}
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                 >
                   TAILORING
                 </p>
              </div>
            </div>


            {/* ======================= RIGHT CARD (EMBROIDERY) ======================= */}
            <div
              className="w-[600px] h-[420px] rounded-[30px] relative overflow-hidden"
              style={{
                background: cardBackgroundGradient,
                  ...cardBorderStyles,
                maskImage: `radial-gradient(circle at 0% 100%, transparent ${cutoutSize}, black ${parseInt(cutoutSize) + 1}px)`,
                WebkitMaskImage: `radial-gradient(circle at 0% 100%, transparent ${cutoutSize}, black ${parseInt(cutoutSize) + 1}px)`,
              }}
            >
              {/* Icon Container: 117px width */}
              <div className="absolute right-10 top-10 w-[117px] h-[117px] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#D7B58A]/30 bg-[#D7B58A]/5" />
                <Image src="/embroidery.png" alt="Embroidery" width={75} height={75} className="opacity-90 relative z-10 left-2 top-1" />
              </div>

              {/* Text Description */}
              <p className={`absolute top-12 right-[170px] w-[400px] text-right ${descStyle}`}>
                Intricate Embroidery That Brings Your Brand’s <br /> Identity To Life — One Stitch At A Time.
              </p>

              {/* Vertical Text */}
              <div className="absolute right-10 top-[130px] bottom-0 w-[117px] flex items-center justify-center">
                 <p 
                    className={verticalTextStyle}
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                 >
                   EMBROIDERY
                 </p>
              </div>
            </div>
          </div>
          
          {/* ---- MIDDLE PART: TEXT ROW ---- */}
          <div className="w-[1224px] flex justify-between items-center py-2 relative z-0">
              <p className={`${cormorant.className} text-[24px] tracking-[0.84em] uppercase`}>DANNY TAILORS</p>
              {/* LOGO SPACE */}
              <p className={`${cormorant.className} text-[24px] tracking-[0.84em] uppercase`}>AND CLOTHIERS</p>
          </div>

          {/* ---- LOWER PART: BOTTOM CARD (UNIFORM) ---- */}
          <div
              className="w-[1224px] h-[450px] rounded-[30px] relative overflow-hidden flex items-end justify-between px-12 pb-16"
              style={{
                background: cardBackgroundGradient,
                ...cardBorderStyles,
                maskImage: `radial-gradient(circle at 50% 0%, transparent ${bottomCutoutSize}, black ${parseInt(bottomCutoutSize) + 1}px)`,
                WebkitMaskImage: `radial-gradient(circle at 50% 0%, transparent ${bottomCutoutSize}, black ${parseInt(bottomCutoutSize) + 1}px)`,
              }}
            >
              {/* Left Side: Description */}
              <p className={`w-[400px] ${descStyle}`}>
                Professional Uniforms That Combine Style, <br /> Durability, And A Perfect Brand Fit.
              </p>

              {/* Center Side: Icon & Title */}
              <div className="flex flex-col items-center">
                  <div className="w-[117px] h-[117px] flex items-center justify-center relative mb-6">
                    <div className="absolute inset-0 rounded-full border border-[#D7B58A]/30 bg-[#D7B58A]/5" />
                    <Image src="/uniform.png" alt="Uniforms" width={65} height={65} className="opacity-90" />
                  </div>
                  <p className={`${verticalTextStyle} !whitespace-normal text-center indent-[0.44em]`}>
                    UNIFORM
                  </p>
              </div>

              {/* Right Side: Link */}
              <div className="w-[400px] flex justify-end">
                <a href="#" className={`${cormorant.className} text-[18px] tracking-[0.2em] text-[#D7B58A] uppercase underline underline-offset-8`}>
                  LEARN MORE
                </a>
              </div>
          </div>
      
      </div> {/* End of Responsive Wrapper */}

    </section>
  );
}