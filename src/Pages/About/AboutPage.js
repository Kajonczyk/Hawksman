import React from "react";
import { Hero } from "../../Components/About/Hero/Hero";
import { FirstSection } from "../../Components/About/FirstSection/FirstSection";
import { Navbar } from "../../Shared/Navbar/Navbar";
export const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FirstSection />
    </div>
  );
};
