import styled from "styled-components";
import { StyledDecoratedText } from "../../../Shared/StyledDecoratedText";
import eagle from "../../../Images/About/eagle.png";
export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.sectionDarkerWhite};
  background-image: url(${eagle});
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center right;
  ${({ theme }) => theme.mq.tablet} {
    background-position: -10% center;
    background-size: 50%;
  }
  ${({ theme }) => theme.mq.desktop} {
    background-size: 600px;
    background-position: 20% center;
  }
`;
export const StyledNumbersWrapper = styled.div`
  padding: 10px 20px 20px;
  ${({ theme }) => theme.mq.tablet} {
    flex-grow: 1;
    width: 49%;
  }
`;
export const StyledNumber = styled.span`
  font-size: ${({ theme }) => theme.font.size.m};
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
  color: ${({ theme }) => theme.decoratedText};
  display: block;
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.l};
  }
`;
export const StyledText = styled(StyledDecoratedText)`
  color: ${({ theme }) => theme.greyColor};
  padding: 5px 0px;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-family: ${({ theme }) => theme.font.family.Noto};
  ${({ theme }) => theme.mq.tablet} {
  }
`;

export const StyledListWrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 40%;
  }
`;
export const StyledContent = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    max-width: 1024px;
    margin: 0px auto;
  }
`;
