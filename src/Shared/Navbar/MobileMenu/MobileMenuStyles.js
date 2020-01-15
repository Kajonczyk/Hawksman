import styled from "styled-components";

export const StyledWrapper = styled.div`
  height: ${({ active }) => (active ? "100vh" : "3vh")};
  opacity: ${({ active }) => (active ? "1" : "0")};
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  margin: 0px auto;
  top: 0px;
  justify-content: space-between;
  align-items: center;
  z-index: 9000;
  transition: height 0.2s, opacity 0s;
  overflow: hidden;
`;
