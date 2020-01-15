import styled from "styled-components";

export const StyledListItem = styled.li`
  padding: 20px;
  text-align: center;
  ${({ theme }) => theme.mq.desktop} {
    padding: 10px;
    z-index: 9999;
  }
`;

export const StyledListItemLink = styled.a`
  color: ${({ theme }) => theme.greyColor};
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.size.m};

  ${({ desktop, theme }) =>
    desktop &&
    `
  color: white
  font-size: 0.8rem
  font-weight:bold;
  font-family: ${theme.font.family.Noto};
  padding: 23px 0px;
  cursor:pointer;

  `}
  ${({ activeScroll, theme }) =>
    activeScroll &&
    `
    color: ${theme.lighterGreyColor};
  `}
  ${({ active }) =>
    active &&
    `
  color:#d7a27e;
  `}
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0px;
  ${({ flex }) =>
    flex &&
    `
    display:flex;
  `}
`;
