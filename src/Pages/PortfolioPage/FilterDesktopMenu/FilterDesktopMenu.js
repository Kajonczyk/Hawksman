import React, { useState } from "react";
import {
  StyledWrapper,
  StyledBox,
  StyledHeading,
  StyledList,
  StyledListItem
} from "./FilterDesktopMenuStyles";
import { SortContext } from "../../../Shared/PortfolioSortContext";
import { StyledIcon } from "../../../Components/Portfolio/Hero/HeroStyles";

const setItemActive = () => true;
const sortMenuItems = [
  {
    text: "Default",
    isActive: true,
    sortOption: "default"
  },
  {
    text: "Price: Low - High",
    isActive: false,
    sortOption: "priceAsc"
  },
  {
    text: "Price: High - Low",
    isActive: false,
    sortOption: "priceDesc"
  },
  {
    text: "Size: High - Low",
    isActive: false,
    sortOption: "default"
  },
  {
    text: "Size: Low - High",
    isActive: false,
    sortOption: "sizeAsc"
  }
];
const locationMenuItems = [
  {
    text: "View All",
    isActive: false,
    filterOption: "all"
  },
  {
    text: "Fetcham",
    isActive: false,
    filterOption: "fetcham"
  },
  {
    text: "Esher",
    isActive: false,
    filterOption: "esher"
  },
  {
    text: "Walton-on-thames",
    isActive: false,
    filterOption: "walton-on-thames"
  }
];
const setActiveItem = (array, item) => {
  array.forEach(item => (item.isActive = false));
  item.isActive = true;
  console.log(array);
};
export const FilterDesktopMenu = () => {
  const [isSortMenuExpanded, toggleSortMenu] = useState(false);
  const [isPlaceMenuExpanded, togglePlaceMenu] = useState(false);
  return (
    <StyledWrapper>
      <StyledBox>
        <StyledHeading onClick={() => toggleSortMenu(!isSortMenuExpanded)}>
          Sort By <StyledIcon isActive={isSortMenuExpanded} />
        </StyledHeading>
        {isSortMenuExpanded && (
          <StyledList>
            <SortContext.Consumer>
              {context => (
                <>
                  {sortMenuItems.map(item => (
                    <StyledListItem
                      active={item.isActive}
                      onClick={() => {
                        context.setSortOption(item.sortOption);
                        setActiveItem(sortMenuItems, item);
                      }}
                    >
                      {item.text}
                    </StyledListItem>
                  ))}
                </>
              )}
            </SortContext.Consumer>
          </StyledList>
        )}
      </StyledBox>
      <StyledBox>
        <StyledHeading onClick={() => togglePlaceMenu(!isPlaceMenuExpanded)}>
          Locations <StyledIcon isActive={isPlaceMenuExpanded} />
        </StyledHeading>
        {isPlaceMenuExpanded && (
          <StyledList>
            <SortContext.Consumer>
              {context => (
                <>
                  {locationMenuItems.map(item => (
                    <StyledListItem
                      active={item.isActive}
                      onClick={() => {
                        context.setPlaceOption(item.filterOption);
                        setActiveItem(locationMenuItems, item);
                      }}
                    >
                      {item.text}
                    </StyledListItem>
                  ))}

                  <StyledListItem
                    onClick={() => context.setPlaceOption("fetcham")}
                  >
                    Fetcham
                  </StyledListItem>
                  <StyledListItem
                    onClick={() => context.setPlaceOption("esher")}
                  >
                    Esher
                  </StyledListItem>
                  <StyledListItem
                    onClick={() => context.setPlaceOption("walton-on-thames")}
                  >
                    Walton-on-thames
                  </StyledListItem>
                </>
              )}
            </SortContext.Consumer>
          </StyledList>
        )}
      </StyledBox>
    </StyledWrapper>
  );
};
