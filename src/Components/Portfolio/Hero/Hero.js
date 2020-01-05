import React, { Component } from "react";
import {
  StyledWrapper,
  StyledFilterLabel,
  StyledIcon,
  CustomLogo
} from "./HeroStyles";
import { FilterMobileMenu } from "./FilterMobileMenu/FilterMobileMenu";
import { NavbarContext } from "../../../Shared/NavbarContext";

export class Hero extends Component {
  state = {
    isFilterMenuToggled: false
  };
  toggleFilterMenu = () => {
    this.setState(prevState => ({
      isFilterMenuToggled: !prevState.isFilterMenuToggled
    }));
  };

  render() {
    const { isFilterMenuToggled } = this.state;
    return (
      <StyledWrapper>
        <NavbarContext.Consumer>
          {context => <CustomLogo active={context.state.isMenuActive} />}
        </NavbarContext.Consumer>

        <StyledFilterLabel>
          <p onClick={this.toggleFilterMenu}>
            Filter Properties <StyledIcon isActive={isFilterMenuToggled} />
          </p>
          {isFilterMenuToggled && <FilterMobileMenu />}
        </StyledFilterLabel>
      </StyledWrapper>
    );
  }
}
