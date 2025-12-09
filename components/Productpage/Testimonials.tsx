"use client";

import Image from "next/image";
import { Montserrat, Montserrat_Alternates, Roboto, Roboto_Mono } from "next/font/google";

// ---------- FONTS ----------
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

const montserratalter = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

// ---------- BORDER SYSTEM (Reused) ----------
const borderConfig = {
  color: "#212F52",
  width: 1.53,
  dashArray: "12 8", 
};
const halfWidth = borderConfig.width / 2;

const OuterDashedBorder = () => (
  <div className="absolute inset-0 pointer-events-none z-20">
    <svg className="w-full h-full">
      <rect 
        x={halfWidth} y={halfWidth} 
        width={`calc(100% - ${borderConfig.width}px)`} height={`calc(100% - ${borderConfig.width}px)`} 
        fill="none" stroke={borderConfig.color} strokeWidth={borderConfig.width} strokeDasharray={borderConfig.dashArray} 
        rx="16" ry="16" 
      />
    </svg>
  </div>
);

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

// ---------- MOCK DATA ----------
const testimonials = [
    {
        name: "Sarah Thompson",
        location: "New York, USA",
        review: "StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!"
    },
    {
        name: "Rajesh Patel",
        location: "Mumbai, India",
        review: "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!"
    },
    {
        name: "Emily Walker",
        location: "London, UK",
        review: "Adorable and comfortable! My daughter loves her new outfit. Thank you, StyleLoom, for dressing our little fashionista."
    },
    {
        name: "Alejandro Martinez",
        location: "Barcelona, Spain",
        review: "Impressed by the quality and style. These shoes turned heads at every event. StyleLoom, you've gained a loyal customer!"
    },
    {
        name: "Priya Sharma",
        location: "Delhi, India",
        review: "Perfect fit and exceptional quality. These jeans have become my go-to for casual and chic outings."
    },
    {
        name: "Maria Rodriguez",
        location: "Mexico City, Mexico",
        review: "Stylish sneakers that don't compromise on comfort. StyleLoom knows how to balance fashion and functionality."
    }
];

// ---------- SUB-COMPONENT: STAR ICON ----------
const StarIcon = () => (
    <div className="w-5 h-5 bg-[#FFCE22] rounded-[1px] flex items-center justify-center">
        {/* Using a mask or SVG path if needed, but per figma instructions simple yellow box was shown, 
            however previous instruction asked for stars. I will use the SVG star. */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFCE22"/>
        </svg>
    </div>
);

export default function Testimonials() {
  return (
    <section className="w-full max-w-[1280px] mx-auto mt-20 mb-20 px-4 xl:px-0">
        
        {/* MAIN CONTAINER */}
        <div className="relative bg-transparent rounded-[16px] overflow-hidden">
            <OuterDashedBorder />

            {/* HEADER SECTION */}
            <div className="relative px-6 py-10 md:p-[60px] md:pr-[250px] flex flex-col gap-6 overflow-hidden">
                <HorizontalBorder className="bottom-0" />
                
                <h2 className={`${montserrat.className} text-[28px] md:text-[38px] font-medium text-white uppercase z-10`}>
                    TESTIMONIAL COLLECTION.
                </h2>
                <p className={`${montserratalter.className} text-[16px] text-[#666666] leading-[150%] z-10`}>
                    At StyleLoom, our customers are the heartbeat of our brand.
                </p>

                {/* Abstract Design (Absolute Positioned as per Figma) */}
                <div className="absolute right-[-70px] top-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[316px] md:h-[316px] pointer-events-none z-0 opacity-80 md:opacity-100">
                    <Image 
                        src="/products/abstractdesign.svg" 
                        alt="Abstract Design" 
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* TESTIMONIALS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((item, index) => {
                    // Logic to hide borders on edges to prevent double borders
                    const isLastInRow = (index + 1) % 3 === 0; // For Desktop (3 cols)
                    const isLastRow = index >= testimonials.length - 3; // For Desktop

                    return (
                        <div key={index} className="relative p-6 md:p-[50px] flex flex-col gap-[30px]">
                            
                            {/* Vertical Border (Right side of item, except for the last item in a row) */}
                            <VerticalBorder className="right-0 block md:hidden" /> {/* Mobile: Show everywhere? No, handle media queries better */}
                            {/* Desktop Vertical Borders: Show on index 0, 1, 3, 4. Hide on 2, 5. */}
                            <VerticalBorder className={`right-0 hidden lg:${(index + 1) % 3 === 0 ? 'hidden' : 'block'}`} />
                            
                            {/* Tablet Vertical Borders (2 cols): Show on even indexes */}
                            <VerticalBorder className={`right-0 hidden md:block lg:hidden ${(index + 1) % 2 === 0 ? 'hidden' : 'block'}`} />

                            {/* Horizontal Border (Bottom of item, except last row) */}
                            {/* We add bottom border to all items except the very last row */}
                            <HorizontalBorder className={`bottom-0 ${index >= testimonials.length - 1 ? 'hidden' : 'block'} lg:${index >= testimonials.length - 3 ? 'hidden' : 'block'}`} />


                            {/* PROFILE HEADER */}
                            <div className="flex flex-row justify-between items-start">
                                <div className="flex flex-row items-center gap-[10px]">
                                    {/* Avatar */}
                                    <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden bg-[#AE9B84]">
                                        <Image src="/products/person.svg" alt={item.name} fill className="object-cover" />
                                    </div>
                                    
                                    {/* Name & Location */}
                                    <div className="flex flex-col gap-[2px]">
                                        <h4 className={`${roboto.className} text-[18px] text-white leading-[150%]`}>
                                            {item.name}
                                        </h4>
                                        <span className={`${robotoMono.className} text-[16px] text-[#676665] leading-[150%]`}>
                                            {item.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Twitter Icon */}
                                <div className="relative w-[28px] h-[28px] shrink-0 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                                    <Image src="/twitter.svg" alt="Twitter" fill className="object-contain" />
                                </div>
                            </div>

                            {/* STARS */}
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <StarIcon key={s} />
                                ))}
                            </div>

                            {/* REVIEW TEXT */}
                            <p className={`${montserratalter.className} text-[16px] text-[#81807E] leading-[150%]`}>
                                {item.review}
                            </p>

                        </div>
                    );
                })}
            </div>

        </div>
    </section>
  );
}