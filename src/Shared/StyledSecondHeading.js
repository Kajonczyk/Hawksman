import styled from "styled-components";

export const StyledSecondHeading = styled.h2`
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
  font-size: ${({ theme }) => theme.font.size.m};
  padding: 10px 20px
  font-weight: lighter;
  line-height: 110%;
  text-align: center;
  color:white;
`;
