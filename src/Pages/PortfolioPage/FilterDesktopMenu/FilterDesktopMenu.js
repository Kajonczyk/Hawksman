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
import {
  sortMenuItems,
  locationMenuItems
} from "../../../Components/Portfolio/menuItems";

const setActiveItem = (array, item) => {
  array.forEach(item => (item.isActive = false));
  item.isActive = true;
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
                      key={item.text}
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
                      key={item.filterOption}
                      active={item.isActive}
                      onClick={() => {
                        context.setPlaceOption(item.filterOption);
                        setActiveItem(locationMenuItems, item);
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
    </StyledWrapper>
  );
};
