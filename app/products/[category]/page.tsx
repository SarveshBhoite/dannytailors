import Navbar from "@/components/Navbar";
import FooterSection from "@/components/Footer"; // Ensure this matches your export name (Footer vs FooterSection)
import CategoryView from "@/components/Productpage/Categoryview"; // Check capitalization (CategoryView vs Categoryview)

// Next.js 15: params is a Promise
interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  // 1. Await the params object to get the actual data
  const resolvedParams = await params;
  const category = resolvedParams.category;

  return (
    <main className="min-h-screen bg-[#050B21]">
      <Navbar />
      {/* 2. Pass the string to the client component */}
      <CategoryView categorySlug={category} />
      <FooterSection />
    </main>
  );
}