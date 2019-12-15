import styled from "styled-components";
import { StyledDecoratedText } from "../../../Shared/StyledDecoratedText";
import eagle from "../../../Images/About/eagle.png";
export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.sectionDarkerWhite};
  background-image: url(${eagle});
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center right;
`;
export const StyledNumbersWrapper = styled.div`
  padding: 10px 20px 20px;
`;
export const StyledNumber = styled.span`
  font-size: ${({ theme }) => theme.font.size.m};
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
  color: ${({ theme }) => theme.decoratedText};
  display: block;
`;
export const StyledText = styled(StyledDecoratedText)`
  color: ${({ theme }) => theme.greyColor};
  padding: 5px 0px;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-family: ${({ theme }) => theme.font.family.Noto};
`;
