import styled from "styled-components";
import heroImage from "../../../Images/About/heroImage.png";
import { StyledLogo } from "../../../Shared/StyledLogo";
import { StyledParagraph } from "../../../Shared/StyledParagraph";
import { StyledSectionIndicator } from "../../../Shared/StyledSectionIndicator";

export const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.greyColor};
  background-image: url(${heroImage});
  background-position: center top;
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CustomLogo = styled(StyledLogo)`
  margin: 0px auto;
  ${({ active }) =>
    active &&
    `
  transform: translate(-50%, 50%);
  `}
`;
export const LineBreak = styled.div`
  height: ${({ height }) => height}px;
`;
export const CustomParagraph = styled(StyledParagraph)`
  margin: 10px 20px;
  font-size: ${({ theme }) => theme.font.size.decoratedTextSize};
`;
export const CustomSectionIndicator = styled(StyledSectionIndicator)`
  transform: rotate(-90deg);
  z-index: 3000;
  width: 50px;
  margin-top: 40px;
  &::before {
    background-color: ${({ theme }) => theme.decoratedText};
    left: 100%;
  }
`;
