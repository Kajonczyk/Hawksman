import React, { Component } from "react";
import { FeaturedProperties } from "../Components/Home/FeaturedProperties/FeaturedProperties";
import { Hero } from "../Components/Home/Hero/Hero";
import { SecondSection } from "../Components/Home/SecondSection/SecondSection";

class HomePage extends Component {
  render() {
    return (
      <>
        <Hero />
        <FeaturedProperties />
        <SecondSection />
      </>
    );
  }
}

export default HomePage;
