import Navbar from "@/components/Navbar";
import FooterSection from "@/components/Footer";
import ProductDetails from "@/components/Productpage/ProductDetails"; // Import the new component
import Testimonials from "@/components/Productpage/Testimonials";
import RecommendedProducts from "@/components/Productpage/RecommendedProducts";

interface PageProps {
  params: Promise<{ category: string; productid: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  // 1. Resolve params
  const resolvedParams = await params;
  const { category, productid } = resolvedParams;

  return (
    <main className="min-h-screen bg-[#050B21] pt-24">
      <Navbar />
      
      {/* 2. Call the Details Component */}
      <ProductDetails />
      <Testimonials />
      <RecommendedProducts />

      <FooterSection />
    </main>
  );
}