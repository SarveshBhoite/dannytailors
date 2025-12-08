"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Montserrat, Montserrat_Alternates } from "next/font/google";

// 1. CONFIGURE FONTS
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const montAlt = Montserrat_Alternates({ subsets: ["latin"], weight: ["300", "400", "500"] });

interface CategoryViewProps {
  categorySlug: string;
}

// Filter Data
const CATEGORIES_LIST = [
  "Accessories & Gift Cards",
  "Backpacks, Weekenders & Duffle Bags",
  "Dress Shirts & Button Downs",
  "Hoodies & Sweatshirts",
  "Jackets & Coats", 
  "Pants & Denim", 
  "Polos & Tees", 
  "Shoes & Boots"
];

const COLORS_LIST = [
  { name: "Black", hex: "#1E1E1E" },
  { name: "Blue", hex: "#21558D" },
  { name: "Brown", hex: "#925C37" },
  { name: "Green", hex: "#585B45" },
  { name: "Grey", hex: "#E1E1E3" },
  { name: "Orange", hex: "#D38632" },
  { name: "Pink", hex: "#EFCEC9" },
  { name: "Red", hex: "#BD2830" },
  { name: "Tan", hex: "#B3A695" },
];

const SIZES_LIST = ["30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50"];
const CLOTHING_SIZE_LIST = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"];

