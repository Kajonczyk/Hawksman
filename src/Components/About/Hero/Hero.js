import React, { useRef, useEffect } from "react";
import {
  StyledWrapper,
  CustomLogo,
  CustomParagraph,
  CustomSectionIndicator
} from "./HeroStyles";
import { StyledSecondHeading } from "../../../Shared/StyledSecondHeading";
import { NavbarContext } from "../../../Shared/NavbarContext";
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
    <StyledWrapper>
      <AnimationWrapper refProp={animationRef} />
      <div ref={sectionRef}>
        <NavbarContext.Consumer>
          {context => <CustomLogo active={context.state.isMenuActive} />}
        </NavbarContext.Consumer>

        <StyledSecondHeading> Integrity. Service. Results.</StyledSecondHeading>
        <CustomParagraph>
          All the time, every time. We provide you with the platform to sell
          your home the way you want to.
        </CustomParagraph>
        <CustomSectionIndicator />
      </div>
    </StyledWrapper>
  );
};
