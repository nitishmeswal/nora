"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/ui/Loader";
import NotchNavbar from "@/components/ui/NotchNavbar";
import ScrollAnimations from "@/components/ui/ScrollAnimations";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import VideoSection from "@/components/sections/VideoSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Loader onComplete={handleLoadComplete} />

      {loaded && (
        <>
          <ScrollAnimations />
          <NotchNavbar />

          {/* 3D Canvas - fixed behind content */}
          <div className="canvas-wrapper">
            <Scene />
          </div>

          {/* Scrollable content */}
          <div className="smooth-scroll-wrapper content-overlay">
            <HeroSection />
            <AboutSection />
            <VideoSection />
            <RoadmapSection />
            <TeamSection />
            <ContactSection />
          </div>
        </>
      )}
    </>
  );
}
