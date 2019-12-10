import React from "react";
import {
  StyledWrapper,
  StyledListItemLink,
  StyledUl,
  StyledListItem
} from "./MobileMenuStyles";
import { StyledSocials } from "../../../Shared/Socials/StyledSocials";
export const MobileMenu = ({ isMobileMenuExpanded }) => {
  return (
    <>
      <StyledWrapper active={isMobileMenuExpanded} className="TUTAJ">
        {console.log(isMobileMenuExpanded)}
        <div></div>
        <StyledUl>
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

        <StyledSocials />
      </StyledWrapper>
    </>
  );
};
