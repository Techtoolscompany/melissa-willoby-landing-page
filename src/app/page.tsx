import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { About } from "@/components/sections/About";
import { Programs } from "@/components/sections/Programs";
import { Video } from "@/components/sections/Video";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustMetrics />
        <About />
        <Programs />
        <Video />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
