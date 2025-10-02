import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CredibilityBar } from "@/components/CredibilityBar";
import { ManifestoSection } from "@/components/ManifestoSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SpaceSection } from "@/components/SpaceSection";
import { SpecialistsSection } from "@/components/SpecialistsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const AmetistaStudio = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CredibilityBar />
        <ManifestoSection />
        <ServicesSection />
        <SpaceSection />
        <SpecialistsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default AmetistaStudio;