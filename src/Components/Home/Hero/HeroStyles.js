import styled from "styled-components";
import bg_hero from "../../../Images/Hero/bg_hero.jpg";
export const StyledWrapper = styled.section`
  background-image: url(${bg_hero});
  background-position: center top;
  background-size: cover;
  color: white;
  // position: ${({ fixed }) => (fixed ? "fixed" : "relative")};
  // overflow: hidden;
  min-height: 100vh;
  width: 100%;
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
`;

export const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
  font-size: ${({ theme }) => theme.font.size.m};
  padding: 60px 0px 40px 25px;
  font-weight: lighter;
  line-height: 110%;
`;
export const StyledSecondHeading = styled.h2`
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
  font-size: ${({ theme }) => theme.font.size.m};
  padding: 10px 40px
  font-weight: lighter;
  line-height: 110%;
  text-align: center;
`;
