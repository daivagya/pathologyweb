import CategoryGrid from "@/components/CategoryGrid";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/HeroSection";
import Manufacturing from "@/components/Manufacturing";
import MetricsBar from "@/components/MetricsBar";
import Support from "@/components/Support";

import React from "react";

const page = ({ children }) => {
  return (
    <>
      <Hero />
      <MetricsBar />
      <CategoryGrid />
      <Manufacturing />
      {/* <ResourceCenter /> */}
      <Support />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default page;
