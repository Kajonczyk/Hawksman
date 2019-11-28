import styled from "styled-components";

export const StyledHeading = styled.h2`
    color: ${({ color }) => color};
    font-size: ${({ theme }) => theme.font.size.m}
    font-family: ${({ theme }) => theme.font.family.NotoSerif};
    font-weight: 100;
    padding: 60px 20px 50px;
    position:relative;
    ::before{
        content: "02";
        position:absolute;
        left:20px;
        top: 45px;
        height:5px;
        width:5px;
        font-size: ${({ theme }) => theme.font.size.headingSectionNumber};
        font-family: ${({ theme }) => theme.font.family.Noto};
        color: ${({ theme }) => theme.decoratedText};
    }

`;