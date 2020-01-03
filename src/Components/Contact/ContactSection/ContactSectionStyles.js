import styled from "styled-components";
import { StyledParagraph } from "../../../Shared/StyledParagraph";

export const StyledWrapper = styled.div`
  background-color: #f8f7f6;

  padding: 80px 0px 230px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const CustomParagraph = styled(StyledParagraph)`
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
  font-size: ${({ theme }) => theme.font.size.decoratedTextSize};

  text-align: center;
  line-height: 30px;
  ${({ grey }) =>
    grey &&
    `
  line-height:normal;
  font-size: 0.9rem

  `}
`;
