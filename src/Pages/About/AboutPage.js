import React from "react";
import { Hero } from "../../Components/About/Hero/Hero";
import { FirstSection } from "../../Components/About/FirstSection/FirstSection";
import { SecondSection } from "../../Components/About/SecondSection/SecondSection";
import { ThirdSection } from "../../Components/About/ThirdSection/ThirdSection";
import { FourthSection } from "../../Components/About/FourthSection/FourthSection";
import { Navbar } from "../../Shared/Navbar/Navbar";
export const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
};
