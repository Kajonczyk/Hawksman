import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 100px 0px 0px 20px;
  display: flex;
  flex-direction: column;
  display: none;
  ${({ theme }) => theme.mq.tablet} {
    display: block;
  }
`;
export const StyledBox = styled.div`
  border: 1px solid ${({ theme }) => theme.greyColor};
  display: flex;
  flex-direction: column;
  width: 160px;
  padding: 10px 0px;
  margin-bottom: 20px;
`;
export const StyledHeading = styled.p`
  color: ${({ theme }) => theme.greyColor};
  font-size: 0.7rem;
  padding: 5px 15px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.font.family.Noto};
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
export const StyledList = styled.ul`
  padding: 0px;
  list-style: none;
`;
export const StyledListItem = styled.li`
  color: ${({ theme }) => theme.greyColor};
  font-size: 0.9rem;
  position: relative;
  padding: 10px 0px;
  margin-left: 40px;
  transition: margin 0.2s;
  &::before {
    content: "";
    height: 1px;
    width: 15px;
    position: absolute;
    left: -12%;
    top: 50%;
    transform: translate(-50%, -100%);
    background-color: black;
  }
  ${({ active, theme }) =>
    active &&
    `
    color: ${theme.decoratedText};
    margin-left:15px;
    &::before{
      background-color: ${theme.decoratedText}
    }
  `}
`;
