import { Toaster } from "@/components/ui/sonner";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { InstagramSection } from "./components/InstagramSection";
import { MotivationBanner } from "./components/MotivationBanner";
import { Navbar } from "./components/Navbar";
import { PricingSection } from "./components/PricingSection";
import { ProgramsSection } from "./components/ProgramsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-body">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <PricingSection />
        <GallerySection />
        <MotivationBanner />
        <TestimonialsSection />
        <InstagramSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button */}
      <FloatingWhatsApp />

      {/* Toast notifications */}
      <Toaster />
    </div>
  );
}
