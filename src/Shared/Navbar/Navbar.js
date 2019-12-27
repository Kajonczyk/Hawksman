import React, { Component } from "react";
import {
  StyledNavBar,
  StyledNavBarItem,
  StyledMenuWrapper,
  StyledHamburgerMenu,
  GlobalStyle,
  StyledWrapper
} from "./NavbarStyles";
import { MobileMenu } from "../../Components/Home/MobileMenu/MobileMenu";
import { NavbarContext } from "../../Shared/NavbarContext";
export class Navbar extends Component {
  render() {
    return (
      <StyledWrapper>
        <NavbarContext.Consumer>
          {context => (
            <>
              <StyledNavBar activeScroll={context.state.isPageScrolled}>
                <StyledMenuWrapper onClick={() => context.toggleMenu()}>
                  <StyledHamburgerMenu
                    active={context.state.isMenuActive}
                    activeScroll={context.state.isPageScrolled}
                  />
                </StyledMenuWrapper>

                <StyledNavBarItem
                  active={context.state.isMenuActive}
                  activeScroll={context.state.isPageScrolled}
                >
                  Contact
                </StyledNavBarItem>
              </StyledNavBar>
              <MobileMenu
                isMobileMenuExpanded={context.state.isMenuActive}
                toggleMenu={context.toggleMenu}
              />
            </>
          )}
        </NavbarContext.Consumer>
      </StyledWrapper>
    );
  }
}
