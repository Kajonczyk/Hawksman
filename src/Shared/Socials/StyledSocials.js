import React from "react";
import {
  StyledFacebook,
  StyledInstagram,
  StyledLinkedin,
  StyledSnapchat,
  StyledPinterestAlt,
  StyledTwitter,
  StyledPeriscope,
  IconWrapper
} from "./index";

export const StyledSocials = ({ footer }) => {
  return (
    <IconWrapper footer={footer}>
      <StyledFacebook />
      <StyledInstagram />
      <StyledLinkedin />
      <StyledPeriscope />
      <StyledPinterestAlt />
      <StyledSnapchat />
      <StyledTwitter />
    </IconWrapper>
  );
};
