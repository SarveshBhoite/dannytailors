"use client";

import Image from "next/image";
import { useState } from "react";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import Link from "next/link";

// ---------- FONTS ----------
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const montserratalter = Montserrat_Alternates({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
});

// ---------- TYPES ----------
type Product = {
    id: number;
    title: string;
    fit: string;
    price: string;
    badge: string;
    cta: string;
    image: string;
};

type Collection = {
    id: number;
    title: string;
    products: Product[];
};

type FAQCategory = "All" | "Ordering" | "Shipping" | "Returns" | "Support";

type FAQItem = {
    id: number;
    category: Exclude<FAQCategory, "All">;
    question: string;
    answer: string;
};

// ---------- BORDER SYSTEM (same as Category page) ----------
const borderConfig = {
    color: "#212F52",
    width: 1.53,
    dashArray: "12 8", // same visual as category section
};
const halfWidth = borderConfig.width / 2;

const OuterDashedBorder = () => (
    <div className="pointer-events-none absolute inset-0 z-10">
        <svg className="h-full w-full">
            <rect
                x={halfWidth}
                y={halfWidth}
                width={`calc(100% - ${borderConfig.width}px)`}
                height={`calc(100% - ${borderConfig.width}px)`}
                fill="none"
                stroke={borderConfig.color}
                strokeWidth={borderConfig.width}
                strokeDasharray={borderConfig.dashArray}
            />
        </svg>
    </div>
);

