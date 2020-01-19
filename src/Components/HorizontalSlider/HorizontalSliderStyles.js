import styled from "styled-components";

export const SwiperWrapper = styled.div`
  display: flex;
  min-height: 400px;
  position: relative;
  z-index: 1;
  margin-top: 50px;
  padding-bottom: 40px;
  ${({ theme }) => theme.mq.tablet} {
    padding-bottom: 60px;
  }
`;
export const ItemWrapper = styled.div`
  display: flex;
  margin: 0px auto;
`;
export const SwiperItem = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px auto;
`;
export const StyledImgWrapper = styled.div`
  position: relative;
  ${({ theme }) => theme.mq.tablet} {
    width: 80%;
    margin: 0px auto;
  }
  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
  }
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
    ${({ theme }) => theme.font.size.mobileSwiperItemDescription} * 0.9
  );
  font-family:  ${({ theme }) => theme.font.family.NotoSerif}
  position: absolute;
  text-align:right;
  bottom: -1px;
  line-height:50px;
  padding-right:15px;
  &::after{
    content: "";
    height:1px;
    width:40px;
    background-color: ${({ theme }) => theme.decoratedText};
    position:absolute;
    bottom:2px;
    right: 10px;
  }
  ${({ theme }) => theme.mq.tablet} {
    width:52%;
    height:90px;
    font-size: ${({ theme }) => theme.font.size.m}
    padding-right:25px;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    line-height:normal;

  }
  ${({ theme }) => theme.mq.desktop} {
    width:35%;
    height:120px;
    font-size: ${({ theme }) => theme.font.size.m}
    padding-right:25px;
    


  }
`;
export const StyledDecoratedText = styled.p`
  color: ${({ theme }) => theme.decoratedText};
  font-size: calc(
    ${({ theme }) => theme.font.size.mobileSwiperItemDescription}
  );
  text-align: right;
  padding: 15px 5% 0px 0px;
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
  ${({ theme }) => theme.mq.tablet} {
    padding-right: 10%;
    font-size: ${({ theme }) => theme.font.size.s};
  }
  ${({ theme }) => theme.mq.desktop} {
    padding-right: 0%;
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;
export const StyledLocalisationText = styled(StyledDecoratedText)`
  font-size: calc(
    ${({ theme }) => theme.font.size.mobileSwiperItemDescription} * 0.8
  );
`;
export const StyledSeparator = styled.span`
  color: black;
  margin: 0px;
  display: inline-block;
  ${({ theme }) => theme.mq.desktop} {
    padding-right: 5px;
  }
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
    default: {
      return;
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
  background-color: ${({ theme }) => theme.decoratedText};
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
    border-color: white;
    background-color: ${({ theme }) => theme.decoratedText};
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.decoratedText};
  }
`;
export const StyledPagination = styled.div`
  display: flex;
  position: relative;
  width: 200px;
`;
export const StyledButtonWrapper = styled.div`
  padding-top: 30px;
  ${({ theme }) => theme.mq.tablet} {
    width: 80%;
    margin: 0px auto;
  }
  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
  }
`;
