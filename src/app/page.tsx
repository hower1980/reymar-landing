import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Tournaments from "@/components/Tournaments";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Tournaments />
        <Features />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
