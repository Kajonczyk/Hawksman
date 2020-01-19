import React, { Component } from "react";
import { propertiesData } from "../../propertiesData";
import { StyledButton } from "../../../Shared/StyledButton";

import {
  StyledImgWrapper,
  StyledImg,
  StyledItemDescription,
  StyledDecoratedText,
  StyledSeparator,
  StyledPropertyWrapper,
  StyledDiv,
  StyledButtonWrapper
} from "./PropertiesStyles";
export class Properties extends Component {
  state = {
    sortOption: "",
    placeOption: "",
    properties: propertiesData
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.data.sortOption !== prevState.sortOption ||
      nextProps.data.placeOption !== prevState.sortOption
    ) {
      return {
        sortOption: nextProps.data.sortOption,
        placeOption: nextProps.data.placeOption
      };
    }
  }
  componentDidUpdate(prevProps) {
    const { sortOption, placeOption } = this.state;

    if (
      prevProps.data.sortOption !== sortOption ||
      prevProps.data.placeOption !== placeOption
    ) {
      this.filterPropertiesWithSortOption(sortOption);
      this.filterPropertiesByPlace(placeOption);
    }
    return;
  }

  setPropertiesData = (array = []) => {
    this.setState({
      properties: array
    });
  };

  filterPropertiesWithSortOption = option => {
    switch (option) {
      case "priceAsc": {
        propertiesData.sort(this.sortPropertiesByPriceAsc);
        this.setPropertiesData(propertiesData);
        break;
      }
      case "priceDesc": {
        propertiesData.sort(this.sortPropertiesByPriceDesc);
        this.setPropertiesData(propertiesData);
        break;
      }
      case "sizeAsc": {
        propertiesData.sort(this.sortPropertiesBySizeAsc);
        this.setPropertiesData(propertiesData);
        break;
      }
      case "sizeDesc": {
        propertiesData.sort(this.sortPropertiesBySizeDesc);
        this.setPropertiesData(propertiesData);
        break;
      }
      default: {
        return;
      }
    }
  };

  sortPropertiesByPriceAsc = (a, b) => (a.price > b.price ? 1 : -1);

  sortPropertiesByPriceDesc = (a, b) => (a.price < b.price ? 1 : -1);

  sortPropertiesBySizeAsc = (a, b) => (a.sqFeet > b.sqFeet ? 1 : -1);

  sortPropertiesBySizeDesc = (a, b) => (a.sqFeet < b.sqFeet ? 1 : -1);

  filterPropertiesByPlace = placeOption => {
    switch (placeOption) {
      case "all": {
        this.setPropertiesData(propertiesData);
        break;
      }
      case "walton-on-thames": {
        const filteredProperties = propertiesData.filter(item =>
          item.localisation.includes("Walton-on-Thames")
        );
        this.setPropertiesData(filteredProperties);
        break;
      }
      case placeOption: {
        const filteredProperties = propertiesData.filter(item =>
          item.localisation.includes(
            placeOption.charAt(0).toUpperCase() + placeOption.slice(1)
          )
        );
        this.setPropertiesData(filteredProperties);
        break;
      }
      default: {
        break;
      }
    }
  };
  render() {
    return (
      <StyledDiv>
        {this.state.properties.map(item => (
          <StyledPropertyWrapper key={item.id}>
            <div>
              <StyledImgWrapper>
                <StyledImg src={item.img} />
                <StyledItemDescription>
                  <p>{item.houseType}</p>
                </StyledItemDescription>
              </StyledImgWrapper>
              <div>
                <StyledDecoratedText>£{item.price}</StyledDecoratedText>
                <StyledDecoratedText>
                  {item.localisation} <StyledSeparator>/</StyledSeparator>
                  {item.sqFeet}
                </StyledDecoratedText>
                <StyledButtonWrapper>
                  <StyledButton margin>See Details</StyledButton>
                </StyledButtonWrapper>
              </div>
            </div>
          </StyledPropertyWrapper>
        ))}
      </StyledDiv>
    );
  }
}
