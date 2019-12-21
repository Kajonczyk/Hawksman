import React from "react";
import { StyledHeading } from "../../../Shared/StyledHeading";

import {
  StyledIndicator,
  StyledText,
  StyledWrapper
} from "./FourthSectionStyles";

export const FourthSection = () => {
  return (
    <StyledWrapper>
      <StyledHeading color={({ theme }) => theme.greyColor} sectionNumber="04">
        We stand <br />
        Out
      </StyledHeading>
      <StyledIndicator />
      <StyledText>
        We want to create a partnership with you in order to achieve the best
        result. Communication plays a vital role in this. Too much, we all get
        annoyed. Too little, you wonder what’s actually happening. That’s why we
        will agree with you from the outset how you want us to keep in touch.
      </StyledText>
    </StyledWrapper>
  );
};
