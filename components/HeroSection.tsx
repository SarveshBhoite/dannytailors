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

      {/* MAIN GRID */}
      <main className="grid min-h-screen grid-cols-1 bg-[#000A23] md:bg-gradient-to-r md:from-[#000A23] md:to-[#000A23BF] md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">

        {/* LEFT: IMAGE CAROUSEL */}
        <section className="relative flex h-full min-h-[60vh] md:min-h-[100vh] items-center justify-center bg-black">
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
                className={`transition-all ${
                  index === currentIndex
                    ? "h-2 w-10 rounded-full bg-[#8D8D8D]"
                    : "h-2 w-2 rounded-full bg-white"
                }`}
              />
            ))}
          </div>
        </section>

        {/* RIGHT CONTENT */}
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
            <p className="text-[3rem] font-black uppercase text-[#D7B58A] real">
              the <span className="curly-text">Real</span>
            </p>

            <h1 className="bold-text">PROFESSIONAL</h1>

            <p className="text-[1.1rem] max-w-l desc me-20 mt-15">
              Discover bespoke tailoring crafted for leaders, teams, and brands—
              where excellence meets individuality.
            </p>

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

            {/* socials */}
            <div className="mt-20 flex flex-col items-end gap-3">
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a>
                  <svg
                    className="h-5 w-5 text-[#D2B589]"
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
                <a>
                  <svg
                    className="h-5 w-5 text-[#D2B589]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 3h4v4h-4v3h3v4h-3v7H9v-7H7v-4h2V7a4 4 0 0 1 4-4z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a>
                  <svg
                    className="h-5 w-5 text-[#D2B589]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 5.8c-.8.4-1.6.6-2.5.8..." />
                  </svg>
                </a>
              </div>

              <span className="text-[0.8rem] text-[#838381]">
                A Banjaraan Production work
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* bottom strip */}
      <div className="relative z-20 w-full bg-gradient-to-r from-[#D2B589] to-[#6C5D46] py-3 text-center tracking-[0.9em] uppercase strip-text">
        Excelling&nbsp;&nbsp;Since&nbsp;&nbsp;<span className="number">2000</span>
      </div>
    </div>
  );
}
