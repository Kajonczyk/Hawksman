import styled from "styled-components";
import { KeyboardArrowUp } from "styled-icons/material/KeyboardArrowUp";

export const SwiperWrapper = styled.div`
  margin: 0px auto;
  overflow: hidden;
`;
export const StyledDiv = styled.div`
  display: -webkit-box;
  width: 100%;
  margin-top: 10px;
`;
export const SwiperItem = styled.div`
  margin: 0px auto;
  height: 140px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.decoratedText};
  font-size: calc(
    ${({ theme }) => theme.font.size.mobileSwiperItemDescription} * 0.9
  );
  width: auto;
`;

export const SwiperNavigationWrapper = styled.ul`
  padding: 0px;
  list-style: none;
  margin: 0px 20px;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const SwiperNavigationNumbers = styled.li`
  height: 30px;
  text-align: center;
  margin-top: 13px;
  width: 33.34%;
  color: ${({ theme }) => theme.sectionDarkerWhite};
  opacity: 0.5;
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
  font-size: calc(
    ${({ theme }) => theme.font.size.mobileSwiperItemDescription} * 0.6
  );
  &:nth-child(${({ index }) => index}) {
    color: ${({ theme }) => theme.decoratedText};
    font-size: calc(
      ${({ theme }) => theme.font.size.mobileSwiperItemDescription} * 0.8
    );
    margin: 10px 0px;
    opacity: 1;
  }
  transition: color 0.2s, opacity 0.2s, font-size 0.1s;
  text-align: left;
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xs};
    margin-top: 11px;
  }
`;

export const SwiperSlideIndicatorWrapper = styled.div`
  position: relative;
  margin: 0px 20px;
  height: 1px;
  background-color: grey;
`;
export const StyledNumber = styled.p`
  display: block;
  color: ${({ theme }) => theme.sectionDarkerWhite};
  font-size: calc(
    ${({ theme }) => theme.font.size.mobileSwiperItemDescription} * 0.5
  );

  text-align: left;
`;

const setIndicatorPosition = index => {
  switch (index) {
    case 2: {
      return "calc(3 * 33.3%)";
    }
    case 3: {
      return "calc(3 * 66.6%)";
    }
    default: {
      return "0";
    }
  }
};
export const SwiperSlideIndicator = styled.span`
  height: 1px
  width: calc(100% / 3);
  background-color: ${({ theme }) => theme.decoratedText};
  display: block;
  transform: translateX(${({ index }) => setIndicatorPosition(index)});
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

export const SwiperItemWrapper = styled.div`
  transition: opacity 0.4s;
  margin: 0px 20px;
  text-align: justify;
  justify-content: center;
  width: 100%;
  padding: 0px 40px 0px 0px;
  &:nth-child(${({ index }) => index}) {
    opacity: 1;
    margin-top: 30px;
  }
`;
