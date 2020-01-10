import styled from "styled-components";

export const StyledDecoratedText = styled.p`
  color: ${({ theme }) => theme.decoratedText};
  padding: 0px 20px 20px;
  font-size: ${({ theme }) => theme.font.size.decoratedTextSize};
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
  ${({ theme }) => theme.mq.tablet} {
    ${({ big, theme }) =>
      big &&
      `
    font-size: ${theme.font.size.s}
    `}
    ${({ center }) =>
      center &&
      `
        margin: 0px auto;
        width: 66%;
    `}
  }
`;
