import React, { Component } from "react";

export const NavbarContext = React.createContext();

class NavbarProvider extends Component {
  state = {
    isMenuActive: false
  };
  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuActive: !prevState.isMenuActive
    }));
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
