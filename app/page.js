import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Experience from "@/components/Experience";
import GalleryTeaser from "@/components/GalleryTeaser";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0A0A0B] overflow-hidden min-h-screen">
      <Navbar />

      {/* Unified Deep Night Atmosphere - Hero & Logos */}
      <div className="bg-[#0A0A0B]">
        <Hero />
        <Logos />
      </div>

      {/* Experience Section */}
      <Experience />

      {/* Executive Gallery - The Man */}
      <GalleryTeaser />

      {/* Services Section */}
      <Services />

      {/* Footer */}
      <Footer />
    </main>
  );
}
