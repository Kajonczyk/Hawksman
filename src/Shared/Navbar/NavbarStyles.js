import styled, { createGlobalStyle } from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0px;
  z-index: 9998;
  width: 100%;
`;
export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 23px;
  background-color: ${({ activeScroll }) =>
    activeScroll ? "white" : "transparent"};
  box-shadow: ${({ activeScroll }) =>
    activeScroll ? "0px -5px 14px black;" : "none"};
  transition: background-color 0.2s;
  ${({ theme }) => theme.mq.desktop} {
    padding: 0px;
  }
`;
export const StyledNavBarItem = styled.p`
  font-family: ${({ theme }) => theme.font.family.Noto};
  font-weight: bold;
  text-transform: uppercase;
  transform: translateX(${({ active }) => (active ? "400px" : "0px")});
  color: ${({ activeScroll, theme }) =>
    activeScroll ? theme.greyColor : "white"}
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
  ${({ activeScroll }) =>
    activeScroll &&
    `
  background-color:#3c404a;
  &::after,&::before{
    background-color:#3c404a;
  }
  `}
`;
export const GlobalStyle = createGlobalStyle`
  body{
    height: ${({ active }) => (active ? "100vh" : "auto")};
    overflow: ${({ active }) => (active ? "hidden" : "visible")};
  }
`;
