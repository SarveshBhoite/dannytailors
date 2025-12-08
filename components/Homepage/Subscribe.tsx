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
    <section className="w-full bg-[#050B23] text-white flex justify-center pb-[5rem] sm:pb-[6rem] md:pb-[8rem] select-none px-[1.25rem] sm:px-[1.5rem] lg:px-0">
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[73.125rem] flex flex-col items-center">
        {/* ---------------- HEADING ---------------- */}
        <h2
          className={`
            ${montserrat.className} 
            text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.8125rem]
            font-light 
            uppercase 
            text-center 
            tracking-wide 
            mb-[2rem] sm:mb-[2.5rem] md:mb-[3.125rem]
          `}
        >
          Subscribe Today
        </h2>

        {/* ---------------- FORM CONTAINER ---------------- */}
        <form className="flex flex-col md:flex-row items-center justify-center w-full max-w-[28rem] md:max-w-none gap-[1rem] md:gap-0">
          {/* INPUT FIELD */}
          <input
            type="email"
            placeholder="email id here"
            className={`
              ${prompt.className}
              w-full md:w-[26.3125rem] 
              h-[3.5rem] sm:h-[3.75rem] md:h-[4.625rem] 
              bg-white 
              border border-[#BB9D7B] 
              px-[1.25rem] sm:px-[1.5rem] md:px-[3.125rem] 
              text-[0.9375rem] sm:text-[1rem] md:text-[1.25rem] 
              font-light text-[#666666]
              placeholder:text-[#666666]/50 
              focus:outline-none focus:border-[#D2B589] focus:ring-2 focus:ring-[#D2B589]/20
              rounded-none appearance-none
              transition-all duration-300
            `}
          />

          {/* SUBSCRIBE BUTTON */}
          <button
            type="submit"
            className={`
              ${prompt.className}
              w-full md:w-[17.1875rem] 
              h-[3.5rem] sm:h-[3.75rem] md:h-[4.625rem] 
              bg-[#D2B589] 
              text-white 
              text-[0.9375rem] sm:text-[1rem] md:text-[1.25rem] 
              font-normal 
              hover:bg-white 
              hover:text-[#050B23]
              active:scale-[0.98]
              transition-all duration-300
              flex items-center justify-center
            `}
          >
            Subscribe
          </button>
        </form>

        {/* ---------------- HELPER TEXT (Mobile) ---------------- */}
        <p
          className={`${prompt.className} text-[0.75rem] sm:text-[0.8125rem] text-white/40 text-center mt-[1rem] sm:mt-[1.25rem] md:hidden`}
        >
          Get updates on new collections & exclusive offers
        </p>
      </div>
    </section>
  );
}