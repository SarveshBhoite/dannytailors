"use client";

import React from "react";
import { Montserrat, Prompt } from "next/font/google";

// 1. CONFIGURE FONTS
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300"],
});

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function SubscribeSection() {
  return (
    <section className="w-full bg-[#050B23] text-white flex justify-center py-20 md:pb-32 select-none">
      
      {/* MAIN CONTAINER: Max Width 1170px | Added px-6 for mobile safety */}
      <div className="w-full max-w-[1170px] flex flex-col items-center px-6 lg:px-0">

        {/* ---------------- HEADING ---------------- */}
        <h2 
          className={`
            ${montserrat.className} 
            text-[32px] md:text-[45px] 
            font-light 
            uppercase 
            text-center 
            tracking-wide 
            mb-10 md:mb-[50px]
          `}
        >
          Subscribe Today
        </h2>

        {/* ---------------- FORM CONTAINER ---------------- */}
        {/* Mobile: Column with gap | Desktop: Row with NO gap (Merged look) */}
        <form className="flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-0">
          
          {/* INPUT FIELD */}
          {/* Mobile: Full Width, 60px height | Desktop: 421px width, 74px height */}
          <input
            type="email"
            placeholder="email id here"
            className={`
              ${prompt.className}
              w-full md:w-[421px] 
              h-[60px] md:h-[74px] 
              bg-white 
              border border-[#BB9D7B] 
              px-6 md:px-[50px] 
              text-[16px] md:text-[20px] font-light text-[#666666]
              placeholder:text-[#666666]/50 
              focus:outline-none focus:border-[#D2B589]
              rounded-none appearance-none
            `}
          />

          {/* SUBSCRIBE BUTTON */}
          {/* Mobile: Full Width, 60px height | Desktop: 275px width, 74px height */}
          <button
            type="submit"
            className={`
              ${prompt.className}
              w-full md:w-[275px] 
              h-[60px] md:h-[74px] 
              bg-[#D2B589] 
              text-white 
              text-[16px] md:text-[20px] font-normal 
              hover:bg-[#ffffff] 
              hover:text-black
              transition-colors duration-300
              flex items-center justify-center
            `}
          >
            Subscribe
          </button>

        </form>

      </div>
    </section>
  );
}