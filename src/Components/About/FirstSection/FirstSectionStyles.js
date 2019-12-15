import styled from "styled-components";
import { StyledDecoratedText } from "../../../Shared/StyledDecoratedText";

import { Phone } from "styled-icons/feather/Phone";
import { Mail } from "styled-icons/feather/Mail";
export const StyledWrapper = styled.div`
  min-height: 300px;
  background-color: ${({ theme }) => theme.greyColor};
  position: relative;
`;
export const CustomDecoratedText = styled(StyledDecoratedText)`
  font-size: 0.9rem;
  font-family: ${({ theme }) => theme.font.family.Noto};
  padding-bottom: 80px;
`;
export const StyledPortrait = styled.div`
  height: 250px;
  width: 100%;
  position: relative;
  background-color: #343841;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const StyledImg = styled.img`
  height: 270px;
  transform: translateY(-20px);
  max-width: 100%;
`;
export const StyledPortaitInfo = styled.div`
  position: absolute;
  left: 0%;
  bottom: 0%;
  background-color: ${({ theme }) => theme.greyColor};
  height: 70px;
  width: 140px;
  text-align: right;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  &::before {
    content: "";
    height: 3px;
    width: 50px;
    position: absolute;
    left: 50%;
    bottom: 1.5px;
    transform: translate(-50%, -0%);

    background-color: ${({ theme }) => theme.decoratedText};
  }
`;
export const PersonInfo = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.font.size.s};
  font-family: ${({ theme }) => theme.font.family.Playfair};
  ${({ role }) =>
    role &&
    `
    font-size: 0.9rem;
  opacity:0.5;
  `}
`;
export const StyledDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 110px;
  margin-top: 20px;
`;
export const StyledIconWrapper = styled.div`
  display: flex;
  padding: 5px 0px;
`;
export const StyledPhoneIcon = styled(Phone)`
  height: 25px;
  width: 25px;
  color: white;
`;
export const StyledMailIcon = styled(Mail)`
  height: 25px;
  width: 25px;
  color: white;
`;
export const StyledIconText = styled(StyledDecoratedText)`
  font-size: 0.7rem;
  padding-top: 3px;
`;
