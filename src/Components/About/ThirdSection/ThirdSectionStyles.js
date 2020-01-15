import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.sectionDarkerWhite};
  padding-top: 30px;
  position: relative;
  overflow: hidden;
  padding-bottom: 10px;
  ${({ theme }) => theme.mq.tablet} {
    padding: 60px 0px;
  }
  ${({ theme }) => theme.mq.desktop} {
    padding: 50px 0px 120px 0px;
  }
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
  ${({ theme }) => theme.mq.tablet} {
    transform: translateX(50%);
    &::after {
      width: 100vw;
      height: 200%;
      left: 65vw;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
    }
  }
  ${({ theme }) => theme.mq.desktop} {
    transform: translateX(50%);
    &::after {
      left: 60vw;
    }
  }
`;
export const StyledImg = styled.img`
  max-width: 85%;
  display: block;
  margin: 0px auto;
  position: relative;
  z-index: 2;
  ${({ theme }) => theme.mq.tablet} {
    transform: scale(1.4);
  }
`;
export const StyledTextWrapper = styled.div`
  padding: 0px 20px;
  font-size: calc(${({ theme }) => theme.font.size.xs} * 0.95);
  font-family: ${({ theme }) => theme.font.family.Noto};
  text-align: justify;
  color: #858994;
  position: relative;
  ${({ theme }) => theme.mq.tablet} {
    ${({ tablet, theme }) =>
      tablet &&
      `
      width:50%;
      margin: 0px auto;
      font-size: calc(${theme.font.size.s} * 0.8);
      margin-top:-50px;
    `}
  }
`;
export const StyledDiv = styled.div`
  position: relative;
  margin-top: 40px;
  ${({ theme }) => theme.mq.tablet} {
    ${({ tablet }) =>
      tablet &&
      `
      display:flex;
    `}
    ${({ image }) =>
      image &&
      `
    padding-top:3%;
    `}
  }
`;
export const Wrapper = styled.div`
  padding: 60px 0px;
  background-color: white;
  ${({ theme }) => theme.mq.tablet} {
    background: transparent;
  }
`;
