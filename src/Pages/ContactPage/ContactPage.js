import React from "react";
import { Hero } from "../../Components/Contact/Hero/Hero";
import { ContactSection } from "../../Components/Contact/ContactSection/ContactSection";

import { Navbar } from "../../Shared/Navbar/Navbar";
import { Footer } from "../../Shared/Footer/Footer";
export const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ContactSection />

      <Footer />
    </div>
  );
};
