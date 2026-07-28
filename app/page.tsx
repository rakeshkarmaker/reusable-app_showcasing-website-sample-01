"use client";

import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgressBar } from "@/components/scroll-progress";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { MissionSection } from "@/components/sections/mission-section";
import { PhoneShowcase } from "@/components/sections/phone-showcase";
import { VideoSection } from "@/components/sections/video-section";
import { AppFeaturesSection } from "@/components/sections/app-features-section";
import { HomeServiceSection } from "@/components/sections/home-service-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { DownloadSection } from "@/components/sections/download-section";
import { Footer } from "@/components/sections/footer";

export default function Landing() {
  return (
    <div id="main" className="bg-background">
      <CustomCursor />
      <ScrollProgressBar />
      <Header />
      <HeroSection />
      <MissionSection />
      <PhoneShowcase />
      <VideoSection />
      <AppFeaturesSection />
      <HomeServiceSection />
      <FeaturesSection />
      <SocialProofSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
