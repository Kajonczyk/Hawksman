import styled from "styled-components";

export const StyledDiv = styled.div`
  position: relative;
  padding-bottom: 180px;
`;
export const StyledPropertyWrapper = styled.div`
  width: 90%;
  margin: 60px auto;
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
    background-color: ${({ theme }) => theme.decoratedText};
    position:absolute;
    bottom:2px;
    right: 10px;
  }
`;
export const StyledDecoratedText = styled.p`
  color: ${({ theme }) => theme.decoratedText};
  font-size: calc(
    ${({ theme }) => theme.font.size.mobileSwiperItemDescription} * 0.8
  );
  text-align: right;
  padding: 15px 25% 0px 0px;
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
`;
export const StyledSeparator = styled.p`
  color: black;
  margin: 0px 5px;
  display: inline-block;
`;
