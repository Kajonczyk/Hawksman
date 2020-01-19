import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
export const CustomStyledContent = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    max-width: 1024px;
    margin: 0px auto;
    overflow: hidden;
  }
`;
