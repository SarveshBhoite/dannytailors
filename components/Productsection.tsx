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

  // Mobile arc configuration for circle effect
  const mobileCircleArcWidth = "120px";
  const mobileCircleArcHeight = "100px";

  // --- GRADIENT CONFIGURATION ---
  const glowColor = "rgba(215, 181, 138, 0.5)";
  const solidAccentColor = "#D7B58A";
  const solidBg = "#050B23";

  // --- NOISE TEXTURE (Base64 SVG) ---
  const noiseTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`;

  // --- DESKTOP MASKS ---
  const topMask = `radial-gradient(${arcWidth} ${arcHeight} at ${cornerPos}, transparent 98%, black 100%)`;
  const topMaskRight = `radial-gradient(${arcWidth} ${arcHeight} at 0% 100%, transparent 98%, black 100%)`;
  const bottomMask = `radial-gradient(160px 130px at 50% 0%, transparent 98%, black 100%)`;

  // --- MOBILE MASKS ---
  // Embroidery card: cutout at BOTTOM center
  const mobileEmbroideryMask = `radial-gradient(${mobileCircleArcWidth} ${mobileCircleArcHeight} at 50% 100%, transparent 98%, black 100%)`;
  // Uniform card: cutout at TOP center
  const mobileUniformMask = `radial-gradient(${mobileCircleArcWidth} ${mobileCircleArcHeight} at 50% 0%, transparent 98%, black 100%)`;

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

  // Mobile specific backgrounds with glow at cutout positions
  const mobileEmbroideryBg = `
    radial-gradient(circle at 50% 100%, ${solidAccentColor} 0%, transparent 10%),
    radial-gradient(circle at 50% 100%, ${glowColor} 0%, transparent 55%),
    linear-gradient(0deg, ${solidBg}, ${solidBg})
  `;

  const mobileUniformBg = `
    radial-gradient(circle at 50% 0%, ${solidAccentColor} 0%, transparent 10%),
    radial-gradient(circle at 50% 0%, ${glowColor} 0%, transparent 55%),
    linear-gradient(0deg, ${solidBg}, ${solidBg})
  `;

  // Tailoring card - no glow effect on mobile (no cutout)
  const mobileTailoringBg = `linear-gradient(0deg, ${solidBg}, ${solidBg})`;

  const cardBorderStyles = {
    border: "1px solid rgba(255, 255, 255, 0.05)",
    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
  };

  // --- TYPOGRAPHY STYLES ---
  const descStyle = `${montserrat.className} text-[13px] sm:text-[14px] lg:text-[16px] font-extralight leading-[140%] lg:leading-[100%] tracking-[0.05em] capitalize text-white/70 antialiased`;
  const verticalTextStyle = `${cormorant.className} text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[100%] tracking-[0.44em] uppercase text-[#D7B58A] whitespace-nowrap`;

  return (
    <section
      className={`w-full bg-[#050B23] text-white pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-12 flex flex-col items-center select-none overflow-hidden ${poppins.className}`}
    >
      {/* ============================================================= */}
      {/* MOBILE LAYOUT (Default - visible below lg breakpoint) */}
      {/* ============================================================= */}
      <div className="lg:hidden w-full max-w-md sm:max-w-lg px-5 sm:px-6">
        {/* ---- HEADER ---- */}
        <div className="flex items-center gap-2 sm:gap-3 border-b border-white/10 pb-3 sm:pb-4 mb-8 sm:mb-10">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#D7B58A]" />
          <p className="text-[14px] sm:text-[16px] tracking-wider font-semibold uppercase">
            OUR PRODUCTS
          </p>
        </div>

        {/* ---- MOBILE CARDS STACK ---- */}
        <div className="flex flex-col">
          {/* ======================= TAILORING CARD (No Cutout) ======================= */}
          <div
            className="w-full h-[240px] sm:h-[280px] rounded-[20px] sm:rounded-[25px] relative overflow-hidden mb-6 sm:mb-8"
            style={{
              background: mobileTailoringBg,
              ...cardBorderStyles,
              // No mask - full rounded card
            }}
          >
            {/* Icon - moved up */}
            <div className="absolute left-1/2 -translate-x-1/2 top-5 sm:top-6 w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#D7B58A]/30 bg-[#D7B58A]/5" />
              <Image
                src="/sewing.png"
                alt="Tailoring"
                width={55}
                height={55}
                className="opacity-90 relative z-10 sm:w-[70px] sm:h-[70px]"
              />
            </div>

            {/* Title - tighter to icon */}
            <p
              className={`${cormorant.className} text-[16px] sm:text-[18px] font-medium tracking-[0.3em] uppercase text-[#D7B58A] absolute top-[95px] sm:top-[105px] left-1/2 -translate-x-1/2 text-center`}
            >
              TAILORING
            </p>

            {/* Description - tighter to title */}
            <p
              className={`absolute top-[140px] sm:top-[145px] left-5 right-5 text-center ${descStyle}`}
            >
              Expertly Tailored Uniforms Designed For Precision, Comfort, And
              Lasting Elegance.
            </p>
          </div>

          {/* ======================= EMBROIDERY CARD (Bottom Cutout) ======================= */}
          <div
            className="w-full h-[295px] sm:h-[320px] rounded-[20px] sm:rounded-[25px] relative overflow-hidden"
            style={{
              background: mobileEmbroideryBg,
              ...cardBorderStyles,
              maskImage: mobileEmbroideryMask,
              WebkitMaskImage: mobileEmbroideryMask,
            }}
          >
            {/* Icon */}
            <div className="absolute left-1/2 -translate-x-1/2 top-5 sm:top-6 w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#D7B58A]/30 bg-[#D7B58A]/5" />
              <Image
                src="/embroidery.png"
                alt="Embroidery"
                width={50}
                height={50}
                className="opacity-90 relative z-10 left-1 top-0.5 sm:w-[60px] sm:h-[60px]"
              />
            </div>

            {/* Title */}
            <p
              className={`${cormorant.className} text-[16px] sm:text-[18px] font-medium tracking-[0.3em] uppercase text-[#D7B58A] absolute top-[95px] sm:top-[105px] left-1/2 -translate-x-1/2 text-center`}
            >
              EMBROIDERY
            </p>

            {/* Description */}
            <p
              className={`absolute top-[120px] sm:top-[145px] left-5 right-5 text-center ${descStyle}`}
            >
              Intricate Embroidery That Brings Your Brands Identity To Life —
              One Stitch At A Time.
            </p>
          </div>

          {/* ---- CENTER LOGO SECTION (Between Embroidery & Uniform) - TIGHTER GAP ---- */}
          <div className="w-full flex flex-col items-center py-1 sm:py-2 relative -my-6 sm:-my-8 z-20">
            {/* Glow effect - larger to connect both cards */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(215, 181, 138, 0.6) 0%, rgba(215, 181, 138, 0.25) 40%, transparent 70%)`,
                  filter: "blur(15px)",
                }}
              />
            </div>

            {/* Logo */}
            <div className="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] relative z-10">
              <Image
                src="/centerlogo.png"
                alt="Center Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* ======================= UNIFORM CARD (Top Cutout) ======================= */}
          <div
            className="w-full h-[320px] sm:h-[330px] rounded-[20px] sm:rounded-[25px] relative overflow-hidden flex flex-col items-center justify-end px-5 sm:px-6 pb-6 sm:pb-8"
            style={{
              background: mobileUniformBg,
              ...cardBorderStyles,
              maskImage: mobileUniformMask,
              WebkitMaskImage: mobileUniformMask,
            }}
          >
            {/* Icon - positioned below the cutout */}
            <div className="absolute top-[105px] sm:top-[95px] left-1/2 -translate-x-1/2 w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#D7B58A]/30 bg-[#D7B58A]/5" />
              <Image
                src="/uniform.png"
                alt="Uniforms"
                width={45}
                height={45}
                className="opacity-90 sm:w-[55px] sm:h-[55px]"
              />
            </div>

            {/* Title */}
            <p
              className={`${cormorant.className} text-[16px] sm:text-[18px] font-medium tracking-[0.3em] uppercase text-[#D7B58A] absolute top-[185px] sm:top-[205px] left-1/2 -translate-x-1/2 text-center`}
            >
              UNIFORM
            </p>

            {/* Description */}
            <p className={`text-center mb-4 sm:mb-5 ${descStyle}`}>
              Professional Uniforms That Combine Style, Durability, And A
              Perfect Brand Fit.
            </p>

            {/* Learn More Link */}
            <a
              href="#"
              className={`${cormorant.className} text-[14px] sm:text-[16px] tracking-[0.2em] text-[#D7B58A] uppercase underline underline-offset-8`}
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>

      {/* ============================================================= */}
      {/* DESKTOP LAYOUT (Original - visible at lg breakpoint and above) */}
      {/* ============================================================= */}
      <div className="hidden lg:block transform lg:scale-[0.85] xl:scale-[0.9] 2xl:scale-100 origin-top transition-transform duration-300 relative">
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
              <Image
                src="/sewing.png"
                alt="Tailoring"
                width={95}
                height={95}
                className="opacity-90 relative z-10"
              />
            </div>
            <p
              className={`absolute top-12 left-[190px] w-[400px] ${montserrat.className} text-[16px] font-extralight leading-[100%] tracking-[0.05em] capitalize text-white/70 antialiased`}
            >
              Expertly Tailored Uniforms Designed For <br /> Precision, Comfort,
              And Lasting Elegance.
            </p>
            <div className="absolute left-10 top-[130px] bottom-0 w-[117px] flex items-center justify-center">
              <p
                className={`${cormorant.className} text-[20px] font-medium leading-[100%] tracking-[0.44em] uppercase text-[#D7B58A] whitespace-nowrap`}
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
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
              <Image
                src="/embroidery.png"
                alt="Embroidery"
                width={75}
                height={75}
                className="opacity-90 relative z-10 left-2 top-1"
              />
            </div>
            <p
              className={`absolute top-12 right-[170px] w-[400px] text-right ${montserrat.className} text-[16px] font-extralight leading-[100%] tracking-[0.05em] capitalize text-white/70 antialiased`}
            >
              Intricate Embroidery That Brings Your Brands <br /> Identity To
              Life — One Stitch At A Time.
            </p>
            <div className="absolute right-10 top-[130px] bottom-0 w-[117px] flex items-center justify-center">
              <p
                className={`${cormorant.className} text-[20px] font-medium leading-[100%] tracking-[0.44em] uppercase text-[#D7B58A] whitespace-nowrap`}
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                EMBROIDERY
              </p>
            </div>
          </div>
        </div>

        {/* ---- MIDDLE PART: TEXT ROW & CENTER LOGO ---- */}
        <div className="w-[1224px] flex justify-between items-center py-2 relative z-20">
          <p
            className={`${cormorant.className} text-[24px] tracking-[0.84em] uppercase`}
          >
            DANNY TAILORS
          </p>

          {/* === CENTRAL GRAIN GLOW === */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] z-25 pointer-events-none flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, rgba(215, 181, 138, 0.45) 0%, transparent 70%)`,
                filter: "blur(30px)",
              }}
            />
            <div
              className="absolute inset-0 rounded-full opacity-0"
              style={{
                backgroundImage: noiseTexture,
                mixBlendMode: "overlay",
              }}
            />
          </div>

          {/* --- CENTER LOGO --- */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] z-30">
            <Image
              src="/centerlogo.png"
              alt="Center Logo"
              fill
              className="object-contain"
            />
          </div>
          <p
            className={`${cormorant.className} text-[24px] tracking-[0.84em] uppercase`}
          >
            AND CLOTHIERS
          </p>
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
          <p
            className={`w-[400px] ${montserrat.className} text-[16px] font-extralight leading-[100%] tracking-[0.05em] capitalize text-white/70 antialiased`}
          >
            Professional Uniforms That Combine Style, <br /> Durability, And A
            Perfect Brand Fit.
          </p>
          <div className="flex flex-col items-center">
            <div className="w-[117px] h-[117px] flex items-center justify-center relative mb-6">
              <div className="absolute inset-0 rounded-full border border-[#D7B58A]/30 bg-[#D7B58A]/5" />
              <Image
                src="/uniform.png"
                alt="Uniforms"
                width={65}
                height={65}
                className="opacity-90"
              />
            </div>
            <p
              className={`${cormorant.className} text-[20px] font-medium leading-[100%] tracking-[0.44em] uppercase text-[#D7B58A] !whitespace-normal text-center indent-[0.44em]`}
            >
              UNIFORM
            </p>
          </div>
          <div className="w-[400px] flex justify-end">
            <a
              href="#"
              className={`${cormorant.className} text-[18px] tracking-[0.2em] text-[#D7B58A] uppercase underline underline-offset-8`}
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}