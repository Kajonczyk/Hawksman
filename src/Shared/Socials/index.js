import styled from "styled-components";

import { Facebook } from "styled-icons/boxicons-logos/Facebook";
import { Instagram } from "styled-icons/boxicons-logos/Instagram";
import { Linkedin } from "styled-icons/boxicons-logos/Linkedin";
import { PinterestAlt } from "styled-icons/boxicons-logos/PinterestAlt";
import { Snapchat } from "styled-icons/boxicons-logos/Snapchat";
import { Twitter } from "styled-icons/boxicons-logos/Twitter";
import { Periscope } from "styled-icons/boxicons-logos/Periscope";

const iconSize = "20px";
const iconColor = ({ theme, footer }) =>
  footer ? theme.sectionDarkerWhite : theme.greyColor;

export const IconWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  padding: ${({ footer }) =>
    footer ? "40px 0px 40px 0px" : "0px 0px 40px 0px"};
  color: ${iconColor};
`;
export const StyledFacebook = styled(Facebook)`
  height: ${iconSize};
`;
export const StyledInstagram = styled(Instagram)`
  height: ${iconSize};
`;
export const StyledPeriscope = styled(Periscope)`
  height: ${iconSize};
`;
export const StyledLinkedin = styled(Linkedin)`
  height: ${iconSize};
`;
export const StyledSnapchat = styled(Snapchat)`
  height: ${iconSize};
`;
export const StyledPinterestAlt = styled(PinterestAlt)`
  height: ${iconSize};
`;
export const StyledTwitter = styled(Twitter)`
  height: ${iconSize};
`;
