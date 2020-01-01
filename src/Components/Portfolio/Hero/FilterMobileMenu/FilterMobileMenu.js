import React from "react";
import {
  StyledWrapper,
  StyledDropdownWrapper,
  StyledDropdownContent,
  StyledOptionLabel,
  StyledParagraph
} from "./FilterMobileMenuStyles";
import { SortContext } from "../../../../Shared/PortfolioSortContext";

export const FilterMobileMenu = () => {
  return (
    <StyledWrapper>
      <StyledDropdownWrapper>
        <StyledDropdownContent>
          <StyledOptionLabel>Sort By</StyledOptionLabel>
        </StyledDropdownContent>
        <StyledDropdownContent>
          <SortContext.Consumer>
            {context => (
              <>
                <StyledParagraph
                  onClick={() => context.setSortOption("default")}
                >
                  Default
                </StyledParagraph>
                <StyledParagraph
                  onClick={() => context.setSortOption("priceDesc")}
                >
                  Price: High - Low
                </StyledParagraph>
                <StyledParagraph
                  onClick={() => context.setSortOption("priceAsc")}
                >
                  Price: Low - High
                </StyledParagraph>
                <StyledParagraph
                  onClick={() => context.setSortOption("sizeDesc")}
                >
                  Size: High - Low
                </StyledParagraph>
                <StyledParagraph
                  onClick={() => context.setSortOption("sizeAsc")}
                >
                  Size: Low - High
                </StyledParagraph>
              </>
            )}
          </SortContext.Consumer>
        </StyledDropdownContent>
      </StyledDropdownWrapper>

      <StyledDropdownWrapper>
        <StyledDropdownContent>
          <StyledOptionLabel>Locations</StyledOptionLabel>
        </StyledDropdownContent>
        <StyledDropdownContent>
          <SortContext.Consumer>
            {context => (
              <>
                <StyledParagraph onClick={() => context.setPlaceOption("all")}>
                  View All
                </StyledParagraph>
                <StyledParagraph
                  onClick={() => context.setPlaceOption("fetcham")}
                >
                  Fetcham
                </StyledParagraph>
                <StyledParagraph
                  onClick={() => context.setPlaceOption("esher")}
                >
                  Esher
                </StyledParagraph>
                <StyledParagraph
                  onClick={() => context.setPlaceOption("walton-on-thames")}
                >
                  Walton-on-Thames
                </StyledParagraph>
              </>
            )}
          </SortContext.Consumer>
        </StyledDropdownContent>
      </StyledDropdownWrapper>
    </StyledWrapper>
  );
};
