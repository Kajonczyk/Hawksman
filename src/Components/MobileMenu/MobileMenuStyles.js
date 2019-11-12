import styled from "styled-components";

export const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 0px auto;
  top: 0px;
  justify-content: space-between;
  align-items: center;
`;
export const StyledDiv = styled.div`
  height: 50px;
  background-color: red;
  display: flex;
  align-items: center;
`;
export const StyledListItem = styled.li`
  padding: 20px;
  text-align: center;
`;
export const StyledListItemLink = styled.a`
  color: ${({ theme }) => theme.mobileMenuListItemsColor};
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.size.m};
`;
export const StyledUl = styled.ul`
  list-style: none;
  padding: 0px;
`;
