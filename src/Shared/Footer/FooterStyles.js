import styled from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:nth-child(2) {
      align-items: flex-start;
      padding-left: 10%;
      margin-left: 10%;
    }
    &:nth-child(1) {
      margin-top: -30px;
      margin-right: 10%;
    }
  }
`;
export const StyledWrapper = styled.div`
  min-height: 450px;
  background-color: ${({ theme }) => theme.greyColor};
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    background-image: linear-gradient(
      90deg,
      ${({ theme }) => theme.greyColor} 50%,
      ${({ theme }) => theme.darkerGreyColor} 50%
    );
    padding-bottom: 20px;
  }
`;
export const StyledAddress = styled.address`
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
  color: ${({ theme }) => theme.logoDescription};
  font-style: normal;
  font-size: ${({ theme }) => theme.font.size.footerSize};
  text-align: center;
  margin-bottom: 20px;
  ${({ theme }) => theme.mq.tablet} {
    margin-top: -10px;
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;
export const StyledLocationList = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0px;
  font-family: ${({ theme }) => theme.font.family.Noto};
  ${({ theme }) => theme.mq.tablet} {
    text-align: left;
  }
`;
export const StyledDd = styled.dd`
  margin: 0px;
  color: ${({ theme }) => theme.decoratedText};
  font-size: ${({ theme }) => theme.font.size.footerSize};
  line-height: 120%;
`;
export const StyledLink = styled.a`
  color: ${({ theme }) => theme.decoratedText};
  text-decoration: none;
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;
export const StyledDt = styled.dt`
  color: ${({ theme }) => theme.logoDescription};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.footerSize};
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xs};
    font-weight: normal;
  }
`;
export const StyledCopyright = styled.p`
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
  color: ${({ theme }) => theme.logoDescription};
  padding-bottom: 10px;
  text-align: center;
`;
