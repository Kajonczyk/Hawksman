import styled from "styled-components";
import { KeyboardArrowDown } from "styled-icons/material/KeyboardArrowDown";
import { StyledLogo } from "../../../Shared/StyledLogo";

export const StyledWrapper = styled.div`
  height: 300px;
  background-color: ${({ theme }) => theme.greyColor};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  ${({ theme }) => theme.mq.tablet} {
    height: 400px;
  }
`;
export const StyledFilterLabel = styled.div`
  background-color: ${({ theme }) => theme.darkerGreyColor};
  width: 85%;
  height: 40px;
  text-transform: uppercase;
  line-height: 40px;
  color: ${({ theme }) => theme.sectionDarkerWhite};
  font-family: ${({ theme }) => theme.font.family.Noto};
  text-align: center;
  font-size: 11px;
  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;
export const StyledIcon = styled(KeyboardArrowDown)`
  height: 20px;
  width: 20px;
  color: ${({ theme }) => theme.decoratedText};
  margin-left: 5px;
  margin-top: -2px;
  transition: transform 0.25s;
  ${({ isActive }) =>
    isActive &&
    `
    transform: rotateX(-180deg);
    
  `}
`;
export const CustomLogo = styled(StyledLogo)`
  ${({ active }) =>
    active &&
    `
  transform: translate(-50%,60%);
  `}
  ${({ theme }) => theme.mq.tablet} {
    ${({ active }) =>
      active &&
      `
    transform: translate(-50%,20%);
  `}
  }
`;
