import React from "react";
import {
  StyledWrapper,
  StyledAddress,
  StyledLocationList,
  StyledDd,
  StyledLink,
  StyledDt,
  StyledCopyright
} from "./FooterStyles";
import { StyledLogo } from "../StyledLogo";
import { StyledSocials } from "../Socials/StyledSocials";

const locationData = [
  {
    cityName: "Cobham",
    phoneNumber: "01932 505505",
    email: "cobham@hawksman.com"
  },
  {
    cityName: "Oxshoot",
    phoneNumber: "01372 237800",
    email: "oxshott@hawksman.com"
  },
  {
    cityName: "Esher",
    phoneNumber: "01372 235135",
    email: "esher@hawksman.com"
  }
];
export const Footer = () => {
  return (
    <StyledWrapper>
      <StyledLogo footer={true} />
      <StyledAddress>
        Coveham House, Downside Bridge Road
        <br />
        Cobham, Surrey, KT11 3EP
      </StyledAddress>
      <StyledLocationList>
        {locationData.map(item => (
          <li>
            <dl>
              <StyledDt>{item.cityName}</StyledDt>
              <br />
              <StyledDd>
                {item.phoneNumber}
                <br />
                <StyledLink href="#">{item.email}</StyledLink>
              </StyledDd>
            </dl>
          </li>
        ))}
      </StyledLocationList>
      <StyledSocials footer={true} />
      <StyledCopyright>© 2019 - All rights reserved.</StyledCopyright>
    </StyledWrapper>
  );
};
