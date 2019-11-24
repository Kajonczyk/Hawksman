import React from "react";
import {
  StyledWrapper,
  StyledDiv,
  StyledListItemLink,
  StyledUl,
  StyledListItem,
  StyledFacebook,
  StyledInstagram,
  StyledLinkedin,
  StyledSnapchat,
  StyledPinterestAlt,
  StyledTwitter,
  StyledPeriscope
} from "./MobileMenuStyles";
export const MobileMenu = ({ isMobileMenuExpanded }) => {
  return (
    <StyledWrapper active={isMobileMenuExpanded}>
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
      <StyledDiv>
        <StyledFacebook />
        <StyledInstagram />
        <StyledLinkedin />
        <StyledPeriscope />
        <StyledPinterestAlt />
        <StyledSnapchat />
        <StyledTwitter />
      </StyledDiv>
    </StyledWrapper>
  );
};
