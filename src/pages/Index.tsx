
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Roadmap from "@/components/Roadmap";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Benefits />
      <Roadmap />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
