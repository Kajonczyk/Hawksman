import styled from "styled-components";

export const StyledDecoratedText = styled.p`
  color: ${({ theme }) => theme.decoratedText};
  padding: 0px 20px 20px;
  font-size: ${({ theme }) => theme.font.size.decoratedTextSize};
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
`;
