import React from "react";
import { StyledWrapper } from "./FeaturedPropertiesStyles";
import { HorizontalSlider } from "../../HorizontalSlider/HorizontalSlider";
import { StyledHeading } from "../../../Shared/StyledHeading";

export const FeaturedProperties = () => {
  return (
    <StyledWrapper>
      <StyledHeading color={({ theme }) => theme.greyColor} sectionNumber="01">
        Featured <br />
        Properties
      </StyledHeading>
      <HorizontalSlider />
    </StyledWrapper>
  );
};
