import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import IngredientsSection from "@/components/IngredientsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeTicker
        text="GET · SET · CAFFEINATE ⚡ FEINATE ⚡"
        bgClass="bg-foreground"
        textClass="text-background"
      />
      <AboutSection />
      <MarqueeTicker
        text="GREEDY GRAPES 🍇 BLACK GRAPE FLAVOUR · HYDRA ENERGY · 300ML ·"
        bgClass="bg-grape"
        textClass="text-foreground"
      />
      <ProductSection />
      <IngredientsSection />
      <FAQSection />
      <MarqueeTicker
        text="HYDRA ENERGY ⚡ GET · SET · CAFFEINATE ⚡ FIGHT THROUGH YOUR DAY ·"
        bgClass="bg-teal"
        textClass="text-foreground"
      />
      <Footer />
    </div>
  );
};

export default Index;
