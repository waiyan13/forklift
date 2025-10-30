import CTA from "@/features/landing/components/cta";
import Features from "@/features/landing/components/features";
import Header from "@/features/landing/components/header";
import HeroSection from "@/features/landing/components/hero-section";

function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Features />
      <CTA />
    </main>
  );
}

export default LandingPage;
