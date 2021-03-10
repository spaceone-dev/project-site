import styled from 'styled-components';
import Lottie from 'react-lottie';
import {
    // svg
    Ellipse3,
    Integrate,
    Improve,
    Manage,
    // json
    SpinPurple,
    SpinWhite,
} from '../public/assets';
import {device} from '../styles/theme';

const optionsSpinPurple = {
    animationData: SpinPurple,
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};
const optionsSpinWhite = {
    animationData: SpinWhite,
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};
const Scroll2 = () => {
    return (
        <Box>
            <Content>
                <h3>we&apos;re very capable:</h3>
                <div className="__keywords">
                    <div className="__keyword __keyword1" data-aos="fade-up">
                        <figure><Integrate/></figure>
                        <em className="__word">Integrate</em>
                        <div className="__sub">Multi-Cloud Accounts</div>
                    </div>
                    <div className="__keyword __keyword2" data-aos="fade-up" data-aos-delay="300">
                        <figure><Improve/></figure>
                        <em className="__word">Improve</em>
                        <div className="__sub">Operation Efficiency</div>
                    </div>
                    <div className="__keyword __keyword3" data-aos="fade-up" data-aos-delay="600">
                        <figure><Manage/></figure>
                        <em className="__word">Manage</em>
                        <div className="__sub">Cloud Spend</div>
                    </div>
                </div>
            </Content>
            <Figures>
                <figure className="__ellipse3"><Ellipse3/></figure>
                <figure className="__spinPurple1"><Lottie options={optionsSpinPurple}/></figure>
                <figure className="__spinWhite"><Lottie options={optionsSpinWhite}/></figure>
                <figure className="__spinPurple2"><Lottie options={optionsSpinPurple}/></figure>
            </Figures>
        </Box>
    )
};

const Box = styled.section`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 96rem;

  @media ${device.tablet} {
    height: 102.4rem;
  }

  @media ${device.mobile} {
    height: 81.2rem;
    padding-top: 0;
  }
`;

const Content = styled.div`
  max-width: 144rem;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 100vw;
    padding-left: 5rem;
  }

  @media ${device.mobile} {
    width: 100vw;
    padding-left: 3rem;
  }

  h3 {
    margin-bottom: 18.3rem;
    color: ${({theme}) => theme.color.pink};
    font-weight: 500;
    opacity: 0.8;
    font-size: 2.6rem;
    text-transform: uppercase;

    @media ${device.tablet} {
      margin-bottom: 9rem;
    }

    @media ${device.mobile} {
      margin-bottom: 5rem;
    }
  }

  .__keywords {
    display: flex;
    font-weight: 400;
    color: ${({theme}) => theme.color.primary[100]};

    @media ${device.desktop} {
      margin-bottom: 15rem;
    }

    .__keyword {
      width: 34rem;

      @media ${device.tablet} {
        margin-bottom: 4rem;
      }

      @media ${device.mobile} {
        margin-bottom: 4rem;
        width: auto;
      }

      figure {
        width: 5rem;
        height: 5rem;

        @media ${device.mobile} {
          width: 3.4rem;
          height: 3.4rem;
        }
      }

      .__word {
        display: inline-block;
        margin-top: .4rem;
        margin-bottom: .8rem;
        font-size: 4.6rem;
        color: ${({theme}) => theme.color.primary[300]};

        @media ${device.tablet} {
          font-size: 4.6rem;
          line-height: 1.17;
        }

        @media ${device.mobile} {
          font-size: 3.2rem;
          line-height: 1.1;
        }
      }

      .__sub {
        font-size: 3rem;
        letter-spacing: -0.02em;

        @media ${device.tablet} {
          font-size: 3rem;
          line-height: 1.17;
        }

        @media ${device.mobile} {
          font-size: 2rem;
        }
      }
    }

    @media ${device.desktop} {
      .__keyword2 {
        margin-right: 2vw;
        margin-left: 2vw;
      }
    }

    @media ${device.tablet} {
      flex-direction: column;
      margin-top: 5rem;
    }

    @media ${device.mobile} {
      flex-direction: column;
    }
  }
`;

const Figures = styled.figure`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  max-width: 134rem;
  transform: translate(-50%, -50%);

  @media ${device.tablet} {
    overflow: hidden;
    width: 120vw;
  }

  @media ${device.mobile} {
    overflow: hidden;
    width: 80rem;
    max-width: 120vw;
  }

  .__spinPurple1 {
    position: absolute;
    left: 17rem;
    bottom: 9rem;
    width: 17.6rem;
    height: 17.6rem;
    transform: rotate(-30deg);
    opacity: 0.5;

    @media ${device.mobile} {
      width: 15.06vw;
      height: 15.06vw;
      left: 5rem;
    }
  }

  .__spinWhite {
    left: 75rem;
    top: 25.4rem;
    position: absolute;
    width: 7.339rem;
    height: 7.339rem;
    transform: rotate(-30deg);
    opacity: 0.7;

  }

  .__spinPurple2 {
    right: 12rem;
    bottom: 23rem;
    position: absolute;
    width: 12.145rem;
    height: 12.145rem;
    opacity: 0.5;
    transform: rotate(30deg);

    @media ${device.mobile} {
      display: none;
    }
  }
`
export default Scroll2;
