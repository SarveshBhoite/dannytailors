"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = ["/danny-1.jpg", "/girl.jpg", "/boy.png"];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % heroImages.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
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
              xmlns="http://www.w3.org/2000/svg"
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

      {/* MAIN GRID — IMAGE TOUCHES TOP (no padding-top) */}
      <main className="grid min-h-screen grid-cols-1 bg-[#000A23] md:bg-gradient-to-r md:from-[#000A23] md:to-[#000A23BF] md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">


        {/* LEFT: IMAGE CAROUSEL */}
        <section className="relative flex h-full min-h-[60vh] md:min-h-[100vh] items-center justify-center bg-black">
          {heroImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                src={src}
                alt="Tailored suit model"
                fill
                priority={index === 0}
                className="object-cover object-left-top"
              />
            </div>
          ))}

          {/* dots */}
          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all ${index === currentIndex
                  ? "h-2 w-10 rounded-full bg-[#8D8D8D]"  // active pill bar
                  : "h-2 w-2 rounded-full bg-white"       // small dot
                  }`}
              />
            ))}
          </div>

        </section>

        {/* RIGHT: CONTENT (pushed down with padding so it sits lower than nav) */}
        <section className="relative flex items-center justify-center mt-30">
          {/* vertical text left */}
          <span className="pointer-events-none for absolute left-13 top-40 hidden -translate-y-1/2 text-[#8B744B] [writing-mode:vertical-rl] rotate-180 md:inline">
            FOR
          </span>

          {/* vertical text right */}
          <span className="pointer-events-none absolute right-22 top-46 hidden -translate-y-1/2 text-[#8B744B] [writing-mode:vertical-rl] rotate-360 md:inline in">
            IN
          </span>

          <span className="pointer-events-none absolute right-27 top-62 hidden -translate-y-1/2 text-[#8B744B] md:inline in">
            YOU
          </span>

          <div className="max-w-xl">
            {/* heading block */}
            <div>
              <p className="text-[3rem] font-black uppercase text-[#D7B58A] real">
                the <span className="curly-text">Real</span>
              </p>
              <div className="flex flex-wrap items-baseline gap-3">
                <h1 className="bold-text">
                  PROFESSIONAL
                </h1>
              </div>
            </div>

            {/* description */}
            <p className="text-[1.1rem] max-w-l desc me-20 mt-15">
              Discover bespoke tailoring crafted for leaders, teams, and brands—
              where excellence meets individuality.
            </p>

            {/* CTA */}
            <button className="relative mt-6 inline-flex items-center gap-2 p-8 py-2 text-[0.9rem]">
              <span className="z-10">Learn More</span>
              <span className="text-[0.9rem] z-10">↗</span>

              <svg
                className="absolute inset-0 h-full w-full rounded-[9px]"
                viewBox="0 0 200 45"
              >
                <rect
                  x="1"
                  y="1"
                  width="198"
                  height="43"
                  rx="9"
                  ry="9"
                  fill="none"
                  stroke="#D2B589"
                  strokeWidth="0.75"
                  strokeDasharray="12 4.5"
                />
              </svg>
            </button>


            {/* socials + production text, right aligned */}
            <div className="mt-20 flex flex-col items-end gap-3">
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a href="#" aria-label="Instagram">
                  <svg
                    className="h-5 w-5 text-[#D2B589] hover:opacity-80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17" cy="7" r="1" />
                  </svg>
                </a>

                {/* Facebook */}
                <a href="#" aria-label="Facebook">
                  <svg
                    className="h-5 w-5 text-[#D2B589] hover:opacity-80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 3h4v4h-4v3h3v4h-3v7H9v-7H7v-4h2V7a4 4 0 0 1 4-4z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a href="#" aria-label="Twitter">
                  <svg
                    className="h-5 w-5 text-[#D2B589] hover:opacity-80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 5.8c-.8.4-1.6.6-2.5.8.9-.6 1.6-1.4 1.9-2.5-.9.5-2 .9-3 1.1A4.14 4.14 0 0 0 12 8.3a4.5 4.5 0 0 0 .1 1C9 9.1 5.8 7.4 3.7 4.9c-.5.9-.8 1.9-.8 3 0 2 1 3.7 2.6 4.7-.8 0-1.6-.3-2.3-.6v.1c0 2.8 2 5 4.6 5.5-.5.1-.9.2-1.5.2-.3 0-.6 0-.9-.1.6 2 2.6 3.4 4.9 3.5A8.36 8.36 0 0 1 2 19.2 11.7 11.7 0 0 0 8.3 21c7.5 0 11.7-6.4 11.7-11.9v-.5A8.7 8.7 0 0 0 22 5.8z" />
                  </svg>
                </a>
              </div>

              {/* Production text */}
              <span className="text-[0.8rem] text-[#838381]">
                A Banjaraan Production work
              </span>
            </div>

          </div>
        </section>
      </main>

      {/* BOTTOM STRIP */}
      <div className="relative z-20 w-full bg-gradient-to-r from-[#D2B589]  to-[#6C5D46] py-3 text-center tracking-[0.9em] uppercase strip-text">
        Excelling&nbsp;&nbsp;Since&nbsp;&nbsp;<span className="number">2000</span>
      </div>

      {/* RIGHT SLIDE MENU */}
      <div
        className={`fixed inset-0 z-40 transition ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <aside
          className={`absolute right-0 top-0 flex h-full w-80 max-w-full flex-col bg-[#050B21]/95 px-8 py-10 text-sm text-white shadow-2xl transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
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
    </div>
  );
}
