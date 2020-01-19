import React, { Component } from "react";

export const SortContext = React.createContext();
export class PortfolioSortProvider extends Component {
  state = {
    sortOption: "default",
    placeOption: "all"
  };
  setSortOption = option => {
    this.setState({
      sortOption: option
    });
  };
  setPlaceOption = option => {
    this.setState({
      placeOption: option
    });
  };
  render() {
    return (
      <SortContext.Provider
        value={{
          state: this.state,
          setSortOption: this.setSortOption,
          setPlaceOption: this.setPlaceOption
        }}
      >
        {this.props.children}
      </SortContext.Provider>
    );
  }
}
