import React, { Component } from "react";
import {
  StyledFormWrapper,
  StyledInputField,
  StyledSpan,
  StyledTextArea,
  StyledInputWrapper,
  StyledCheckboxHolder,
  StyledCheckboxWrapper,
  StyledCheckbox,
  StyledWrapper,
  SubmitButton,
  StyledPopUpWrapper,
  StyledPopUpBlur,
  StyledPopUpDiv,
  StyledPopUpDivWrapper,
  StyledCheckIcon,
  StyledConfirmButton,
  StyledWarningText
} from "./ContactFormStyles";

export class ContactForm extends Component {
  state = {
    nameField: "",
    emailField: "",
    phoneField: "",
    textField: "",
    emailCheckbox: false,
    callCheckbox: false,
    textCheckbox: false,
    isPopUpDisplayed: false,
    errors: {
      nameField: false,
      emailField: false,
      phoneField: false,
      textField: false
    }
  };

  handleChange = e => {
    const { id, value, type } = e.target;
    if (type === "checkbox") {
      this.setState({
        [id]: !this.state[id]
      });
    } else {
      this.setState({
        [id]: value
      });
    }
  };

  validateForm = () => {
    const MIN_LENGTH = 8;
    const MAX_LENGTH = 12;
    const { nameField, emailField, phoneField, textField } = this.state;
    return {
      nameField: nameField.length <= 3 || nameField.length >= MAX_LENGTH * 1.5,
      emailField:
        !emailField.includes("@") ||
        emailField.length <= MIN_LENGTH ||
        emailField.length >= MAX_LENGTH * 4,
      phoneField:
        phoneField.length <= MIN_LENGTH || phoneField.length >= MAX_LENGTH,
      textField: textField.length <= MIN_LENGTH
    };
  };

  cleanFormInputs = () => {
    this.setState({
      nameField: "",
      emailField: "",
      phoneField: "",
      textField: "",
      emailCheckbox: false,
      callCheckbox: false,
      textCheckbox: false
    });
  };

  cleanFormErrors = () => {
    this.setState({
      errors: {
        nameField: false,
        emailField: false,
        phoneField: false,
        textField: false
      }
    });
  };

  cleanForm = () => {
    this.cleanFormInputs();
    this.cleanFormErrors();
  };
  displayPopUp = () => {
    this.setState(prevState => ({
      isPopUpDisplayed: !prevState.isPopUpDisplayed
    }));
  };
  handleSubmit = () => {
    const validateResponse = this.validateForm();
    const isValidatedSuccessfully = !Object.values(validateResponse).some(
      Boolean
    );
    if (isValidatedSuccessfully) {
      this.displayPopUp();
      this.cleanForm();
    } else {
      this.setState({
        errors: validateResponse
      });
    }
    console.log(this.state.errors);
  };

  render() {
    const {
      nameField,
      emailField,
      phoneField,
      textField,
      emailCheckbox,
      callCheckbox,
      textCheckbox,
      isPopUpDisplayed
    } = this.state;
    return (
      <>
        <StyledWrapper>
          <StyledFormWrapper>
            <StyledInputWrapper>
              <label>
                <StyledSpan>My Name</StyledSpan> <br />
                <StyledInputField
                  type="text"
                  placeholder="Add your name"
                  value={nameField}
                  onChange={this.handleChange}
                  id="nameField"
                  isNotValid={this.state.errors.nameField}
                />
                {this.state.errors.nameField && (
                  <StyledWarningText>Name is too short</StyledWarningText>
                )}
              </label>
            </StyledInputWrapper>
            <StyledInputWrapper>
              <label>
                <StyledSpan>My email is</StyledSpan> <br />
                <StyledInputField
                  type="text"
                  placeholder="Add your email"
                  value={emailField}
                  onChange={this.handleChange}
                  id="emailField"
                  isNotValid={this.state.errors.emailField}
                />
                {this.state.errors.emailField && (
                  <StyledWarningText>Email is not valid</StyledWarningText>
                )}
              </label>
            </StyledInputWrapper>
            <StyledInputWrapper>
              <label>
                <StyledSpan>My phone is</StyledSpan> <br />
                <StyledInputField
                  type="number"
                  placeholder="Add your phone"
                  value={phoneField}
                  onChange={this.handleChange}
                  id="phoneField"
                  isNotValid={this.state.errors.phoneField}
                />
                {this.state.errors.phoneField && (
                  <StyledWarningText>
                    Phone number is not valid
                  </StyledWarningText>
                )}
              </label>
            </StyledInputWrapper>
            <StyledInputWrapper>
              <label>
                <StyledSpan>I'm writting about</StyledSpan> <br />
                <StyledTextArea
                  placeholder="Enter your message here.."
                  cols="10"
                  rows="5"
                  value={textField}
                  onChange={this.handleChange}
                  id="textField"
                  isNotValid={this.state.errors.textField}
                />
                {this.state.errors.textField && (
                  <StyledWarningText>Message is too short</StyledWarningText>
                )}
              </label>
            </StyledInputWrapper>
            <br />
            <StyledSpan>Primary contact method</StyledSpan> <br />
            <StyledCheckboxWrapper>
              <label>
                <StyledCheckboxHolder checked={emailCheckbox} />
                <StyledCheckbox
                  type="checkbox"
                  value={emailCheckbox}
                  id="emailCheckbox"
                  onChange={this.handleChange}
                />
                <StyledSpan checkbox>Email</StyledSpan>
              </label>
              <label>
                <StyledCheckboxHolder checked={callCheckbox} />
                <StyledCheckbox
                  type="checkbox"
                  value={callCheckbox}
                  id="callCheckbox"
                  onChange={this.handleChange}
                />
                <StyledSpan checkbox>Call</StyledSpan>
              </label>
              <label>
                <StyledCheckboxHolder checked={textCheckbox} />
                <StyledCheckbox
                  type="checkbox"
                  value={textCheckbox}
                  id="textCheckbox"
                  onChange={this.handleChange}
                />
                <StyledSpan checkbox>Text</StyledSpan>
              </label>
            </StyledCheckboxWrapper>
            <SubmitButton onClick={this.handleSubmit}>
              Send Message
            </SubmitButton>
          </StyledFormWrapper>
        </StyledWrapper>
        {isPopUpDisplayed && (
          <StyledPopUpWrapper>
            <StyledPopUpBlur onClick={this.displayPopUp} />
            <StyledPopUpDivWrapper>
              <StyledPopUpDiv>
                <StyledCheckIcon />
              </StyledPopUpDiv>
              <StyledPopUpDiv>
                Your message was sent!
                <StyledConfirmButton onClick={this.displayPopUp}>
                  Confirm
                </StyledConfirmButton>
              </StyledPopUpDiv>
            </StyledPopUpDivWrapper>
          </StyledPopUpWrapper>
        )}
      </>
    );
  }
}
