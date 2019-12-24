import React from "react";
import { StyledHeading } from "../../../Shared/StyledHeading";

import { StyledWrapper } from "./FifthSectionStyles";
import { SectionSwiper } from "./SectionSwiper/SectionSwiper";

export const FifthSection = () => {
  return (
    <StyledWrapper>
      <StyledHeading
        color={({ theme }) => theme.sectionDarkerWhite}
        sectionNumber="05"
      >
        {" "}
        What we are <br /> About
      </StyledHeading>
      <SectionSwiper />
    </StyledWrapper>
  );
};
