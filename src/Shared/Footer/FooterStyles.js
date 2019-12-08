import styled from "styled-components";

export const StyledWrapper = styled.div`
  min-height: 450px;
  background-color: ${({ theme }) => theme.greyColor};
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledAddress = styled.address`
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
  color: ${({ theme }) => theme.logoDescription};
  font-style: normal;
  font-size: ${({ theme }) => theme.font.size.footerSize};
  text-align: center;
  margin-bottom: 20px;
`;
export const StyledLocationList = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0px;
  font-family: ${({ theme }) => theme.font.family.Noto};
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
`;
export const StyledDt = styled.dt`
  color: ${({ theme }) => theme.logoDescription};

  font-weight: bold;
  text-transform: uppercase;
`;
export const StyledCopyright = styled.p`
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
  color: ${({ theme }) => theme.logoDescription};
  padding-bottom: 10px;
`;
