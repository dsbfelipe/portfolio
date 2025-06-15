"use client";

import AboutSection from "@/components/AboutSection";
import FloatingMenu from "@/components/FloatingMenu";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";

export default function Home() {
  return (
    <main>
      {/* <FloatingMenu /> */}
      <HeroSection />
      <WorksSection />
      <Footer />
    </main>
  );
}
