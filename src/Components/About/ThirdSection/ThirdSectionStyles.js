import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.sectionDarkerWhite};
  padding-top: 30px;
  position: relative;
`;
export const StyledImageWrapper = styled.div`
  &::after {
    content: "";
    width: 100%;
    height: 50%;
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    background-color: white;
  }
`;
export const StyledImg = styled.img`
  max-width: 85%;
  display: block;
  margin: 0px auto;
  position: relative;
  z-index: 2;
`;
export const StyledTextWrapper = styled.div`
  padding: 0px 20px;
  font-size: calc(${({ theme }) => theme.font.size.xs} * 0.95);
  font-family: ${({ theme }) => theme.font.family.Noto};
  text-align: justify;
  color: #858994;
  position: relative;
`;
export const StyledDiv = styled.div`
  position: relative;
  margin-top: 40px;
`;
export const Wrapper = styled.div`
  padding: 60px 0px;
  background-color: white;
`;
