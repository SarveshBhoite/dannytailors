"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = ["/danny-1.jpg", "/girl.jpg", "/boy.png"];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % heroImages.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* MAIN GRID - No top padding, navbar overlays */}
      <main className="grid min-h-screen grid-cols-1 bg-[#000A23] md:bg-gradient-to-r md:from-[#000A23] md:to-[#000A23BF] md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        {/* LEFT: IMAGE CAROUSEL */}
        <section className="relative flex h-[50vh] sm:h-[55vh] md:h-full md:min-h-[100vh] items-center justify-center bg-black">
          {heroImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt="Tailored suit model"
                fill
                priority={index === 0}
                className="object-cover object-[center_20%] sm:object-[center_25%] md:object-left-top"
              />
              {/* Gradient overlay for mobile text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000A23] via-transparent to-transparent md:hidden" />
            </div>
          ))}

          {/* Mobile Title Overlay - Only visible on mobile */}
          <div className="absolute bottom-10 left-0 right-0 z-10 px-6 text-center md:hidden">
            <p className="text-sm font-medium tracking-[0.3em] text-[#8B744B] uppercase mb-1">
              For
            </p>
            <p className="text-3xl sm:text-4xl font-black uppercase text-[#D7B58A]">
              the <span className="curly-text italic">Real</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-wide">
              Professional
            </h1>
            <p className="text-sm font-medium tracking-[0.3em] text-[#8B744B] uppercase mt-1">
              In You
            </p>
          </div>

          {/* dots */}
          <div className="absolute bottom-2 md:bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? "h-2 w-8 md:w-10 rounded-full bg-[#8D8D8D]"
                    : "h-2 w-2 rounded-full bg-white"
                }`}
              />
            ))}
          </div>
        </section>

        {/* RIGHT CONTENT */}
        <section className="relative flex items-start md:items-center justify-center pt-4 pb-6 px-6 sm:pt-6 sm:pb-8 md:py-0 md:px-0 md:mt-30">
          {/* vertical text left - DESKTOP ONLY */}
          <span className="pointer-events-none for absolute left-17 top-36 hidden -translate-y-1/2 text-[#8B744B] [writing-mode:vertical-rl] rotate-180 md:inline">
            FOR
          </span>

          {/* vertical text right - DESKTOP ONLY */}
          <span className="pointer-events-none absolute right-18 top-42 hidden -translate-y-1/2 text-[#8B744B] [writing-mode:vertical-rl] rotate-360 md:inline in">
            IN
          </span>

          <span className="pointer-events-none absolute right-22 top-58 hidden -translate-y-1/2 text-[#8B744B] md:inline in">
            YOU
          </span>

          <div className="max-w-xl w-full md:w-auto">
            {/* Desktop Title - Hidden on mobile */}
            <div className="hidden md:block">
              <p className="text-[3rem] font-black uppercase text-[#D7B58A] real">
                the <span className="curly-text">Real</span>
              </p>
              <h1 className="bold-text">PROFESSIONAL</h1>
            </div>

            {/* Mobile Description Section */}
            <div className="text-center md:text-left">
              <p className="text-sm sm:text-base md:text-[1.1rem] max-w-sm mx-auto md:mx-0 md:max-w-l desc md:me-20 md:mt-15 text-gray-300 md:text-white leading-relaxed">
                Discover bespoke tailoring crafted for leaders, teams, and
                brands— where excellence meets individuality.
              </p>

              <div className="flex justify-center md:justify-start">
                <button className="relative mt-4 md:mt-6 inline-flex items-center gap-2 px-6 py-2 md:p-8 md:py-2 text-[0.85rem] md:text-[0.9rem]">
                  <span className="z-10">Learn More</span>
                  <span className="text-[0.9rem] z-10">↗</span>

                  <svg
                    className="absolute inset-0 h-full w-full rounded-[9px]"
                    viewBox="0 0 200 45"
                    preserveAspectRatio="none"
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
              </div>
            </div>

            {/* socials */}
            <div className="mt-6 sm:mt-8 md:mt-20 flex flex-col items-center md:items-end gap-2 md:gap-3">
              <div className="flex items-center gap-4 md:gap-3">
                {/* Instagram */}
                <a
                  href="#"
                  className="p-2 md:p-0 hover:opacity-80 transition-opacity"
                >
                  <svg
                    className="h-6 w-6 md:h-5 md:w-5 text-[#D2B589]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17" cy="7" r="1" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  className="p-2 md:p-0 hover:opacity-80 transition-opacity"
                >
                  <svg
                    className="h-6 w-6 md:h-5 md:w-5 text-[#D2B589]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 3h4v4h-4v3h3v4h-3v7H9v-7H7v-4h2V7a4 4 0 0 1 4-4z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  className="p-2 md:p-0 hover:opacity-80 transition-opacity"
                >
                  <svg
                    className="h-6 w-6 md:h-5 md:w-5 text-[#D2B589]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 5.8c-.8.4-1.6.6-2.5.8.9-.6 1.6-1.4 1.9-2.5-.9.5-2 .9-3 1.1A4.14 4.14 0 0 0 12 8.3a4.5 4.5 0 0 0 .1 1C9 9.1 5.8 7.4 3.7 4.9c-.5.9-.8 1.9-.8 3 0 2 1 3.7 2.6 4.7-.8 0-1.6-.3-2.3-.6v.1c0 2.8 2 5 4.6 5.5-.5.1-.9.2-1.5.2-.3 0-.6 0-.9-.1.6 2 2.6 3.4 4.9 3.5A8.36 8.36 0 0 1 2 19.2 11.7 11.7 0 0 0 8.3 21c7.5 0 11.7-6.4 11.7-11.9v-.5A8.7 8.7 0 0 0 22 5.8z" />
                  </svg>
                </a>
              </div>

              <span className="text-[0.75rem] md:text-[0.8rem] text-[#838381]">
                A Banjaraan Production work
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* bottom strip */}
      <div className="relative z-20 w-full bg-gradient-to-r from-[#D2B589] to-[#6C5D46] py-2 md:py-3 text-center text-[0.55rem] tracking-[0.25em] sm:text-[0.65rem] sm:tracking-[0.4em] md:text-sm md:tracking-[0.9em] uppercase strip-text">
        Excelling&nbsp;&nbsp;Since&nbsp;&nbsp;
        <span className="number">2000</span>
      </div>
    </div>
  );
}