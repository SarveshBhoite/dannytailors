/* eslint-disable react-hooks/static-components */
"use client";

import Image from "next/image";
import React from "react";
import { Montserrat, Roboto, Lexend } from "next/font/google";

// 1. CONFIGURE FONTS
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function Footer() {
  const products = [
    "TANK TOP",
    "T-SHIRT",
    "LONG-SLEEVE T-SHIRT",
    "RAGLAN SLEEVE SHIRT",
    "CROP TOP",
    "V-NECK SHIRT",
    "MUSCLE SHIRT",
  ];

  // Helper to render one complete set of items (Text + Icon)
  const MarqueeSet = () => (
    <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 px-3 sm:px-4 lg:px-6 shrink-0">
      {products.map((item, index) => (
        <React.Fragment key={index}>
          <p
            className={`${roboto.className} text-[12px] sm:text-[16px] md:text-[18px] lg:text-[22.5px] text-[#AE9B84] uppercase whitespace-nowrap`}
          >
            {item}
          </p>
          <Image
            src="/spokeicon.png"
            alt="spoke"
            width={45}
            height={45}
            className="opacity-100 w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] md:w-[35px] md:h-[35px] lg:w-[45px] lg:h-[45px]"
          />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <footer className="w-full bg-[#050B23] text-white select-none pb-6 sm:pb-8 overflow-hidden">
      {/* --- CUSTOM CSS --- */}
      <style jsx>{`
        /* Smooth Infinite Scroll Animation */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .marquee-container {
          display: flex;
          overflow: hidden;
          user-select: none;
          gap: 0;
        }

        .marquee-content {
          flex-shrink: 0;
          display: flex;
          justify-content: space-around;
          min-width: 100%;
          gap: 0;
          animation: scroll 40s linear infinite;
        }

        /* CUSTOM BORDERS */
        .dash-border-y {
          background-image: linear-gradient(
              to right,
              #262626 60%,
              transparent 40%
            ),
            /* Top */ linear-gradient(to right, #262626 60%, transparent 40%); /* Bottom */
          background-position: top, bottom;
          background-size: 20px 1.5px;
          background-repeat: repeat-x;
        }

        .dash-border-top {
          background-image: linear-gradient(
            to right,
            #262626 60%,
            transparent 40%
          );
          background-position: top;
          background-size: 20px 1.5px;
          background-repeat: repeat-x;
        }
      `}</style>

      {/* ==============================================================
          1. TOP MARQUEE (SMOOTH SLIDER)
         ============================================================== */}
      <div className="w-full dash-border-y py-4 sm:py-5 lg:py-6 bg-[#050B23] z-10">
        <div className="marquee-container">
          <div className="marquee-content">
            <MarqueeSet />
          </div>
          <div className="marquee-content">
            <MarqueeSet />
          </div>
        </div>
      </div>

      {/* ==============================================================
          2. MAIN CONTENT (Logo & Socials)
         ============================================================== */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-0 py-10 sm:py-12 md:py-14 lg:py-[70px] px-6 sm:px-10 md:px-16 lg:px-[121.5px]">
        {/* Logo Text */}
        <h1
          className={`${montserrat.className} text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[100px] font-bold tracking-tight leading-[1.02] text-center lg:text-left`}
        >
          Danny Tailors
        </h1>

        {/* Social Icons */}
        <div className="flex gap-3 sm:gap-[15px]">
          {["instagram", "dribbble", "twitter", "facebook"].map((social) => (
            <div
              key={social}
              className="w-[38px] h-[38px] sm:w-[40px] sm:h-[40px] lg:w-[42.5px] lg:h-[42.5px] bg-[#D6CDC2] rounded-[8px] sm:rounded-[9px] flex items-center justify-center hover:bg-[#AE9B84] transition-colors cursor-pointer"
            >
              <Image
                src={`/${social}.svg`}
                alt={social}
                width={20}
                height={20}
                className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* DIVIDER 1: Full Width Dashed (Below Logo) */}
      <div className="w-full dash-border-top h-[2px] mb-8 sm:mb-10 lg:mb-14"></div>

      {/* ==============================================================
          3. CONTENT WRAPPER (Address, Divider, Copyright)
         ============================================================== */}
      <div className="w-full mx-auto px-6 sm:px-10 md:px-12 lg:px-10">
        {/* ADDRESS & CONTACT ROW - Spacious grid on mobile */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:gap-8 lg:flex lg:justify-between lg:items-start mb-8 sm:mb-10">
          {/* Address */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <p
              className={`${lexend.className} text-[13px] sm:text-[14px] lg:text-[16px] font-medium text-white uppercase tracking-wide`}
            >
              ADDRESS
            </p>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <p
                className={`${lexend.className} text-[12px] sm:text-[13px] lg:text-[16px] font-light text-white/60 uppercase leading-relaxed`}
              >
                SANTACRUZ EAST
              </p>
              <p
                className={`${lexend.className} text-[12px] sm:text-[13px] lg:text-[16px] font-light text-white/60 uppercase leading-relaxed`}
              >
                MUMBAI, INDIA
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3 sm:gap-4 text-right lg:text-left lg:px-10">
            <p
              className={`${lexend.className} text-[13px] sm:text-[14px] lg:text-[16px] font-medium text-white uppercase tracking-wide`}
            >
              CONTACT
            </p>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              {/* Mobile: Stacked | Desktop: Inline */}
              <div className="flex flex-col lg:flex-row lg:gap-1">
                <p
                  className={`${lexend.className} text-[12px] sm:text-[13px] lg:text-[16px] font-light text-white/60 uppercase leading-relaxed`}
                >
                  +1 234 567 890
                </p>
                <p
                  className={`${lexend.className} text-[11px] sm:text-[13px] lg:text-[16px] font-light text-white/40 lg:text-white/60 uppercase leading-relaxed`}
                >
                  <span className="hidden lg:inline">—</span> JOHN SMITH
                </p>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-1">
                <p
                  className={`${lexend.className} text-[12px] sm:text-[13px] lg:text-[16px] font-light text-white/60 uppercase leading-relaxed`}
                >
                  +1 346 987 342
                </p>
                <p
                  className={`${lexend.className} text-[11px] sm:text-[13px] lg:text-[16px] font-light text-white/40 lg:text-white/60 uppercase leading-relaxed`}
                >
                  <span className="hidden lg:inline">—</span> JANE RAY
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER 2: Solid Light Border (Restricted Width) */}
        <div className="w-full border-t border-[rgba(255,255,255,0.2)] mb-6 sm:mb-8 lg:mb-10"></div>

        {/* COPYRIGHT & LINKS */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-6">
          {/* Copyright - First on mobile (top), left on desktop */}
          <p
            className={`${lexend.className} text-[10px] sm:text-[12px] lg:text-[14px] font-medium text-white/70 sm:text-white uppercase text-center sm:text-left order-1 sm:order-1`}
          >
            ©2024 DANNY TAILORS & CLOTHIERS ALL RIGHTS RESERVED
          </p>

          {/* Links - Second on mobile (below copyright), right on desktop */}
          <div
            className={`w-full sm:w-auto flex justify-between sm:justify-end sm:gap-8 ${lexend.className} text-[11px] sm:text-[13px] lg:text-[14px] font-medium text-white uppercase order-2 sm:order-2`}
          >
            <a
              href="#"
              className="hover:text-[#AE9B84] transition-colors py-1"
            >
              TERMS OF USE
            </a>
            <a
              href="#"
              className="hover:text-[#AE9B84] transition-colors py-1"
            >
              BACK TO TOP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}