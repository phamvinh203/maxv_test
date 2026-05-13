import HeroSection from "@/components/sections/HeroSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ReasonsSection from "@/components/sections/ReasonsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PricingSection from "@/components/sections/PricingSection";
import RegisterSection from "@/components/sections/RegisterSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <main id="top">
      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <ReasonsSection />
      <FeaturesSection />
      <PricingSection />
      <RegisterSection />
      <FAQSection />
    </main>
  );
}
