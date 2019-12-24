import styled from "styled-components";
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
