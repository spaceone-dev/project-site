import styled from 'styled-components';
import Lottie from 'react-lottie';
import {ExternalLinkGreen, Spaceship} from '../public/assets';
import {device} from '../styles/theme';

const optionsSpaceship = {
    animationData: Spaceship,
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};
const Scroll6 = () => {
    return (
        <Box>
            <Content>
                <div className="__ghInfo">
                    <div className="__info" data-aos="fade-up" data-aos-once="true">
                        <strong>76</strong>
                        <span>Enrolled Projects</span>
                    </div>
                    <div className="__info" data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
                        <strong>28</strong>
                        <span>Contributors</span>
                        <div className="__ghInfo__btn">View Contribution Guide<span><ExternalLinkGreen/></span></div>
                    </div>
                </div>
                <div className="__mission">
                    SpaceONE’s Mission is to Accelerate the Multi-Cloud Native Technology
                    for Sustainable Ecosystem.
                </div>
                <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
                    <div className="__spaceship"><Lottie options={optionsSpaceship}/></div>
                    <div className="__gradient">Climb Aboard <span>the <em>SpaceONE</em>ship</span>
                    </div>
                </div>
            </Content>
        </Box>
    );
};

const Box = styled.section`
  width: 100%;
  height: 96rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media ${device.mobile} {
    height: 81.2rem;
    padding: 0 3rem;
    box-sizing: border-box;
  }
`;

const Content = styled.div`
  width: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: -0.02em;

  .__ghInfo {
    padding-bottom: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: .1rem solid ${({theme}) => theme.color.primary[300]};
    font-size: 2.2rem;
    line-height: 2.6rem;
    color: ${({theme}) => theme.color.gray[300]};


    .__info {
      width: 50%;

      strong {
        display: inline-block;
        margin-right: 1rem;
        font-family: Helvetica Neue;
        font-size: 6rem;
        line-height: 1.1;
        font-weight: 400;
        color: ${({theme}) => theme.color.primary[300]};
      }
    }

    &__btn {
      font-weight: 300;
      cursor: pointer;
      font-size: 1.7rem;
      color: ${({theme}) => theme.color.green};
      display: flex;
      align-items: center;
      letter-spacing: -0.01em;

      span {
        display: inline-block;
        margin-left: 0.4rem;
        margin-top: 0.2rem;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .__mission {
    font-weight: 400;
    margin-top: 5rem;
    color: ${({theme}) => theme.color.primary[200]};
    font-size: 3.7rem;
    line-height: 130%;
    opacity: 0.8;
    letter-spacing: -0.01em;
    text-align: center;
  }

  .__spaceship {
    width: 14rem;
    height: 14rem;
    margin: 7.1rem auto 0;
  }

  .__gradient {
    margin-top: -2rem;
    font-weight: 500;
    font-size: 3.4rem;
    background: linear-gradient(to right, #65cba0, #cf88a0, #5ca2b1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    em {
      font-weight: 600;
    }
  }

  @media ${device.tablet} {
    width: 60rem;

    .__mission {
      width: 46.5rem;
      font-size: 2.6rem;
    }
  }

  @media ${device.mobile} {
    width: 100%;

    .__ghInfo {
      width: calc(100% - 3rem);
      padding-bottom: 3rem;
      font-size: 1.7rem;
      box-sizing: border-box;

      .__info {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        width: 100%;
        padding: 0 3rem;
        margin-bottom: 2rem;
        box-sizing: border-box;

        strong {
          font-size: 4.4rem;
        }
      }

      &__btn {
        display: flex;
        width: 100%;
        font-size: 1.4rem;
      }
    }

    .__mission {
      font-size: 2.2rem;
      line-height: 1.3;
    }

    .__spaceship {
      width: 10.3rem;
      height: 10.3rem;
      margin-top: 3rem;
    }

    .__gradient {
      width: 25.5rem;
      margin-top: -.5rem;
      font-size: 2.4rem;
      line-height: 1.1;
      text-align: center;

      span {
        display: block;
      }
    }
  }
`;

export default Scroll6;
