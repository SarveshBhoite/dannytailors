import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductSection from "@/components/Productsection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050B21]">
      <Navbar />
      <HeroSection />
      <ProductSection />
    </main>
  );
}
