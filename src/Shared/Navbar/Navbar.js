import React, { Component } from "react";
import {
  StyledNavBar,
  StyledNavBarItem,
  StyledMenuWrapper,
  StyledHamburgerMenu,
  StyledWrapper,
} from "./NavbarStyles";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";
import { NavbarContext } from "../../Shared/NavbarContext";
import { changeRoute } from "./MenuSharedItems/SharedMethods";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  state = {
    windowWidth: 0,
  };
  componentDidMount() {
    window.addEventListener("resize", this.getWindowWidth);
    this.getWindowWidth();
  }
  getWindowWidth = () => {
    const windowWidth = window.innerWidth;
    this.setState({
      windowWidth,
    });
  };
  render() {
    return (
      <StyledWrapper>
        <NavbarContext.Consumer>
          {(context) => (
            <>
              <StyledNavBar activeScroll={context.state.isPageScrolled}>
                {this.state.windowWidth > 1023 ? (
                  <DesktopMenu activeScroll={context.state.isPageScrolled} />
                ) : (
                  <>
                    <StyledMenuWrapper onClick={() => context.toggleMenu()}>
                      <StyledHamburgerMenu
                        active={context.state.isMenuActive}
                        activeScroll={context.state.isPageScrolled}
                      />
                    </StyledMenuWrapper>

                    <StyledNavBarItem
                      active={context.state.isMenuActive}
                      activeScroll={context.state.isPageScrolled}
                      onClick={() => {
                        changeRoute("/contact");
                      }}
                    >
                      <Link
                        to="/contact"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          position: "relative",
                          zIndex: "9999",
                        }}
                      >
                        Contact
                      </Link>
                    </StyledNavBarItem>
                  </>
                )}
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
