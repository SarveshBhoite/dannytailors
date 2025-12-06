import FooterSection from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import ProductSection from "@/components/Productsection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050B21]">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <ProductGrid />
      <FooterSection />
    </main>
  );
}
