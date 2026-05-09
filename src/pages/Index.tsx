import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import FlavourShowcase from "@/components/FlavourShowcase";
import IngredientsSection from "@/components/IngredientsSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <MarqueeTicker
        text="GET · SET · CAFFEINATE ⚡ FIGHT THROUGH YOUR DAY ·"
        bgClass="bg-foreground"
        textClass="text-background"
      />

      <StatsSection />
      <AboutSection />

      <MarqueeTicker
        text="GREEDY GRAPES 🍇 BLACK GRAPE FLAVOUR · HYDRA ENERGY · 300ML ·"
        bgClass="bg-grape"
        textClass="text-foreground"
      />

      <ProductSection />
      <FlavourShowcase />

      <MarqueeTicker
        text="TAURINE · B-VITAMINS · CAFFEINE · ELECTRIFYING ENERGY ⚡"
        bgClass="bg-teal"
        textClass="text-foreground"
      />

      <IngredientsSection />
      <ReviewsSection />
      <CTABanner />
      <FAQSection />
      <ContactSection />

      <MarqueeTicker
        text="HYDRA ENERGY ⚡ MADE IN INDIA 🇮🇳 GET · SET · CAFFEINATE · EST. 2022 ·"
        bgClass="bg-foreground"
        textClass="text-background"
      />

      <Footer />
    </div>
  );
};

export default Index;
