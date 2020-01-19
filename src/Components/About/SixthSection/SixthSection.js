import React from "react";
import { StyledHeading } from "../../../Shared/StyledHeading";
import { StyledFeatures } from "../../../Shared/StyledFeatures";

import {
  StyledWrapper,
  StyledText,
  StyledTextWrapper
} from "./SixthSectionStyles";
import { StyledContent } from "../../../Shared/StyledContent";

export const SixthSection = () => {
  return (
    <StyledWrapper>
      <StyledContent>
        <StyledHeading
          color={({ theme }) => theme.greyColor}
          sectionNumber="06"
        >
          What we can do <br />
          For buyers
        </StyledHeading>
        <StyledTextWrapper>
          <StyledText big>
            We will only show you houses that you <br /> want to see.
          </StyledText>
          <StyledText grey="true">
            As a buyer, we promise to treat you as an individual, rather than
            another entry on a database. Most importantly, we’ll not only listen
            to you, we’ll hear what you say.
          </StyledText>
        </StyledTextWrapper>
        <StyledFeatures />
      </StyledContent>
    </StyledWrapper>
  );
};
