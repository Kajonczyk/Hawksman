import React, { Component } from "react";
import {
  StyledWrapper,
  StyledParagraph,
  StyledSectionDivider,
  StyledDividerWrapper,
  StyledDecoratedButton
} from "./SecondSectionStyles";
import { StyledHeading } from "../../../Shared/StyledHeading";
import { StyledSectionIndicator } from "../../../Shared/StyledSectionIndicator";
import { StyledDecoratedText } from "../../../Shared/StyledDecoratedText";
export class SecondSection extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledHeading color={({ theme }) => theme.greyColor}>
          How we do things <br />
          Differently
        </StyledHeading>
        <StyledDecoratedText>
          At Hawksman Real Estate we're not looking to change the world, we just
          think that things can be done better.
          <br /> Much better.
        </StyledDecoratedText>
        <StyledParagraph>
          From valuing your home accurately, preparing your marketing,
          conducting viewings to handling the sales process through to moving
          day.
          <br />
          One person, dedicated to making your move as seamless and stress free
          as possible.
          <br />
          No mixed messages, no going back on our advice,no game playing. Clear,
          concise, honest guidance.
        </StyledParagraph>
        <StyledSectionDivider>
          <StyledDividerWrapper>
            <StyledDecoratedText>
              See all of our handpicked <br /> properties
            </StyledDecoratedText>
            <StyledDecoratedButton>View Portfolio</StyledDecoratedButton>
          </StyledDividerWrapper>
          <StyledSectionIndicator />
          <StyledDividerWrapper>
            <StyledDecoratedText>
              Interested in putting your <br /> property for sale?
            </StyledDecoratedText>
            <StyledDecoratedButton>Contact us</StyledDecoratedButton>
          </StyledDividerWrapper>
        </StyledSectionDivider>
      </StyledWrapper>
    );
  }
}
