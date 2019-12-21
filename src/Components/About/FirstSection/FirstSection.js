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
  StyledMailIcon
} from "./FirstSectionStyles";
import { StyledHeading } from "../../../Shared/StyledHeading";

import portraitJames from "../../../Images/About/portraitJames.png";

export const FirstSection = () => {
  return (
    <StyledWrapper>
      <StyledHeading sectionNumber="01" color="white">
        Behind the <br /> scenes
      </StyledHeading>
      <CustomDecoratedText>
        I believe that the time and energy you need to run a physical business
        can be much better spent focusing on your clients, purchasers and making
        the properties you are selling amazing.
      </CustomDecoratedText>

      <StyledPortrait>
        <StyledImg src={portraitJames}></StyledImg>
        <StyledPortaitInfo>
          <PersonInfo>John Doe</PersonInfo>
          <PersonInfo role>Founder</PersonInfo>
        </StyledPortaitInfo>
      </StyledPortrait>
      <StyledDataWrapper>
        <StyledIconWrapper>
          <StyledPhoneIcon />
          <StyledIconText> 0000 4123</StyledIconText>
        </StyledIconWrapper>
        <StyledIconWrapper>
          <StyledMailIcon />
          <StyledIconText> somemail@some.com</StyledIconText>
        </StyledIconWrapper>
      </StyledDataWrapper>
    </StyledWrapper>
  );
};
