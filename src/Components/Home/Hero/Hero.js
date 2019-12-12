import React, { Component } from "react";
import {
  StyledWrapper,
  StyledLogoDescription,
  StyledHeading,
  StyledParagraph,
  StyledSecondHeading
} from "./HeroStyles";
import { StyledLogo } from "../../../Shared/StyledLogo";
import { VerticalSlider } from "../../VerticalSlider/VerticalSlider";
import { NavbarContext } from "../../../Shared/NavbarContext";

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
      <>
        <StyledWrapper fixed={this.state.isMobileMenuExpanded}>
          <NavbarContext.Consumer>
            {context => (
              <StyledLogo active={context.state.isMenuActive}>
                <StyledLogoDescription>Real Estate</StyledLogoDescription>
              </StyledLogo>
            )}
          </NavbarContext.Consumer>

          <StyledHeading>
            Hawksman has <br /> been created
          </StyledHeading>

          <VerticalSlider />
          <StyledParagraph> A new kind of real estate agent </StyledParagraph>
          <StyledSecondHeading>
            {" "}
            Integrity. Service. Results.
          </StyledSecondHeading>
          <StyledParagraph grey>
            All the time, every time. We provide you with the platform to sell
            your home the way you want to.
          </StyledParagraph>
        </StyledWrapper>
      </>
    );
  }
}
