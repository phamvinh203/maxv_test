import HeroSection from "@/components/sections/HeroSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ReasonsSection from "@/components/sections/ReasonsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PricingSection from "@/components/sections/PricingSection";
import RegisterSection from "@/components/sections/RegisterSection";
import FAQSection from "@/components/sections/FAQSection";
import { buildPageMetadata, buildStructuredData } from "@/lib/seo";

export function generateMetadata() {
  return buildPageMetadata("/");
}

export default function Home() {
  const jsonLd = buildStructuredData();

  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
