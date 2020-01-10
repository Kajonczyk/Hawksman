import React from "react";
import styled from "styled-components";
import { StyledButton } from "./StyledButton";
import { StyledSectionIndicator } from "./StyledSectionIndicator";
import { StyledDecoratedText } from "./StyledDecoratedText";
import { StyledContent } from "./StyledContent";
import history from "../Utils/history";
const changeURL = url => {
  history.push(url);
};
export const StyledFeatures = () => {
  return (
    <StyledSectionDivider>
      <StyledDividerWrapper>
        <StyledDecoratedText>
          See all of our handpicked <br /> properties
        </StyledDecoratedText>
        <StyledDecoratedButton onClick={() => changeURL("/portfolio")}>
          View Portfolio
        </StyledDecoratedButton>
      </StyledDividerWrapper>
      <StyledSectionIndicator features />
      <StyledDividerWrapper>
        <StyledDecoratedText>
          Interested in putting your <br /> property for sale?
        </StyledDecoratedText>
        <StyledDecoratedButton onClick={() => changeURL("/contact")}>
          Contact us
        </StyledDecoratedButton>
      </StyledDividerWrapper>
    </StyledSectionDivider>
  );
};

export const StyledSectionDivider = styled.div`
  height: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: -150px;
  z-index: 1000;
  width: 80%;
  transform: translate(-50%, 0%);
  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    height: 300px;
    max-width: 1024px;
  }
`;
export const StyledDividerWrapper = styled.div`
  text-align: center;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const StyledDecoratedButton = styled(StyledButton)`
  border-color: ${({ theme }) => theme.decoratedText};
  color: ${({ theme }) => theme.decoratedText};
  height: 40px;
  width: 120px;
  margin-top: 10px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.Noto};
  font-size: calc(${({ theme }) => theme.font.size.decoratedTextSize} * 0.7);
  font-weight: bold;

  &::before,
  ::after {
    background-color: ${({ theme }) => theme.decoratedText};
  }
`;
