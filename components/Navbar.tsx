"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* NAV BAR */}
      <header
        className="
          pointer-events-none absolute inset-x-0 top-0 z-30 
          flex h-16 md:h-20 items-center justify-between px-4 sm:px-6 
          md:px-10
        "
      >
        {/* LEFT LOGO */}
        <div className="pointer-events-auto flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Danny Tailors logo"
            width={70}
            height={70}
            className="h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20 object-contain"
          />
        </div>

        {/* CENTER BRAND NAME — hidden on mobile */}
        <div
          className="
          pointer-events-auto brand-font 
          hidden lg:block 
          text-center tracking-[0.10em] text-[#D7B58A] ms-62
        "
        >
          Danny Tailors & Clothiers
        </div>

        {/* RIGHT BUTTONS */}
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* SHOP NOW — hide on small screens */}
          <button
            className="
            relative hidden md:inline-flex 
            items-center gap-2 px-[18px] py-[13.5px] 
            text-[0.8rem] text-[#8B744B]
          "
          >
            <span className="z-10">Shop Now</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8B744B"
              strokeWidth="1.5"
              className="z-10 h-3.5 w-3.5"
            >
              <circle cx="10" cy="10" r="7" />
              <line x1="15" y1="15" x2="22" y2="22" />
            </svg>

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full rounded-[9px]"
              viewBox="0 0 200 50"
              preserveAspectRatio="none"
            >
              <rect
                x="0.75"
                y="0.75"
                width="198.5"
                height="48.5"
                rx="9"
                ry="9"
                fill="none"
                stroke="#D2B589"
                strokeWidth="0.75"
                strokeDasharray="12 4.5"
              />
            </svg>
          </button>

          {/* CART ICON */}
          <button
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center text-[#8B744B]"
            aria-label="Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-5 sm:w-5 md:h-4 md:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#f2d39a"
              strokeWidth={1.4}
            >
              <path d="M6 6h15l-1.5 9h-12z" />
              <circle cx="9" cy="18" r="1" />
              <circle cx="17" cy="18" r="1" />
              <path d="M6 6 5 3H3" />
            </svg>
          </button>

          {/* MENU TOGGLE */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex h-9 w-9 sm:h-10 sm:w-10 flex-col items-center justify-center gap-1 sm:gap-1.5"
            aria-label="Open menu"
          >
            <span className="h-[2px] w-5 sm:h-[3px] sm:w-6 bg-[#8B744B] md:h-[2px] md:w-5" />
            <span className="h-[2px] w-5 sm:h-[3px] sm:w-6 bg-[#8B744B] md:h-[2px] md:w-5" />
            <span className="h-[2px] w-5 sm:h-[3px] sm:w-6 bg-[#8B744B] md:h-[2px] md:w-5" />
          </button>
        </div>
      </header>

      {/* SIDE MENU */}
      <div
        className={`fixed inset-0 z-40 transition ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <aside
          className={`
            absolute right-0 top-0 
            h-full w-[85vw] max-w-xs sm:w-72 md:w-80 
            flex flex-col 
            bg-[#050B21]/95 px-6 sm:px-8 py-8 sm:py-10 text-sm text-white shadow-2xl 
            transition-transform duration-300
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="mb-6 sm:mb-8 self-end text-lg sm:text-xs tracking-[0.25em] text-[#f2d39a] p-2"
          >
            ✕
          </button>

          {/* Mobile Brand Name - Only in menu */}
          <div className="mb-6 pb-4 border-b border-white/10 md:hidden">
            <p className="text-[#f2d39a] text-sm font-medium tracking-wider">
              Danny Tailors
            </p>
            <p className="text-[#f2d39a]/70 text-xs tracking-wider">
              & Clothiers
            </p>
          </div>

          <h3 className="mb-4 sm:mb-6 text-[0.65rem] sm:text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-[#f2d39a]">
            Our Products
          </h3>

          <nav className="space-y-3 sm:space-y-4 text-xs">
            {["Aprons", "Chef Coats", "Uniforms", "Pants"].map((item) => (
              <button
                key={item}
                className="flex w-full items-center justify-between border-b border-white/10 pb-3 uppercase tracking-[0.25em] hover:text-[#f2d39a] transition-colors"
              >
                {item}
                <span className="text-xs text-[#f2d39a]">&lt;</span>
              </button>
            ))}
          </nav>

          {/* Mobile Shop Now in Menu */}
          <div className="mt-auto pt-6 md:hidden">
            <button className="w-full py-3 bg-gradient-to-r from-[#D2B589] to-[#8B744B] rounded-lg text-[#050B21] font-semibold text-sm tracking-wider">
              Shop Now
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}