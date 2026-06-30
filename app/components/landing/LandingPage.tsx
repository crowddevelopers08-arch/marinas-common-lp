"use client";

import { useEffect } from "react";
import { AwarenessSections } from "./AwarenessSections";
import { BeforeAfterIImage } from "./BeforeAfterIImage";
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
  useRevealEffects();

  function openBlankBooking() {
    window.dispatchEvent(new Event("booking:reset"));
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const resetBookingOnLinkClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest('a[href="#booking"]');
      if (!link) return;
      window.dispatchEvent(new Event("booking:reset"));
    };

    document.addEventListener("click", resetBookingOnLinkClick);
    return () => document.removeEventListener("click", resetBookingOnLinkClick);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Conditions onPick={openBlankBooking} />
        <SelfCheck />
        <BeforeAfterIImage />
        <AwarenessSections />
        <Surgeon />
        <BenefitsStepsVideos />
        <VideoStories />
        <ReviewsServicesLocations />
        <ClinicServices />
        {/* <ClinicLocations /> */}
        <Booking />
        <FAQFinalFooter />
      </main>
      <StickyBar />
    </>
  );
}
