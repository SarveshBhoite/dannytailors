"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // IMPORT ADDED
import { Montserrat, Montserrat_Alternates } from "next/font/google";

// ... (Your existing types: Product, Collection, FAQCategory, FAQItem) ...
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

// ... (Your existing constants: DASH, GAP, STROKE, patterns) ...
const DASH = 12.270675659179688; 
const GAP = 4.6015; 
const STROKE = 1.53; 
const patternY = `repeating-linear-gradient(to bottom, #212F52 0, #212F52 ${DASH}px, transparent ${DASH}px, transparent ${DASH + GAP}px)`;
const patternX = `repeating-linear-gradient(to right, #212F52 0, #212F52 ${DASH}px, transparent ${DASH}px, transparent ${DASH + GAP}px)`;

function chunk<T>(arr: T[], size: number): T[][] {
    return arr.reduce<T[][]>((acc, _, i) => {
        if (i % size === 0) acc.push(arr.slice(i, i + size));
        return acc;
    }, []);
}

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300"] });
const montserratalter = Montserrat_Alternates({ subsets: ["latin"], weight: ["300"] });

// ... (Your existing 'collections' and 'faqItems' data arrays - Keeping them brief for display) ...
const collections: Collection[] = [
    {
        id: 1,
        title: "Chef Coat Collection",
        products: [
            { id: 1, title: "Timeless A-line Evening Dress", fit: "Ankle-length", price: "$109.99", badge: "Womenswear", cta: "Buy Now", image: "/shop-now/chefcoat/prod1.svg" },
            { id: 2, title: "Floral Bloom Maxi Dress", fit: "Slim Fit", price: "$54.99", badge: "Womenswear", cta: "Shop Now", image: "/shop-now/chefcoat/prod2.svg" },
            { id: 3, title: "Elegant Evening Gown", fit: "Flowing skirt", price: "$89.99", badge: "Womenswear", cta: "Shop Now", image: "/shop-now/chefcoat/prod3.svg" },
        ],
    },
    {
        id: 2,
        title: "Pants Collection",
        products: [
            { id: 1, title: "Wide-Brim Bucket Hat", fit: "Any face shape", price: "$69.99", badge: "Accessories", cta: "Shop Now", image: "/shop-now/pants/prod1.svg" },
            { id: 2, title: "Sophisticate Sun Hat", fit: "One size fits all", price: "$24.99", badge: "Accessories", cta: "Shop Now", image: "/shop-now/pants/prod2.svg" },
            { id: 3, title: "Timeless Fedora", fit: "Any face shape", price: "$79.99", badge: "Accessories", cta: "Shop Now", image: "/shop-now/pants/prod3.svg" },
        ],
    },
    {
        id: 3,
        title: "Aprons Collection",
        products: [
            { id: 1, title: "Classic Chef Apron", fit: "Adjustable neck strap", price: "$39.99", badge: "Aprons", cta: "Shop Now", image: "/shop-now/aprons/prod1.svg" },
            { id: 2, title: "Premium Cross-Back Apron", fit: "Cross-back fit", price: "$49.99", badge: "Aprons", cta: "Shop Now", image: "/shop-now/aprons/prod2.svg" },
            { id: 3, title: "Utility Pocket Apron", fit: "Multiple pockets", price: "$44.99", badge: "Aprons", cta: "Shop Now", image: "/shop-now/aprons/prod3.svg" },
        ],
    },
    {
        id: 4,
        title: "Uniform Collection",
        products: [
            { id: 1, title: "Classic Work Uniform", fit: "Regular Fit", price: "$59.99", badge: "Womenswear", cta: "Shop Now", image: "/shop-now/chefcoat/prod1.svg" },
            { id: 2, title: "Tailored Work Set", fit: "Slim Fit", price: "$64.99", badge: "Womenswear", cta: "Shop Now", image: "/shop-now/chefcoat/prod2.svg" },
            { id: 3, title: "Utility Workwear", fit: "Relaxed Fit", price: "$69.99", badge: "Womenswear", cta: "Shop Now", image: "/shop-now/chefcoat/prod3.svg" },
        ],
    },
];

