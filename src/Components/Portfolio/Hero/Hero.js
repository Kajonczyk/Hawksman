import React, { useState, useRef, useEffect } from "react";
import {
  StyledWrapper,
  StyledFilterLabel,
  StyledIcon,
  CustomLogo
} from "./HeroStyles";
import { FilterMobileMenu } from "./FilterMobileMenu/FilterMobileMenu";
import { NavbarContext } from "../../../Shared/NavbarContext";
import { AnimationWrapper } from "../../../Shared/AnimationWrapper";
import { revealPage, fadeIn } from "../../../Utils/Animations/animations";

export const Hero = () => {
  const [isMenuToggled, setToggle] = useState();
  const animationRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    revealPage([...animationRef.current?.children], animationRef.current);
    fadeIn([...sectionRef.current.children], 1);
  }, []);

  return (
    <StyledWrapper>
      <AnimationWrapper refProp={animationRef} />
      <NavbarContext.Consumer>
        {context => <CustomLogo active={context.state.isMenuActive} />}
      </NavbarContext.Consumer>

      <StyledFilterLabel ref={sectionRef}>
        <p onClick={() => setToggle(!isMenuToggled)}>
          Filter Properties <StyledIcon isActive={isMenuToggled} />
        </p>
        {isMenuToggled && <FilterMobileMenu />}
      </StyledFilterLabel>
    </StyledWrapper>
  );
};
