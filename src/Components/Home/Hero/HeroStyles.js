import styled from "styled-components";
import bg_hero from "../../../Images/Hero/bg_hero.jpg";

export const StyledWrapper = styled.section`
  background-image: url(${bg_hero});
  background-position: center top;
  background-size: cover;
  color: white;
  position: ${({ fixed }) => (fixed ? "fixed" : "relative")};
  overflow: hidden;
  min-height: 100vh;
  width: 100%;
`;
export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 23px;
`;
export const StyledNavBarItem = styled.p`
  font-family: ${({ theme }) => theme.font.family.Noto};
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  transform: translateX(${({ active }) => (active ? "400px" : "0px")});
  transition: transform 0.2s;
`;
export const StyledMenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9999;
`;
export const StyledHamburgerMenu = styled.p`
  width: 22px;
  height: 2px;
  background-color: ${({ active }) => (active ? "grey" : "white")};
  z-index: 9999;
  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: ${({ active }) => (active ? "grey" : "white")};
    height: 2px;
    width: 22px;
  }
  &::after {
    top: 13px;
  }
  &::before {
    top: -1px;
  }
`;

export const StyledLogoDescription = styled(StyledNavBarItem)`
  color: ${({ theme }) => theme.logoDescription};
`;
export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.decoratedText};
  text-transform: uppercase;
  text-align: center;
  margin: 20px 0px 20px 0px;
  ${({ grey }) =>
    grey &&
    `
  margin:20px 0px 40px 0px;
  color: #858994;
  padding:0px 20px;
  font-family: 'Noto Serif', serif;
  text-transform: none;
  font-size: .8rem;
  `}
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