const faqCategories: FAQCategory[] = ["All", "Ordering", "Shipping", "Returns", "Support"];
const faqItems: FAQItem[] = [
    { id: 1, category: "Ordering", question: "How can I place an order on StyleLoom?", answer: "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout." },
    { id: 2, category: "Ordering", question: "What payment methods do you accept?", answer: "We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets." },
    { id: 3, category: "Shipping", question: "How can I track my order?", answer: "Once your order is dispatched, you'll receive a tracking number via email." },
    { id: 4, category: "Shipping", question: "Can I modify or cancel my order after placing it?", answer: "Unfortunately, once an order is confirmed, modifications or cancellations may not be possible." },
    { id: 5, category: "Returns", question: "How do I initiate a return?", answer: "Visit our Returns page and follow the provided instructions." },
    { id: 6, category: "Support", question: "Do you offer exchanges for products?", answer: "At this time, we don't offer direct product exchanges. Please initiate a return instead." },
];

function FAQSection() {
    const [activeCategory, setActiveCategory] = useState<FAQCategory>("All");
    const filteredFaqs = activeCategory === "All" ? faqItems : faqItems.filter((item) => item.category === activeCategory);
    const rows = chunk(filteredFaqs, 2);
    const ROW_GAP_PX = 24;
    const HALF_ROW_GAP = ROW_GAP_PX / 2;

    return (
        <section className="mt-0">
            <div className="relative px-2 pb-12 pt-5 md:px-8 lg:px-2">
                <div className="pointer-events-none absolute -right-6 -top-6 hidden h-48 w-48 translate-y-6 md:block lg:h-56 lg:w-56">
                    <div className="relative h-full w-full">
                        <Image src="/shop-now/sunicon.svg" alt="" fill className="object-contain" sizes="(min-width: 768px) 14rem" />
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-[15.34px] px-6 py-8 md:px-10">
                    <div className="relative max-w-4xl">
                        <h2 className="text-[2.25rem] font-normal tracking-[0.1em] text-white">HAVE QUESTIONS? WE HAVE ANSWERS.</h2>
                        <p className="mt-4 mb-14 text-[0.87rem] text-[#676665] md:text-sm">Ease into the world of StyleLoom with clarity. Our FAQs cover a spectrum of topics.</p>
                    </div>
                    <div className="relative mt-6 flex flex-wrap gap-3">
                        {faqCategories.map((category) => {
                            const isActive = category === activeCategory;
                            return (
                                <button key={category} type="button" onClick={() => setActiveCategory(category)} className={`relative inline-flex items-center justify-center px-4 py-2 text-[0.87rem] tracking-[0.15em] ${isActive ? "text-[#000a23]" : "text-[#B3B3B2]"}`}>
                                    <span className="z-10">{category}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none">
                                        <rect x="0.38" y="0.38" width="139.24" height="39.24" rx="9.2" ry="9.2" fill={isActive ? "#D2B589" : "none"} stroke="#333333" strokeWidth="0.77" strokeDasharray="3.83 3.83" />
                                    </svg>
                                </button>
                            );
                        })}
                    </div>
                    <div className="relative mt-8">
                        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden md:block" aria-hidden>
                            <div className="absolute left-1/2 -translate-x-1/2 h-full" style={{ width: `${STROKE}px`, backgroundImage: patternY, backgroundPosition: "center .75px" }} />
                        </div>
                        <div className="pointer-events-none absolute left-0 right-0 top-0 hidden md:block" aria-hidden>
                            <div className="w-full" style={{ height: `${STROKE}px`, backgroundImage: patternX, backgroundPosition: ".75px center" }} />
                        </div>
                        <div className="pointer-events-none absolute left-0 right-0 bottom-0 hidden md:block" aria-hidden>
                            <div className="w-full" style={{ height: `${STROKE}px`, backgroundImage: patternX, backgroundPosition: ".75px center" }} />
                        </div>
                        <div className="hidden flex-col gap-6 md:flex">
                            {rows.map((row, rowIndex) => (
                                <div key={`row-${rowIndex}`} className="relative grid grid-cols-2 gap-6">
                                    {row.map((faq) => (
                                        <div key={faq.id} className="relative overflow-hidden rounded-[15.34px] px-6 py-10">
                                            <h3 className="relative text-[1.12rem] font-semibold text-white">{faq.question}</h3>
                                            <p className="relative mt-3 text-[0.87rem] leading-relaxed text-[#81807E]">{faq.answer}</p>
                                        </div>
                                    ))}
                                    {rowIndex < rows.length - 1 && (
                                        <div className="pointer-events-none absolute left-0 right-0 hidden md:block" aria-hidden style={{ bottom: `-${HALF_ROW_GAP}px` }}>
                                            <div className="w-full" style={{ height: `${STROKE}px`, backgroundImage: patternX, backgroundPosition: ".75px center" }} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="grid gap-6 md:hidden">
                            {filteredFaqs.map((faq) => (
                                <div key={faq.id} className="relative overflow-hidden rounded-[15.34px] px-6 py-5">
                                    <h3 className="relative text-[0.98rem] font-semibold text-white">{faq.question}</h3>
                                    <p className="relative mt-3 text-[0.8rem] leading-relaxed text-[#C4C7D3]">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Products() {
    return (
        <div className={`${montserrat.className} min-h-screen bg-[#000a23] px-4 pb-12 pt-24 md:px-8 lg:px-16`}>
            <div className="relative mx-auto max-w-7xl overflow-hidden">
                <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="none">
                    <rect x="0.75" y="0.75" width="1598.5" height="898.5" rx="15.34" ry="15.34" fill="none" stroke="#212F52" strokeWidth="1.53" strokeDasharray="12.27 4.60" />
                </svg>

                <div className="rounded-[15.34px] bg-[#000a23]">
                    {/* HERO SECTION */}
                    <div className="relative h-[260px] overflow-hidden md:h-[360px] lg:h-[450px]">
                        <Image src="/shop-now/shop-bg.svg" alt="Shop hero" fill priority className="object-cover object-[center_20%] sm:object-[center_25%] md:object-left-top" />
                        <div className="pointer-events-none absolute inset-0 ml-6 flex items-center justify-center pt-70">
                            <h1 className="text-center text-4xl font-semibold tracking-[0.2em] text-white md:text-6xl lg:text-[9.6rem]">SHOP&nbsp;NOW</h1>
                        </div>
                        <div className="pointer-events-none absolute bottom-0 left-1/2 z-[5] h-14 w-40 -translate-x-1/2 rounded-t-[16px] bg-[#000a23]" />
                        <div className="absolute bottom-0 left-1/2 z-[10] flex -translate-x-1/2 justify-center">
                            <button className="relative inline-flex items-center gap-2 rounded-[8.18px] px-[20px] py-[12px] text-[0.85rem] text-[#ffffff]">
                                <span className="z-10">Shop Now</span>
                                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="z-10 h-[10px] w-[10px] sm:h-[11px] sm:w-[11px] lg:h-[12px] lg:w-[12px]">
                                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 52" className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none">
                                    <rect x="0.51" y="0.51" width="215.98" height="50.98" rx="8.18" ry="8.18" fill="none" stroke="#AE9B84" strokeWidth="1.02" strokeDasharray="16.36 6.13" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* COLLECTION SECTIONS */}
                    {collections.map((collection, index) => (
                        <section key={collection.id} className={index === 0 ? "mt-0" : "mt-0"}>
                            <div className="flex flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-10">
                                <h2 className="text-[1rem] font-normal uppercase tracking-[0.1em] text-[#FFFFFF]">{collection.title}</h2>
                                
                                {/* UPDATED: View All links to dynamic category page */}
                                <Link href={`/products/${collection.title.toLowerCase().replace(/ /g, "-").replace("-collection", "")}`}>
                                    <button className="relative inline-flex items-center gap-2 px-[18px] py-[13px] text-[0.75rem] tracking-[0.15em] text-[#FFFFFF]">
                                        <span className="z-10">View All</span>
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="z-10 h-[10px] w-[10px] sm:h-[11px] sm:w-[11px] lg:h-[12px] lg:w-[12px]">
                                            <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 52" className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none">
                                            <rect x="0.51" y="0.51" width="215.98" height="50.98" rx="8.18" ry="8.18" fill="none" stroke="#8B744B" strokeWidth="1.02" strokeDasharray="16.36 6.13" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>

                            {/* PRODUCT GRID */}
                            <div className="relative px-4 pb-8 pt-6 md:px-6 lg:px-8">
                                <div className="pointer-events-none absolute left-0 right-0 top-0" aria-hidden>
                                    <div className="w-full" style={{ height: `${STROKE}px`, backgroundImage: patternX, backgroundPosition: ".75px center" }} />
                                </div>
                                <div className="pointer-events-none absolute left-0 right-0 bottom-0" aria-hidden>
                                    <div className="w-full" style={{ height: `${STROKE}px`, backgroundImage: patternX, backgroundPosition: ".75px center" }} />
                                </div>
                                <div className="pointer-events-none absolute top-0 bottom-0 left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8" aria-hidden>
                                    <div className="absolute inset-y-0 hidden sm:block lg:hidden -translate-x-1/2" style={{ left: "50%", width: `${STROKE}px`, backgroundImage: patternY, backgroundPosition: "center .75px" }} />
                                    <div className="absolute inset-y-0 hidden lg:block -translate-x-1/2" style={{ left: "33%", width: `${STROKE}px`, backgroundImage: patternY, backgroundPosition: "center .75px" }} />
                                    <div className="absolute inset-y-0 hidden lg:block -translate-x-1/2" style={{ left: "67%", width: `${STROKE}px`, backgroundImage: patternY, backgroundPosition: "center .75px" }} />
                                </div>
                                <div className="relative z-10 mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {collection.products.map((product) => (
                                        <article key={`${collection.id}-${product.id}`} className="relative flex flex-col overflow-hidden rounded-[15.34px]">
                                            <div className="relative h-64 w-full">
                                                <Image src={product.image} alt={product.title} fill className="object-cover" />
                                            </div>
                                            <div className="relative flex flex-1 flex-col justify-between px-6 py-5">
                                                <div className="mb-4 flex items-center justify-between">
                                                    <span className={`${montserratalter.className} rounded-full border border-[#263252] bg-[#212F52] px-4 py-1 text-[0.81rem] tracking-[0.1em] text-[#D2B589]`}>{product.badge}</span>
                                                    <button className="relative inline-flex items-center gap-1 px-6 py-3 text-[0.7rem] text-[#FFFFFF]">
                                                        <span className="z-10">{product.cta}</span>
                                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="z-10 h-[10px] w-[10px] sm:h-[11px] sm:w-[11px] lg:h-[12px] lg:w-[12px]">
                                                            <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 52" className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none">
                                                            <rect x="0.51" y="0.51" width="215.98" height="50.98" rx="8.18" ry="8.18" fill="none" stroke="#8B744B" strokeWidth="1.02" strokeDasharray="16.36 6.13" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <h3 className="text-sm font-semibold text-white md:text-[1.14rem]">{product.title}</h3>
                                                <div className={`${montserratalter.className} mt-4 flex flex-wrap items-center gap-2 text-[0.75rem] text-[#81807E]`}>
                                                    <span>Fit - <span className="font-medium text-white">{product.fit}</span></span>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <span>Price - <span className="font-semibold text-white">{product.price}</span></span>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                    <FAQSection />
                </div>
            </div>
        </div>
    );
}