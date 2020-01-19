import React from "react";
import {
  StyledWrapper,
  StyledDropdownWrapper,
  StyledDropdownContent,
  StyledOptionLabel,
  StyledParagraph
} from "./FilterMobileMenuStyles";
import { SortContext } from "../../../../Shared/PortfolioSortContext";
import { sortMenuItems, locationMenuItems } from "../../menuItems";
const setActiveItem = (array, item) => {
  array.forEach(item => (item.isActive = false));
  item.isActive = true;
};

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
                {sortMenuItems.map(item => (
                  <StyledParagraph
                    active={item.isActive}
                    onClick={() => {
                      context.setSortOption(item.sortOption);
                      setActiveItem(sortMenuItems, item);
                    }}
                  >
                    {item.text}
                  </StyledParagraph>
                ))}
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
                {locationMenuItems.map(item => (
                  <StyledParagraph
                    active={item.isActive}
                    onClick={() => {
                      context.setPlaceOption(item.filterOption);
                      setActiveItem(locationMenuItems, item);
                    }}
                  >
                    {item.text}
                  </StyledParagraph>
                ))}
              </>
            )}
          </SortContext.Consumer>
        </StyledDropdownContent>
      </StyledDropdownWrapper>
    </StyledWrapper>
  );
};
