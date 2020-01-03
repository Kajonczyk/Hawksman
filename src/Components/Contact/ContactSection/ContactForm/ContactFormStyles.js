import styled from "styled-components";
// import { Check } from "styled-icons/evil/Check";
// import { Check } from "styled-icons/feather/Check";
import { CheckCircle } from "styled-icons/feather/CheckCircle";
export const StyledWrapper = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;
`;
export const StyledFormWrapper = styled.div`
  background-color: white;
  min-height: 400px;
  width: 100%;
  text-align: left;
  padding: 20px 20px 100px 20px;
`;
export const StyledInputField = styled.input`
  width: 100%;
  border: 0px;
  background: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.decoratedText};
  padding: 10px 20px;
  padding-left: 0px;
  &::placeholder {
    color: ${({ theme }) => theme.lighterGreyColor};
  }
`;
export const StyledSpan = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.lighterGreyColor};
  ${({ checkbox }) =>
    checkbox &&
    `
  font-style:italic;
  margin-left:-5px;
  `}
`;
export const StyledTextArea = styled.textarea`
  width: 100%;
  border: 0px;
  background: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.decoratedText};
  padding: 10px 20px;
  padding-left: 0px;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.lighterGreyColor};
  }
`;
export const StyledInputWrapper = styled.div`
  margin: 40px 0px;
`;

export const StyledCheckboxHolder = styled.span`
  border: 2px solid ${({ theme }) => theme.decoratedText};
  padding: 8px 15px;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 8px;
    height: 15px;
    margin: 4px auto;

    transform: rotate(45deg);
    border: 2px solid transparent;
    border-width: 0 0.2em 0.2em 0;
  }
  ${({ checked }) =>
    checked &&
    `
    &::after{
      border-color: #d7a27e;
    }
  
  `}
`;
export const StyledCheckbox = styled.input`
  opacity: 0;
  width: 5px;
`;
export const StyledCheckboxWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.greyColor};
  margin-top: 80px;
  font-family: ${({ theme }) => theme.font.family.Noto};
  border: 0px;
  color: ${({ theme }) => theme.sectionDarkerWhite};
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.footerSize};
  transition: background-color 0.3s, color 0.3s;
  transition-timing-function: ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.decoratedText};
  }
`;
export const StyledPopUpWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
`;
export const StyledPopUpBlur = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.3;
  filter: blur(2px);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
`;
export const StyledPopUpDivWrapper = styled.div`
  width: 200px;
  background-color: white;
  position: fixed;
  z-index: 9999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
export const StyledPopUpDiv = styled.div`
  width: 100%;
  height: 100px;
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.greyColor};
  font-family: ${({ theme }) => theme.font.family.NotoSerif};
  padding-top: 20px;
  :nth-child(1) {
    background-color: ${({ theme }) => theme.decoratedText};
    line-height: 100px;
    padding: 0px;
  }
`;
export const StyledCheckIcon = styled(CheckCircle)`
  height: 50px;
  width: 50px;
  margin: 0px auto;
  color: white;
`;
export const StyledConfirmButton = styled(SubmitButton)`
  margin-top: 0px;
  width: 100px;
  height: 40px;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.decoratedText};
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px dashed ${({ theme }) => theme.decoratedText};
    color: ${({ theme }) => theme.decoratedText};
  }
`;
