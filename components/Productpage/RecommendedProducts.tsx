"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat, Montserrat_Alternates } from "next/font/google";

// ---------- FONTS ----------
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserratalter = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

// ---------- BORDER SYSTEM (From Product Page) ----------
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
        x={halfWidth}
        y={halfWidth}
        width={`calc(100% - ${borderConfig.width}px)`}
        height={`calc(100% - ${borderConfig.width}px)`}
        fill="none"
        stroke={borderConfig.color}
        strokeWidth={borderConfig.width}
        strokeDasharray={borderConfig.dashArray}
        rx="16"
        ry="16"
      />
    </svg>
  </div>
);

const InternalVerticalBorder = ({ className = "" }: { className?: string }) => (
  <div
    className={`pointer-events-none absolute top-0 right-0 h-full z-10 ${className}`}
    style={{ width: borderConfig.width }}
  >
    <svg className="h-full w-full overflow-visible">
      <line
        x1={halfWidth}
        y1="0"
        x2={halfWidth}
        y2="100%"
        stroke={borderConfig.color}
        strokeWidth={borderConfig.width}
        strokeDasharray={borderConfig.dashArray}
      />
    </svg>
  </div>
);

const InternalHorizontalBorder = ({
  className = "",
}: {
  className?: string;
}) => (
  <div
    className={`pointer-events-none absolute bottom-0 left-0 w-full z-10 ${className}`}
    style={{ height: borderConfig.width }}
  >
    <svg className="h-full w-full overflow-visible">
      <line
        x1="0"
        y1={halfWidth}
        x2="100%"
        y2={halfWidth}
        stroke={borderConfig.color}
        strokeWidth={borderConfig.width}
        strokeDasharray={borderConfig.dashArray}
      />
    </svg>
  </div>
);

// ---------- TYPES ----------
type Product = {
  id: number;
  title: string;
  price: string;
  fit: string;
  category: string;
  image: string;
};

// ---------- MOCK DATA ----------
const boughtTogether: Product[] = [
  {
    id: 1,
    title: "Timeless A-line Evening Dress",
    price: "$109.99",
    fit: "Ankle-length",
    category: "Womenswear",
    image: "/shop-now/chefcoat/prod1.svg",
  },
  {
    id: 2,
    title: "Floral Bloom Maxi Dress",
    price: "$54.99",
    fit: "Slim Fit",
    category: "Womenswear",
    image: "/shop-now/chefcoat/prod2.svg",
  },
  {
    id: 3,
    title: "Elegant Evening Gown",
    price: "$89.99",
    fit: "Flowing skirt",
    category: "Womenswear",
    image: "/shop-now/chefcoat/prod3.svg",
  },
];

const recommended: Product[] = [
  {
    id: 4,
    title: "Wide-Brim Bucket Hat",
    price: "$69.99",
    fit: "Any face shape",
    category: "Accessories",
    image: "/shop-now/pants/prod1.svg",
  },
  {
    id: 5,
    title: "Sophisticate Sun Hat",
    price: "$24.99",
    fit: "One size fits all",
    category: "Accessories",
    image: "/shop-now/pants/prod2.svg",
  },
  {
    id: 6,
    title: "Timeless Fedora",
    price: "$79.99",
    fit: "Any face shape",
    category: "Accessories",
    image: "/shop-now/pants/prod3.svg",
  },
];

