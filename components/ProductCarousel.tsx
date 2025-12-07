"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Cormorant_Garamond, Montserrat, Lexend } from "next/font/google";

// 1. CONFIGURE FONTS
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["500"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });
const lexend = Lexend({ subsets: ["latin"], weight: ["500"] });

// 2. PRODUCT DATA (Mock Data based on screenshots)
const categories = ["All", "Chef Coats", "Pants", "Aprons", "Uniform"];

const allProducts = [
  // --- CHEF COATS ---
  { id: 1, category: "Chef Coats", name: "Palermo Executive Chef Coat", price: "$98", image: "/products/image2.png", type: "Chef Coat" },
  { id: 2, category: "Chef Coats", name: "Seersucker Shirt", price: "$98", image: "/products/image2.png", type: "Shirts" },
  { id: 3, category: "Chef Coats", name: "RelaxaChai", price: "$98", image: "/products/image2.png", type: "RelaxaChai" },
  { id: 4, category: "Chef Coats", name: "RelaxaChai 2", price: "$98", image: "/products/image2.png", type: "RelaxaChai" },
  
  // --- PANTS ---
  { id: 5, category: "Pants", name: "Classic Trouser", price: "$120", image: "/products/image4.png", type: "Trouser" },
  { id: 6, category: "Pants", name: "Slim Fit Chino", price: "$85", image: "/products/image4.png", type: "Chino" },
  { id: 7, category: "Pants", name: "Cargo Utility", price: "$110", image: "/products/image4.png", type: "Cargo" },
  { id: 8, category: "Pants", name: "Formal Pleated", price: "$130", image: "/products/image4.png", type: "Formal" },

  // --- APRONS ---
  { id: 9, category: "Aprons", name: "Leather Strap Apron", price: "$65", image: "/products/image3.png", type: "Apron" },
  { id: 10, category: "Aprons", name: "Canvas Barista", price: "$55", image: "/products/image3.png", type: "Apron" },
  { id: 11, category: "Aprons", name: "Denim Bib", price: "$60", image: "/products/image3.png", type: "Apron" },
  { id: 12, category: "Aprons", name: "Waxed Cotton", price: "$70", image: "/products/image3.png", type: "Apron" },

  // --- UNIFORM ---
  { id: 13, category: "Uniform", name: "Staff Polo", price: "$45", image: "/products/image1.png", type: "Polo" },
  { id: 14, category: "Uniform", name: "Hotel Vest", price: "$80", image: "/products/image1.png", type: "Vest" },
  { id: 15, category: "Uniform", name: "Concierge Blazer", price: "$150", image: "/products/image1.png", type: "Blazer" },
  { id: 16, category: "Uniform", name: "Service Dress", price: "$110", image: "/products/image1.png", type: "Dress" },
];

export default function ProductCarousel() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Filter products based on active category
  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  // Determine the 4 products to show visible on screen
  // If we reach the end, we slice gracefully.
  const visibleProducts = filteredProducts.slice(currentIndex, currentIndex + 4);

  // Default expanded item is the FIRST one in the visible list (if no hover)
  // If hovering, the hovered ID is expanded.
  const isExpanded = (id: number, index: number) => {
    if (hoveredId !== null) return hoveredId === id;
    return index === 0; // Default: First item expanded
  };

  // --- HANDLERS ---
  const handleNext = () => {
    if (currentIndex + 4 < filteredProducts.length) {
      setCurrentIndex(prev => prev + 4);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(prev => prev - 4);
    }
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentIndex(0); // Reset slider to start
  };

  return (
    <section className="w-full bg-[#050B23] text-white flex justify-center py-24 select-none relative z-10">
      
      {/* MAIN CONTAINER: 1224px (Matches Figma) */}
      <div className="w-full max-w-[1224px] flex flex-col gap-12">

        {/* ---------------- HEADER ---------------- */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          
          {/* LEFT: TITLE */}
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#8B744B]" />
            <p className={`${montserrat.className} text-[18px] font-medium uppercase text-white`}>
              PRODUCT
            </p>
          </div>

          {/* RIGHT: CATEGORY TABS */}
          <div className="flex items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`
                  h-[47px] px-6 rounded-[9px] text-[13.5px] font-normal transition-all
                  flex items-center justify-center
                  ${activeCategory === cat 
                    ? "bg-[#D2B589] text-[#0F0F0F]" // Active Style (Solid Gold)
                    : "border-[0.75px] border-dashed border-[#333333] text-[#B3B3B2] hover:border-[#D2B589] hover:text-[#D2B589]" // Inactive Style (Dashed)
                  }
                  ${montserrat.className}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ---------------- PRODUCT CAROUSEL ---------------- */}
        {/* Height fixed to 382px as per Figma */}
        <div className="flex items-center gap-4 h-[382px] w-full transition-all duration-500 ease-out">
          
          {visibleProducts.map((product, index) => {
            const expanded = isExpanded(product.id, index);

            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  relative flex flex-col justify-between h-full transition-all duration-500 ease-in-out cursor-pointer overflow-hidden
                  ${expanded ? "w-[486px]" : "w-[228px]"} 
                `}
              >
                
                {/* IMAGE */}
                <div className="relative w-full h-[327px] bg-[#C4C4C4] overflow-hidden">
                  {/* Using placeholder div color since actual images might be missing */}
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* TEXT INFO */}
                <div className="flex flex-col justify-end mt-3 h-[45px]">
                  
                  {/* Top Row: Name + Price */}
                  <div className="flex justify-between items-center">
                    <h3 className={`${montserrat.className} text-[16px] font-medium uppercase text-white truncate max-w-[85%]`}>
                      {product.name}
                    </h3>
                    <span className={`${lexend.className} text-[16px] font-medium text-white`}>
                      {product.price}
                    </span>
                  </div>

                  {/* Bottom Row: Type (Gold) */}
                  {/* Only show this if expanded or if you want it always visible. Figma shows it always. */}
                  <p className={`${cormorant.className} text-[13px] font-medium uppercase text-[#D7B58A] mt-1`}>
                    {product.type}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

        {/* ---------------- NAVIGATION ARROWS ---------------- */}
        <div className="flex items-center justify-center gap-16 mt-8">
          
          {/* PREV ARROW */}
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`
              w-[48px] h-[26px] rounded-full border border-[#D7B58A] flex items-center justify-center transition-opacity
              ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:bg-[#D7B58A]/10"}
            `}
          >
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" className="rotate-180">
               <path d="M16 6L1 6M1 6L6 1M1 6L6 11" stroke="#D7B58A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* PROGRESS BAR */}
          <div className="w-[180px] h-[5px] bg-[#D7B58A]/25 rounded-full overflow-hidden relative">
             <div 
               className="absolute top-0 left-0 h-full bg-[#D7B58A] transition-all duration-500"
               style={{ 
                 width: `${((currentIndex + 4) / filteredProducts.length) * 100}%` 
               }}
             />
          </div>

          {/* NEXT ARROW */}
          <button 
            onClick={handleNext}
            disabled={currentIndex + 4 >= filteredProducts.length}
            className={`
              w-[48px] h-[26px] rounded-full border border-[#D7B58A] flex items-center justify-center transition-opacity
              ${currentIndex + 4 >= filteredProducts.length ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:bg-[#D7B58A]/10"}
            `}
          >
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
               <path d="M16 6L1 6M16 6L11 1M16 6L11 11" stroke="#D7B58A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

        </div>

      </div>
    </section>
  );
}