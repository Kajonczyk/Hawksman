import React from "react";
import {
  StyledWrapper,
  CustomSectionIndicator,
  CustomLogo
} from "./HeroStyles";
import { StyledSecondHeading } from "../../../Shared/StyledSecondHeading";

export const Hero = () => {
  return (
    <StyledWrapper>
      <CustomLogo />
      <StyledSecondHeading>
        Contact <br /> Hawksman
      </StyledSecondHeading>
      <CustomSectionIndicator />
    </StyledWrapper>
  );
};
