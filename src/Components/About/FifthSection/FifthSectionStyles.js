import styled from "styled-components";
import river from "../../../Images/About/river.jpg";
export const StyledWrapper = styled.div`
  min-height: 450px;
  background-image: url(${river});
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 50px;
  ${({ theme }) => theme.mq.tablet} {
    padding-bottom: 100px;
  }
`;
