import React from "react";
import {
  StyledWrapper,
  CustomSectionIndicator,
  CustomLogo
} from "./HeroStyles";
import { StyledSecondHeading } from "../../../Shared/StyledSecondHeading";
import { NavbarContext } from "../../../Shared/NavbarContext";

export const Hero = () => {
  return (
    <StyledWrapper>
      <NavbarContext.Consumer>
        {context => <CustomLogo active={context.state.isMenuActive} />}
      </NavbarContext.Consumer>

      <StyledSecondHeading>Contact Hawksman</StyledSecondHeading>
      <CustomSectionIndicator />
    </StyledWrapper>
  );
};
