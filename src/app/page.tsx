import FeaturedBoard from "@/components/featuredBoard";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ImageCarousel from "@/components/imageCarousel";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col" >
      <Header />
      <main>

      <ImageCarousel />
      <FeaturedBoard />
      </main>
      <Footer />
    </div>
  );
}
