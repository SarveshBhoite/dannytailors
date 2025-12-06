"use client";

import React, { useState } from "react";
import { Montserrat, Montserrat_Alternates, Lexend } from "next/font/google";

// 1. CONFIGURE FONTS
const mont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const montAlt = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400"],
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["500"],
});

// 2. DATA
const testimonials = [
  {
    id: "01",
    name: "MARK LEE",
    role: "Marketing Manager — Vills Sud",
    text: "Exceptional service and quality. The uniforms have truly elevated our brand presence.",
  },
  {
    id: "02",
    name: "MARK LEE",
    role: "Marketing Manager — Vills Sud",
    text: "Célestique's approach to sustainable design really resonated with us. They incorporated eco-friendly materials without sacrificing style or quality, creating a home that's both beautiful and environmentally conscious. We're thrilled with the results!",
  },
  {
    id: "03",
    name: "MARK LEE",
    role: "Marketing Manager — Vills Sud",
    text: "A seamless experience from start to finish. Highly recommended for corporate attire.",
  },
  {
    id: "04",
    name: "MARK LEE",
    role: "Marketing Manager — Vills Sud",
    text: "The attention to detail is unmatched. Our team loves the new look.",
  },
  {
    id: "05",
    name: "MARK LEE",
    role: "Marketing Manager — Vills Sud",
    text: "Professional, timely, and stylish. Exactly what we needed.",
  },
];

export default function Testimonials() {
  const [openId, setOpenId] = useState<string | null>("02");

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#050B23] text-white flex justify-center pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-5 sm:px-6 lg:px-0 select-none">
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1224px] flex flex-col items-center">
        {/* ---------------- HEADER ---------------- */}
        <div className="w-full flex items-center gap-2 sm:gap-3 border-b border-white/10 pb-4 sm:pb-5 lg:pb-6 mb-1">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#D7B58A]/50" />
          <p
            className={`${mont.className} text-[13px] sm:text-[15px] lg:text-[17px] font-medium uppercase tracking-wide text-white`}
          >
            OUR CLIENTS
          </p>
        </div>

        {/* ---------------- TITLE ---------------- */}
        <h2
          className={`${mont.className} text-[26px] sm:text-[34px] md:text-[42px] lg:text-[51px] leading-[125%] lg:leading-[111%] text-[#D7B58A] text-center font-normal mb-8 sm:mb-10 md:mb-12 lg:mb-16 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]`}
        >
          <span className="uppercase text-[0.8em]">
            Success Stories From <br /> Our Clients
          </span>
        </h2>

        {/* ---------------- TESTIMONIALS LIST ---------------- */}
        <div className="w-full">
          {testimonials.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => toggleOpen(item.id)}
                className={`
                  w-full 
                  border-b border-white/5 
                  transition-all duration-500 ease-in-out cursor-pointer
                  flex flex-col
                  px-4 py-5 sm:px-6 sm:py-6 md:px-10 md:py-7 lg:px-16 lg:py-8
                  ${isOpen ? "bg-[#212F52]" : "bg-transparent hover:bg-white/5"}
                `}
              >
                {/* ============================================
                    MOBILE LAYOUT (Below md)
                   ============================================ */}
                <div className="md:hidden">
                  {/* Single Row: ID + Profile + Arrow */}
                  <div className="flex items-center w-full">
                    {/* LEFT: ID Number */}
                    <span
                      className={`${lexend.className} text-[13px] sm:text-[14px] text-white/40 font-medium w-[28px] sm:w-[32px] shrink-0`}
                    >
                      {item.id}
                    </span>

                    {/* CENTER: Profile Block */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {/* Avatar */}
                      <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#AAAAAA] shrink-0" />

                      {/* Name & Role */}
                      <div className="flex flex-col min-w-0 flex-1">
                        <p
                          className={`${mont.className} text-[14px] sm:text-[15px] font-medium uppercase text-white leading-none mb-0.5 sm:mb-1 truncate`}
                        >
                          {item.name}
                        </p>
                        <p
                          className={`${montAlt.className} text-[10px] sm:text-[11px] text-white/50 capitalize leading-tight truncate`}
                        >
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT: Arrow Button Only */}
                    <div
                      className={`
                        w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] 
                        rounded-full 
                        flex items-center justify-center 
                        shrink-0 ml-3
                        transition-all duration-300
                        ${isOpen ? "bg-[#D7B58A]/20" : "bg-white/5"}
                      `}
                    >
                      <div
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-0" : "rotate-180"
                        }`}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 19V5M12 5L5 12M12 5L19 12"
                            stroke={isOpen ? "#D7B58A" : "white"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Text */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-500 ease-in-out
                      ${isOpen ? "max-h-[300px] opacity-100 mt-4 sm:mt-5" : "max-h-0 opacity-0 mt-0"}
                    `}
                  >
                    <div className="pl-[28px] sm:pl-[32px]">
                      <p
                        className={`${mont.className} text-[12px] sm:text-[13px] leading-[175%] text-white/80 font-normal`}
                      >
                        "{item.text}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* ============================================
                    DESKTOP LAYOUT (md and above)
                   ============================================ */}
                <div className="hidden md:block">
                  {/* ROW HEADER */}
                  <div className="flex items-center justify-between w-full">
                    {/* LEFT: ID Number */}
                    <span
                      className={`${lexend.className} text-[15px] lg:text-[17px] text-white font-medium w-[30px]`}
                    >
                      {item.id}
                    </span>

                    {/* CENTER: Profile Block */}
                    <div className="flex items-center gap-3 lg:gap-4 flex-1 ml-12 lg:ml-24">
                      {/* Avatar */}
                      <div className="w-[38px] h-[38px] lg:w-[42px] lg:h-[42px] rounded-full bg-[#AAAAAA] shrink-0" />

                      {/* Name & Role */}
                      <div className="flex flex-col">
                        <p
                          className={`${mont.className} text-[17px] lg:text-[20px] font-medium uppercase text-white leading-none mb-1`}
                        >
                          {item.name}
                        </p>
                        <p
                          className={`${montAlt.className} text-[12px] lg:text-[13px] text-white/60 capitalize`}
                        >
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT: Action Button */}
                    <div className="flex items-center gap-2 lg:gap-3">
                      <span
                        className={`${lexend.className} text-[12px] lg:text-[13px] font-medium uppercase text-white tracking-wide`}
                      >
                        {isOpen ? "CLOSE" : "READ REVIEW"}
                      </span>
                      <div
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-0" : "rotate-180"
                        }`}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="lg:w-[28px] lg:h-[28px]"
                        >
                          <path
                            d="M12 19V5M12 5L5 12M12 5L19 12"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* ROW BODY: Expandable Text */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-500 ease-in-out pl-[calc(30px+3rem)] lg:pl-[calc(30px+6rem)] pr-8 lg:pr-12
                      ${isOpen ? "max-h-[200px] opacity-100 mt-5 lg:mt-6" : "max-h-0 opacity-0 mt-0"}
                    `}
                  >
                    <p
                      className={`${mont.className} text-[13px] lg:text-[14px] leading-[160%] uppercase text-white font-medium w-full`}
                    >
                      "{item.text}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}