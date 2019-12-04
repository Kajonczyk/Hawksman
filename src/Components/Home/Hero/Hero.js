import React, { Component } from "react";
import {
  StyledWrapper,
  StyledNavBar,
  StyledNavBarItem,
  StyledMenuWrapper,
  StyledLogoDescription,
  StyledHamburgerMenu,
  StyledHeading,
  StyledParagraph,
  StyledSecondHeading
} from "./HeroStyles";
import { StyledLogo } from "../../../Shared/StyledLogo";
import { VerticalSlider } from "../../VerticalSlider/VerticalSlider";
import { MobileMenu } from "../MobileMenu/MobileMenu";
export class Hero extends Component {
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
      <StyledWrapper fixed={this.state.isMobileMenuExpanded}>
        <StyledNavBar>
          <StyledMenuWrapper onClick={this.handleUpdateMobileMenuExpansion}>
            <StyledHamburgerMenu active={this.state.isMobileMenuExpanded} />
          </StyledMenuWrapper>

          <StyledNavBarItem active={this.state.isMobileMenuExpanded}>
            Contact
          </StyledNavBarItem>
        </StyledNavBar>
        <StyledLogo active={this.state.isMobileMenuExpanded}>
          <StyledLogoDescription>Real Estate</StyledLogoDescription>
        </StyledLogo>
        <StyledHeading>
          Hawksman has <br /> been created
        </StyledHeading>

        <MobileMenu isMobileMenuExpanded={this.state.isMobileMenuExpanded} />

        <VerticalSlider />
        <StyledParagraph> A new kind of real estate agent </StyledParagraph>
        <StyledSecondHeading> Integrity. Service. Results.</StyledSecondHeading>
        <StyledParagraph grey>
          All the time, every time. We provide you with the platform to sell
          your home the way you want to.
        </StyledParagraph>
      </StyledWrapper>
    );
  }
}
