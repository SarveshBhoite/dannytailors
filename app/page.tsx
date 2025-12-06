import FooterSection from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import ProductSection from "@/components/Productsection";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050B21]">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <ProductGrid />
      <VideoSection />
      <Testimonials />
      <FooterSection />
    </main>
  );
}
