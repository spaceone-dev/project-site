import React from 'react';
import styled from "styled-components";
import {device} from '../styles/theme';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Autoplay, EffectFade} from 'swiper/core';
import {Img1, Img2, Img3, Img4, Img5,} from '../public/assets';

SwiperCore.use([Pagination, Autoplay, EffectFade]);

const Slider = () => {
    return (
        <SliderWrap>
            <Swiper
                speed={1200}
                loop={true}
                pagination={{clickable: true}}
                autoplay={{ delay: 3000 }}
                spaceBetween={50}
                effect={ 'fade' }
                // fadeEffect={{ crossFade: true }}
            >
                <SwiperSlide>
                    <div className={"__feature"}>
                        Manage Cloud Resource
                        <p className={"__description"}><em>Quick and Easy Visualisation</em> of Multi-Cloud Resources.
                        </p>
                    </div>
                    <Thumbnail>
                        <Img1/>
                    </Thumbnail>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"__feature"}>
                        Project-Based Management System
                        <p className={"__description"}>Manage All Resources with <em>Own Role and the Project</em> over
                            All Clouds.</p>
                    </div>
                    <Thumbnail>
                        <Img2/>
                    </Thumbnail>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"__feature"}>
                        Consolidated Billing
                        <p className={"__description"}>Easy View on <em>Resource Expenses and Cost
                            Optimization</em> with the Most Efficiency.</p>
                    </div>
                    <Thumbnail>
                        <Img3/>
                    </Thumbnail>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"__feature"}>
                        Real-Time Monitoring
                        <p className={"__description"}>Support <em>Various Mornitoring System</em>: Cloudwatch,
                            Stackdriver, Azure monitor.</p>
                    </div>
                    <Thumbnail>
                        <Img4/>
                    </Thumbnail>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"__feature"}>
                        Core Resource Automation Process
                        <p className={"__description"}>Power Scheduling lets you <em>Set Resource and Control
                            Expenses.</em></p>
                    </div>
                    <Thumbnail>
                        <Img5/>
                    </Thumbnail>
                </SwiperSlide>
            </Swiper>
        </SliderWrap>
    );
};

const SliderWrap = styled.div`
  overflow: hidden;
  width: 106rem;
  @media ${device.tablet} {
    width: 76.8rem;
  }
  @media ${device.mobile} {
    width: 100vw;
  }
}

.swiper-container {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
  @media ${device.mobile} {
    overflow: hidden;
  }

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
      height: 54.4rem;
      @media ${device.tablet} {
        flex-shrink: 0;
        flex-wrap: wrap;
        justify-content: center;
        width: 55rem;
        padding: 0 3rem;
        box-sizing: border-box;
      }
      @media ${device.mobile} {
        flex-shrink: 0;
        flex-wrap: wrap;
        justify-content: flex-start;
        height: 38.3rem;
        padding: 0 3rem;
        box-sizing: border-box;
      }
      .__feature {
        flex-shrink: 0;
        width: 34rem;
        height: 11.2rem;
        font-size: 4.6rem;
        line-height: 1.1;
        color: ${({theme}) => theme.color.primary[300]};
        opacity: 0;
        margin-left: 30px;
        transition: all .3s;
        @media ${device.tablet} {
          width: 100%;
          margin-right: 0;
          font-size: 2.6rem;
          line-height: 1.1;
          box-sizing: border-box;
        }
        @media ${device.mobile} {
          width: 100%;
          margin-right: 0;
          margin-bottom: 3rem;
          font-size: 2.6rem;
          line-height: 1.1;
          box-sizing: border-box;
        }
        .__description {
          margin-top: 20px;
          font-size: 2.1rem;
          line-height: 1.4;
          color: ${({theme}) => theme.color.gray[400]};

          em {
            color: ${({theme}) => theme.color.white};
          }

          @media ${device.mobile} {
            font-size: 1.6rem;
          }
        }

        @media ${device.tablet} {
          width: 100%;
        }
        @media ${device.mobile} {
          width: 100%;
        }
      }
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

.swiper-pagination {
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 10;
  font-size: 0;
  @media ${device.tablet} {
    width: 100%;
    justify-content: center;
  }
  @media ${device.mobile} {
    width: 100vw;
    justify-content: center;
  }
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
`;

const Thumbnail = styled.div`
  width: 65rem;
  margin-left: 4rem;
  line-height: 0;
  @media ${device.tablet} {
    width: 50rem;
  }
  @media ${device.mobile} {
    margin-left: 0;
    margin-top: 4rem;
    width: 30rem;
    margin: 0 auto;
    svg {
      width: calc(100vw - 6rem);
    }
  }
  svg {
    width: 100%;
    height: auto;
  }
`;

export default Slider;