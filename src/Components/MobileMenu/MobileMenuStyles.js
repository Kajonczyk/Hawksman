import styled from "styled-components";
import { Facebook } from "styled-icons/boxicons-logos/Facebook";
import { Instagram } from "styled-icons/boxicons-logos/Instagram";
import { Linkedin } from "styled-icons/boxicons-logos/Linkedin";
import { PinterestAlt } from "styled-icons/boxicons-logos/PinterestAlt";
import { Snapchat } from "styled-icons/boxicons-logos/Snapchat";
import { Twitter } from "styled-icons/boxicons-logos/Twitter";
import { Periscope } from "styled-icons/boxicons-logos/Periscope";

const iconSize = "20px";
const iconColor = "#3c404a";
export const StyledFacebook = styled(Facebook)`
  height: ${iconSize};

  color: ${iconColor};
`;
export const StyledInstagram = styled(Instagram)`
  height: ${iconSize};
  color: ${iconColor};
`;
export const StyledPeriscope = styled(Periscope)`
  height: ${iconSize};
  color: ${iconColor};
`;
export const StyledLinkedin = styled(Linkedin)`
  height: ${iconSize};
  color: ${iconColor};
`;
export const StyledSnapchat = styled(Snapchat)`
  height: ${iconSize};
  color: ${iconColor};
`;
export const StyledPinterestAlt = styled(PinterestAlt)`
  height: ${iconSize};
  color: ${iconColor};
`;
export const StyledTwitter = styled(Twitter)`
  height: ${iconSize};
  color: ${iconColor};
`;
export const StyledWrapper = styled.div`
  height: ${({ active }) => (active ? "100vh" : "0")};
  opacity: ${({ active }) => (active ? "1" : "0")};
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 0px auto;
  top: 0px;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: height 0.2s, opacity 0s;
  overflow: hidden;
`;
export const StyledDiv = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  padding-bottom: 40px;
`;
export const StyledListItem = styled.li`
  padding: 20px;
  text-align: center;
`;
export const StyledListItemLink = styled.a`
  color: ${({ theme }) => theme.mobileMenuListItemsColor};
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.size.m};
`;
export const StyledUl = styled.ul`
  list-style: none;
  padding: 0px;
`;
