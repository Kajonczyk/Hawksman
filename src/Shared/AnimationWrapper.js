import React from "react";

import styled from "styled-components";
export const AnimationWrapper = ({ refProp }) => {
  return (
    <Wrapper ref={refProp}>
      <AnimationDiv />
      <AnimationDiv />
      <AnimationDiv />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 102%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 99999;
  margin: 0px;
`;
export const AnimationDiv = styled.div`
  width: 100%;
  height: 33%;
  background-color: ${({ theme }) => theme.darkerGreyColor};
`;
