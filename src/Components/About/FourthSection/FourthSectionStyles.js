import styled from "styled-components";

import { StyledDecoratedText } from "../../../Shared/StyledDecoratedText";
import { StyledSectionIndicator } from "../../../Shared/StyledSectionIndicator";
export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.sectionDarkerWhite};
  padding: 20px 0px 60px;
  ${({ theme }) => theme.mq.tablet} {
    margin-top: -40px;
    padding-bottom: 90px;
  }
  ${({ theme }) => theme.mq.desktop} {
    margin-top: 0px;
    padding: 40px 0px 90px;
  }
`;
export const StyledText = styled(StyledDecoratedText)`
  font-size: calc(${({ theme }) => theme.font.size.xs} * 0.95);
  ${({ theme }) => theme.mq.tablet} {
    width: 80%;
    margin: 0px auto;
  }
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
