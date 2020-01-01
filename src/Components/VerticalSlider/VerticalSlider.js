import React, { Component } from "react";
import Swiper from "swiper";
import {
  SwiperWrapper,
  SwiperItem,
  SwiperNavigationWrapper,
  SwiperNavigationNumbers,
  SwiperSlideIndicatorWrapper,
  SwiperSlideIndicator,
  Wrapper,
  SwiperArrowUp,
  SwiperArrowDown,
  StyledP,
  SwiperItemWrapper
} from "./VerticalSliderStyles";

export class VerticalSlider extends Component {
  state = {
    activeSlide: 0
  };

  updateSlideIndex = index => {
    this.setState({
      activeSlide: index
    });
  };
  swiperSetup = () => {
    const swiper = new Swiper(`.vertical-wrapper`, {
      direction: "vertical",
      height: 300,
      on: {
        slideChange: () => {
          this.updateSlideIndex(swiper.activeIndex);
        }
      }
    });
  };
  componentDidMount() {
    this.swiperSetup();
  }
  render() {
    return (
      <Wrapper className="swiper-container vertical-wrapper">
        <SwiperNavigationWrapper className="swiper-pagination">
          <SwiperNavigationNumbers index={this.state.activeSlide + 1}>
            01
          </SwiperNavigationNumbers>
          <SwiperNavigationNumbers index={this.state.activeSlide + 1}>
            02
          </SwiperNavigationNumbers>
          <SwiperNavigationNumbers index={this.state.activeSlide + 1}>
            03
          </SwiperNavigationNumbers>
        </SwiperNavigationWrapper>
        <SwiperSlideIndicatorWrapper>
          <SwiperSlideIndicator index={this.state.activeSlide + 1} />
          <SwiperArrowUp className="swiper-button-prev" />
          <SwiperArrowDown className="swiper-button-next" />
        </SwiperSlideIndicatorWrapper>
        <SwiperWrapper className="swiper-wrapper">
          <SwiperItemWrapper
            className="swiper-slide"
            index={this.state.activeSlide + 1}
          >
            <SwiperItem>
              <StyledP>
                to offer a truly personal service when buying or selling your
                home, from start to finish
              </StyledP>
            </SwiperItem>
          </SwiperItemWrapper>
          <SwiperItemWrapper
            className="swiper-slide"
            index={this.state.activeSlide + 1}
          >
            <SwiperItem>
              <StyledP>
                to create a partnership with you
                <br />
                in order to achieve the best results
              </StyledP>
            </SwiperItem>
          </SwiperItemWrapper>
          <SwiperItemWrapper
            className="swiper-slide"
            index={this.state.activeSlide + 1}
          >
            <SwiperItem>
              <StyledP>
                to make your move as seamless <br />
                and stress free as possible
              </StyledP>
            </SwiperItem>
          </SwiperItemWrapper>
        </SwiperWrapper>
      </Wrapper>
    );
  }
}
