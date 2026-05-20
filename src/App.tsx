import { SiteShell } from "./components/SiteShell";
import { BenefitsSection } from "./sections/BenefitsSection";
import { FAQSection } from "./sections/FAQSection";
import { FinalCTASection } from "./sections/FinalCTASection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { PartnersSection } from "./sections/PartnersSection";
import { PricingPage } from "./pages/PricingPage";
import { SecondaryPage } from "./pages/SecondaryPage";
import { ProductSection } from "./sections/ProductSection";
import { SolutionsSection } from "./sections/SolutionsSection";
import { findSecondaryPage } from "./content/subpage-content";

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <SolutionsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <div id="resources" aria-hidden="true" />
      <PartnersSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "");
  const isPricingPage = path === "/pricing";
  const secondaryPage = findSecondaryPage(window.location.pathname);

  return (
    <SiteShell>
      {isPricingPage ? <PricingPage /> : secondaryPage ? <SecondaryPage page={secondaryPage} /> : <HomePage />}
    </SiteShell>
  );
}
