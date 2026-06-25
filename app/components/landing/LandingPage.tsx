"use client";

import { useState } from "react";
import { AwarenessSections } from "./AwarenessSections";
import { BenefitsStepsVideos } from "./BenefitsStepsVideos";
import { Booking } from "./Booking";
import { ClinicLocations } from "./ClinicLocations";
import { ClinicServices } from "./ClinicServices";
import { Conditions } from "./Conditions";
import { FAQFinalFooter } from "./FAQFinalFooter";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Marquee } from "./Marquee";
import { ReviewsServicesLocations } from "./ReviewsServicesLocations";
import { SelfCheck } from "./SelfCheck";
import { StickyBar } from "./StickyBar";
import { Surgeon } from "./Surgeon";
import { useRevealEffects } from "./useRevealEffects";
import { VideoStories } from "./VideoStories";

export default function LandingPage() {
  const [selectedCondition, setSelectedCondition] = useState("");
  useRevealEffects();

  function pickCondition(condition: string) {
    setSelectedCondition(condition);
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Conditions onPick={pickCondition} />
        <SelfCheck />
        <AwarenessSections />
        <Surgeon />
        <BenefitsStepsVideos />
        <VideoStories />
        <ReviewsServicesLocations />
        <ClinicServices />
        {/* <ClinicLocations /> */}
        <Booking key={selectedCondition} selectedCondition={selectedCondition} />
        <FAQFinalFooter />
      </main>
      <StickyBar />
    </>
  );
}
