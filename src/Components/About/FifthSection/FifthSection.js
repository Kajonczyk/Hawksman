import React from "react";
import { StyledHeading } from "../../../Shared/StyledHeading";

import { StyledWrapper } from "./FifthSectionStyles";
import { SectionSwiper } from "./SectionSwiper/SectionSwiper";
import { StyledContent } from "../../../Shared/StyledContent";

export const FifthSection = () => {
  return (
    <StyledWrapper>
      <StyledContent>
        <StyledHeading
          color={({ theme }) => theme.sectionDarkerWhite}
          sectionNumber="05"
        >
          {" "}
          What we are <br /> About
        </StyledHeading>
        <SectionSwiper />
      </StyledContent>
    </StyledWrapper>
  );
};
