import React, { Component } from "react";
import Swiper from "swiper";
import {
  SwiperWrapper,
  SwiperNavigationWrapper,
  SwiperNavigationNumbers,
  SwiperSlideIndicatorWrapper,
  SwiperSlideIndicator,
  StyledNumber,
  SwiperItemWrapper,
  StyledDiv,
  SwiperItem
} from "./SectionSwiperStyles";
import { StyledContent } from "../../../../Shared/StyledContent";

export class SectionSwiper extends Component {
  state = {
    activeSlide: 0
  };

  updateSlideIndex = index => {
    this.setState({
      activeSlide: index
    });
  };
  swiperSetup = () => {
    const swiper = new Swiper(`.about-swiper-container`, {
      slidesPerView: "auto",
      direction: "horizontal",
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
      <StyledContent>
        <SwiperWrapper className=" about-swiper-container">
          <SwiperNavigationWrapper className="swiper-pagination">
            <SwiperNavigationNumbers index={this.state.activeSlide + 1}>
              <StyledNumber index={this.state.activeSlide + 1}>01</StyledNumber>
              Integrity
            </SwiperNavigationNumbers>
            <SwiperNavigationNumbers index={this.state.activeSlide + 1}>
              <StyledNumber index={this.state.activeSlide + 1}>02</StyledNumber>
              Service
            </SwiperNavigationNumbers>
            <SwiperNavigationNumbers index={this.state.activeSlide + 1}>
              <StyledNumber index={this.state.activeSlide + 1}>03</StyledNumber>
              Result
            </SwiperNavigationNumbers>
          </SwiperNavigationWrapper>
          <SwiperSlideIndicatorWrapper>
            <SwiperSlideIndicator index={this.state.activeSlide + 1} />
          </SwiperSlideIndicatorWrapper>

          <StyledDiv className="swiper-wrapper">
            <SwiperItemWrapper className="swiper-slide">
              <SwiperItem>
                <p>
                  We will tell you what we really think: The value of your home,
                  the condition of the market or the feedback from a viewing.
                  <br />
                  <br />
                  No mixed messages. No going back on our advice. No game
                  playing.
                  <br />
                  Clear, concise, honest guidance.
                </p>
              </SwiperItem>
            </SwiperItemWrapper>
            <SwiperItemWrapper className="swiper-slide">
              <SwiperItem>
                <p>
                  From valuing your home accurately, preparing your marketing,
                  conducting viewings to handling the sales process.
                  <br />
                  <br />
                  All viewings conducted by your experienced individual broker.
                  Not the office junior or weekend assistant. Same day feedback
                  on viewings.
                </p>
              </SwiperItem>
            </SwiperItemWrapper>
            <SwiperItemWrapper className="swiper-slide">
              <SwiperItem>
                <p>
                  We will agree your idea of a successful outcome and work for
                  it.
                  <br />
                  <br />
                  We understand that your objectives may well not be the same as
                  our last client’s.
                  <br />
                  <br />
                  We will identify your priorities.
                </p>
              </SwiperItem>
            </SwiperItemWrapper>
          </StyledDiv>
        </SwiperWrapper>
      </StyledContent>
    );
  }
}
