import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import AIShowcase from "../components/landing/AIShowcase";
import Features from "../components/landing/Features";
import Testimonials from "../components/landing/Testimonials";
import Pricing from "../components/landing/Pricing";
import FAQ from "../components/landing/FAQ";
import Footer from "../components/landing/Footer";

export default function Landing() {
  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <AIShowcase />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}