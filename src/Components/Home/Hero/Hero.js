import React, { Component } from "react";
import {
  StyledWrapper,
  StyledLogoDescription,
  StyledHeading,
  StyledSecondHeading,
  StyledParagraph
} from "./HeroStyles";
import { StyledLogo } from "../../../Shared/StyledLogo";
import { VerticalSlider } from "../../VerticalSlider/VerticalSlider";
import { NavbarContext } from "../../../Shared/NavbarContext";
import { StyledContent } from "../../../Shared/StyledContent";

export class Hero extends Component {
  render() {
    return (
      <>
        <StyledWrapper>
          <StyledContent>
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
              Integrity. Service. Results.
            </StyledSecondHeading>
            <StyledParagraph grey>
              All the time, every time. We provide you with the platform to sell
              your home the way you want to.
            </StyledParagraph>
          </StyledContent>
        </StyledWrapper>
      </>
    );
  }
}
