import React, { useRef, useEffect } from "react";
import {
  StyledWrapper,
  StyledLogoDescription,
  StyledHeading,
  StyledSecondHeading,
  StyledParagraph
} from "./HeroStyles";
import { StyledLogo } from "../../../Shared/StyledLogo";
import { VerticalSlider } from "../../VerticalSlider/VerticalSlider";
import { NavbarContext } from "../../../Shared/NavbarContext";
import { StyledContent } from "../../../Shared/StyledContent";
import { AnimationWrapper } from "../../../Shared/AnimationWrapper";
import { revealPage, fadeIn } from "../../../Utils/Animations/animations";

export const Hero = () => {
  const animationRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    revealPage([...animationRef.current?.children], animationRef.current);
    fadeIn([...sectionRef.current?.children], 1);
  }, []);
  return (
    <>
      <StyledWrapper>
        <AnimationWrapper refProp={animationRef} />
        <StyledContent ref={sectionRef}>
          <NavbarContext.Consumer>
            {context => (
              <StyledLogo active={context.state.isMenuActive}>
                <StyledLogoDescription>Real Estate</StyledLogoDescription>
              </StyledLogo>
            )}
          </NavbarContext.Consumer>

          <StyledHeading>
            Hawksman has <br /> been created
          </StyledHeading>

          <VerticalSlider />
          <StyledParagraph> A new kind of real estate agent </StyledParagraph>
          <StyledSecondHeading>
            Integrity. Service. Results.
          </StyledSecondHeading>
          <StyledParagraph grey>
            All the time, every time. We provide you with the platform to sell
            your home the way you want to.
          </StyledParagraph>
        </StyledContent>
      </StyledWrapper>
    </>
  );
};
