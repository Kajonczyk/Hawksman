import styled from "styled-components";
import { StyledButton } from "../../../Shared/StyledButton";
export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.sectionDarkerWhite};
  padding: 20px 0px;
  height: 750px;
  width: 100%;
  position: relative;
`;
export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.greyColor};
  padding: 20px;
  font-size: calc(${({ theme }) => theme.font.size.decoratedTextSize} * 0.9);
  font-family: ${({ theme }) => theme.font.family.Noto};
`;
export const StyledSectionDivider = styled.div`
  height: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: -200px;
  z-index: 1000;
  width: 80%;
  transform: translate(-50%, 0%);
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
