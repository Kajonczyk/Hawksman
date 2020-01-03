import styled from "styled-components";
import bg_contact from "../../../Images/Contact/bgContact.jpg";
import { StyledSectionIndicator } from "../../../Shared/StyledSectionIndicator";
import { StyledLogo } from "../../../Shared/StyledLogo";
import { StyledParagraph } from "../../../Shared/StyledParagraph";

export const StyledWrapper = styled.div`
  height: 450px;
  background-image: url(${bg_contact});
  background-size: cover;
    background-position: center right
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly;
    position:relative;
`;
export const CustomSectionIndicator = styled(StyledSectionIndicator)`
  transform: rotate(-90deg);
  z-index: 3000;
  width: 100px;
  margin-top: 40px;
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, -50%) rotate(-90deg);
  &::before {
    background-color: ${({ theme }) => theme.decoratedText};
    left: 100%;
  }
`;
export const CustomLogo = styled(StyledLogo)`
  margin: 0px auto;
  margin-bottom: -60px;
  margin-top: -30px;
  transform: scale(0.9);
`;
