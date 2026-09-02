import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ReviewsBand } from "@/components/home/ReviewsBand";
import {
  ModelStrip,
  Problem,
  HowItWorks,
  Services,
  WhatWeMove,
  Tracking,
  Proof,
  Coverage,
  ForBusinesses,
  TrustGrid,
  Segments,
  FaqPreview,
} from "@/components/home/sections";
import { CtaBand } from "@/components/marketing/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ModelStrip />
      <Problem />
      <HowItWorks />
      <Services />
      <WhatWeMove />
      <Tracking />
      <Proof />
      <Coverage />
      <ForBusinesses />
      <TrustGrid />
      <Segments />
      <ReviewsBand />
      <FaqPreview />
      <CtaBand
        title="Need supplies moved to the Mara?"
        text="Book a delivery or message us on WhatsApp. We'll confirm availability and a clear price before anything is collected."
        showTagline
      />
    </>
  );
}
