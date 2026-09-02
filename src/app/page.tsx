import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import {
  ModelStrip,
  Problem,
  Services,
  HowItWorks,
  WhatWeMove,
  Coverage,
  ForBusinesses,
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
      <Services />
      <HowItWorks />
      <WhatWeMove />
      <Coverage />
      <ForBusinesses />
      <Segments />
      <FaqPreview />
      <CtaBand />
    </>
  );
}
