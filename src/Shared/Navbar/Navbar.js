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
              <StyledNavBar className="XD">
                <StyledMenuWrapper onClick={() => context.toggleMenu()}>
                  <StyledHamburgerMenu active={context.state.isMenuActive} />
                </StyledMenuWrapper>

                <StyledNavBarItem active={context.state.isMenuActive}>
                  Contact
                </StyledNavBarItem>
              </StyledNavBar>
              <MobileMenu isMobileMenuExpanded={context.state.isMenuActive} />
            </>
          )}
        </NavbarContext.Consumer>
      </StyledWrapper>
    );
  }
}
