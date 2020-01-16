import styled from "styled-components";

export const StyledButton = styled.button`
  height: 40px;
  width: 180px;
  border: 1px solid black;
  background-color: white;
  position: relative;
  margin: 20px;
  cursor: pointer;
  &::before,
  ::after {
    content: "";
    height: 1px;
    width: 10px;
    background-color: black;
    position: absolute;
    bottom: 50%;
    left: 0px;
  }
  &::after {
    left: calc(100% - 10px);
  }
  ${({ theme }) => theme.mq.tablet} {
    ${({ swiperButton }) =>
      swiperButton &&
      `
      margin: 20px 0px;
    `}
  }
  ${({ margin }) =>
    margin &&
    `
      margin: 30px 0px;
    `}
`;
