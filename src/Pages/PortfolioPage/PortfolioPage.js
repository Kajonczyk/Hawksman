import React from "react";
import { Footer } from "../../Shared/Footer/Footer";
import { Navbar } from "../../Shared/Navbar/Navbar";
import { Hero } from "../../Components/Portfolio/Hero/Hero";
import { PortfolioSortProvider } from "../../Shared/PortfolioSortContext";
import { SortContext } from "../../Shared/PortfolioSortContext";
import { StyledFeatures } from "../../Shared/StyledFeatures";
import { Properties } from "../../Components/Portfolio/Properties/Properties";
import { FilterDesktopMenu } from "./FilterDesktopMenu/FilterDesktopMenu";
import styled from "styled-components";
export const PortfolioPage = () => {
  return (
    <>
      <Navbar />
      <PortfolioSortProvider>
        <Hero />
        <StyledWrapper flex>
          <FilterDesktopMenu />
          <SortContext.Consumer>
            {context => <Properties data={context.state} />}
          </SortContext.Consumer>
        </StyledWrapper>
      </PortfolioSortProvider>
      <StyledWrapper>
        <StyledFeatures />
      </StyledWrapper>

      <Footer />
    </>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  ${({ flex }) =>
    flex &&
    `
  display: flex;
  justify-content: center;
  `}
`;
