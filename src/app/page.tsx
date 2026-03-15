"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-[#121212] min-h-screen text-white selection:bg-white/20">
      {/* 500vh container for the scrolling sequence animation */}
      <section ref={containerRef} className="relative h-[500vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
          <ScrollyCanvas scrollProgress={scrollYProgress} />
          <Overlay scrollProgress={scrollYProgress} />
        </div>
      </section>

      {/* Projects Grid below the scrolled sequence */}
      <Projects />
      
      {/* Footer CTA */}
      <Footer />
    </main>
  );
}
