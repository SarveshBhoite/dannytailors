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
// Exact dashed border config to match your Figma
const borderConfig = {
  color: "#212F52",
  width: 1.5,
  dashArray: "12 8", 
};

// Reusable SVG Border Components for precise control
const HorizontalBorder = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none absolute left-0 w-full z-10 ${className}`} style={{ height: borderConfig.width }}>
    <svg className="h-full w-full overflow-visible">
      <line 
        x1="0" y1="0" x2="100%" y2="0" 
        stroke={borderConfig.color} strokeWidth={borderConfig.width} strokeDasharray={borderConfig.dashArray} 
      />
    </svg>
  </div>
);

const VerticalBorder = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none absolute top-0 h-full z-10 ${className}`} style={{ width: borderConfig.width }}>
    <svg className="h-full w-full overflow-visible">
      <line 
        x1="0" y1="0" x2="0" y2="100%" 
        stroke={borderConfig.color} strokeWidth={borderConfig.width} strokeDasharray={borderConfig.dashArray} 
      />
    </svg>
  </div>
);

// ---------- MOCK DATA ----------
const sizes = ["S", "M", "L", "XL", "2XL", "3XL", "4XL"];
const colors = [
    { name: "Blue", hex: "#113081" },
    { name: "Brown", hex: "#7D3D0E" },
    { name: "Beige", hex: "#D2B589" },
];

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("Blue");
  const [toggleMode, setToggleMode] = useState("Select Sizes"); // "Select Sizes" or "Order Multiple"

  return (
    <div className={`relative w-full max-w-[1280px] mx-auto ${montserrat.className}`}>
      
      {/* MAIN CONTAINER BORDER */}
      <div className="relative border-[1.5px] border-dashed border-[#212F52] rounded-[16px] overflow-hidden">
        
        {/* ---------------------------------------------------------
            ROW 1: HEADER SECTION
        --------------------------------------------------------- */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-[60px] gap-8 bg-[#000a23]">
            {/* Header Bottom Border */}
            <HorizontalBorder className="bottom-0" />

            {/* Left: Title & Subtitle */}
            <div className="flex flex-col gap-[10px] w-full max-w-[821px]">
                <h1 className="text-[28px] md:text-[38px] font-medium text-white uppercase leading-tight">
                    Elegant Evening Gown
                </h1>
                <div className="flex flex-wrap items-center gap-3">
                    <span className={`${montserratalter.className} text-[#676665] text-[16px] md:text-[18px]`}>
                        Fitted bodice, flowing skirt
                    </span>
                    {/* In Stock Badge (Exact Figma Colors) */}
                    <div className="flex items-center justify-center px-4 py-1.5 bg-[#152011] rounded-full">
                        <span className={`${montserratalter.className} text-[#8AF265] text-[14px]`}>In stock</span>
                    </div>
                </div>
            </div>

            {/* Right: Buttons */}
            <div className="flex items-center gap-5">
                {/* Add to Cart (Dark with Dashed Gold Border) */}
                <button className="flex items-center justify-center gap-2 px-[18px] py-[13px] bg-[#000A23] border-[0.76px] border-dashed border-[#8B744B] rounded-[9px] hover:bg-[#0a1533] transition">
                    <span className="text-[14px] text-white whitespace-nowrap">Add to Cart</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                </button>

                {/* Shop Now (Solid Gold) */}
                <button className="flex items-center justify-center gap-2 px-[20px] py-[14px] bg-[#D2B589] rounded-[8px] hover:bg-[#c4a676] transition">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="black"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                    <span className="text-[14px] text-[#0F0F0F] font-normal whitespace-nowrap">Shop Now</span>
                </button>
            </div>
        </div>

        {/* ---------------------------------------------------------
            ROW 2: IMAGES
        --------------------------------------------------------- */}
        <div className="relative flex flex-col lg:flex-row h-auto lg:h-[511px]">
             {/* Divider Line Bottom */}
             <HorizontalBorder className="bottom-0" />

            {/* Main Image (Left) */}
            <div className="relative w-full lg:w-[742px] h-[400px] lg:h-full p-5 lg:p-[30px_20px]">
                {/* Vertical Separator */}
                <VerticalBorder className="right-0 hidden lg:block" />
                
                <div className="relative w-full h-full bg-[#D9D9D9] overflow-hidden">
                    <Image src="/products/detail1.svg" alt="Main View" fill className="object-cover object-top" />
                </div>
            </div>

            {/* Small Images (Right) */}
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

        {/* ---------------------------------------------------------
            ROW 3: DETAILS SPLIT
        --------------------------------------------------------- */}
        <div className="relative flex flex-col lg:flex-row">
            
            {/* --- LEFT COLUMN (Features & Materials) --- */}
            <div className="relative w-full lg:w-[640px] flex flex-col">
                <VerticalBorder className="right-0 hidden lg:block" />

                {/* Features Section */}
                <div className="relative p-6 md:p-[40px_60px] flex flex-col gap-10">
                     <HorizontalBorder className="bottom-0" />
                     <h3 className="text-[24px] font-medium text-white">Features</h3>
                     <ul className="flex flex-col gap-3">
                        {/* Custom Bullet Points */}
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

                {/* Materials Section */}
                <div className="relative p-6 md:p-[40px_60px] flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[12px]">
                        <h3 className="text-[24px] font-medium text-white">Materials</h3>
                        <p className={`${montserratalter.className} text-[16px] text-[#81807E]`}>
                            Flowing from Grecian folds to glittering silks, the evening gown has graced centuries in luxury.
                        </p>
                    </div>
                    {/* Material Swatch Image */}
                    <div className="relative w-full h-[311px] bg-[#EADDCD] overflow-hidden">
                        <Image src="/products/material.svg" alt="Material Texture" fill className="object-cover" />
                        {/* Placeholder fallback if image missing */}
                        <div className="absolute inset-0 bg-[#EADDCD] opacity-20"></div>
                    </div>
                </div>
            </div>

            {/* --- RIGHT COLUMN (Options, Size, Price, Reviews) --- */}
            <div className="w-full lg:w-[640px] flex flex-col">

                {/* 1. Colour Options */}
                <div className="relative p-6 md:p-[40px_60px] flex flex-col gap-4">
                    <HorizontalBorder className="bottom-0" />
                    <h3 className="text-[24px] font-medium text-white">Colour options</h3>
                    <div className="flex flex-col gap-[10px]">
                        <span className={`${montserratalter.className} text-[12px] text-white tracking-wide`}>Blue / Tan / Beige</span>
                        <div className="flex gap-3">
                            {colors.map((c) => (
                                <button key={c.name} onClick={() => setSelectedColor(c.name)} className="relative w-8 h-8 rounded-full flex items-center justify-center">
                                    <span className="absolute inset-0 rounded-full border border-white"></span>
                                    <span className="w-full h-full rounded-full border-[3px] border-transparent" style={{backgroundColor: c.hex}}></span>
                                    {selectedColor === c.name && (
                                        <div className="absolute inset-0 m-auto w-3 h-3 bg-[#D2B589] rounded-full z-10" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. Size Section */}
                <div className="relative p-6 md:p-[40px_60px] flex flex-col gap-4">
                    <HorizontalBorder className="bottom-0" />
                    
                    {/* Toggle Buttons */}
                    <div className="flex gap-[30px] mb-4">
                        {["Select Sizes", "Order Multiple"].map((mode) => (
                            <button 
                                key={mode}
                                onClick={() => setToggleMode(mode)}
                                className={`px-5 py-2 rounded-full flex items-center justify-center transition-all ${
                                    toggleMode === mode ? "bg-[#D2B589]" : "bg-transparent border border-[#212F52]"
                                }`}
                            >
                                <span className={`${montserratalter.className} text-[18px] ${toggleMode === mode ? "text-[#212F52]" : "text-[#81807E]"}`}>
                                    {mode}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Size Grid (Roboto Mono) */}
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
                        
                        {/* Duplicate Add to Cart for ease */}
                        <button className="flex items-center justify-center gap-2 px-[18px] py-[13px] bg-[#000A23] border-[0.76px] border-dashed border-[#8B744B] rounded-[9px] hover:bg-[#0a1533] transition">
                            <span className="text-[14px] text-white whitespace-nowrap">Add to Cart</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                        </button>
                     </div>
                </div>

                {/* 4. Ratings & Review Section */}
                <div className="relative p-6 md:p-[40px_60px] flex flex-col gap-4">
                    <div className="flex items-center gap-[10px] mb-4">
                        <h3 className="text-[24px] font-medium text-white">Ratings & Review</h3>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Big Number */}
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-[40px] font-medium text-white leading-[150%]">4.8</span>
                            <div className="flex gap-1">
                                {[1,2,3,4,5].map(s => <div key={s} className="w-5 h-5 bg-[#FFCE22] rounded-[1px]" />)}
                            </div>
                            <span className="text-[16px] text-[#81807E] mt-2">49 Ratings</span>
                        </div>

                        {/* Progress Bars (Exact Figma CSS replication) */}
                        <div className="flex-1 flex flex-col gap-[12px]">
                            {[
                                { star: 5, width: "90%" }, // 249px approx
                                { star: 4, width: "80%" }, // 221px approx
                                { star: 3, width: "65%" }, // 179px approx
                                { star: 2, width: "45%" }, // 135px approx
                                { star: 1, width: "30%" }  // 87px approx
                            ].map((rating) => (
                                <div key={rating.star} className="flex items-center gap-4 h-[24px]">
                                    {/* Star Icon */}
                                    <div className="w-5 h-5 bg-[#FFCE22] rounded-[1px]" />
                                    <span className="text-[#81807E] text-[16px] w-[18px]">{rating.star}</span>
                                    
                                    {/* The Bar */}
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