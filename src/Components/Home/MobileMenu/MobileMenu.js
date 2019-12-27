import React from "react";
import {
  StyledWrapper,
  StyledListItemLink,
  StyledUl,
  StyledListItem
} from "./MobileMenuStyles";
import { StyledSocials } from "../../../Shared/Socials/StyledSocials";
import history from "../../../Utils/history";
const menuItems = [
  { description: "Home", url: "/" },
  { description: "About", url: "/about" },
  { description: "Portfolio", url: "/portfolio" },
  { description: "Contact", url: "/contact" }
];
const changeRoute = url => {
  history.push(url);
};
export const MobileMenu = ({ isMobileMenuExpanded, toggleMenu }) => {
  return (
    <>
      <StyledWrapper active={isMobileMenuExpanded}>
        <div></div>
        {console.log(toggleMenu)}
        <StyledUl>
          {menuItems.map(item => (
            <StyledListItem>
              <StyledListItemLink
                href="#"
                onClick={() => {
                  changeRoute(item.url);
                  toggleMenu();
                }}
              >
                {item.description}
              </StyledListItemLink>
            </StyledListItem>
          ))}
          >
        </StyledUl>

        <StyledSocials />
      </StyledWrapper>
    </>
  );
};
