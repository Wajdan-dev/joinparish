import { CommunityCard } from "@/components/home/CommunityCard";
import { Faq } from "@/components/home/Faq";
import { FaqSection } from "@/components/home/FaqSection";
import { HeroSection } from "@/components/home/HeroSection";
import { JoinUs } from "@/components/home/JoinUs";
import { JusticeCard } from "@/components/home/JusticeCard";
import { ProductSolution } from "@/components/home/ProductSolution";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

 

export default function Home() {
  return (
     <div>
      <Header />
      <HeroSection />
      <ProductSolution />
      <JusticeCard />
      <CommunityCard />
      <FaqSection />
      <JoinUs />
      <Footer />
     </div>
  );
}
