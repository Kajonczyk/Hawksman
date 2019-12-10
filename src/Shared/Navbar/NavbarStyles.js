import styled, { createGlobalStyle } from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0px;
  z-index: 9999;
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
export const GlobalStyle = createGlobalStyle`
  body{
    height: ${({ active }) => (active ? "100vh" : "auto")};
    overflow: ${({ active }) => (active ? "hidden" : "visible")};
  }
`;
