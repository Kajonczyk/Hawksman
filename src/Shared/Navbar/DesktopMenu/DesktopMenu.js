import React from "react";
import { StyledContent } from "../../StyledContent";
import {
  StyledListItemLink,
  StyledUl,
  StyledListItem
} from "../MenuSharedItems/StyledSharedItems";
import { menuItems } from "../menuItems";
import { changeRoute, isUrlExact } from "../MenuSharedItems/SharedMethods";

export const DesktopMenu = ({ activeScroll }) => {
  let isElementActive = false;
  return (
    <StyledContent flex spaceBetween minWidth>
      <StyledUl flex>
        {menuItems.slice(0, 3).map(item => (
          <StyledListItem key={item.url} onClick={() => changeRoute(item.url)}>
            {(isElementActive = isUrlExact(item))}
            <StyledListItemLink
              href="#"
              active={isElementActive}
              desktop
              activeScroll={activeScroll}
            >
              {item.description}
            </StyledListItemLink>
          </StyledListItem>
        ))}
      </StyledUl>
      <StyledUl>
        <StyledListItem>
          {(isElementActive = isUrlExact(menuItems[menuItems.length - 1]))}
          <StyledListItemLink
            href="#"
            onClick={() => changeRoute("/contact")}
            active={isElementActive}
            activeScroll={activeScroll}
            desktop
          >
            Contact
          </StyledListItemLink>
        </StyledListItem>
      </StyledUl>
    </StyledContent>
  );
};
