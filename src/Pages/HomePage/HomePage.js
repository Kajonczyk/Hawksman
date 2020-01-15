import React, { Component } from "react";
import { FeaturedProperties } from "../../Components/Home/FeaturedProperties/FeaturedProperties";
import { Hero } from "../../Components/Home/Hero/Hero";
import { SecondSection } from "../../Components/Home/SecondSection/SecondSection";
import { Footer } from "../../Shared/Footer/Footer";
import { Navbar } from "../../Shared/Navbar/Navbar";

class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <FeaturedProperties />
        <SecondSection />
        <Footer />
      </>
    );
  }
}

export default HomePage;
