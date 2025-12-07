import Navbar from "@/components/Navbar";
import FooterSection from "@/components/Footer";
import ShopPage from "@/components/Products";

export default function Shop() {
  return (
    <main className="min-h-screen bg-[#050B21]">
      <Navbar />
      <ShopPage />
      <FooterSection />
    </main>
  );
}
