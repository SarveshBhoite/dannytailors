import BlogSection from "@/components/BlogSection";
import FooterSection from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductCarousel from "@/components/ProductCarousel";
import ProductGrid from "@/components/ProductGrid";
import ProductSection from "@/components/Productsection";
import SubscribeSection from "@/components/Subscribe";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050B21]">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <ProductGrid />
      <ProductCarousel />
      <VideoSection />
      <Testimonials />
      <SubscribeSection />
      <BlogSection />
      <FooterSection />
    </main>
  );
}
