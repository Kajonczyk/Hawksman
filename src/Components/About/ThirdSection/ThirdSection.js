import React from "react";
import { StyledHeading } from "../../../Shared/StyledHeading";
import { StyledDecoratedText } from "../../../Shared/StyledDecoratedText";
import {
  StyledWrapper,
  StyledImageWrapper,
  StyledImg,
  StyledTextWrapper,
  StyledDiv,
  Wrapper
} from "./ThirdSectionStyles";
import view from "../../../Images/About/view.jpg";
import { StyledContent } from "../../../Shared/StyledContent";

export const ThirdSection = () => {
  return (
    <StyledWrapper>
      <StyledContent>
        <StyledHeading
          color={({ theme }) => theme.greyColor}
          sectionNumber="03"
        >
          How we help you
        </StyledHeading>
        <StyledDecoratedText big>
          Why should moving house be in the top 5 most stressful life
          experiences along with the death of a loved one and divorce?
        </StyledDecoratedText>
        <StyledDiv tablet image>
          <StyledDiv>
            <StyledImageWrapper>
              <StyledImg src={view} alt="view" />
            </StyledImageWrapper>
          </StyledDiv>
          <Wrapper>
            <StyledTextWrapper tablet>
              Surely it should be an opportunity for a new experience and a
              fresh start. We want to minimise the stress of buying or selling a
              home by keeping things simple, transparent and realistic.
            </StyledTextWrapper>
          </Wrapper>
        </StyledDiv>
      </StyledContent>
    </StyledWrapper>
  );
};
