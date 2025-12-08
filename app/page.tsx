import BlogSection from "@/components/Homepage/BlogSection";
import FooterSection from "@/components/Footer";
import HeroSection from "@/components/Homepage/HeroSection";
import Navbar from "@/components/Navbar";
import ProductCarousel from "@/components/Homepage/ProductCarousel";
import ProductGrid from "@/components/Homepage/ProductGrid";
import ProductSection from "@/components/Homepage/Productsection";
import SubscribeSection from "@/components/Homepage/Subscribe";
import Testimonials from "@/components/Homepage/Testimonials";
import VideoSection from "@/components/Homepage/VideoSection";

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
