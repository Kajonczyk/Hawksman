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
  StyledDiv
} from "./PropertiesStyles";
export class Properties extends Component {
  state = {
    sortOption: "",
    placeOption: "",
    properties: propertiesData
  };
  static getDerivedStateFromProps(props, state) {
    if (
      props.data.sortOption !== state.sortOption ||
      props.data.placeOption !== state.placeOption
    ) {
      return {
        sortOption: props.data.sortOption,
        placeOption: props.data.placeOption
      };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    const { sortOption, placeOption } = this.state;

    if (
      prevProps.data.sortOption !== sortOption ||
      prevProps.data.placeOption !== placeOption
    ) {
      this.filterPropertiesByPlace(placeOption);
      this.filterPropertiesWithSortOption(sortOption);
    }
    return;
  }

  setPropertiesData = (array = []) => {
    this.setState({
      properties: array
    });
  };

  filterPropertiesWithSortOption = option => {
    const propertiesData = [...this.state.properties];

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
                  {item.description}
                </StyledItemDescription>
              </StyledImgWrapper>
              <div>
                <StyledDecoratedText>£{item.price}</StyledDecoratedText>
                <StyledDecoratedText>
                  {item.localisation} <StyledSeparator>/</StyledSeparator>
                  {item.sqFeet}
                </StyledDecoratedText>
                <StyledButton>See Details</StyledButton>
              </div>
            </div>
          </StyledPropertyWrapper>
        ))}
      </StyledDiv>
    );
  }
}
