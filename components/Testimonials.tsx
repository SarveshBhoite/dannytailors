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
  { id: "01", name: "MARK LEE", role: "Marketing Manager — Vills Sud", text: "Exceptional service and quality. The uniforms have truly elevated our brand presence." },
  { id: "02", name: "MARK LEE", role: "Marketing Manager — Vills Sud", text: "Célestique’s approach to sustainable design really resonated with us. They incorporated eco-friendly materials without sacrificing style or quality, creating a home that’s both beautiful and environmentally conscious. We’re thrilled with the results!" },
  { id: "03", name: "MARK LEE", role: "Marketing Manager — Vills Sud", text: "A seamless experience from start to finish. Highly recommended for corporate attire." },
  { id: "04", name: "MARK LEE", role: "Marketing Manager — Vills Sud", text: "The attention to detail is unmatched. Our team loves the new look." },
  { id: "05", name: "MARK LEE", role: "Marketing Manager — Vills Sud", text: "Professional, timely, and stylish. Exactly what we needed." },
];

export default function Testimonials() {
  const [openId, setOpenId] = useState<string | null>("02");

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#050B23] text-white flex justify-center pt-0 pb-24 select-none">
      
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1224px] flex flex-col items-center">

        {/* ---------------- HEADER ---------------- */}
        <div className="w-full flex items-center gap-3 border-b border-white/10 pb-6 mb-1">
          <div className="w-3 h-3 rounded-full bg-[#D7B58A]/50" />
          <p className={`${mont.className} text-[17px] font-medium uppercase tracking-wide text-white`}>
            OUR CLIENTS
          </p>
        </div>

        {/* ---------------- TITLE ---------------- */}
        <h2 className={`${mont.className} text-[51px] leading-[111%] text-[#D7B58A] text-center font-normal mb-16 w-[600px]`}>
          <span className="uppercase text-[0.8em]">Success Stories From <br /> Our Clients</span>
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
                  px-16 py-8
                  ${isOpen ? "bg-[#212F52]" : "bg-transparent hover:bg-white/5"}
                `}
              >
                {/* ROW HEADER: Contains ID, Profile, Button.
                   'items-center' ensures they are vertically aligned with each other.
                */}
                <div className="flex items-center justify-between w-full">
                  
                  {/* LEFT: ID Number */}
                  <span className={`${lexend.className} text-[17px] text-white font-medium w-[30px]`}>
                    {item.id}
                  </span>

                  {/* CENTER: Profile Block */}
                  <div className="flex items-center gap-4 flex-1 ml-24">
                    {/* Avatar */}
                    <div className="w-[42px] h-[42px] rounded-full bg-[#AAAAAA] shrink-0" />
                    
                    {/* Name & Role */}
                    <div className="flex flex-col">
                      <p className={`${mont.className} text-[20px] font-medium uppercase text-white leading-none mb-1`}>
                        {item.name}
                      </p>
                      <p className={`${montAlt.className} text-[13px] text-white/60 capitalize`}>
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT: Action Button */}
                  <div className="flex items-center gap-3">
                    <span className={`${lexend.className} text-[13px] font-medium uppercase text-white tracking-wide`}>
                      {isOpen ? "CLOSE" : "READ REVIEW"}
                    </span>
                    <div className={`transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-180"}`}>
                       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                    </div>
                  </div>

                </div>

                {/* ROW BODY: Expandable Text.
                   Separated from header to keep header alignment clean.
                */}
                <div 
                  className={`
                    overflow-hidden transition-all duration-500 ease-in-out pl-[calc(30px+6rem)] pr-12
                    ${isOpen ? "max-h-[200px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"}
                  `}
                >
                  <p className={`${mont.className} text-[14px] leading-[160%] uppercase text-white font-medium w-full`}>
                    "{item.text}"
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}