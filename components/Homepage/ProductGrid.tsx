"use client";

import Image from "next/image";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Link from "next/link";

// FONTS
const mont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function ProductGrid() {
  return (
    <section className="w-full bg-[#050B23] text-white flex justify-center pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-24 select-none">
      <div className="w-full max-w-[1224px] flex flex-col gap-8 sm:gap-10 lg:gap-12 px-5 sm:px-6 lg:px-0">
        {/* ---------------- HEADER ---------------- */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 sm:pb-5 lg:pb-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#D7B58A]" />
            <p
              className={`${mont.className} text-[13px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium uppercase tracking-[0.05em] text-white`}
            >
              OUR PRODUCTS
            </p>
          </div>

          {/* VIEW ALL BUTTON */}
          <Link href={"/products"} className="relative w-[90px] h-[38px] sm:w-[100px] sm:h-[42px] lg:w-[111px] lg:h-[47px] flex items-center justify-center gap-1.5 sm:gap-2 text-white group cursor-pointer">
            {/* SVG Border Layer */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none"
              viewBox="0 0 111 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <rect
                x="0.75"
                y="0.75"
                width="109.5"
                height="45.5"
                rx="9"
                stroke="#8B744B"
                strokeWidth="0.75"
                strokeDasharray="6 3"
              />
            </svg>

            {/* Corner Brackets */}
            <div className="absolute top-[0.5px] left-[0.5px] w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] border-t-[0.75px] border-l-[0.75px] border-[#D2B589] rounded-tl-[7px] sm:rounded-tl-[9px]" />
            <div className="absolute top-[0.5px] right-[0.5px] w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] border-t-[0.75px] border-r-[0.75px] border-[#D2B589] rounded-tr-[7px] sm:rounded-tr-[9px]" />
            <div className="absolute bottom-[0.5px] right-[0.5px] w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] border-b-[0.75px] border-r-[0.75px] border-[#D2B589] rounded-br-[7px] sm:rounded-br-[9px]" />
            <div className="absolute bottom-[0.5px] left-[0.5px] w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] border-b-[0.75px] border-l-[0.75px] border-[#D2B589] rounded-bl-[7px] sm:rounded-bl-[9px]" />

            {/* Button Content */}
            <span
              className={`${mont.className} text-[11px] sm:text-[12px] lg:text-[13.5px] font-normal z-10 tracking-wide`}
            >
              View All
            </span>

            {/* Arrow Icon */}
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              className="z-10 w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] lg:w-[12px] lg:h-[12px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            >
              <path
                d="M1 11L11 1M11 1H3.5M11 1V8.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* ---------------- MOBILE LAYOUT (Below md) ---------------- */}
        <div className="flex flex-col gap-6 sm:gap-8 md:hidden -mt-2">
          {/* 1. UNIFORM */}
          <div className="relative w-full h-[280px] sm:h-[320px] overflow-hidden bg-white rounded-sm">
            <Image
              src="/products/image1.png"
              alt="Uniform"
              fill
              className="object-cover object-center"
            />
            <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5">
              <button
                className={`${mont.className} w-[140px] h-[36px] sm:w-[160px] sm:h-[38px] bg-[#D2B589] text-white text-[12px] sm:text-[13px] font-medium uppercase tracking-widest hover:bg-white hover:text-[#050B23] transition-colors flex items-center justify-center`}
              >
                Uniform
              </button>
            </div>
          </div>

          {/* 2. APRONS */}
          <div className="relative w-full h-[380px] sm:h-[450px] overflow-hidden bg-white rounded-sm">
            <Image
              src="/products/image3.png"
              alt="Aprons"
              fill
              className="object-cover object-[50%_20%]"
            />
            <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5">
              <button
                className={`${mont.className} w-[140px] h-[36px] sm:w-[160px] sm:h-[38px] bg-white text-[#8B744B] text-[12px] sm:text-[13px] font-semibold uppercase tracking-widest hover:bg-[#D7B58A] hover:text-white transition-colors flex items-center justify-center`}
              >
                Aprons
              </button>
            </div>
          </div>

          {/* TEXT: SERVING THE INDUSTRY */}
          <div className="flex justify-center items-center py-4">
            <p
              className={`${cormorant.className} text-[18px] sm:text-[22px] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#D2B589] text-center`}
            >
              Serving The Industry
            </p>
          </div>

          {/* 3. CHEF COATS */}
          <div className="relative w-full h-[420px] sm:h-[500px] overflow-hidden bg-white rounded-sm">
            <Image
              src="/products/image2.png"
              alt="Chef Coats"
              fill
              className="object-cover object-[50%_0%]"
            />
            <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5">
              <button
                className={`${mont.className} w-[140px] h-[36px] sm:w-[160px] sm:h-[38px] bg-white text-[#8B744B] text-[12px] sm:text-[13px] font-semibold uppercase tracking-widest hover:bg-[#D7B58A] hover:text-white transition-colors flex items-center justify-center`}
              >
                Chef Coats
              </button>
            </div>
          </div>

          {/* TEXT: SINCE LAST 2 DECADES */}
          <div className="flex justify-center items-center py-4">
            <p
              className={`${cormorant.className} text-[18px] sm:text-[22px] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#D2B589] text-center`}
            >
              Since Last <span className="text-[1.6em]">2</span> Decades
            </p>
          </div>

          {/* 4. PANTS */}
          <div className="relative w-full h-[280px] sm:h-[320px] overflow-hidden bg-white rounded-sm">
            <Image
              src="/products/image4.png"
              alt="Pants"
              fill
              className="object-cover object-center"
            />
            <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5">
              <button
                className={`${mont.className} w-[140px] h-[36px] sm:w-[160px] sm:h-[38px] bg-[#D2B589] text-white text-[12px] sm:text-[13px] font-medium uppercase tracking-widest hover:bg-white hover:text-[#050B23] transition-colors flex items-center justify-center`}
              >
                Pants
              </button>
            </div>
          </div>
        </div>

        {/* ---------------- DESKTOP GRID (md and above) ---------------- */}
        <div className="hidden md:grid grid-cols-2 gap-8 lg:gap-12 -mt-5">
          {/* =========== LEFT COLUMN =========== */}
          <div className="flex flex-col gap-8 lg:gap-12">
            {/* 1. UNIFORM */}
            <div className="relative w-full h-[300px] lg:h-[385px] overflow-hidden bg-white">
              <Image
                src="/products/image1.png"
                alt="Uniform"
                fill
                className="object-cover object-[0%_65%] object-[20%_63%] transform -translate-x-16 scale-[1.1]"
              />
              <div className="absolute bottom-5 right-5 lg:bottom-6 lg:right-6">
                <button
                  className={`${mont.className} w-[160px] h-[38px] lg:w-[185px] lg:h-[40px] bg-[#D2B589] text-white text-[13px] lg:text-[14px] font-medium uppercase tracking-widest hover:bg-white hover:text-[#050B23] transition-colors flex items-center justify-center`}
                >
                  Uniform
                </button>
              </div>
            </div>

            {/* TEXT: SERVING THE INDUSTRY */}
            <div className="flex justify-center items-center py-2 h-[50px] lg:h-[60px]">
              <p
                className={`${cormorant.className} text-[24px] lg:text-[30px] tracking-[0.35em] lg:tracking-[0.45em] uppercase text-[#D2B589] text-center whitespace-nowrap`}
              >
                Serving The Industry
              </p>
            </div>

            {/* 2. CHEF COATS */}
            <div className="relative w-full h-[600px] lg:h-[800px] overflow-hidden bg-white">
              <Image
                src="/products/image2.png"
                alt="Chef Coats"
                fill
                className="object-cover object-[50%_0%]"
              />
              <div className="absolute bottom-5 right-5 lg:bottom-6 lg:right-6">
                <button
                  className={`${mont.className} w-[160px] h-[38px] lg:w-[185px] lg:h-[40px] bg-white text-[#8B744B] text-[13px] lg:text-[14px] font-semibold uppercase tracking-widest hover:bg-[#D7B58A] hover:text-white transition-colors flex items-center justify-center`}
                >
                  Chef Coats
                </button>
              </div>
            </div>
          </div>

          {/* =========== RIGHT COLUMN =========== */}
          <div className="flex flex-col gap-8 lg:gap-12">
            {/* 3. APRONS */}
            <div className="relative w-full h-[600px] lg:h-[800px] overflow-hidden bg-white">
              <Image
                src="/products/image3.png"
                alt="Aprons"
                fill
                className="object-cover object-[50%_20%]"
              />
              <div className="absolute bottom-5 right-5 lg:bottom-6 lg:right-6">
                <button
                  className={`${mont.className} w-[160px] h-[38px] lg:w-[185px] lg:h-[40px] bg-white text-[#8B744B] text-[13px] lg:text-[14px] font-semibold uppercase tracking-widest hover:bg-[#D7B58A] hover:text-white transition-colors flex items-center justify-center`}
                >
                  Aprons
                </button>
              </div>
            </div>

            {/* TEXT: SINCE LAST 2 DECADES */}
            <div className="flex justify-center items-center py-2 h-[50px] lg:h-[60px]">
              <p
                className={`${cormorant.className} text-[24px] lg:text-[30px] tracking-[0.35em] lg:tracking-[0.45em] uppercase text-[#D2B589] text-center whitespace-nowrap`}
              >
                {/* UPDATED: Wrapped '2' in a span with text-[1.2em] to make it larger */}
                Since Last <span className="text-[1.6em]">2</span> Decades
              </p>
            </div>

            {/* 4. PANTS */}
            <div className="relative w-full h-[300px] lg:h-[385px] overflow-hidden bg-white">
              <Image
                src="/products/image4.png"
                alt="Pants"
                fill
                className="object-cover object-[0%_0%] transform -translate-x-20"
              />
              <div className="absolute bottom-5 right-5 lg:bottom-6 lg:right-6">
                <button
                  className={`${mont.className} w-[160px] h-[38px] lg:w-[185px] lg:h-[40px] bg-[#D2B589] text-white text-[13px] lg:text-[14px] font-medium uppercase tracking-widest hover:bg-white hover:text-[#050B23] transition-colors flex items-center justify-center`}
                >
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