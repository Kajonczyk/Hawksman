import styled from "styled-components";

export const StyledSectionIndicator = styled.div`
  width: 120px;
  height: 1px;
  background-color: ${({ theme }) => theme.decoratedText};
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    height: 13px;
    width: 13px;
    background-color: white;
    border: 2px solid ${({ theme }) => theme.decoratedText};
    z-index: 9999;
  }
`;
