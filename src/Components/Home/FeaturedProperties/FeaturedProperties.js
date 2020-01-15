import React from "react";
import { StyledWrapper, CustomStyledContent } from "./FeaturedPropertiesStyles";
import { HorizontalSlider } from "../../HorizontalSlider/HorizontalSlider";
import { StyledHeading } from "../../../Shared/StyledHeading";

export const FeaturedProperties = () => {
  return (
    <StyledWrapper>
      <CustomStyledContent>
        <StyledHeading
          color={({ theme }) => theme.greyColor}
          sectionNumber="01"
        >
          Featured <br />
          Properties
        </StyledHeading>
        <HorizontalSlider />
      </CustomStyledContent>
    </StyledWrapper>
  );
};
