"use client";

import Image from "next/image";
import { useState } from "react";
import { Montserrat, Montserrat_Alternates, Roboto_Mono } from "next/font/google";

// ---------- FONTS ----------
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const montserratalter = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

// ---------- BORDER SYSTEM ----------
const borderConfig = {
  color: "#212F52",
  width: 1.53,
  dashArray: "12 8", 
};
const halfWidth = borderConfig.width / 2;

// 1. Outer Border Wrapper
const OuterDashedBorder = () => (
  <div className="absolute inset-0 pointer-events-none z-20">
    <svg className="w-full h-full">
      <rect 
        x={halfWidth} 
        y={halfWidth} 
        width={`calc(100% - ${borderConfig.width}px)`} 
        height={`calc(100% - ${borderConfig.width}px)`} 
        fill="none" 
        stroke={borderConfig.color} 
        strokeWidth={borderConfig.width} 
        strokeDasharray={borderConfig.dashArray} 
        rx="16" ry="16" 
      />
    </svg>
  </div>
);

// 2. Horizontal Divider
const HorizontalBorder = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none absolute left-0 w-full z-10 ${className}`} style={{ height: borderConfig.width }}>
    <svg className="h-full w-full overflow-visible">
      <line 
        x1="0" y1={halfWidth} x2="100%" y2={halfWidth} 
        stroke={borderConfig.color} strokeWidth={borderConfig.width} strokeDasharray={borderConfig.dashArray} 
      />
    </svg>
  </div>
);

// 3. Vertical Divider
const VerticalBorder = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none absolute top-0 h-full z-10 ${className}`} style={{ width: borderConfig.width }}>
    <svg className="h-full w-full overflow-visible">
      <line 
        x1={halfWidth} y1="0" x2={halfWidth} y2="100%" 
        stroke={borderConfig.color} strokeWidth={borderConfig.width} strokeDasharray={borderConfig.dashArray} 
      />
    </svg>
  </div>
);

