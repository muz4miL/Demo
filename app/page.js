import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Unified Deep Night Atmosphere */}
      <div className="bg-[#0A0A0B]">
        <Hero />
        <Logos />
      </div>

      <Experience />
      <Services />
      <Footer />
    </main>
  );
}
