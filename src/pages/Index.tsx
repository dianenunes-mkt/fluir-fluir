import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { FluirComparison } from "@/components/FluirComparison";
import { Support247 } from "@/components/Support247";
import { HowItWorks } from "@/components/HowItWorks";
import { Differential } from "@/components/Differential";
import { Benefits } from "@/components/Benefits";
import { TargetAudience } from "@/components/TargetAudience";
import { Testimonials } from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Offer } from "@/components/Offer";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Problem />
      <Solution />
      <FluirComparison />
      <Support247 />
      <HowItWorks />
      <Differential />
      <Benefits />
      <TargetAudience />
      <Testimonials />
      

      <Offer />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