// ---------- SUB-COMPONENT: QUANTITY STEPPER ----------
const QuantityStepper = ({ value, onMinus, onPlus }: { value: number, onMinus: () => void, onPlus: () => void }) => {
    return (
        <div className="relative flex items-center justify-between w-[72px] h-[33px] bg-transparent rounded-[11px] group select-none">
            {/* SVG Dashed Border - Using "6 3" dash array to keep dashes long */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 72 33" fill="none" preserveAspectRatio="none">
                <rect x="0.5" y="0.5" width="71" height="32" rx="11" stroke="#8B744B" strokeWidth="0.76" strokeDasharray="6 3"/>
            </svg>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-[8px] h-[8px] border-t border-l border-[#D2B589] rounded-tl-[11px]" />
            <div className="absolute top-0 right-0 w-[8px] h-[8px] border-t border-r border-[#D2B589] rounded-tr-[11px]" />
            <div className="absolute bottom-0 right-0 w-[8px] h-[8px] border-b border-r border-[#D2B589] rounded-br-[11px]" />
            <div className="absolute bottom-0 left-0 w-[8px] h-[8px] border-b border-l border-[#D2B589] rounded-bl-[11px]" />

            {/* Minus */}
            <button 
                onClick={onMinus}
                className="flex items-center justify-center w-[24px] h-full text-[#D2B589] hover:text-white transition-colors text-[16px] -mt-0.5"
            >
                −
            </button>

            {/* Value */}
            <span className={`${robotoMono.className} text-[12px] text-white pt-0.5`}>
                {value > 0 ? value : "0"}
            </span>

            {/* Plus */}
            <button 
                onClick={onPlus}
                className="flex items-center justify-center w-[24px] h-full text-[#D2B589] hover:text-white transition-colors text-[16px] -mt-0.5"
            >
                +
            </button>
        </div>
    );
};

// ---------- SUB-COMPONENT: STAR ICON ----------
const StarIcon = ({ className = "" }: { className?: string }) => (
    <svg 
        width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFCE22"/>
    </svg>
);

// ---------- MOCK DATA ----------
const sizes = ["S", "M", "L", "XL", "2XL", "3XL", "4XL"];
const colors = [
    { name: "Blue", hex: "#113081" },
    { name: "Brown", hex: "#7D3D0E" },
    { name: "Beige", hex: "#D2B589" },
];

export default function ProductDetails() {
  // State for Single Selection
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("Blue");
  
  // State for Toggle Mode
  const [toggleMode, setToggleMode] = useState<"Select Sizes" | "Order Multiple">("Select Sizes");

  // State for Multiple Orders { "S": 2, "L": 1 }
  const [sizeQuantities, setSizeQuantities] = useState<Record<string, number>>({});

  // Helper to update quantity
  const updateQuantity = (size: string, delta: number) => {
    setSizeQuantities(prev => {
        const current = prev[size] || 0;
        const next = Math.max(0, current + delta);
        return { ...prev, [size]: next };
    });
  };

  return (
    <div className={`relative w-full max-w-[1280px] mt-4 mx-auto ${montserrat.className}`}>
      
      {/* MAIN CONTAINER */}
      <div className="relative rounded-[16px] overflow-hidden bg-[#000a23]">
        <OuterDashedBorder />
        
        {/* ROW 1: HEADER */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-[60px] gap-8 bg-[#000a23]">
            <HorizontalBorder className="bottom-0" />

            <div className="flex flex-col gap-[10px] w-full max-w-[821px]">
                <h1 className="text-[28px] md:text-[38px] font-medium text-white uppercase leading-tight">
                    Elegant Evening Gown
                </h1>
                <div className="flex flex-wrap items-center gap-3">
                    <span className={`${montserratalter.className} text-[#676665] text-[16px] md:text-[18px]`}>
                        Fitted bodice, flowing skirt
                    </span>
                    <div className="flex items-center justify-center px-4 py-1.5 bg-[#152011] rounded-full">
                        <span className={`${montserratalter.className} text-[#8AF265] text-[14px]`}>In stock</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-5">
                {/* Add to Cart */}
                <button className="relative flex items-center justify-center gap-3 w-[150px] h-[50px] bg-[#000A23] rounded-[9px] group/btn">
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 150 50" fill="none" preserveAspectRatio="none">
                        <rect x="0.5" y="0.5" width="149" height="49" rx="9" stroke="#8B744B" strokeWidth="0.76" strokeDasharray="6 3"/>
                    </svg>
                    <div className="absolute top-0 left-0 w-[12px] h-[12px] border-t border-l border-[#D2B589] rounded-tl-[9px]" />
                    <div className="absolute top-0 right-0 w-[12px] h-[12px] border-t border-r border-[#D2B589] rounded-tr-[9px]" />
                    <div className="absolute bottom-0 right-0 w-[12px] h-[12px] border-b border-r border-[#D2B589] rounded-br-[9px]" />
                    <div className="absolute bottom-0 left-0 w-[12px] h-[12px] border-b border-l border-[#D2B589] rounded-bl-[9px]" />
                    
                    <span className={`${montserrat.className} text-[14px] text-white font-normal`}>Add to Cart</span>
                    <div className="relative w-5 h-5">
                        <Image src="/products/cart.svg" alt="Cart" fill className="object-contain" />
                    </div>
                </button>

                {/* Shop Now */}
                <button className="flex items-center justify-center gap-3 px-[20px] py-[14px] bg-[#D2B589] rounded-[8px] hover:bg-[#c4a676] transition h-[50px]">
                     <div className="relative w-5 h-5">
                        <Image src="/products/shop.svg" alt="Shop" fill className="object-contain" />
                    </div>
                    <span className="text-[14px] text-[#0F0F0F] font-normal whitespace-nowrap">Shop Now</span>
                </button>
            </div>
        </div>

        {/* ROW 2: IMAGES */}
        <div className="relative flex flex-col lg:flex-row h-auto lg:h-[511px]">
             <HorizontalBorder className="bottom-0" />

            <div className="relative w-full lg:w-[742px] h-[400px] lg:h-full p-5 lg:p-[30px_20px]">
                <VerticalBorder className="right-0 hidden lg:block" />
                <div className="relative w-full h-full bg-[#D9D9D9] overflow-hidden">
                    <Image src="/products/detail1.svg" alt="Main View" fill className="object-cover object-top" />
                </div>
            </div>

            <div className="flex flex-col w-full lg:w-[538px] h-full">
                <div className="relative flex-1 h-[250px] lg:h-[50%] p-5 lg:p-[30px_0px_10px_0px] lg:pl-[20px]">
                    <div className="relative w-full h-full bg-[#D9D9D9] overflow-hidden">
                        <Image src="/products/detail2.svg" alt="Detail View 1" fill className="object-cover object-top" />
                    </div>
                </div>
                <div className="relative flex-1 h-[250px] lg:h-[50%] p-5 lg:p-[10px_0px_30px_0px] lg:pl-[20px]">
                    <div className="relative w-full h-full bg-[#D9D9D9] overflow-hidden">
                        <Image src="/products/detail3.svg" alt="Detail View 2" fill className="object-cover object-top" />
                    </div>
                </div>
            </div>
        </div>

        {/* ROW 3: DETAILS SPLIT */}
        <div className="relative flex flex-col lg:flex-row">
            
            {/* LEFT COLUMN */}
            <div className="relative w-full lg:w-[640px] flex flex-col">
                <VerticalBorder className="right-0 hidden lg:block" />

                <div className="relative p-6 md:p-[40px_60px] flex flex-col gap-10">
                     <HorizontalBorder className="bottom-0" />
                     <h3 className="text-[24px] font-medium text-white">Features</h3>
                     <ul className="flex flex-col gap-3">
                        {[
                            "Distressed detailing for a rugged look",
                            "Button-up front closure with engraved metal buttons",
                            "Two chest pockets with buttoned flaps",
                            "Two side pockets for added functionality",
                            "Adjustable buttoned cuffs for a personalized fit",
                            "Back waist tabs for customizable styling"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-2 w-1 h-1 bg-[#81807E] rounded-full shrink-0" />
                                <span className={`${montserratalter.className} text-[16px] text-[#81807E] leading-relaxed`}>{item}</span>
                            </li>
                        ))}
                     </ul>
                </div>

                <div className="relative p-6 md:p-[40px_60px] flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[12px]">
                        <h3 className="text-[24px] font-medium text-white">Materials</h3>
                        <p className={`${montserratalter.className} text-[16px] text-[#81807E]`}>
                            Flowing from Grecian folds to glittering silks, the evening gown has graced centuries in luxury.
                        </p>
                    </div>
                    <div className="relative w-full h-[311px] bg-[#EADDCD] overflow-hidden">
                        <div className="absolute inset-0 bg-[#EADDCD] opacity-20"></div>
                        <Image src="/products/material.svg" alt="Material Texture" fill className="object-cover" />
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full lg:w-[640px] flex flex-col">

                {/* 1. Colour Options */}
                <div className="relative p-6 md:p-[40px_60px] flex flex-col gap-4">
                    <HorizontalBorder className="bottom-0" />
                    <h3 className="text-[24px] font-medium text-white">Colour options</h3>
                    <div className="flex flex-col gap-[10px]">
                        <span className={`${montserratalter.className} text-[12px] text-white tracking-wide`}>Blue / Tan / Beige</span>
                        <div className="flex gap-3">
                            {colors.map((c) => (
                                <button 
                                    key={c.name} 
                                    onClick={() => setSelectedColor(c.name)} 
                                    className={`
                                        w-[32px] h-[32px] rounded-full flex items-center justify-center transition-all
                                        ${selectedColor === c.name ? 'border border-white' : 'border border-transparent'}
                                    `}
                                >
                                    <div 
                                        className="w-full h-full rounded-full" 
                                        style={{backgroundColor: c.hex}}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. Size Section */}
                <div className="relative p-6 md:p-[40px_60px] flex flex-col gap-4">
                    <HorizontalBorder className="bottom-0" />
                    
                    <div className="flex gap-[30px] mb-8">
                        {(["Select Sizes", "Order Multiple"] as const).map((mode) => (
                            <button 
                                key={mode}
                                onClick={() => setToggleMode(mode)}
                                className={`px-5 py-2 rounded-full flex items-center justify-center transition-all ${
                                    toggleMode === mode ? "bg-[#D2B589]" : "bg-transparent border border-[#212F52]"
                                }`}
                            >
                                <span className={`${montserratalter.className} text-[16px] lg:text-[18px] ${toggleMode === mode ? "text-[#212F52]" : "text-[#81807E]"}`}>
                                    {mode}
                                </span>
                            </button>
                        ))}
                    </div>

                    {toggleMode === "Select Sizes" ? (
                        <div className="flex flex-wrap gap-[14px]">
                            {sizes.map((size) => (
                                <button 
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`
                                        w-[51px] h-[43px] rounded-full flex items-center justify-center transition-all
                                        ${selectedSize === size ? 'bg-[#D2B589] text-[#212F52]' : 'bg-[#212F52] text-white hover:bg-[#2a3c68]'}
                                    `}
                                >
                                    <span className={`${robotoMono.className} text-[18px]`}>{size}</span>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {sizes.map((size) => (
                                <div key={size} className="flex items-center gap-[40px]">
                                    <div className="w-[51px] h-[43px] rounded-[100px] bg-[#212F52] flex items-center justify-center">
                                        <span className={`${robotoMono.className} text-[18px] text-white`}>{size}</span>
                                    </div>
                                    <QuantityStepper 
                                        value={sizeQuantities[size] || 0}
                                        onMinus={() => updateQuantity(size, -1)}
                                        onPlus={() => updateQuantity(size, 1)}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* 3. Price Section */}
                <div className="relative p-6 md:p-[40px_60px] flex flex-col justify-center h-[173px] gap-4">
                     <HorizontalBorder className="bottom-0" />
                     <h3 className="text-[24px] font-medium text-white">Price</h3>
                     <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span className={`${montserratalter.className} text-[24px] font-medium text-white`}>$89.99</span>
                            <span className={`${montserratalter.className} text-[16px] text-[#81807E]`}>[ MRP incl. of all taxes ]</span>
                        </div>
                        <button className="relative flex items-center justify-center gap-3 w-[150px] h-[50px] bg-[#000A23] rounded-[9px] group/btn">
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 150 50" fill="none" preserveAspectRatio="none">
                                <rect x="0.5" y="0.5" width="149" height="49" rx="9" stroke="#8B744B" strokeWidth="0.76" strokeDasharray="6 3"/>
                            </svg>
                            <div className="absolute top-0 left-0 w-[12px] h-[12px] border-t border-l border-[#D2B589] rounded-tl-[9px]" />
                            <div className="absolute top-0 right-0 w-[12px] h-[12px] border-t border-r border-[#D2B589] rounded-tr-[9px]" />
                            <div className="absolute bottom-0 right-0 w-[12px] h-[12px] border-b border-r border-[#D2B589] rounded-br-[9px]" />
                            <div className="absolute bottom-0 left-0 w-[12px] h-[12px] border-b border-l border-[#D2B589] rounded-bl-[9px]" />
                            <span className={`${montserrat.className} text-[14px] text-white font-normal`}>Add to Cart</span>
                            <div className="relative w-5 h-5">
                                <Image src="/products/cart.svg" alt="Cart" fill className="object-contain" />
                            </div>
                        </button>
                     </div>
                </div>

                {/* 4. Ratings & Review Section */}
                <div className="relative p-6 md:p-[40px_60px] flex flex-col gap-4">
                    <div className="flex items-center gap-[10px] mb-4">
                        <h3 className="text-[24px] font-medium text-white">Ratings & Review</h3>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex flex-col items-center justify-start">
                            <span className="text-[40px] font-medium text-white leading-[150%]">4.8</span>
                            <div className="flex gap-1 mt-1">
                                {[1,2,3,4,5].map(s => <StarIcon key={s} />)}
                            </div>
                            <span className="text-[16px] text-[#81807E] mt-2">49 Ratings</span>
                        </div>

                        <div className="flex-1 flex flex-col gap-[12px]">
                            {[
                                { star: "05", width: "90%" }, 
                                { star: "04", width: "80%" },
                                { star: "03", width: "65%" },
                                { star: "02", width: "45%" },
                                { star: "01", width: "30%" }
                            ].map((rating) => (
                                <div key={rating.star} className="flex items-center gap-4 h-[24px]">
                                    <StarIcon />
                                    <span className="text-[#81807E] text-[16px] w-[18px] text-center">{rating.star}</span>
                                    <div className="relative flex-1 h-[16px] bg-[#1A1A1A] border border-[#212F52] rounded-[100px] p-[6px] flex items-center">
                                        <div 
                                            className="h-[4px] bg-[#AE9B84] rounded-[100px]" 
                                            style={{ width: rating.width }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
}