import React from 'react';
import styled from "styled-components";
import {device} from '../styles/theme';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Autoplay, EffectFade} from 'swiper/core';
import {
    // svg
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
} from '../public/assets';

SwiperCore.use([Pagination, Autoplay, EffectFade]);

const Slider = () => {
    return (
        <SliderWrap>
            <Swiper
                speed={1200}
                loop={true}
                pagination={{clickable: true}}
                autoplay={{delay: 3000}}
                spaceBetween={50}
                effect={'fade'}
            >
                <SwiperSlide>
                    <div className={"__feature"}>
                        Manage Cloud Resource
                        <p className={"__description"}><em>Quick and Easy Visualisation</em> of Multi-Cloud Resources.
                        </p>
                    </div>
                    <figure className="__thumbnail"><Img1/></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"__feature"}>
                        Project-Based Management System
                        <p className={"__description"}>Manage All Resources with <em>Own Role and the Project</em> over
                            All Clouds.</p>
                    </div>
                    <figure className="__thumbnail"><Img2/></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"__feature"}>
                        Consolidated Billing
                        <p className={"__description"}>Easy View on <em>Resource Expenses and Cost
                            Optimization</em> with the Most Efficiency.</p>
                    </div>
                    <figure className="__thumbnail"><Img3/></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"__feature"}>
                        Real-Time Monitoring
                        <p className={"__description"}>Support <em>Various Mornitoring System</em>: Cloudwatch,
                            Stackdriver, Azure monitor.</p>
                    </div>
                    <figure className="__thumbnail"><Img5/></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"__feature"}>
                        Core Resource Automation Process
                        <p className={"__description"}>Power Scheduling lets you <em>Set Resource and Control
                            Expenses.</em></p>
                    </div>
                    <figure className="__thumbnail"><Img5/></figure>
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
    padding-bottom: 3rem;

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
          margin-left: 0;
          opacity: 1;
          transition: opacity .6s .3s;
        }
      }
    }
  }

  .__feature {
    flex-shrink: 0;
    width: 34rem;
    font-size: 4.6rem;
    line-height: 1.1;
    color: ${({theme}) => theme.color.primary[300]};
    opacity: 0;
    margin-right: 3rem;
    transition: all .3s;

    .__description {
      margin-top: 20px;
      font-size: 2.1rem;
      line-height: 1.4;
      color: ${({theme}) => theme.color.gray[400]};

      em {
        color: ${({theme}) => theme.color.white};
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

  .swiper-pagination {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 10;
    font-size: 0;

    .swiper-pagination-bullet {
      display: inline-block;
      width: .8rem;
      height: .8rem;
      margin-left: 1.3rem;
      background-color: ${({theme}) => theme.color.primary[200]};
      border-radius: 50%;
      transition: opacity .3s;
      cursor: pointer;
    }

    .swiper-pagination-bullet-active {
      width: 1.2rem;
      height: 1.2rem;
      background-color: ${({theme}) => theme.color.primary[400]};
    }
  }

  @media ${device.tablet} {
    width: 100%;

    .swiper-slide {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .__feature {
      width: 100%;
      margin-right: 0;
      margin-bottom: 3rem;

      .__description {
        font-size: 2.1rem;
      }
    }

    .__thumbnail {
      width: 55rem;
    }

    .swiper-pagination {
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
      margin-right: 0;
      margin-bottom: 3rem;
      font-size: 2.6rem;

      .__description {
        font-size: 1.6rem;
      }
    }

    .__thumbnail {
      margin-left: 0;
      margin-top: 4rem;
      margin: 0 auto;

      svg {
        width: calc(100vw - 6rem);
      }
    }

    .swiper-pagination {
      width: 100%;
      justify-content: center;
    }
  }
`;

export default Slider;