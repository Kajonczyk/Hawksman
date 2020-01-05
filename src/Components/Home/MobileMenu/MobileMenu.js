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
const isUrlExact = item => history.location.pathname == item.url;

export const MobileMenu = ({ isMobileMenuExpanded, toggleMenu }) => {
  let activeElement = false;
  return (
    <>
      <StyledWrapper active={isMobileMenuExpanded}>
        <div></div>

        <StyledUl>
          {menuItems.map(item => (
            <StyledListItem>
              {(activeElement = isUrlExact(item))}

              <StyledListItemLink
                href="#"
                onClick={() => {
                  changeRoute(item.url);
                  toggleMenu();
                }}
                active={activeElement}
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
