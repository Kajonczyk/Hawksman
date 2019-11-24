import styled from "styled-components";

export const SwiperWrapper = styled.div`
  display: flex;
  height: 500px;
`;
export const ItemWrapper = styled.div`
  display: flex;
`;
export const SwiperItem = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledImgWrapper = styled.div`
  height: 100%;
  position: relative;
`;
export const StyledImg = styled.img`
  height: 100%;
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
