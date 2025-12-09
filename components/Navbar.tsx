"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  // Observe sections on /products page to highlight active nav item
  useEffect(() => {
    if (pathname !== "/products") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveSection(null);
      return;
    }

    const ids = ["aprons", "chefcoats", "uniforms", "pants"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const id = visible[0].target.id;
          setActiveSection(id);
        }
      },
      {
        root: null,
        threshold: 0.4, // ~40% of section in view
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    // initialize from hash if any
    if (window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      if (ids.includes(hashId)) {
        setActiveSection(hashId);
      }
    }

    return () => observer.disconnect();
  }, [pathname]);

  // base classes for links in side menu
  const navLinkBase =
    "flex w-full items-center justify-between border-b border-white/10 pb-3 uppercase tracking-[0.25em] hover:text-[#f2d39a] transition-colors";

  const makeLinkClass = (id: string) => {
    const isActive = pathname === "/products" && activeSection === id;
    return (
      navLinkBase +
      (isActive ? " text-[#f2d39a]" : " text-white")
    );
  };

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
        <Link href={"/"} className="pointer-events-auto flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Danny Tailors logo"
            width={70}
            height={70}
            className="h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20 object-contain cursor-pointer"
          />
        </Link>

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
          <Link
            href="/products"
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
          </Link>

          {/* CART ICON - UPDATED TO USE CUSTOM SVG */}
          <button
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center"
            aria-label="Cart"
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5">
              <Image 
                src="/Union.svg" 
                alt="Cart" 
                fill 
                className="object-contain"
              />
            </div>
          </button>

          {/* MENU TOGGLE */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex h-9 w-9 sm:h-10 sm:w-10 flex-col items-center justify-center gap-1 sm:gap-1.5 cursor-pointer"
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
            <Link
              href="/products#aprons"
              onClick={() => {
                setIsMenuOpen(false);
                setActiveSection("aprons");
              }}
              className={makeLinkClass("aprons")}
            >
              Aprons
              <span className="text-xs text-[#f2d39a]">&lt;</span>
            </Link>

            <Link
              href="/products#chefcoats"
              onClick={() => {
                setIsMenuOpen(false);
                setActiveSection("chefcoats");
              }}
              className={makeLinkClass("chefcoats")}
            >
              Chef Coats
              <span className="text-xs text-[#f2d39a]">&lt;</span>
            </Link>

            <Link
              href="/products#uniforms"
              onClick={() => {
                setIsMenuOpen(false);
                setActiveSection("uniforms");
              }}
              className={makeLinkClass("uniforms")}
            >
              Uniforms
              <span className="text-xs text-[#f2d39a]">&lt;</span>
            </Link>

            <Link
              href="/products#pants"
              onClick={() => {
                setIsMenuOpen(false);
                setActiveSection("pants");
              }}
              className={makeLinkClass("pants")}
            >
              Pants
              <span className="text-xs text-[#f2d39a]">&lt;</span>
            </Link>
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