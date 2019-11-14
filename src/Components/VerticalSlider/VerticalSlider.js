import Swiper from "react-id-swiper";
import React, { Component } from "react";
import {
  SwiperWrapper,
  SwiperItem,
  SwiperNavigationWrapper,
  SwiperNavigationNumbers,
  SwiperSlideIndicatorWrapper,
  SwiperSlideIndicator,
  Wrapper
} from "./VerticalSliderStyles";

export class VerticalSlider extends Component {
  state = {
    activeSlideId: 0
  };
  componentDidMount() {
    setTimeout(this.handleGetCurrentSlide, 100);
  }

  handleGetCurrentSlide = () => {
    const sliderItems = [...document.querySelectorAll(".swiper-slide")];
    const slideIndex = sliderItems.findIndex(item =>
      item.classList.contains("swiper-slide-active")
    );
    this.setState({
      activeSlideId: slideIndex + 1
    });
  };
  params = {
    direction: "vertical",
    on: {
      slideChange: () => {
        setTimeout(this.handleGetCurrentSlide, 100);
      }
    }
  };

  render() {
    const { activeSlideId } = this.state;
    return (
      <Wrapper>
        <SwiperNavigationWrapper>
          <SwiperNavigationNumbers index={activeSlideId}>
            01
          </SwiperNavigationNumbers>
          <SwiperNavigationNumbers index={activeSlideId}>
            02
          </SwiperNavigationNumbers>
          <SwiperNavigationNumbers index={activeSlideId}>
            03
          </SwiperNavigationNumbers>
        </SwiperNavigationWrapper>
        <SwiperSlideIndicatorWrapper>
          <SwiperSlideIndicator index={activeSlideId} />
        </SwiperSlideIndicatorWrapper>
        <SwiperWrapper>
          <Swiper {...this.params}>
            <SwiperItem>
              <p>
                to offer a truly personal service when buying or selling your
                home, from start to finish
              </p>
            </SwiperItem>
            <SwiperItem>
              <p>
                to create a partnership with you
                <br />
                in order to achieve the best results
              </p>
            </SwiperItem>
            <SwiperItem>
              <p>
                to make your move as seamless <br />
                and stress free as possible
              </p>
            </SwiperItem>
          </Swiper>
        </SwiperWrapper>
      </Wrapper>
    );
  }
}
