import styled from "styled-components";

import { StyledDecoratedText } from "../../../Shared/StyledDecoratedText";
import { StyledSectionIndicator } from "../../../Shared/StyledSectionIndicator";
export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.sectionDarkerWhite};
`;
export const StyledText = styled(StyledDecoratedText)`
  font-size: calc(${({ theme }) => theme.font.size.xs} * 0.95);
`;
export const StyledIndicator = styled(StyledSectionIndicator)`
  transform: rotate(90deg);
  margin: 60px auto;
  margin-top: 0px;
  z-index: 3000;
  width: 50px;

  &::before {
    background-color: ${({ theme }) => theme.decoratedText};
    left: 100%;
  }
`;
