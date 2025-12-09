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

// ---------- SUB-COMPONENTS ----------

// Actual Star SVG
const StarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#FFCE22"/>
    </svg>
);

// Inline Twitter SVG with specific color
const TwitterIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="#C2B4A3"/>
    </svg>
);

export default function Testimonials() {
  return (
    <section className="w-full max-w-[1280px] mx-auto mt-10 mb-20 px-4 xl:px-0">
        
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

                {/* Abstract Design (Positioned at right: 0) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[316px] md:h-[316px] pointer-events-none z-0 opacity-80 md:opacity-100">
                    <Image 
                        src="/products/abstractdesign.svg" 
                        alt="Abstract Design" 
                        fill
                        className="object-contain object-right"
                    />
                </div>
            </div>

            {/* TESTIMONIALS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((item, index) => {
                    // Logic for border placement
                    const isLastInRowDesktop = (index + 1) % 3 === 0;
                    const isLastInRowTablet = (index + 1) % 2 === 0;
                    const isLastRowDesktop = index >= testimonials.length - 3;
                    const isLastRowTablet = index >= testimonials.length - 2;
                    const isLastItem = index === testimonials.length - 1;

                    return (
                        <div key={index} className="relative p-6 md:p-[50px] flex flex-col gap-[30px]">
                            
                            {/* Vertical Borders */}
                            <VerticalBorder className={`right-0 hidden lg:${isLastInRowDesktop ? 'hidden' : 'block'}`} />
                            <VerticalBorder className={`right-0 hidden md:block lg:hidden ${isLastInRowTablet ? 'hidden' : 'block'}`} />

                            {/* Horizontal Borders */}
                            <HorizontalBorder className={`bottom-0 hidden lg:${isLastRowDesktop ? 'hidden' : 'block'}`} />
                            <HorizontalBorder className={`bottom-0 hidden md:block lg:hidden ${isLastRowTablet ? 'hidden' : 'block'}`} />
                            {/* Mobile: Show on all except last item */}
                            <HorizontalBorder className={`bottom-0 md:hidden ${isLastItem ? 'hidden' : 'block'}`} />


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

                                {/* Twitter Icon (Inline SVG with correct color) */}
                                <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
                                    <TwitterIcon />
                                </div>
                            </div>

                            {/* STARS (Actual SVG Stars) */}
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