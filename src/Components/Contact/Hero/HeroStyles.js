import styled from "styled-components";
import bg_contact from "../../../Images/Contact/bgContact.jpg";
import { StyledSectionIndicator } from "../../../Shared/StyledSectionIndicator";
import { StyledLogo } from "../../../Shared/StyledLogo";

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
  ${({ theme }) => theme.mq.tablet} {
    height:600px;
  }
`;
export const StyledDiv = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  margin-bottom: 20px;
  margin-top: -30px;
  ${({ active }) =>
    active &&
    `
transform: translate(-50%,20%);
`}
  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 80px;
    ${({ active }) =>
      active &&
      `
      
    transform: translate(-50%,20%)!important;
  `}
  }
`;
