import React, { Component } from "react";
import { FeaturedProperties } from "../Components/FeaturedProperties/FeaturedProperties";
import { Hero } from "../Components/Hero/Hero";

class HomePage extends Component {
  render() {
    return (
      <>
        <Hero />
        <FeaturedProperties />
      </>
    );
  }
}

export default HomePage;
