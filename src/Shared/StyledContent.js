import styled from "styled-components";

export const StyledContent = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    max-width: 1024px;
    margin: 0px auto;
    ${({ flex }) =>
      flex &&
      `
        display:flex;
    `}
    ${({ column }) =>
      column &&
      `
        flex-direction:column;
    `}
    ${({ center }) =>
      center &&
      `
        align-items:center;
    `}
    ${({ spaceBetween }) =>
      spaceBetween &&
      `
      justify-content: space-between;
    `}
    ${({ minWidth }) =>
      minWidth &&
      `
      min-width:1023px;
    `}

    ${({ footer }) =>
      footer &&
      `
      min-width:768px;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  }
`;
