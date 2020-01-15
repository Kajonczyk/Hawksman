import styled from "styled-components";
export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.sectionDarkerWhite};
  padding: 20px 0px 200px 0px;
  width: 100%;
  position: relative;
  ${({ theme }) => theme.mq.tablet} {
    padding-bottom: 100px;
  }
`;
export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.greyColor};
  padding: 20px 20px 150px 20px;
  font-size: calc(${({ theme }) => theme.font.size.decoratedTextSize} * 0.9);
  font-family: ${({ theme }) => theme.font.family.Noto};
  ${({ theme }) => theme.mq.tablet} {
    ${({ center }) =>
      center &&
      `
    margin: 0px auto;
    width: 66%;
  `}
  }
  ${({ theme }) => theme.mq.desktop} {
    padding-right: 30%;
  }
`;
