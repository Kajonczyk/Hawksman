import styled from "styled-components";
export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.decoratedText};

  text-align: center;
  margin: 20px 0px 20px 0px;
  ${({ grey }) =>
    grey &&
    `
    margin:20px 0px 40px 0px;
    color: #858994;
    padding:0px 20px;
    font-family: 'Noto Serif', serif;
    font-size: .8rem;
  `}
  ${({ center }) =>
    center &&
    `
    margin: 0px auto;
    width: 66%;
  `}
`;
