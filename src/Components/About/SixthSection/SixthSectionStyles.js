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
  padding-bottom: 200px;
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
`;
