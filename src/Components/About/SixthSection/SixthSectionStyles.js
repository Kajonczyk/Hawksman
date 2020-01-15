import styled from "styled-components";

import { StyledDecoratedText } from "../../../Shared/StyledDecoratedText";
import house from "../../../Images/About/house.jpg";

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.sectionDarkerWhite};
  background-image: url(${house});
  background-size: 330px;
  background-position: center 40%;
  background-repeat: no-repeat;
  position: relative;
  padding-bottom: 300px;
  ${({ theme }) => theme.mq.tablet} {
    padding: 50px 0px 350px;
    background-size: 60%;
    background-position: center left;
  }
  ${({ theme }) => theme.mq.desktop} {
    background-size: 600px;
    background-position: 12% center;
  }
  ${({ theme }) => theme.mq.desktopLarge} {
    background-position: 18% center;
  }
`;
export const StyledText = styled(StyledDecoratedText)`
  font-size: calc(${({ theme }) => theme.font.size.xs} * 0.95);
  padding-bottom: 180px;
  ${({ grey }) =>
    grey &&
    `
  color: #858994;
  opacity: 0.8;
  padding: 20px;
  `}
  ${({ theme }) => theme.mq.tablet} {
    padding-bottom: 0px;
    ${({ grey, theme }) =>
      grey &&
      `
    font-size: calc(${theme.font.size.s} * 0.8);
  `}
  }
`;
export const StyledTextWrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    margin-left: 45%;
  }
`;
