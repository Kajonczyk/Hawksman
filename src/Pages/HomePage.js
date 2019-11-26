import React, { Component } from "react";
import { FeaturedProperties } from "../Components/Home/FeaturedProperties/FeaturedProperties";
import { Hero } from "../Components/Home/Hero/Hero";

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
