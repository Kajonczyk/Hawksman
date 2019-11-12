import React, { Component } from "react";
import { MobileMenu } from "../Components/MobileMenu/MobileMenu";
import {
  StyledWrapper,
  StyledNavBar,
  StyledNavBarItem,
  StyledMenuWrapper,
  StyledHamburgerMenu,
  StyledLogo,
  StyledLogoDescription,
  StyledHeading
} from "./HomePageStyles";

class HomePage extends Component {
  state = {
    isMobileMenuExpanded: false
  };
  handleUpdateMobileMenuExpansion = () => {
    this.setState(prevState => ({
      isMobileMenuExpanded: !prevState.isMobileMenuExpanded
    }));
  };
  render() {
    return (
      <StyledWrapper>
        <StyledNavBar>
          <StyledMenuWrapper onClick={this.handleUpdateMobileMenuExpansion}>
            <StyledHamburgerMenu active={this.state.isMobileMenuExpanded} />
          </StyledMenuWrapper>

          <StyledNavBarItem>Contact</StyledNavBarItem>
        </StyledNavBar>
        <StyledLogo active={this.state.isMobileMenuExpanded}>
          <StyledLogoDescription>Real Estate</StyledLogoDescription>
        </StyledLogo>
        <StyledHeading>
          Hawksman has <br /> been created
        </StyledHeading>
        {this.state.isMobileMenuExpanded && (
          <MobileMenu isMobileMenuExpanded={this.state.isMobileMenuExpanded} />
        )}
      </StyledWrapper>
    );
  }
}

export default HomePage;
