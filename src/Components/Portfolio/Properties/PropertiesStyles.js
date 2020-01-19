import styled from "styled-components";

export const StyledDiv = styled.div`
  position: relative;
  padding-bottom: 240px;
  ${({ theme }) => theme.mq.tablet} {
    width: 95%;
    padding-bottom: 130px;
  }
`;
export const StyledPropertyWrapper = styled.div`
  width: 90%;
  margin: 60px auto;
  ${({ theme }) => theme.mq.desktop} {
    margin-left: 20px;
    width: 95%;
  }
  ${({ theme }) => theme.mq.desktopLarge} {
    margin-left: 20px;
    width: 105%;
  }
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
    ${({ theme }) => theme.font.size.mobileSwiperItemDescription} * 0.8
  );
  text-align: right;
  padding: 15px 25% 0px 0px;
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
  ${({ theme }) => theme.mq.tablet} {
    font-size: calc(${({ theme }) => theme.font.size.s} * 0.85);
    padding: 15px 0px 0px;
  }
`;
export const StyledSeparator = styled.span`
  color: black;
  margin: 0px 5px;
  display: inline-block;
`;
export const StyledButtonWrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    text-align: right;
    font-weight: bold;
  }
`;
