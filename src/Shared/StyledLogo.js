import logo_hawksman from "../Images/logo_hawksman.png";
import styled from "styled-components";
export const StyledLogo = styled.div`
  height: 110px;
  width: 150px;
  background-image: url(${logo_hawksman});
  background-size: 75%;
  margin: 0px auto;
  background-repeat: no-repeat;
  background-position: center;
  position: ${({ active }) => (active ? "fixed" : "relative")};

  display: flex;
  justify-content: center;
  align-items: flex-end;
  transform: translateY(${({ active }) => (active ? "-25px" : "0px")})
    scale(${({ footer }) => (footer ? "0.85" : "1")});
  transition: transform 0.3s;
  margin: 0px auto;
  ${({ active }) =>
    active &&
    `
left:50%;
transform:translate(-50%,50%);
z-index: 9999;
transition: transform 0.3s;
`}
  ${({ theme }) => theme.mq.tablet} {
    height: 180px;
    width: 220px;
    ${({ active }) =>
      active &&
      `
      transform: translate(-50%,0%);
    `}
  }
`;
