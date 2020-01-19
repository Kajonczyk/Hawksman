import React from "react";
import {
  StyledWrapper,
  CustomDecoratedText,
  StyledPortrait,
  StyledImg,
  StyledPortaitInfo,
  PersonInfo,
  StyledDataWrapper,
  StyledPhoneIcon,
  StyledIconWrapper,
  StyledIconText,
  StyledMailIcon,
  StyledDiv
} from "./FirstSectionStyles";
import { StyledHeading } from "../../../Shared/StyledHeading";
import { StyledContent } from "../../../Shared/StyledContent";

import portraitJames from "../../../Images/About/portraitJames.png";

export const FirstSection = () => {
  return (
    <StyledWrapper>
      <StyledContent flex>
        <StyledDiv>
          <StyledHeading sectionNumber="01" color="white">
            Behind the <br /> scenes
          </StyledHeading>
          <CustomDecoratedText>
            I believe that the time and energy you need to run a physical
            business can be much better spent focusing on your clients,
            purchasers and making the properties you are selling amazing.
          </CustomDecoratedText>
        </StyledDiv>
        <StyledDiv second>
          <StyledPortrait>
            <StyledImg src={portraitJames}></StyledImg>
            <StyledPortaitInfo>
              <PersonInfo>Thomas Smith</PersonInfo>
              <PersonInfo personRole>Founder</PersonInfo>
            </StyledPortaitInfo>
          </StyledPortrait>
          <StyledDataWrapper>
            <StyledIconWrapper>
              <StyledPhoneIcon />
              <StyledIconText> 0000 4123</StyledIconText>
            </StyledIconWrapper>
            <StyledIconWrapper>
              <StyledMailIcon />
              <StyledIconText> email@example.com</StyledIconText>
            </StyledIconWrapper>
          </StyledDataWrapper>
        </StyledDiv>
      </StyledContent>
    </StyledWrapper>
  );
};
