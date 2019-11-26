import styled from "styled-components";

export const SwiperWrapper = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  position: relative;
`;
export const ItemWrapper = styled.div`
  display: flex;
`;
export const SwiperItem = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledImgWrapper = styled.div`
  position: relative;
`;
export const StyledImg = styled.img`
  display: block;
  width: 100%;
`;
export const StyledItemDescription = styled.div`
  height: 50px;
  background-color: white;
  width: 80%;
  font-size: calc(
    ${({ theme }) => theme.font.size.mobileSwiperItemDescription} * 0.8
  );
  font-family:  ${({ theme }) => theme.font.family.NotoSerif}
  position: absolute;
  text-align:right;
  bottom: 0;
  &::after{
    content: "";
    height:1px;
    width:40px;
    background-color: ${({ theme }) => theme.swiperSlidesDecritpionColor};
    position:absolute;
    bottom:2px;
    right: 10px;
  }
`;
export const StyledDecoratedText = styled.p`
  color: ${({ theme }) => theme.swiperSlidesDecritpionColor};
  font-size: calc(
    ${({ theme }) => theme.font.size.mobileSwiperItemDescription}
  );
  text-align: right;
  padding: 15px 25% 0px 0px;
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
`;
export const StyledLocalisationText = styled(StyledDecoratedText)`
  font-size: calc(
    ${({ theme }) => theme.font.size.mobileSwiperItemDescription} * 0.8
  );
`;
export const StyledSeparator = styled.p`
  color: black;
  margin: 0px;
  display: inline-block;
`;
export const StyledPaginationWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  top: -25px;
  justify-content: center;
`;
export const StyledPaginationLine = styled.div`
  height: 8px;

  border: 0.5px solid grey;
  margin: 0px 25px;
  background-color: grey;
  color: red;
`;

const setIndicatorPosition = index => {
  switch (index) {
    case 1: {
      return "calc(100% / 4 + 24.75px)";
    }
    case 2: {
      return "calc(100% / 4 + 75.75px)";
    }
    case 3: {
      return "calc(100% / 4 + 126.75px)";
    }
    case 4: {
      return "calc(100% / 4 + 177.75px)";
    }
  }
};
export const StyledPaginationIndicator = styled.div`
  position: absolute;
  width: 1px;
  top: 0px;
  left: 0px;
  transform: translate(${({ index }) => setIndicatorPosition(index)}, 0);
  height: 35px;
  background-color: ${({ theme }) => theme.swiperSlidesDecritpionColor};
  z-index: 2;
  transition: transform 0.2s;
  &::before {
    content: "";
    position: absolute;
    top: -6px;
    left: -3.515px;
    height: 4px;
    width: 4px;
    padding: 2px;
    border: 2px solid;
    transform: rotate(45deg);
    border-color: ${({ theme }) => theme.swiperSlidesDecritpionColor};
  }
`;
export const StyledPagination = styled.div`
  display: flex;
  position: relative;
  width: 200px;
`;
