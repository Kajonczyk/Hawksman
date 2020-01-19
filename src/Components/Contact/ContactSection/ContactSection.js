import React from "react";
import { StyledWrapper, CustomParagraph } from "./ContactSectionStyles";
import { ContactForm } from "./ContactForm/ContactForm";
import { StyledFeatures } from "../../../Shared/StyledFeatures";

export const ContactSection = () => {
  return (
    <StyledWrapper>
      <CustomParagraph>
        01111 555555 <br /> email@example.com
      </CustomParagraph>
      <CustomParagraph grey>
        Please complete this form if you would like us to contact you about
        selling your property
      </CustomParagraph>
      <ContactForm />
      <StyledFeatures />
    </StyledWrapper>
  );
};
