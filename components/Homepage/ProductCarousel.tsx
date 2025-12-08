"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Cormorant_Garamond, Montserrat, Lexend } from "next/font/google";

// 1. CONFIGURE FONTS
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["500"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });
const lexend = Lexend({ subsets: ["latin"], weight: ["500"] });

// 2. DATA
const categoryList = ["Chef Coats", "Pants", "Aprons", "Uniform"];

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
  const [productIndex, setProductIndex] = useState(0); 
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // --- DERIVED STATE ---
  let visibleProducts = [];
  if (activeCategory === "All") {
    visibleProducts = allProducts.slice(productIndex, productIndex + 4);
  } else {
    visibleProducts = allProducts.filter(p => p.category === activeCategory).slice(0, 4);
  }

  let progressPercentage = 0;
  if (activeCategory === "All") {
    progressPercentage = ((productIndex + 4) / allProducts.length) * 100;
  } else {
    const currentCatIndex = categoryList.indexOf(activeCategory);
    progressPercentage = ((currentCatIndex + 1) / categoryList.length) * 100;
  }

  // --- HANDLERS ---
  const handleNext = () => {
    if (activeCategory === "All") {
      if (productIndex + 4 < allProducts.length) {
        setProductIndex(prev => prev + 4);
      }
    } else {
      const currentIdx = categoryList.indexOf(activeCategory);
      if (currentIdx < categoryList.length - 1) {
        setActiveCategory(categoryList[currentIdx + 1]);
      }
    }
  };

  const handlePrev = () => {
    if (activeCategory === "All") {
      if (productIndex - 4 >= 0) {
        setProductIndex(prev => prev - 4);
      }
    } else {
      const currentIdx = categoryList.indexOf(activeCategory);
      if (currentIdx > 0) {
        setActiveCategory(categoryList[currentIdx - 1]);
      }
    }
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setProductIndex(0); 
  };

  const isExpanded = (id: number, index: number) => {
    if (hoveredId !== null) return hoveredId === id;
    return index === 0; 
  };

  return (
    <section className="w-full bg-[#050B23] text-white flex justify-center py-0 md:py-0 select-none relative z-10">
      
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1224px] flex flex-col gap-8 md:gap-12 px-4 md:px-6 lg:px-0">

        {/* ---------------- HEADER ---------------- */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/10 pb-6 gap-6 md:gap-0">
          
          {/* LEFT: TITLE */}
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#8B744B]" />
            <p className={`${montserrat.className} text-[18px] font-medium uppercase text-white`}>
              PRODUCT
            </p>
          </div>

          {/* RIGHT: CATEGORY TABS */}
          {/* Mobile: Horizontal Scroll | Desktop: Flex Row */}
          <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <div className="flex items-center gap-3">
              {/* "All" Button */}
              <button
                  onClick={() => handleCategoryChange("All")}
                  className={`
                    h-[40px] md:h-[47px] px-6 rounded-[9px] text-[13.5px] font-normal transition-all whitespace-nowrap
                    flex items-center justify-center
                    ${activeCategory === "All"
                      ? "bg-[#D2B589] text-[#0F0F0F]"
                      : "border-[0.75px] border-dashed border-[#333333] text-[#B3B3B2] hover:border-[#D2B589] hover:text-[#D2B589]"
                    }
                    ${montserrat.className}
                  `}
                >
                  All
              </button>

              {/* Dynamic Category Buttons */}
              {categoryList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`
                    h-[40px] md:h-[47px] px-6 rounded-[9px] text-[13.5px] font-normal transition-all whitespace-nowrap
                    flex items-center justify-center
                    ${activeCategory === cat 
                      ? "bg-[#D2B589] text-[#0F0F0F]" 
                      : "border-[0.75px] border-dashed border-[#333333] text-[#B3B3B2] hover:border-[#D2B589] hover:text-[#D2B589]" 
                    }
                    ${montserrat.className}
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------- PRODUCT CAROUSEL ---------------- */}
        {/* Mobile: 2x2 Grid | Desktop: Accordion Flex */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-center 
          gap-4 lg:h-[382px] w-full 
          transition-all duration-500 ease-out
        ">
          
          {visibleProducts.map((product, index) => {
            const expanded = isExpanded(product.id, index);

            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  relative flex flex-col justify-between 
                  cursor-pointer overflow-hidden transition-all duration-500 ease-in-out
                  
                  /* MOBILE STYLES (Grid) */
                  w-full h-auto aspect-[3/4] sm:aspect-auto sm:h-[350px]

                  /* DESKTOP STYLES (Accordion) */
                  lg:h-full lg:aspect-auto
                  ${expanded ? "lg:w-[486px]" : "lg:w-[228px]"} 
                `}
              >
                
                {/* IMAGE */}
                <div className="relative w-full h-full lg:h-[327px] bg-[#C4C4C4] overflow-hidden">
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
                <div className="
                  absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent
                  lg:static lg:bg-none lg:p-0 lg:flex lg:flex-col lg:justify-end lg:mt-3 lg:h-[45px]
                ">
                  <div className="flex justify-between items-center">
                    <h3 className={`${montserrat.className} text-[14px] md:text-[16px] font-medium uppercase text-white truncate max-w-[85%]`}>
                      {product.name}
                    </h3>
                    <span className={`${lexend.className} text-[14px] md:text-[16px] font-medium text-white`}>
                      {product.price}
                    </span>
                  </div>
                  <p className={`${cormorant.className} text-[12px] md:text-[13px] font-medium uppercase text-[#D7B58A] mt-1`}>
                    {product.type}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

        {/* ---------------- NAVIGATION ARROWS & PROGRESS ---------------- */}
        <div className="flex items-center justify-center gap-8 md:gap-16 mt-4 md:mt-8">
          
          {/* PREV ARROW */}
          <button 
            onClick={handlePrev}
            disabled={activeCategory === "All" ? productIndex === 0 : activeCategory === categoryList[0]}
            className={`
              w-[40px] h-[22px] md:w-[48px] md:h-[26px] rounded-full border border-[#D7B58A] flex items-center justify-center transition-opacity
              ${(activeCategory === "All" ? productIndex === 0 : activeCategory === categoryList[0]) ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:bg-[#D7B58A]/10"}
            `}
          >
            {/* Rotate-0 makes it point Left (based on SVG path direction) */}
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" className="rotate-0 scale-75 md:scale-100">
               <path d="M16 6L1 6M1 6L6 1M1 6L6 11" stroke="#D7B58A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* PROGRESS BAR */}
          <div className="w-[120px] md:w-[180px] h-[4px] md:h-[5px] bg-[#D7B58A]/25 rounded-full overflow-hidden relative">
             <div 
               className="absolute top-0 left-0 h-full bg-[#D7B58A] transition-all duration-500 ease-out"
               style={{ width: `${progressPercentage}%` }}
             />
          </div>

          {/* NEXT ARROW */}
          <button 
            onClick={handleNext}
            disabled={activeCategory === "All" ? productIndex + 4 >= allProducts.length : activeCategory === categoryList[categoryList.length - 1]}
            className={`
              w-[40px] h-[22px] md:w-[48px] md:h-[26px] rounded-full border border-[#D7B58A] flex items-center justify-center transition-opacity
              ${(activeCategory === "All" ? productIndex + 4 >= allProducts.length : activeCategory === categoryList[categoryList.length - 1]) ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:bg-[#D7B58A]/10"}
            `}
          >
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" className="rotate-180 scale-75 md:scale-100">
               <path d="M16 6L1 6M1 6L6 1M1 6L6 11" stroke="#D7B58A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

        </div>

      </div>
    </section>
  );
}