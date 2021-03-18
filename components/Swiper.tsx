import React from 'react';
import styled from "styled-components";
import {device} from '../styles/theme';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay, EffectFade} from 'swiper/core';

import {
    // svg
    Img1V2,
    Img2V2,
    Img3V2,
    Img4V2,
    Img5V2,
} from '../public/assets';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
const Slider = () => {
    return (
        <SliderWrap>
            <Swiper
                speed={1100}
                loop={true}
                navigation
                pagination={{clickable: true}}
                autoplay={{delay: 4000}}
                spaceBetween={50}
            >
                <SwiperSlide>
                    <div className={"__feature"}>
                        Manage Cloud Resource
                        <p className={"__description"}><em>Quick and Easy Visualisation</em> of Multi-Cloud Resources.
                        </p>
                    </div>
                    <figure className="__thumbnail"><Img1V2/></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"__feature"}>
                        Project-Based Management System
                        <p className={"__description"}>Manage All Resources with <em>Own Role and the Project</em> over
                            All Clouds.</p>
                    </div>
                    <figure className="__thumbnail"><Img2V2/></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"__feature"}>
                        Consolidated Billing
                        <p className={"__description"}>Easy View on <em>Resource Expenses and Cost
                            Optimization</em> with the Most Efficiency.</p>
                    </div>
                    <figure className="__thumbnail"><Img3V2/></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"__feature"}>
                        Real-Time Monitoring
                        <p className={"__description"}>Support <em>Various Mornitoring System</em>: Cloudwatch,
                            Stackdriver, Azure monitor.</p>
                    </div>
                    <figure className="__thumbnail"><Img4V2/></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"__feature"}>
                        Core Resource Automation Process
                        <p className={"__description"}>Power Scheduling lets you <em>Set Resource and Control
                            Expenses.</em></p>
                    </div>
                    <figure className="__thumbnail"><Img5V2/></figure>
                </SwiperSlide>
            </Swiper>
        </SliderWrap>
    );
};

const SliderWrap = styled.div`
  overflow: hidden;
  width: 100%;

  .swiper-container {
    position: relative;
    width: 100%;
    height: 100%;
    padding-bottom: 4.8rem;

    .swiper-wrapper {
      display: flex;
      width: 100%;
      height: 100%;

      .swiper-slide {
        position: relative;
        display: flex;
        flex-shrink: 0;
        justify-content: space-between;
        width: 100%;
      }

      .swiper-slide-active {
        .__feature {
          opacity: 1;
          transition: opacity .6s .3s;
        }
      }
    }
  }

  .__feature {
    flex-shrink: 0;
    width: 34rem;
    margin-right: 3rem;
    font-size: 4.6rem;
    line-height: 1.1;
    color: ${({theme}) => theme.color.primary[300]};
    opacity: 0;
    transition: all .3s;

    .__description {
      margin-top: 2rem;
      font-size: 2.1rem;
      line-height: 1.4;
      color: ${({theme}) => theme.color.gray[400]};

      em {
        color: ${({theme}) => theme.color.primary[100]};
      }
    }
  }

  .__thumbnail {
    width: 100%;
    line-height: 0;

    svg {
      width: 100%;
      height: auto;
    }
  }

  div[class^="swiper-button"] {
    position: absolute;
    bottom: 0;
    width: 3.6rem;
    height: 2.2rem;
    cursor: pointer;
    opacity: .5;
    background: url('/assets/SwiperNav.svg') no-repeat center/cover;
    transition: opacity .2s;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  .swiper-button-prev {
    right: 44rem;
  }

  .swiper-button-next {
    right: 23.2rem;
    transform: rotate(180deg);
  }

  .swiper-pagination {
    display: flex;
    align-items: center;
    position: absolute;
    right: 29.2rem;
    bottom: .5rem;
    z-index: 10;
    font-size: 0;

    .swiper-pagination-bullet {
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      margin-left: 1.4rem;
      background-color: ${({theme}) => theme.color.gray[700]};
      border-radius: 50%;
      transition: opacity .3s;
      cursor: pointer;

      :first-child {
        margin-left: 0;
      }
    }

    .swiper-pagination-bullet-active {
      background-color: ${({theme}) => theme.color.green};
    }
  }

  @media ${device.tablet} {
    width: 100%;

    .swiper-container {
      padding-bottom: 5rem;
    }

    .swiper-slide {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .__feature {
      width: 100%;
      padding: 0 5rem;
      margin-right: 0;
      box-sizing: border-box;

      .__description {
        font-size: 2.1rem;
      }
    }

    .__thumbnail {
      display: flex;
      width: 100%;
      height: 57.03vw;
      padding: 0 10.9rem;
      box-sizing: border-box;
    }

    div[class^="swiper-button"] {
      left: 50%;
    }

    .swiper-button-prev {
      margin-left: -14.54vw;
    }

    .swiper-button-next {
      margin-left: 10vw;
      transform: rotate(180deg);
    }

    .swiper-pagination {
      right: 0;
      width: 100%;
      justify-content: center;
    }
  }

  @media ${device.mobile} {
    width: 100%;

    .swiper-container {
      overflow: hidden;
      padding-bottom: 5rem;
    }

    .swiper-slide {
      flex-direction: column;
      flex-shrink: 0;
      box-sizing: border-box;
      width: 100%;
    }

    .__feature {
      width: 100%;
      min-height: 11.2rem;
      padding: 0 3rem;
      margin-right: 0;
      margin-bottom: 2.3rem;
      font-size: 2.6rem;
      box-sizing: border-box;

      .__description {
        margin-top: 1rem;
        font-size: 1.6rem;
      }
    }

    .__thumbnail {
      display: flex;
      height: 67.2vw;
      padding: 0 2rem;
      box-sizing: border-box;
    }

    div[class^="swiper-button"] {
      right: 19.1vw;
    }

    div.swiper-button-prev {
      right: 71.2vw;
    }

    .swiper-pagination {
      bottom: .5rem;
      right: 0;
      width: 100%;
      justify-content: center;
    }
  }
`;
export default Slider;