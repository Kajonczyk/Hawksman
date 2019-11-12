import React from "react";
import {
  StyledWrapper,
  StyledDiv,
  StyledListItemLink,
  StyledUl,
  StyledListItem
} from "./MobileMenuStyles";
export const MobileMenu = ({ isMobileMenuExpanded }) => {
  return (
    <StyledWrapper>
      <span></span>
      <StyledUl active={isMobileMenuExpanded}>
        <StyledListItem>
          <StyledListItemLink href="#">Home</StyledListItemLink>
        </StyledListItem>
        <StyledListItem>
          <StyledListItemLink href="#">About</StyledListItemLink>
        </StyledListItem>
        <StyledListItem>
          <StyledListItemLink href="#">Portfolio</StyledListItemLink>
        </StyledListItem>
        <StyledListItem>
          <StyledListItemLink href="#">Contact</StyledListItemLink>
        </StyledListItem>
      </StyledUl>
      <StyledDiv></StyledDiv>
    </StyledWrapper>
  );
};
