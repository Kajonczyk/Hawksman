import React from "react";
import { Footer } from "../../Shared/Footer/Footer";
import { Navbar } from "../../Shared/Navbar/Navbar";
import { Hero } from "../../Components/Portfolio/Hero/Hero";
import { PortfolioSortProvider } from "../../Shared/PortfolioSortContext";
import { SortContext } from "../../Shared/PortfolioSortContext";
import { Properties } from "../../Components/Portfolio/Properties/Properties";
export const PortfolioPage = () => {
  return (
    <>
      <Navbar />
      <PortfolioSortProvider>
        <Hero />
        <SortContext.Consumer>
          {context => <Properties data={context.state} />}
        </SortContext.Consumer>
      </PortfolioSortProvider>
      <Footer />
    </>
  );
};
