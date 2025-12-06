"use client";

import Image from "next/image";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

// FONTS
const mont = Montserrat({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"] 
});
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600"] 
});

export default function ProductGrid() {
  return (
    <section className="w-full bg-[#050B23] text-white flex justify-center pt-0 pb-24 select-none">
      <div className="w-full max-w-[1224px] flex flex-col gap-12 px-6 lg:px-0">

        {/* ---------------- HEADER ---------------- */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#D7B58A]" />
            <p className={`${mont.className} text-[14px] md:text-[20px] font-medium uppercase tracking-[0.05em] text-white`}>
              OUR PRODUCTS
            </p>
          </div>

          {/* =========================================================================
              CUSTOM VIEW ALL BUTTON (SVG BORDER)
              Replaces the previous CSS border with the SVG logic from your Navbar
             ========================================================================= */}
          <button className="relative w-[111px] h-[47px] flex items-center justify-center gap-2 text-white group">
            
            {/* SVG Border Layer (Absolute Positioned) */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none"
              viewBox="0 0 111 47" 
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <rect
                x="0.75" // Half stroke width to prevent clipping
                y="0.75"
                width="109.5" // 111 - 1.5 (2 * stroke width)
                height="45.5" // 47 - 1.5
                rx="9" // Border Radius
                stroke="#8B744B" // Dark Golden Color
                strokeWidth="0.75"
                strokeDasharray="6 3" // Dash pattern (Adjust if needed: "dash gap")
              />
            </svg>

            {/* Corner Brackets (The 'Shape' layers from Figma - OPTIONAL) */}
            {/* If you want the solid corners ON TOP of the SVG dash, keep these. 
                If you purely want the Navbar style (just dashes), remove these 4 divs. */}
            <div className="absolute top-[0.5px] left-[0.5px] w-[10px] h-[10px] border-t-[0.75px] border-l-[0.75px] border-[#D2B589] rounded-tl-[9px]" />
            <div className="absolute top-[0.5px] right-[0.5px] w-[10px] h-[10px] border-t-[0.75px] border-r-[0.75px] border-[#D2B589] rounded-tr-[9px]" />
            <div className="absolute bottom-[0.5px] right-[0.5px] w-[10px] h-[10px] border-b-[0.75px] border-r-[0.75px] border-[#D2B589] rounded-br-[9px]" />
            <div className="absolute bottom-[0.5px] left-[0.5px] w-[10px] h-[10px] border-b-[0.75px] border-l-[0.75px] border-[#D2B589] rounded-bl-[9px]" />


            {/* Button Content */}
            <span className={`${mont.className} text-[13.5px] font-normal z-10 tracking-wide`}>View All</span>
            
            {/* Arrow Icon */}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

        </div>

        {/* ---------------- GRID SECTION ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 -mt-5">
          
          {/* =========== LEFT COLUMN =========== */}
          <div className="flex flex-col gap-12"> 
            
            {/* 1. UNIFORM */}
            <div className="relative w-full h-[385px] overflow-hidden bg-white">
              <Image
                src="/products/image1.png"
                alt="Uniform"
                fill
                className="object-cover object-[0%_65%] object-[20%_63%] transform -translate-x-16 scale-[1.1]" 
              />
              <div className="absolute bottom-6 right-6">
                  <button className={`${mont.className} w-[185px] h-[40px] bg-[#D2B589] text-white text-[14px] font-medium uppercase tracking-widest hover:bg-white hover:text-[#050B23] transition-colors flex items-center justify-center`}>
                    Uniform
                  </button>
              </div>
            </div>

            {/* TEXT: SERVING THE INDUSTRY */}
            <div className="flex justify-center items-center py-2 h-[60px]">
                <p className={`${cormorant.className} text-[26px] md:text-[30px] tracking-[0.45em] uppercase text-[#D2B589] text-center whitespace-nowrap`}>
                  Serving The Industry
                </p>
            </div>

            {/* 2. CHEF COATS */}
            <div className="relative w-full h-[800px] overflow-hidden bg-white">
              <Image
                src="/products/image2.png"
                alt="Chef Coats"
                fill
                className="object-cover object-[50%_0%]"
              />
              <div className="absolute bottom-6 right-6">
                  <button className={`${mont.className} w-[185px] h-[40px] bg-white text-[#8B744B] text-[14px] font-semibold uppercase tracking-widest hover:bg-[#D7B58A] hover:text-white transition-colors flex items-center justify-center`}>
                    Chef Coats
                  </button>
              </div>
            </div>

          </div>

          {/* =========== RIGHT COLUMN =========== */}
          <div className="flex flex-col gap-12">

            {/* 3. APRONS */}
            <div className="relative w-full h-[800px] overflow-hidden bg-white">
              <Image
                src="/products/image3.png"
                alt="Aprons"
                fill
                className="object-cover object-[50%_20%]" 
              />
              <div className="absolute bottom-6 right-6">
                  <button className={`${mont.className} w-[185px] h-[40px] bg-white text-[#8B744B] text-[14px] font-semibold uppercase tracking-widest hover:bg-[#D7B58A] hover:text-white transition-colors flex items-center justify-center`}>
                    Aprons
                  </button>
              </div>
            </div>

            {/* TEXT: SINCE LAST 2 DECADES */}
            <div className="flex justify-center items-center py-2 h-[60px]">
                <p className={`${cormorant.className} text-[26px] md:text-[30px] tracking-[0.45em] uppercase text-[#D2B589] text-center whitespace-nowrap`}>
                  Since Last 2 Decades
                </p>
            </div>

            {/* 4. PANTS */}
            <div className="relative w-full h-[385px] overflow-hidden bg-white">
              <Image
                src="/products/image4.png"
                alt="Pants"
                fill
                className="object-cover object-[0%_0%] transform -translate-x-20"
              />
              <div className="absolute bottom-6 right-6">
                  <button className={`${mont.className} w-[185px] h-[40px] bg-[#D2B589] text-white text-[14px] font-medium uppercase tracking-widest hover:bg-white hover:text-[#050B23] transition-colors flex items-center justify-center`}>
                    Pants
                  </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}