import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  padding: 20px;
`;
export const SwiperWrapper = styled.div`
  height: 160px;
  overflow: hidden;
  display: flex;
  margin: 0px auto;
  margin-top: 20px;
`;
export const SwiperItem = styled.div`
  width: 85%;
  margin: 0px auto;
  height: 160px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.swiperSlidesDecritpionColor};
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
    color: ${({ theme }) => theme.swiperSlidesDecritpionColor};
  }
`;
export const SwiperSlideIndicatorWrapper = styled.div`
  margin: 20px 0px 0px 20px;
  height: 160px;
  background-color: grey;
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
  background-color: ${({ theme }) => theme.swiperSlidesDecritpionColor};
  display: block;
  transform: translateY(${({ index }) => setIndicatorPosition(index)});
  transition: transform 0.2s;
`;
