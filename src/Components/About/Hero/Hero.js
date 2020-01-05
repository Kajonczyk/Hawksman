import React from "react";
import {
  StyledWrapper,
  CustomLogo,
  LineBreak,
  CustomParagraph,
  CustomSectionIndicator
} from "./HeroStyles";
import { StyledSecondHeading } from "../../../Shared/StyledSecondHeading";
import { NavbarContext } from "../../../Shared/NavbarContext";

export const Hero = () => {
  return (
    <StyledWrapper>
      <LineBreak height="60" />
      <NavbarContext.Consumer>
        {context => <CustomLogo active={context.state.isMenuActive} />}
      </NavbarContext.Consumer>

      <LineBreak height="30" />
      <StyledSecondHeading> Integrity. Service. Results.</StyledSecondHeading>
      <LineBreak height="20" />
      <CustomParagraph>
        All the time, every time. We provide you with the platform to sell your
        home the way you want to.
      </CustomParagraph>
      <CustomSectionIndicator />
    </StyledWrapper>
  );
};