export default function RecommendedProducts() {
  return (
    <section className="w-full max-w-[1280px] mx-auto mt-10 mb-10 px-4 xl:px-0">
      {/* SINGLE UNIFIED CONTAINER */}
      <div className="relative bg-[#000a23] rounded-[16px] overflow-hidden">
        <OuterDashedBorder />

        {/* ================= HEADER 1 ================= */}
        <div className="relative flex flex-row items-center justify-between px-[23px] py-[23px]">
          <InternalHorizontalBorder />
          <h2
            className={`${montserrat.className} text-[18px] md:text-[23px] font-medium text-white uppercase`}
          >
            BOUGHT TOGETHER FREQUENTLY
          </h2>
          <Link
            href="/products"
            className="relative flex items-center justify-center gap-2 w-[113px] h-[48px] bg-[#000A23] rounded-[9px] group/btn"
          >
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 113 48"
              fill="none"
              preserveAspectRatio="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="112"
                height="47"
                rx="9"
                stroke="#8B744B"
                strokeWidth="0.76"
                strokeDasharray="6 3"
              />
            </svg>
            <div className="absolute top-0 left-0 w-[12px] h-[12px] border-t border-l border-[#D2B589] rounded-tl-[9px]" />
            <div className="absolute top-0 right-0 w-[12px] h-[12px] border-t border-r border-[#D2B589] rounded-tr-[9px]" />
            <div className="absolute bottom-0 right-0 w-[12px] h-[12px] border-b border-r border-[#D2B589] rounded-br-[9px]" />
            <div className="absolute bottom-0 left-0 w-[12px] h-[12px] border-b border-l border-[#D2B589] rounded-bl-[9px]" />
            <span className={`${montserrat.className} text-[13.8px] text-white`}>
              View All
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
            >
              <path
                d="M1 11L11 1M11 1H3.5M11 1V8.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* ================= GRID 1 (Bought Together) ================= */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Horizontal Border connecting this grid to the next header */}
          <InternalHorizontalBorder />

          {boughtTogether.map((product, index) => (
            <article
              key={product.id}
              className="relative flex flex-col p-[23px] gap-[23px]"
            >
              {/* VERTICAL BORDER: Right side (Hidden on last column) */}
              <InternalVerticalBorder
                className={`
                            hidden md:block 
                            ${(index + 1) % 2 === 0 ? "md:hidden" : ""} 
                            ${(index + 1) % 3 === 0 ? "lg:hidden" : "lg:block"}
                        `}
              />

              {/* HORIZONTAL BORDER (Mobile only): Bottom of items except last */}
              <InternalHorizontalBorder className="block md:hidden last:hidden" />

              {/* Image */}
              <div className="relative w-full h-[296px] bg-[#D9D9D9] rounded-t-[38px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col gap-[15px]">
                <div className="flex justify-between items-center h-[48px]">
                  <div className="flex items-center justify-center bg-[#212F52] rounded-[76px] px-[12px] py-[7px] h-[36px]">
                    <span
                      className={`${montserratalter.className} text-[13.8px] text-[#D2B589] whitespace-nowrap`}
                    >
                      {product.category}
                    </span>
                  </div>

                  {/* --- SHOP NOW BUTTON (Matched to Product Page) --- */}
                  <button className="group/btn relative flex h-[48px] w-[121px] items-center justify-center gap-1 rounded-[9px] bg-[#000A23]">
                    <svg
                      className="pointer-events-none absolute inset-0 h-full w-full"
                      viewBox="0 0 121 48"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="120"
                        height="47"
                        rx="9"
                        stroke="#8B744B"
                        strokeWidth="0.76"
                        strokeDasharray="4 2"
                      />
                    </svg>
                    <div className="absolute top-0 left-0 h-[12px] w-[12px] rounded-tl-[9px] border-t border-l border-[#D2B589]" />
                    <div className="absolute top-0 right-0 h-[12px] w-[12px] rounded-tr-[9px] border-t border-r border-[#D2B589]" />
                    <div className="absolute bottom-0 right-0 h-[12px] w-[12px] rounded-br-[9px] border-b border-r border-[#D2B589]" />
                    <div className="absolute bottom-0 left-0 h-[12px] w-[12px] rounded-bl-[9px] border-b border-l border-[#D2B589]" />
                    <span
                      className={`${montserrat.className} text-[13.8px] font-normal text-white`}
                    >
                      Buy Now
                    </span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                    >
                      <path
                        d="M1 11L11 1M11 1H3.5M11 1V8.5"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {/* --- END BUTTON --- */}
                </div>

                <h3
                  className={`${montserrat.className} text-[18.4px] font-medium text-white leading-[150%]`}
                >
                  {product.title}
                </h3>
                <div className="flex items-center gap-[15px]">
                  <div className="flex items-center gap-[6px]">
                    <span
                      className={`${montserratalter.className} text-[13.8px] text-[#81807E]`}
                    >
                      Fit
                    </span>
                    <div className="w-[3px] h-[3px] bg-[#4D4D4D] rounded-full" />
                    <span
                      className={`${montserratalter.className} text-[15.3px] font-medium text-[#CCCCCC] whitespace-nowrap`}
                    >
                      {product.fit}
                    </span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <span
                      className={`${montserratalter.className} text-[13.8px] text-[#81807E]`}
                    >
                      Price
                    </span>
                    <div className="w-[3px] h-[3px] bg-[#4D4D4D] rounded-full" />
                    <span
                      className={`${montserratalter.className} text-[15.3px] font-medium text-[#CCCCCC]`}
                    >
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= HEADER 2 ================= */}
        <div className="relative flex flex-row items-center justify-between px-[23px] py-[23px]">
          <InternalHorizontalBorder />
          <h2
            className={`${montserrat.className} text-[18px] md:text-[23px] font-medium text-white uppercase`}
          >
            RECOMMENDED
          </h2>
          <Link
            href="/products"
            className="relative flex items-center justify-center gap-2 w-[113px] h-[48px] bg-[#000A23] rounded-[9px] group/btn"
          >
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 113 48"
              fill="none"
              preserveAspectRatio="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="112"
                height="47"
                rx="9"
                stroke="#8B744B"
                strokeWidth="0.76"
                strokeDasharray="6 3"
              />
            </svg>
            <div className="absolute top-0 left-0 w-[12px] h-[12px] border-t border-l border-[#D2B589] rounded-tl-[9px]" />
            <div className="absolute top-0 right-0 w-[12px] h-[12px] border-t border-r border-[#D2B589] rounded-tr-[9px]" />
            <div className="absolute bottom-0 right-0 w-[12px] h-[12px] border-b border-r border-[#D2B589] rounded-br-[9px]" />
            <div className="absolute bottom-0 left-0 w-[12px] h-[12px] border-b border-l border-[#D2B589] rounded-bl-[9px]" />
            <span className={`${montserrat.className} text-[13.8px] text-white`}>
              View All
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
            >
              <path
                d="M1 11L11 1M11 1H3.5M11 1V8.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* ================= GRID 2 (Recommended) ================= */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* No bottom border for the last section */}

          {recommended.map((product, index) => (
            <article
              key={product.id}
              className="relative flex flex-col p-[23px] gap-[23px]"
            >
              {/* VERTICAL BORDER */}
              <InternalVerticalBorder
                className={`
                            hidden md:block 
                            ${(index + 1) % 2 === 0 ? "md:hidden" : ""} 
                            ${(index + 1) % 3 === 0 ? "lg:hidden" : "lg:block"}
                        `}
              />

              {/* HORIZONTAL BORDER (Mobile only) */}
              <InternalHorizontalBorder className="block md:hidden last:hidden" />

              {/* Image */}
              <div className="relative w-full h-[296px] bg-[#D9D9D9] rounded-t-[38px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col gap-[15px]">
                <div className="flex justify-between items-center h-[48px]">
                  <div className="flex items-center justify-center bg-[#212F52] rounded-[76px] px-[12px] py-[7px] h-[36px]">
                    <span
                      className={`${montserratalter.className} text-[13.8px] text-[#D2B589] whitespace-nowrap`}
                    >
                      {product.category}
                    </span>
                  </div>

                  {/* --- SHOP NOW BUTTON (Matched to Product Page) --- */}
                  <button className="group/btn relative flex h-[48px] w-[121px] items-center justify-center gap-1 rounded-[9px] bg-[#000A23]">
                    <svg
                      className="pointer-events-none absolute inset-0 h-full w-full"
                      viewBox="0 0 121 48"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="120"
                        height="47"
                        rx="9"
                        stroke="#8B744B"
                        strokeWidth="0.76"
                        strokeDasharray="4 2"
                      />
                    </svg>
                    <div className="absolute top-0 left-0 h-[12px] w-[12px] rounded-tl-[9px] border-t border-l border-[#D2B589]" />
                    <div className="absolute top-0 right-0 h-[12px] w-[12px] rounded-tr-[9px] border-t border-r border-[#D2B589]" />
                    <div className="absolute bottom-0 right-0 h-[12px] w-[12px] rounded-br-[9px] border-b border-r border-[#D2B589]" />
                    <div className="absolute bottom-0 left-0 h-[12px] w-[12px] rounded-bl-[9px] border-b border-l border-[#D2B589]" />
                    <span
                      className={`${montserrat.className} text-[13.8px] font-normal text-white`}
                    >
                      Buy Now
                    </span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                    >
                      <path
                        d="M1 11L11 1M11 1H3.5M11 1V8.5"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {/* --- END BUTTON --- */}
                </div>
                <h3
                  className={`${montserrat.className} text-[18.4px] font-medium text-white leading-[150%]`}
                >
                  {product.title}
                </h3>
                <div className="flex items-center gap-[15px]">
                  <div className="flex items-center gap-[6px]">
                    <span
                      className={`${montserratalter.className} text-[13.8px] text-[#81807E]`}
                    >
                      Fit
                    </span>
                    <div className="w-[3px] h-[3px] bg-[#4D4D4D] rounded-full" />
                    <span
                      className={`${montserratalter.className} text-[15.3px] font-medium text-[#CCCCCC] whitespace-nowrap`}
                    >
                      {product.fit}
                    </span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <span
                      className={`${montserratalter.className} text-[13.8px] text-[#81807E]`}
                    >
                      Price
                    </span>
                    <div className="w-[3px] h-[3px] bg-[#4D4D4D] rounded-full" />
                    <span
                      className={`${montserratalter.className} text-[15.3px] font-medium text-[#CCCCCC]`}
                    >
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}