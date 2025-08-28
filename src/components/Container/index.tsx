import { Navbar } from "../../components/Navbar";
import { HeroSection } from "../../components/Hero";
import { ServicesSection } from "../../components/Atuacao";
import { AboutUs } from "../../components/About";
import { Testimonials } from "../../components/Testimonials";
import { TeamSection } from "../../components/Team";
import { ContactSection } from "../../components/Contact";
import { FAQ } from "../../components/Faq";
import { Footer } from "../../components/Footer";

export const Container = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection />

      <ServicesSection />

      <AboutUs />

      <Testimonials />

      <TeamSection />

      <ContactSection />

      <FAQ />

      <Footer />
    </div>
  );
};