export default function CategoryView({ categorySlug }: CategoryViewProps) {
  // --- STATE ---
  const [openSections, setOpenSections] = useState({
    category: true,
    color: true,
    size: true,
    clothing: true,
  });

  const [showAllCategories, setShowAllCategories] = useState(false);

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const visibleCategories = showAllCategories ? CATEGORIES_LIST : CATEGORIES_LIST.slice(0, 4);

  // --- LOGIC ---
  const safeSlug = categorySlug || "";
  const categoryName = decodeURIComponent(safeSlug).replace(/-/g, " ");

  let imageFolder = "/shop-now/chefcoat"; 
  if (safeSlug.includes("pant")) imageFolder = "/shop-now/pants";
  else if (safeSlug.includes("apron")) imageFolder = "/shop-now/aprons";
  else if (safeSlug.includes("uniform")) imageFolder = "/shop-now/uniform";

  const products = Array.from({ length: 9 }).map((_, index) => {
    const imgNum = (index % 3) + 1; 
    return {
        id: index + 1,
        name: "Timeless A-line Evening Dress",
        price: "$109.99",
        fit: "Ankle-length",
        image: `${imageFolder}/prod${imgNum}.svg`, 
        type: "Womenswear" 
    };
  });

  // TYPOGRAPHY STYLES
  const maisonNeueStyle = {
    fontFamily: '"Maison Neue", sans-serif',
    fontSize: '10.49px',
    lineHeight: '13.99px',
    letterSpacing: '0.17px',
    fontWeight: 400,
  };

  return (
    <section className="min-h-screen bg-[#000A23] text-white pt-32 pb-20 select-none">
      
      {/* MAIN CONTAINER */}
      <div className="max-w-[1224px] mx-auto px-6 lg:px-0">

        {/* HERO SECTION */}
        <div className="relative w-full h-[300px] md:h-[450px] mb-12 rounded-[20px] overflow-hidden group">
            <Image 
                src="/shop-now/shop-bg.svg" 
                alt="Bespoke Tailoring"
                fill
                className="object-cover object-center"
                priority
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className={`${montserrat.className} text-[40px] md:text-[60px] lg:text-[80px] font-bold text-white uppercase tracking-[0.14em] text-center leading-tight drop-shadow-lg max-w-[90%]`}>
                    BESPOKE TAILORING
                </h1>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <button className="relative flex items-center justify-center gap-2 w-[140px] h-[50px] bg-[#000A23] rounded-[8px] group/btn">
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 140 50" fill="none" preserveAspectRatio="none">
                        <rect x="0.5" y="0.5" width="139" height="49" rx="8" stroke="#8B744B" strokeWidth="1" strokeDasharray="6 3"/>
                    </svg>
                    <div className="absolute top-0 left-0 w-[12px] h-[12px] border-t border-l border-[#AE9B84] rounded-tl-[8px]" />
                    <div className="absolute top-0 right-0 w-[12px] h-[12px] border-t border-r border-[#AE9B84] rounded-tr-[8px]" />
                    <div className="absolute bottom-0 right-0 w-[12px] h-[12px] border-b border-r border-[#AE9B84] rounded-br-[8px]" />
                    <div className="absolute bottom-0 left-0 w-[12px] h-[12px] border-b border-l border-[#AE9B84] rounded-bl-[8px]" />
                    <span className={`${montserrat.className} text-[14px] font-normal text-white`}>Shop Now</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5">
                        <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>

        {/* CONTENT LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* LEFT SIDEBAR */}
          <aside className="w-full lg:w-[200px] shrink-0 flex flex-col gap-0">
            {/* Count */}
            <div className="h-[39px] flex items-center border-b border-[#ffffff]/100 mb-2">
               <span className="text-white block pt-1" style={maisonNeueStyle}>249 Products</span>
            </div>
            {/* Filters */}
            <div className="py-4 border-b border-[#ffffff]/100">
              <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => toggleSection('category')}>
                <span className={`${montserrat.className} text-[12px] font-semibold tracking-wider text-white uppercase`}>Category</span>
                <span className={`text-[10px] text-white transition-transform duration-300 ${openSections.category ? 'rotate-0' : 'rotate-180'}`}>▲</span>
              </div>
              {openSections.category && (
                <div className="flex flex-col gap-2">
                  {visibleCategories.map((item) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer group">
                      <div className="w-[20px] h-[20px] rounded-[3.5px] border-[0.5px] border-[#212F52] bg-[#212F52] flex items-center justify-center shrink-0"></div>
                      <span className="text-white/80 group-hover:text-white transition-colors leading-tight" style={maisonNeueStyle}>{item}</span>
                    </label>
                  ))}
                  <button onClick={() => setShowAllCategories(!showAllCategories)} className={`${montserrat.className} text-[10.5px] text-[#D2B589] hover:underline text-left mt-1`}>{showAllCategories ? "View Less -" : "View More +"}</button>
                </div>
              )}
            </div>
            <div className="py-4 border-b border-[#ffffff]/100">
              <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => toggleSection('color')}>
                <span className={`${montserrat.className} text-[12px] font-semibold tracking-wider text-white uppercase`}>Color</span>
                <span className={`text-[10px] text-white transition-transform duration-300 ${openSections.color ? 'rotate-0' : 'rotate-180'}`}>▲</span>
              </div>
              {openSections.color && (
                <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                  {COLORS_LIST.map((c) => (
                    <div key={c.name} className="flex flex-col items-center gap-2 cursor-pointer group">
                      <div className="w-[28px] h-[28px] rounded-full" style={{ backgroundColor: c.hex }} />
                      <span className={`${montAlt.className} text-[10px] text-white group-hover:text-[#D2B589] transition-colors`}>{c.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="py-4 border-b border-[#ffffff]/100">
              <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => toggleSection('size')}>
                <span className={`${montserrat.className} text-[12px] font-semibold tracking-wider text-white uppercase`}>Size</span>
                <span className={`text-[10px] text-white transition-transform duration-300 ${openSections.size ? 'rotate-0' : 'rotate-180'}`}>▲</span>
              </div>
              {openSections.size && (
                <div className="flex flex-col gap-3">
                  <div>
                    <p className={`${montAlt.className} text-[10.5px] text-[#D2B589] mb-3`}>Waist</p>
                    <div className="grid grid-cols-4 gap-2">
                      {SIZES_LIST.map((s) => (
                        <div key={s} className="w-[40px] h-[37px] bg-[#212F52] flex items-center justify-center text-[#D2B589] cursor-pointer hover:bg-[#D2B589] hover:text-[#212F52] transition-colors" style={maisonNeueStyle}>{s}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="py-4">
              <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => toggleSection('clothing')}>
                <span className={`${montserrat.className} text-[12px] font-semibold tracking-wider text-white uppercase`}>Clothing</span>
                <span className={`text-[10px] text-white transition-transform duration-300 ${openSections.clothing ? 'rotate-0' : 'rotate-180'}`}>▲</span>
              </div>
              {openSections.clothing && (
                <div className="grid grid-cols-4 gap-2">
                  {CLOTHING_SIZE_LIST.map((size) => (
                    <div key={size} className="w-[40px] h-[40px] bg-[#212F52] flex items-center justify-center text-[#D2B589] cursor-pointer hover:bg-[#D2B589] hover:text-[#212F52] transition-colors" style={maisonNeueStyle}>{size}</div>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* RIGHT GRID */}
          <main className="flex-1 w-full">
            <div className="mb-6 flex flex-col justify-center gap-1 pb-0 h-[39px]">
                 <p className={`${montserrat.className} text-[10.5px] text-[#737373] uppercase tracking-wider`}>
                    Home / {categoryName}
                 </p>
                 <h2 className={`${montserrat.className} text-[28px] text-white font-normal capitalize leading-none pt-1`}>
                    {categoryName} - New Arrivals
                 </h2>
            </div>

            {/* PRODUCT GRID - FULLY CUSTOM SVG GRID (SQUARE CORNERS) */}
            <div className="relative">
                
                {/* 1. OUTER BORDER (Absolute SVG overlay) - SQUARE corners (removed rx) */}
                <div className="absolute inset-0 pointer-events-none z-20">
                    <svg className="w-full h-full">
                        <rect x="0.765" y="0.765" width="calc(100% - 1.53px)" height="calc(100% - 1.53px)" fill="none" stroke="#212F52" strokeWidth="1.53" strokeDasharray="12.27 4.6" />
                    </svg>
                </div>

                {/* 2. GRID CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product, index) => (
                        <div 
                        key={product.id} 
                        className={`
                            relative
                            flex flex-col 
                            bg-[#000A23] 
                            p-[23px] 
                            gap-[23px]
                        `}
                        >
                            {/* --- INTERNAL RIGHT BORDER SVG --- */}
                            {/* Hidden on the last column of the current breakpoint */}
                            <div className="absolute right-0 top-0 h-full w-[1.53px] z-10 block md:[&:nth-child(2n)]:hidden lg:[&:nth-child(2n)]:block lg:[&:nth-child(3n)]:hidden">
                                <svg className="h-full w-full" preserveAspectRatio="none"><line x1="0" y1="0" x2="0" y2="100%" stroke="#212F52" strokeWidth="1.53" strokeDasharray="12.27 4.6" /></svg>
                            </div>

                            {/* --- INTERNAL BOTTOM BORDER SVG --- */}
                            {/* Hidden on the last row elements */}
                            <div className={`
                                absolute bottom-0 left-0 w-full h-[1.53px] z-10 block
                                ${index >= products.length - (products.length % 2 || 2) ? "md:hidden" : ""}
                                ${index >= products.length - (products.length % 3 || 3) ? "lg:hidden" : ""}
                                last:hidden
                            `}>
                                <svg className="h-full w-full" preserveAspectRatio="none"><line x1="0" y1="0" x2="100%" y2="0" stroke="#212F52" strokeWidth="1.53" strokeDasharray="12.27 4.6" /></svg>
                            </div>


                            {/* IMAGE */}
                            <div className="relative w-full h-[296px] bg-[#D9D9D9] rounded-t-[38px] overflow-hidden">
                                <Image 
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="flex flex-col gap-[15px]">
                                <div className="flex justify-between items-center h-[48px]">
                                    <div className="flex items-center justify-center bg-[#212F52] rounded-[76px] px-[12px] py-[7px] h-[36px]">
                                        <span className={`${montAlt.className} text-[13.8px] text-[#D2B589] whitespace-nowrap`}>
                                            {product.type}
                                        </span>
                                    </div>

                                    <button className="relative flex items-center justify-center gap-1 w-[121px] h-[48px] bg-[#000A23] rounded-[9px] group/btn">
                                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 121 48" fill="none" preserveAspectRatio="none">
                                            <rect x="0.5" y="0.5" width="120" height="47" rx="9" stroke="#8B744B" strokeWidth="0.76" strokeDasharray="4 2"/>
                                        </svg>
                                        <div className="absolute top-0 left-0 w-[12px] h-[12px] border-t border-l border-[#D2B589] rounded-tl-[9px]" />
                                        <div className="absolute top-0 right-0 w-[12px] h-[12px] border-t border-r border-[#D2B589] rounded-tr-[9px]" />
                                        <div className="absolute bottom-0 right-0 w-[12px] h-[12px] border-b border-r border-[#D2B589] rounded-br-[9px]" />
                                        <div className="absolute bottom-0 left-0 w-[12px] h-[12px] border-b border-l border-[#D2B589] rounded-bl-[9px]" />
                                        
                                        <span className={`${montserrat.className} text-[13.8px] font-normal text-white`}>Buy Now</span>
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5">
                                            <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>

                                <h3 className={`${montserrat.className} text-[18.4px] font-medium text-white leading-[150%]`}>
                                    {product.name}
                                </h3>

                                <div className="flex items-center gap-[15px]">
                                    <div className="flex items-center gap-[6px]">
                                        <span className={`${montAlt.className} text-[13.8px] text-[#81807E]`}>Fit</span>
                                        <div className="w-[3px] h-[3px] bg-[#4D4D4D] rounded-full" />
                                        <span className={`${montAlt.className} text-[15.3px] font-medium text-[#CCCCCC] whitespace-nowrap`}>Ankle-length</span>
                                    </div>
                                    <div className="flex items-center gap-[6px]">
                                        <span className={`${montAlt.className} text-[13.8px] text-[#81807E]`}>Price</span>
                                        <div className="w-[3px] h-[3px] bg-[#4D4D4D] rounded-full" />
                                        <span className={`${montAlt.className} text-[15.3px] font-medium text-[#CCCCCC]`}>{product.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

          </main>

        </div>
      </div>
    </section>
  );
}