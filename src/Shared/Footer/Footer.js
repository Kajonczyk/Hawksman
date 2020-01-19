import React from "react";
import {
  StyledWrapper,
  StyledAddress,
  StyledLocationList,
  StyledDd,
  StyledLink,
  StyledDt,
  StyledCopyright,
  StyledDiv
} from "./FooterStyles";
import { StyledLogo } from "../StyledLogo";
import { StyledSocials } from "../Socials/StyledSocials";
import { StyledContent } from "../StyledContent";

const locationData = [
  {
    cityName: "Cobham",
    phoneNumber: "01111 234505",
    email: "email@example.com"
  },
  {
    cityName: "Oxshoot",
    phoneNumber: "04432 171431",
    email: "email@example.com"
  },
  {
    cityName: "Esher",
    phoneNumber: "01399 447342",
    email: "email@example.com"
  }
];
export const Footer = () => {
  return (
    <StyledWrapper>
      <StyledContent flex footer>
        <StyledDiv>
          <StyledLogo footer={true} />
          <StyledAddress>
            Some House, Some Bridge Road
            <br />
            Some, Some, TT17 GE4
          </StyledAddress>
          <StyledCopyright>© 2020 - All rights reserved.</StyledCopyright>
        </StyledDiv>
        <StyledDiv>
          <StyledLocationList>
            {locationData.map(item => (
              <li>
                <dl>
                  <StyledDt>{item.cityName}</StyledDt>
                  <br />
                  <StyledDd>
                    <StyledDt>{item.phoneNumber}</StyledDt>
                    <br />
                    <StyledLink href="#">{item.email}</StyledLink>
                  </StyledDd>
                </dl>
              </li>
            ))}
          </StyledLocationList>
          <StyledSocials footer={true} />
        </StyledDiv>
      </StyledContent>
    </StyledWrapper>
  );
};
