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
  StyledSeparator,
  StyledPaginationWrapper,
  StyledPaginationLine,
  StyledPaginationIndicator,
  StyledPagination,
  StyledButtonWrapper
} from "./HorizontalSliderStyles";

import { propertiesData } from "../propertiesData";
import { StyledButton } from "../../Shared/StyledButton";
export class HorizontalSlider extends Component {
  state = {
    activeSlide: 1
  };

  updateSlideIndex = index => {
    this.setState({
      activeSlide: index + 1
    });
  };

  initializeSwiper = () => {
    const swiper = new Swiper(`.horizontal-wrapper`, {
      direction: "horizontal",
      on: {
        slideChange: () => {
          this.updateSlideIndex(swiper.activeIndex);
        }
      }
    });
  };

  componentDidMount() {
    this.initializeSwiper();
  }

  render() {
    return (
      <SwiperWrapper className="swiper-container horizontal-wrapper">
        <StyledPaginationWrapper
          className="swiper-pagination"
          ref={d => (this.paginationWidth = d)}
        >
          <StyledPagination>
            {propertiesData.map(item => (
              <StyledPaginationLine key={item.id}></StyledPaginationLine>
            ))}
            <StyledPaginationIndicator index={this.state.activeSlide} />
          </StyledPagination>
        </StyledPaginationWrapper>
        <ItemWrapper className="swiper-wrapper">
          {propertiesData.map(item => (
            <SwiperItem className="swiper-slide" key={item.id}>
              <div>
                <StyledImgWrapper>
                  <StyledImg src={item.img} alt="img" />
                  <StyledItemDescription>
                    {item.description}
                  </StyledItemDescription>
                </StyledImgWrapper>
                <div>
                  <StyledDecoratedText>{item.price}</StyledDecoratedText>
                  <StyledLocalisationText>
                    {item.localisation} <StyledSeparator>/</StyledSeparator>
                    {item.sqFeet}
                  </StyledLocalisationText>
                  <StyledButtonWrapper>
                    <StyledButton swiperButton>See Details</StyledButton>
                  </StyledButtonWrapper>
                </div>
              </div>
            </SwiperItem>
          ))}
        </ItemWrapper>
      </SwiperWrapper>
    );
  }
}
