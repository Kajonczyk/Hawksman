import styled from "styled-components";
import { StyledDecoratedText } from "../../../Shared/StyledDecoratedText";

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
  height: 60px;
  width: 140px;
  text-align: right;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const PersonInfo = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.font.size.s};
  font-family: ${({ theme }) => theme.font.family.Playfair};
  ${({ role }) =>
    role &&
    `
    font-size: 1rem;
  opacity:0.5;
  `}
`;
