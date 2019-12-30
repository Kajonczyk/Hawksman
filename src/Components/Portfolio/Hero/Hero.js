import React, { Component } from "react";
import { StyledWrapper, StyledFilterLabel, StyledIcon } from "./HeroStyles";
import { StyledLogo } from "../../../Shared/StyledLogo";
import { FilterMobileMenu } from "./FilterMobileMenu/FilterMobileMenu";

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
        <StyledLogo />
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
