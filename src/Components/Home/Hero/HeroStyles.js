import styled from "styled-components";
import bg_hero from "../../../Images/Hero/bg_hero.jpg";
import { StyledParagraph as StyledP } from "../../../Shared/StyledParagraph";

export const StyledWrapper = styled.section`
  background-image: url(${bg_hero});
  background-position: center top;
  background-size: cover;
  color: white;
  min-height: 100vh;
  width: 100%;
  padding: 100px 0px 40px;
  ${({ theme }) => theme.mq.tablet} {
    padding-bottom: 60px;
  }
`;
export const StyledNavBarItem = styled.p`
  font-family: ${({ theme }) => theme.font.family.Noto};
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  transform: translateX(${({ active }) => (active ? "400px" : "0px")});
  transition: transform 0.2s;
`;

export const StyledLogoDescription = styled(StyledNavBarItem)`
  color: ${({ theme }) => theme.logoDescription};

  ${({ theme }) => theme.mq.desktop} {
    font-size: calc(${({ theme }) => theme.font.size.xs} * 0.85);
  }
`;

export const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
  font-size: ${({ theme }) => theme.font.size.m};
  padding: 60px 0px 40px 25px;
  font-weight: lighter;
  line-height: 110%;
  max-width: 400px;
  margin: 0px auto;
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: ${({ theme }) => theme.font.size.xl};
    margin-top: 40px;
  }
  ${({ theme }) => theme.mq.desktop} {
    padding-bottom: 20px;
    padding-left: 0px;
    transform: translateX(-60px);
  }
`;

export const StyledSecondHeading = styled.h2`
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
  font-size: ${({ theme }) => theme.font.size.m};
  padding: 10px 40px
  font-weight: lighter;
  line-height: 110%;
  text-align: center;
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;
export const StyledParagraph = styled(StyledP)`
  font-size: ${({ theme }) => theme.font.size.xs};
  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
  ${({ theme }) => theme.mq.tablet} {
    font-size: calc(${({ theme }) => theme.font.size.s} * 0.8);
    padding: 0px 20%;
  }
`;
