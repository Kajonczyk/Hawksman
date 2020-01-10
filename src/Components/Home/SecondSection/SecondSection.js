import React, { Component } from "react";
import { StyledWrapper, StyledParagraph } from "./SecondSectionStyles";
import { StyledHeading } from "../../../Shared/StyledHeading";
import { StyledDecoratedText } from "../../../Shared/StyledDecoratedText";
import { StyledFeatures } from "../../../Shared/StyledFeatures";
import { StyledContent } from "../../../Shared/StyledContent";

export class SecondSection extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledContent>
          <StyledHeading
            color={({ theme }) => theme.greyColor}
            sectionNumber="02"
          >
            How we do things <br />
            Differently
          </StyledHeading>
          <StyledDecoratedText big center>
            At Hawksman Real Estate we're not looking to change the world, we
            just think that things can be done better.
            <br /> Much better.
          </StyledDecoratedText>
          <StyledParagraph center>
            From valuing your home accurately, preparing your marketing,
            conducting viewings to handling the sales process through to moving
            day.
            <br />
            One person, dedicated to making your move as seamless and stress
            free as possible.
            <br />
            No mixed messages, no going back on our advice,no game playing.
            Clear, concise, honest guidance.
          </StyledParagraph>
          <StyledFeatures />
        </StyledContent>
      </StyledWrapper>
    );
  }
}
