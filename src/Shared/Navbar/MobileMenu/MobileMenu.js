import React from "react";
import { StyledWrapper } from "./MobileMenuStyles";
import { StyledSocials } from "../../../Shared/Socials/StyledSocials";
import {
  StyledListItemLink,
  StyledUl,
  StyledListItem
} from "../MenuSharedItems/StyledSharedItems";
import { changeRoute, isUrlExact } from "../MenuSharedItems/SharedMethods";

import { menuItems } from "../menuItems";
export const MobileMenu = ({ isMobileMenuExpanded, toggleMenu }) => {
  let isElementActive = false;
  return (
    <>
      <StyledWrapper active={isMobileMenuExpanded}>
        <div></div>
        <div></div>

        <StyledUl>
          {menuItems.map(item => (
            <StyledListItem>
              {(isElementActive = isUrlExact(item))}

              <StyledListItemLink
                href="#"
                onClick={() => {
                  changeRoute(item.url);
                  toggleMenu();
                }}
                active={isElementActive}
              >
                {item.description}
              </StyledListItemLink>
            </StyledListItem>
          ))}
        </StyledUl>

        <StyledSocials />
      </StyledWrapper>
    </>
  );
};
