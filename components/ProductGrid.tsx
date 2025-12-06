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
    <section className="w-full bg-[#050B23] text-white flex justify-center py-24 select-none">
      <div className="w-full max-w-[1224px] flex flex-col gap-12 px-6 lg:px-0">

        {/* ---------------- HEADER ---------------- */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#D7B58A]" />
            <p className={`${mont.className} text-[16px] md:text-[20px] font-medium uppercase tracking-[0.05em] text-white`}>
              OUR PRODUCTS
            </p>
          </div>

          {/* VIEW ALL BUTTON */}
          <button className="group flex items-center justify-center gap-3 px-6 py-3 rounded-[4px] border border-white/20 hover:border-[#D7B58A] transition-all">
            <span className={`${mont.className} text-[13px] font-medium uppercase tracking-wider`}>View All</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* ---------------- GRID SECTION ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* =========== LEFT COLUMN (Short -> Text -> Long) =========== */}
          <div className="flex flex-col gap-12"> 
            
            {/* 1. UNIFORM (Height: 385px) */}
            <div className="relative w-full h-[385px] overflow-hidden bg-white">
              <Image
                src="/products/image1.png"
                alt="Uniform"
                fill
                className="object-cover object-[50%_30%]" 
              />
              <div className="absolute bottom-6 right-6">
                  <button className={`${mont.className} w-[185px] h-[40px] bg-[#D2B589] text-white text-[14px] font-medium uppercase tracking-widest hover:bg-white hover:text-[#050B23] transition-colors flex items-center justify-center`}>
                    Uniform
                  </button>
              </div>
            </div>

            {/* TEXT: SERVING THE INDUSTRY */}
            {/* Added whitespace-nowrap to force single line */}
            <div className="flex justify-center items-center py-2 h-[60px]">
                <p className={`${cormorant.className} text-[26px] md:text-[30px] tracking-[0.3em] uppercase text-[#D2B589] text-center whitespace-nowrap`}>
                  Serving The Industry
                </p>
            </div>

            {/* 2. CHEF COATS (Height: 800px) */}
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

          {/* =========== RIGHT COLUMN (Long -> Text -> Short) =========== */}
          <div className="flex flex-col gap-12">

            {/* 3. APRONS (Height: 800px) */}
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
                <p className={`${cormorant.className} text-[26px] md:text-[30px] tracking-[0.3em] uppercase text-[#D2B589] text-center whitespace-nowrap`}>
                  Since Last 2 Decades
                </p>
            </div>

            {/* 4. PANTS (Height: 385px) */}
            <div className="relative w-full h-[385px] overflow-hidden bg-white">
              <Image
                src="/products/image4.png"
                alt="Pants"
                fill
                className="object-cover object-[50%_100%]"
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