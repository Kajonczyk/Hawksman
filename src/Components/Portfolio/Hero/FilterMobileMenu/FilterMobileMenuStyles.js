import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 20px 0px;
  background-color: ${({ theme }) => theme.darkerGreyColor};
  position: relative;
  z-index: 2;
`;
export const StyledDropdownWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: left;
`;
export const StyledDropdownContent = styled.div`
  text-transform: none;
  color: ${({ theme }) => theme.lighterGreyColor};
  width: 50%;
`;
export const StyledOptionLabel = styled.p`
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  padding-left: 20px;
`;
export const StyledParagraph = styled.p`
  cursor: pointer;
`;
