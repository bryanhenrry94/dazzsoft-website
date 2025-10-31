import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ClientsSection } from "@/components/clients-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import FloatingButton from "@/components/floatting-button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <FloatingButton />
      <Footer />
    </main>
  );
}
