import React from "react";
import { StyledHeading } from "../../../Shared/StyledHeading";
import { StyledDecoratedText } from "../../../Shared/StyledDecoratedText";
import { StyledContent } from "../../../Shared/StyledContent";
import {
  StyledNumber,
  StyledNumbersWrapper,
  StyledText,
  StyledWrapper,
  StyledListWrapper
} from "./SecondSectionStyles";
export const SecondSection = () => {
  return (
    <StyledWrapper>
      <StyledContent flex column>
        <StyledHeading sectionNumber="03">Who we are</StyledHeading>>
        <StyledListWrapper>
          <StyledDecoratedText big>
            A new kind of estate agent. You get a quality service 100% of the
            time. We don’t hire ‘door openers’ for weekend viewings.
          </StyledDecoratedText>
          <StyledNumbersWrapper>
            <StyledNumber>1</StyledNumber>
            <StyledText>
              You get an experienced member of the team showing your property
              every time someone goes to see it.
            </StyledText>
          </StyledNumbersWrapper>
          <StyledNumbersWrapper>
            <StyledNumber>2</StyledNumber>
            <StyledText>
              There are no hard and fast rules or tactics to sell a property,
              because each property is different.
            </StyledText>
          </StyledNumbersWrapper>
          <StyledNumbersWrapper>
            <StyledNumber>3</StyledNumber>
            <StyledText>
              Focusing on quality of service, attention to detail and clear,
              transparent advice. We are a completely personal service where
              each client and project is dealt with entirely on its own
              characteristics.
            </StyledText>
          </StyledNumbersWrapper>
          <StyledNumbersWrapper>
            <StyledNumber>4</StyledNumber>
            <StyledText>End to end service.</StyledText>
          </StyledNumbersWrapper>
        </StyledListWrapper>
      </StyledContent>
    </StyledWrapper>
  );
};
