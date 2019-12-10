import React, { Component } from "react";

export const NavbarContext = React.createContext();

class NavbarProvider extends Component {
  state = {
    isMenuActive: false,
    isPageScrolled: false
  };
  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuActive: !prevState.isMenuActive
    }));
  };
  componentDidMount() {
    window.addEventListener("scroll", this.scrollPosition);
  }

  setScrollState = option => {
    this.setState({
      isPageScrolled: option
    });
  };
  scrollPosition = () => {
    const { isPageScrolled } = this.state;
    const breakPoint = 100;
    if (window.scrollY >= breakPoint) {
      this.setScrollState(true);
    } else if (window.scrollY < breakPoint && isPageScrolled) {
      this.setScrollState(false);
    }
  };
  render() {
    return (
      <NavbarContext.Provider
        value={{ state: this.state, toggleMenu: this.toggleMenu }}
      >
        {this.props.children}
      </NavbarContext.Provider>
    );
  }
}
export default NavbarProvider;
