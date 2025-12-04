"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* TOP NAV BAR — OVERLAY, NO BG STRIP */}
      <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex h-20 items-center justify-between px-10">
        {/* left logo */}
        <div className="pointer-events-auto flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Danny Tailors logo"
            width={70}
            height={70}
            className="h-20 w-20 object-contain"
          />
        </div>

        {/* center brand name */}
        <div className="pointer-events-auto brand-font text-center tracking-[0.10em] text-[#D7B58A] ms-62">
          Danny Tailors & Clothiers
        </div>

        {/* right: shop + cart + menu */}
        <div className="pointer-events-auto flex items-center gap-4">
          <button className="relative inline-flex items-center gap-2 px-[18px] py-[13.5px] text-[0.8rem] text-[#8B744B]">
            <span className="z-10">Shop Now</span>

            {/* Magnifying Glass Icon */}
            <svg
              xmlns="http://www.w3.org/200/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8B744B"
              strokeWidth="1.5"
              className="z-10 h-3.5 w-3.5"
            >
              <circle cx="10" cy="10" r="7" />
              <line x1="15" y1="15" x2="22" y2="22" />
            </svg>

            {/* Custom dashed border */}
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

          {/* cart icon */}
          <button
            className="flex h-10 w-10 items-center justify-center text-[#8B744B]"
            aria-label="Cart"
          >
            <svg
              xmlns="http://www.w3.org/200/svg"
              className="h-4 w-4"
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

          {/* toggle button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            aria-label="Open menu"
          >
            <span className="h-[2px] w-5 bg-[#8B744B]" />
            <span className="h-[2px] w-5 bg-[#8B744B]" />
            <span className="h-[2px] w-5 bg-[#8B744B]" />
          </button>
        </div>
      </header>

      {/* RIGHT SLIDE MENU */}
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
          className={`absolute right-0 top-0 flex h-full w-80 max-w-full flex-col bg-[#050B21]/95 px-8 py-10 text-sm text-white shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="mb-8 self-end text-xs tracking-[0.25em] text-[#f2d39a]"
          >
            ✕
          </button>

          <h3 className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[#f2d39a]">
            Our Products
          </h3>

          <nav className="space-y-4 text-xs">
            {["Aprons", "Chef Coats", "Uniforms", "Pants"].map((item) => (
              <button
                key={item}
                className="flex w-full items-center justify-between border-b border-white/10 pb-3 text-left uppercase tracking-[0.25em]"
              >
                <span>{item}</span>
                <span className="text-xs text-[#f2d39a]">&lt;</span>
              </button>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
