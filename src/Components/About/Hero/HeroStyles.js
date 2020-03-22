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
  justify-content: center;
  padding-bottom: 60px;
  position: relative;
`;
export const CustomLogo = styled(StyledLogo)`
  margin: 50px auto;
  ${({ active }) =>
    active &&
    `
  transform: translate(-50%, 50%);
  `}
  ${({ theme }) => theme.mq.tablet} {
    margin: 120px auto 30px auto;
  }
`;

export const CustomParagraph = styled(StyledParagraph)`
  margin: 40px 20px;
  font-size: ${({ theme }) => theme.font.size.decoratedTextSize};
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.s};
    margin-top: 60px;
  }
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
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, -50%) rotate(-90deg);
`;
