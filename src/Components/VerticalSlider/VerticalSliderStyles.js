import styled from "styled-components";
import { KeyboardArrowUp } from "styled-icons/material/KeyboardArrowUp";
export const Wrapper = styled.div`
  height: 350px;
  display: flex;
  padding: 50px 20px 20px 20px;
  overflow: hidden;
  position: relative;
  max-width: 400px;
  margin: 0 auto;
  ${({ theme }) => theme.mq.desktop} {
    max-width: 500px;
    margin-left: calc(21% + 222px);
  }
`;
export const SwiperWrapper = styled.div`
  margin: 0px auto;
`;
export const SwiperItem = styled.div`
  margin: 0px auto;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.decoratedText};
  font-size: ${({ theme }) => theme.font.size.mobileSwiperItemDescription};
`;

export const SwiperNavigationWrapper = styled.ul`
  padding: 0px;
  list-style: none;
  height: 160px;
  width: 40px;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  flex-direction: column;
  ${({ theme }) => theme.mq.tablet} {
    padding-right: 20px;
  }
`;

export const SwiperNavigationNumbers = styled.li`
  height: 160px;
  text-align: center;
  margin-top: 15px;
  font-family: ${({ theme }) => theme.font.family.Playfair};
  font-size: calc(
    ${({ theme }) => theme.font.size.mobileSwiperItemDescription} / 1.2
  );
  &:nth-child(${({ index }) => index}) {
    color: ${({ theme }) => theme.decoratedText};
  }
  transition: color 0.4s;
`;
export const SwiperSlideIndicatorWrapper = styled.div`
  position: relative;
  margin: 20px 0px 0px 20px;
  height: 160px;
  background-color: grey;
  ${({ theme }) => theme.mq.tablet} {
    margin-right: 20px;
  }
`;

const setIndicatorPosition = index => {
  switch (index) {
    case 2: {
      return "calc(160px / 3)";
    }
    case 3: {
      return "calc(2*(160px/3))";
    }
    default: {
      return "0";
    }
  }
};
export const SwiperSlideIndicator = styled.span`
  height: calc(160px / 3);
  width: 1px;
  background-color: ${({ theme }) => theme.decoratedText};
  display: block;
  transform: translateY(${({ index }) => setIndicatorPosition(index)});
  transition: transform 0.2s;
`;
export const SwiperArrowUp = styled(KeyboardArrowUp)`
  height: 35px;
  padding: 6px;

  position: absolute;
  top: -20%;
  left: 0px;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  opacity: 0.5;
`;
export const SwiperArrowDown = styled(SwiperArrowUp)`
  transform: translate(-50%, -50%) rotateX(180deg);
  top: 120%;
`;
export const StyledP = styled.p`
  margin: 0px 25px;
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;
export const SwiperItemWrapper = styled.div`
  height: 160px;

  opacity: 0;
  transition: opacity 0.4s;
  &:nth-child(${({ index }) => index}) {
    opacity: 1;
    margin-top: 30px;
  }
`;