const InternalDashedBorderRight = ({ className = "" }: { className?: string }) => (
    <div
        className={`pointer-events-none absolute top-0 right-0 z-10 h-full ${className}`}
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

const InternalDashedBorderBottom = ({ className = "" }: { className?: string }) => (
    <div
        className={`pointer-events-none absolute bottom-0 left-0 z-10 w-full ${className}`}
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

// ---------- DATA: COLLECTIONS ----------
const collections: Collection[] = [
    {
        id: 1,
        title: "Chef Coat Collection",
        products: [
            {
                id: 1,
                title: "Timeless A-line Evening Dress",
                fit: "Ankle-length",
                price: "$109.99",
                badge: "Womenswear",
                cta: "Buy Now",
                image: "/shop-now/chefcoat/prod1.svg",
            },
            {
                id: 2,
                title: "Floral Bloom Maxi Dress",
                fit: "Slim Fit",
                price: "$54.99",
                badge: "Womenswear",
                cta: "Buy Now",
                image: "/shop-now/chefcoat/prod2.svg",
            },
            {
                id: 3,
                title: "Elegant Evening Gown",
                fit: "Flowing skirt",
                price: "$89.99",
                badge: "Womenswear",
                cta: "Buy Now",
                image: "/shop-now/chefcoat/prod3.svg",
            },
        ],
    },
    {
        id: 2,
        title: "Pants Collection",
        products: [
            {
                id: 1,
                title: "Wide-Brim Bucket Hat",
                fit: "Any face shape",
                price: "$69.99",
                badge: "Accessories",
                cta: "Buy Now",
                image: "/shop-now/pants/prod1.svg",
            },
            {
                id: 2,
                title: "Sophisticate Sun Hat",
                fit: "One size fits all",
                price: "$24.99",
                badge: "Accessories",
                cta: "Buy Now",
                image: "/shop-now/pants/prod2.svg",
            },
            {
                id: 3,
                title: "Timeless Fedora",
                fit: "Any face shape",
                price: "$79.99",
                badge: "Accessories",
                cta: "Buy Now",
                image: "/shop-now/pants/prod3.svg",
            },
        ],
    },
    {
        id: 3,
        title: "Aprons Collection",
        products: [
            {
                id: 1,
                title: "Classic Chef Apron",
                fit: "Adjustable neck strap",
                price: "$39.99",
                badge: "Aprons",
                cta: "Buy Now",
                image: "/shop-now/aprons/prod1.svg",
            },
            {
                id: 2,
                title: "Premium Cross-Back Apron",
                fit: "Cross-back fit",
                price: "$49.99",
                badge: "Aprons",
                cta: "Buy Now",
                image: "/shop-now/aprons/prod2.svg",
            },
            {
                id: 3,
                title: "Utility Pocket Apron",
                fit: "Multiple pockets",
                price: "$44.99",
                badge: "Aprons",
                cta: "Buy Now",
                image: "/shop-now/aprons/prod3.svg",
            },
        ],
    },
    {
        id: 4,
        title: "Uniform Collection",
        products: [
            {
                id: 1,
                title: "Classic Work Uniform",
                fit: "Regular Fit",
                price: "$59.99",
                badge: "Womenswear",
                cta: "Buy Now",
                image: "/shop-now/chefcoat/prod1.svg",
            },
            {
                id: 2,
                title: "Tailored Work Set",
                fit: "Slim Fit",
                price: "$64.99",
                badge: "Womenswear",
                cta: "Buy Now",
                image: "/shop-now/chefcoat/prod2.svg",
            },
            {
                id: 3,
                title: "Utility Workwear",
                fit: "Relaxed Fit",
                price: "$69.99",
                badge: "Womenswear",
                cta: "Buy Now",
                image: "/shop-now/chefcoat/prod3.svg",
            },
        ],
    },
];

// ---------- DATA: FAQ ----------
const faqCategories: FAQCategory[] = ["All", "Ordering", "Shipping", "Returns", "Support"];

const faqItems: FAQItem[] = [
    {
        id: 1,
        category: "Ordering",
        question: "How can I place an order on StyleLoom?",
        answer:
            "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    },
    {
        id: 2,
        category: "Ordering",
        question: "What payment methods do you accept?",
        answer:
            "We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout.",
    },
    {
        id: 3,
        category: "Shipping",
        question: "How can I track my order?",
        answer:
            "Once your order is dispatched, you'll receive a tracking number via email. Use this number to track your package in real-time on our website.",
    },
    {
        id: 4,
        category: "Shipping",
        question: "Can I modify or cancel my order after placing it?",
        answer:
            "Unfortunately, once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing the purchase.",
    },
    {
        id: 5,
        category: "Returns",
        question: "How do I initiate a return?",
        answer:
            "Visit our Returns page and follow the provided instructions. Ensure your item meets our return criteria, and our team will guide you through the process.",
    },
    {
        id: 6,
        category: "Support",
        question: "Do you offer exchanges for products?",
        answer:
            "At this time, we don't offer direct product exchanges. If you'd like a different item, please initiate a return and place a new order.",
    },
];

// ---------- FAQ SECTION ----------
function FAQSection() {
    const [activeCategory, setActiveCategory] = useState<FAQCategory>("All");

    const filteredFaqs =
        activeCategory === "All"
            ? faqItems
            : faqItems.filter((item) => item.category === activeCategory);

    const total = filteredFaqs.length;
    const cols = 2;
    const rows = Math.ceil(total / cols);

    return (
        <section className="mt-0">
            <div className="relative px-2 pb-12 pt-0 md:px-8 lg:px-2">
                {/* right decorative sun icon */}
                <div className="pointer-events-none absolute -right-6 -top-14 hidden h-48 w-48 translate-y-6 md:block lg:h-56 lg:w-56">
                    <div className="relative h-full w-full">
                        <Image
                            src="/shop-now/sunicon.svg"
                            alt=""
                            fill
                            className="object-contain"
                            sizes="(min-width: 768px) 14rem"
                        />
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-[15.34px] px-6 py-8 md:px-10">
                    {/* Heading */}
                    <div className="relative max-w-4xl">
                        <h2 className="text-[2.25rem] font-normal tracking-[0.1em] text-white">
                            HAVE QUESTIONS? WE HAVE ANSWERS.
                        </h2>
                        <p className="mt-4 mb-14 text-[0.87rem] text-[#676665] md:text-sm">
                            Ease into the world of StyleLoom with clarity. Our FAQs cover a spectrum of topics.
                        </p>
                    </div>

                    {/* Category tabs */}
                    <div className="relative mt-6 flex flex-wrap gap-3">
                        {faqCategories.map((category) => {
                            const isActive = category === activeCategory;
                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setActiveCategory(category)}
                                    className={`relative inline-flex items-center justify-center px-4 py-2 text-[0.87rem] tracking-[0.15em] ${isActive ? "text-[#000a23]" : "text-[#B3B3B2]"
                                        }`}
                                >
                                    <span className="z-10">{category}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 140 40"
                                        className="pointer-events-none absolute inset-0 h-full w-full"
                                        preserveAspectRatio="none"
                                    >
                                        <rect
                                            x="0.38"
                                            y="0.38"
                                            width="139.24"
                                            height="39.24"
                                            rx="9.2"
                                            ry="9.2"
                                            fill={isActive ? "#D2B589" : "none"}
                                            stroke="#333333"
                                            strokeWidth="0.77"
                                            strokeDasharray="3.8345861434936523 3.83"
                                        />
                                    </svg>
                                </button>
                            );
                        })}
                    </div>

                    {/* FAQ grid with same border system as Category */}
                    <div className="relative mt-8 hidden md:block -mx-6 md:-mx-10">
                        {/* Top Separator Line for the Grid */}
                        <div className="absolute top-0 left-0 w-full">
                            <InternalDashedBorderBottom />
                        </div>
                        
                        <div className="grid grid-cols-2">
                            {filteredFaqs.map((faq, index) => {
                                const rowIndex = Math.floor(index / cols);
                                const colIndex = index % cols;
                                const isLastRow = rowIndex === rows - 1;

                                return (
                                    <div
                                        key={faq.id}
                                        className="relative overflow-hidden px-6 md:px-10 py-12"
                                    >
                                        {/* vertical line between columns (only left cell) */}
                                        {colIndex === 0 && (
                                            <InternalDashedBorderRight />
                                        )}
                                        {/* horizontal line between rows (both cells except last row) */}
                                        {!isLastRow && <InternalDashedBorderBottom />}

                                        <h3 className="relative text-[1.12rem] font-semibold text-white">
                                            {faq.question}
                                        </h3>
                                        <p className="relative mt-3 text-[0.87rem] leading-relaxed text-[#81807E]">
                                            {faq.answer}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile: simple stacked cards */}
                    <div className="mt-8 grid gap-6 md:hidden">
                        {filteredFaqs.map((faq) => (
                            <div
                                key={faq.id}
                                className="relative overflow-hidden rounded-[15.34px] px-6 py-5"
                            >
                                <h3 className="relative text-[0.98rem] font-semibold text-white">
                                    {faq.question}
                                </h3>
                                <p className="relative mt-3 text-[0.8rem] leading-relaxed text-[#C4C7D3]">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ---------- MAIN PRODUCTS PAGE ----------
export default function Products() {
    return (
        <div
            className={`${montserrat.className} min-h-screen bg-[#000a23] px-4 pb-12 pt-24 md:px-8 lg:px-16`}
        >
            {/* OUTER CARD – dashed frame wraps hero + collections + FAQ */}
            <div className="relative mx-auto max-w-[1224px] overflow-hidden">
                <OuterDashedBorder />

                <div className="rounded-[15.34px] bg-[#000a23]">
                    {/* HERO SECTION */}
                    <div className="relative w-full h-[260px] md:h-[450px] mb-16 z-20">
                        {/* Image Container */}
                        <div className="absolute inset-0 rounded-t-[20px] rounded-b-[10px] overflow-hidden">
                            <Image
                                src="/shop-now/shop-bg.svg"
                                alt="Bespoke Tailoring"
                                fill
                                className="object-cover object-center"
                                priority
                            />

                            <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 md:pb-16 w-full px-4">
                                <h1 className={`${montserrat.className} text-[26px] md:text-[60px] lg:text-[150px] font-bold text-white uppercase tracking-[0.14em] leading-none drop-shadow-lg whitespace-nowrap text-center`}>
                                    SHOP&nbsp;NOW
                                </h1>
                            </div>
                        </div>

                        {/* Shop Now Button */}
                        <div className="absolute -bottom-[19px] md:-bottom-[25px] left-1/2 -translate-x-1/2 z-30">
                            <button className="relative flex items-center justify-center gap-2 w-[90px] h-[35px]  md:w-[140px] md:h-[50px] bg-[#000A23] rounded-[8px] group/btn shadow-lg">
                                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 140 50" fill="none" preserveAspectRatio="none">
                                    <rect x="0.5" y="0.5" width="139" height="49" rx="8" stroke="#8B744B" strokeWidth="1" strokeDasharray="6 3" />
                                </svg>
                                <div className="absolute top-0 left-0 w-[8px] h-[8px] md:w-[12px] md:h-[12px] border-t border-l border-[#AE9B84] rounded-tl-[8px]" />
                                <div className="absolute top-0 right-0 w-[8px] h-[8px] md:w-[12px] md:h-[12px] border-t border-r border-[#AE9B84] rounded-tr-[8px]" />
                                <div className="absolute bottom-0 right-0 w-[8px] h-[8px] md:w-[12px] md:h-[12px] border-b border-r border-[#AE9B84] rounded-br-[8px]" />
                                <div className="absolute bottom-0 left-0 w-[8px] h-[8px] md:w-[12px] md:h-[12px] border-b border-l border-[#AE9B84] rounded-bl-[8px]" />
                                <span className={`${montserrat.className} text-[10px] md:text-[14px] font-normal text-white`}>Shop Now</span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5">
                                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* COLLECTIONS */}
                    {collections.map((collection, index) => (
                        <section key={collection.id} className={index === 0 ? "mt-0" : "mt-0"}>
                            {/* RESPONSIVE CHANGE: 
                                Changed flex-col to flex-row for mobile to align Title and View All button side-by-side. 
                                Added items-center and justify-between. 
                                Reduced left/right padding to px-4 for mobile.
                            */}
                            <div className="flex flex-row items-center justify-between gap-2 px-4 py-0 md:px-10">
                                <h2 className="text-[0.9rem] sm:text-[1rem] font-normal uppercase tracking-[0.1em] text-[#FFFFFF]">
                                    {collection.title}
                                </h2>

                                <Link href={`/products/${collection.title.toLowerCase().replace(/ /g, "-").replace("-collection", "")}`} className="relative inline-flex items-center gap-2 px-[18px] py-[13px] text-[0.75rem] tracking-[0.15em] text-[#FFFFFF]">
                                    <span className="z-10">View All</span>

                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        className="z-10 h-[10px] w-[10px] sm:h-[11px] sm:w-[11px] lg:h-[12px] lg:w-[12px]"
                                    >
                                        <path
                                            d="M1 11L11 1M11 1H3.5M11 1V8.5"
                                            stroke="#ffffff"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 220 52"
                                        className="pointer-events-none absolute inset-0 h-full w-full"
                                        preserveAspectRatio="none"
                                    >
                                        <rect
                                            x="0.51"
                                            y="0.51"
                                            width="215.98"
                                            height="50.98"
                                            rx="9.2"
                                            ry="9.2"
                                            fill="none"
                                            stroke="#8B744B"
                                            strokeWidth="0.77"
                                            strokeDasharray="12.270675659179688 4.6015"
                                        />
                                    </svg>
                                </Link>
                            </div>

                            {/* PRODUCT GRID with Category-style dashed borders */}
                            <div className="relative px-0 pb-8 pt-4 md:px-6 lg:px-0">
                                <div className="relative">
                                    <OuterDashedBorder />

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                        {collection.products.map((product, index) => (
                                            <article
                                                key={`${collection.id}-${product.id}`}
                                                className="relative flex flex-col bg-[#000A23] p-[23px] gap-[23px]"
                                            >
                                                {/* RESPONSIVE BORDER FIX:
                                                   InternalDashedBorderRight is now 'hidden' on mobile (default) and 'md:block'.
                                                   This prevents double right borders in the single-column mobile view.
                                                */}
                                                <InternalDashedBorderRight className="hidden md:block md:[&:nth-child(2n)]:hidden lg:[&:nth-child(2n)]:block lg:[&:nth-child(3n)]:hidden" />
                                                
                                                <InternalDashedBorderBottom
                                                    className={`block last:hidden ${index >=
                                                        collection.products.length -
                                                        (collection.products.length % 3 || 3)
                                                        ? "lg:hidden"
                                                        : ""
                                                        } ${index >=
                                                            collection.products.length -
                                                            (collection.products.length % 2 || 2)
                                                            ? "md:hidden"
                                                            : ""
                                                        }`}
                                                />

                                                {/* image */}
                                                <div className="relative h-[296px] w-full overflow-hidden rounded-t-[38px] bg-[#D9D9D9]">
                                                    <Image
                                                        src={product.image}
                                                        alt={product.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>

                                                {/* content */}
                                                <div className="flex flex-col gap-[15px]">
                                                    <div className="flex h-[48px] items-center justify-between">
                                                        <div className="flex h-[36px] items-center justify-center rounded-[76px] bg-[#212F52] px-[12px] py-[7px]">
                                                            <span
                                                                className={`${montserratalter.className} text-[13.8px] text-[#D2B589] whitespace-nowrap`}
                                                            >
                                                                {product.badge}
                                                            </span>
                                                        </div>

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
                                                                {product.cta}
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
                                                            <div className="h-[3px] w-[3px] rounded-full bg-[#4D4D4D]" />
                                                            <span
                                                                className={`${montserratalter.className} whitespace-nowrap text-[15.3px] font-medium text-[#CCCCCC]`}
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
                                                            <div className="h-[3px] w-[3px] rounded-full bg-[#4D4D4D]" />
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
                            </div>
                        </section>
                    ))}

                    {/* FAQ SECTION WITH MATCHING BORDER GRID */}
                    <FAQSection />
                </div>
            </div>
        </div>
    );
}