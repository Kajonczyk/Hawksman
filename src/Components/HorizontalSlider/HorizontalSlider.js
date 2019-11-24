import React, { Component } from "react";
import Swiper from "swiper";
import {
  SwiperWrapper,
  ItemWrapper,
  SwiperItem,
  StyledImg,
  StyledImgWrapper,
  StyledItemDescription,
  StyledDecoratedText,
  StyledLocalisationText,
  StyledSeparator
} from "./HorizontalSliderStyles";

import { propertiesData } from "../propertiesData";
import { StyledButton } from "../../Shared/StyledButton";
export class HorizontalSlider extends Component {
  state = {};

  initializeSwiper = () => {
    const swiper = new Swiper(`.horizontal-wrapper`, {
      direction: "horizontal"
    });
  };
  componentDidMount() {
    this.initializeSwiper();
  }

  render() {
    return (
      <SwiperWrapper className="swiper-container horizontal-wrapper">
        <ItemWrapper className="swiper-wrapper">
          {propertiesData.map(item => (
            <SwiperItem className="swiper-slide" key={item.id}>
              <div>
                <StyledImgWrapper>
                  <StyledImg src={item.img} alt="XD" />
                  <StyledItemDescription>
                    {item.description}
                  </StyledItemDescription>
                </StyledImgWrapper>
                <div>
                  <StyledDecoratedText>{item.price}</StyledDecoratedText>
                  <StyledLocalisationText>
                    {item.localisation} <StyledSeparator>/</StyledSeparator>{" "}
                    {item.sqFeet}
                  </StyledLocalisationText>
                  <StyledButton>See Details</StyledButton>
                </div>
              </div>
            </SwiperItem>
          ))}
        </ItemWrapper>
        <div className="swiper-pagination"></div>
      </SwiperWrapper>
    );
  }
}
