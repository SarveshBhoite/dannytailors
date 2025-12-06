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
    // UPDATED: pt-0 (closer to top), pb-60 (more space at bottom)
    <section className="w-full bg-[#050B23] text-white flex justify-center pt-0 pb-60 select-none relative z-10">
      
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row-reverse items-start justify-between gap-16 lg:gap-8 px-6 lg:px-0">

        {/* ==============================================================
            RIGHT COLUMN: TEXT CONTENT
           ============================================================== */}
        <div className="flex flex-col items-start w-full lg:w-[350px] shrink-0 pt-8">
          
          {/* HEADING */}
          <h2 className={`${cormorant.className} text-[45px] leading-[120%] text-[#D2B589] uppercase mb-8`}>
            Recent <br /> Blogs
          </h2>

          {/* DESCRIPTION */}
          <p className={`${montserrat.className} text-[20px] leading-[150%] font-light text-white mb-12`}>
            Enim nunc faucibus a pellentesque sit amet. Adipiscing elit duis tristique sollicitudin. Sed sed risus pretium quam vulputate.
          </p>

          {/* BUTTON */}
          <button className={`${prompt.className} w-[255px] h-[60px] bg-[#D2B589] text-white text-[20px] font-normal hover:bg-[#c5a676] transition-colors flex items-center justify-center`}>
            See Our Blogs
          </button>

        </div>


        {/* ==============================================================
            LEFT COLUMN: BLOG CARDS
           ============================================================== */}
        <div className="flex flex-col md:flex-row gap-8 w-full justify-start">
          
          {blogs.map((blog) => (
            <div key={blog.id} className="relative w-full md:w-[370px] shrink-0 mb-32 md:mb-0 group cursor-pointer">
              
              {/* 1. IMAGE CONTAINER */}
              <div className="w-full h-[340px] relative overflow-hidden">
                <Image
                  src={blog.image} 
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#252525]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* 2. CONTENT CARD (Overlapping) */}
              {/* UPDATED: Fixed height h-[260px] ensures both white boxes are exactly the same size */}
              <div 
                className="
                  absolute left-[10%] right-0 top-[71%] 
                  bg-white 
                  p-8 flex flex-col items-start justify-center
                  shadow-lg
                  h-[260px] 
                "
              >
                {/* Date */}
                <p className={`${prompt.className} text-[18px] text-[#252525] font-normal mb-3`}>
                  {blog.date}
                </p>

                {/* Title */}
                <h3 className={`${montserrat.className} text-[28px] leading-[120%] text-[#252525] font-normal mb-6`}>
                  {blog.title}
                </h3>

                {/* Read More Link */}
                <span className={`${prompt.className} text-[18px] text-[#252525] font-normal border-b border-[#252525] pb-0.5 hover:opacity-70 transition-opacity`}>
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