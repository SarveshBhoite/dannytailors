"use client";

import Image from "next/image";
import React from "react";
import { Cormorant_Garamond, Montserrat, Prompt } from "next/font/google";

// 1. CONFIGURE FONTS
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["300", "400"],
});

// 2. BLOG DATA
const blogs = [
  {
    id: 1,
    date: "Aug 2025",
    title: "Classic Suits That Fits For Your Party",
    image: "/blog1.jpg",
  },
  {
    id: 2,
    date: "Aug 2025",
    title: "Elegant Suit Look For Your Office Meet",
    image: "/blog2.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-[#050B23] text-white flex justify-center pt-[2.5rem] sm:pt-[3rem] lg:pt-[3.75rem] pb-[4rem] sm:pb-[8rem] md:pb-[10rem] lg:pb-[12rem] -mt-[6rem] select-none relative z-10">
      <div
        className="w-full max-w-[68.75rem] 
                  flex flex-col lg:flex-row-reverse 
                  items-start 
                  justify-between 
                  gap-[2.5rem] sm:gap-[3rem] lg:gap-[3rem] 
                  px-[1.25rem] sm:px-[1.5rem] lg:px-0"
      >
        {/* RIGHT COLUMN — TEXT */}
        <div className="flex flex-col items-start w-full lg:w-[20rem] shrink-0 lg:-ml-[1.5rem]">
          <h2
            className={`${cormorant.className} text-[2rem] sm:text-[2.375rem] md:text-[2.625rem] lg:text-[2.8125rem] leading-[1.2] text-[#D2B589] uppercase mb-[1rem] sm:mb-[1.5rem] lg:mb-[2rem] font-light`}
          >
            Recent <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Blogs
          </h2>

          <p
            className={`${montserrat.className} text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.25rem] leading-[1.6] lg:leading-[1.5] font-light text-white/90 lg:text-white mb-[2rem] sm:mb-[2.5rem] lg:mb-[3rem]`}
          >
            Enim nunc faucibus a pellentesque sit amet. Adipiscing elit duis
            tristique sollicitudin. Sed sed risus pretium quam vulputate.
          </p>

          <button
            className={`${prompt.className} w-full sm:w-[13.75rem] lg:w-[15.9375rem] h-[3.125rem] sm:h-[3.375rem] lg:h-[3.75rem] bg-[#D2B589] text-white text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] font-normal hover:bg-[#c5a676] transition-colors flex items-center justify-center`}
          >
            See Our Blogs
          </button>
        </div>

        {/* LEFT COLUMN — BLOG CARDS */}
        <div className="flex flex-col sm:flex-row gap-[2rem] sm:gap-[1.5rem] md:gap-[2rem] w-full justify-start mt-[2rem] sm:mt-0">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(50%-1rem)] lg:w-[23.125rem] shrink-0 group cursor-pointer mb-[7rem] sm:mb-[8rem] lg:mb-[8rem]"
            >
              {/* 1. IMAGE CONTAINER */}
              <div className="w-full aspect-[4/3] sm:aspect-auto sm:h-[17.5rem] md:h-[19.375rem] lg:h-[21.25rem] relative overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#252525]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* 2. CONTENT CARD (Overlapping) - Fixed Height on Desktop */}
              <div
                className="
                  absolute 
                  left-[5%] sm:left-[8%] lg:left-[10%] 
                  right-[5%] sm:right-0 
                  top-[60%] sm:top-[65%] lg:top-[71%] 
                  bg-white 
                  p-[1.25rem] sm:p-[1.5rem] lg:p-[2rem] 
                  flex flex-col items-start
                  shadow-lg
                  h-auto sm:h-[12rem] lg:h-[15rem]
                "
              >
                {/* Date */}
                <p
                  className={`${prompt.className} text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] text-[#252525] font-normal mb-[0.5rem] sm:mb-[0.75rem]`}
                >
                  {blog.date}
                </p>

                {/* Title - Fixed height with line clamp for consistency */}
                <h3
                  className={`${montserrat.className} text-[1.125rem] sm:text-[1.375rem] lg:text-[1.75rem] leading-[1.25] lg:leading-[1.2] text-[#252525] font-normal mb-auto line-clamp-2 sm:line-clamp-3`}
                >
                  {blog.title}
                </h3>

                {/* Read More Link - Always at bottom */}
                <span
                  className={`${prompt.className} text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] text-[#252525] font-normal border-b border-[#252525] pb-[0.125rem] hover:opacity-70 transition-opacity mt-[1rem] sm:mt-0`}
                >
                  Read more
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}