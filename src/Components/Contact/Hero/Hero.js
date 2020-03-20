import React, { useRef, useEffect } from "react";
import {
  StyledWrapper,
  CustomSectionIndicator,
  CustomLogo
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

      <NavbarContext.Consumer>
        {context => <CustomLogo active={context.state.isMenuActive} />}
      </NavbarContext.Consumer>
      <div ref={sectionRef}>
        <StyledSecondHeading>Contact Hawksman</StyledSecondHeading>
        <CustomSectionIndicator />
      </div>
    </StyledWrapper>
  );
};
