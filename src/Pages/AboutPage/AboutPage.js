import React from "react";
import { Hero } from "../../Components/About/Hero/Hero";
import { FirstSection } from "../../Components/About/FirstSection/FirstSection";
import { SecondSection } from "../../Components/About/SecondSection/SecondSection";
import { ThirdSection } from "../../Components/About/ThirdSection/ThirdSection";
import { FourthSection } from "../../Components/About/FourthSection/FourthSection";
import { FifthSection } from "../../Components/About/FifthSection/FifthSection";
import { SixthSection } from "../../Components/About/SixthSection/SixthSection";
import { Navbar } from "../../Shared/Navbar/Navbar";
import { Footer } from "../../Shared/Footer/Footer";
export const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </div>
  );
};
