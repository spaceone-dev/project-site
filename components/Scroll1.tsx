import {useState} from 'react';
import styled from 'styled-components';
import {device} from '../styles/theme';
import Lottie from 'react-lottie';
import {
    Ellipse1,
    Ellipse2,
    ExternalLink,
    ExternalLinkFill,
    GithubLogo,
    GithubLogoFill,
    Wave1,
    Wave2,
    Github,
    Spaceman,
} from '../public/assets';

const optionsSpaceMan = {
    animationData: Spaceman,
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};
const Scroll1 = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <Box>
            <Content>
                <h2>Manage All<br/>Cloud Resources<br/>in <span className="__gradient">One Platform</span></h2>
                <div className="__sub">SpaceONE is an Open-Source Platform and Enables Integrated Management of Multi-Cloud.</div>
                <a
                    className="__btn__git"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    role="link"
                    tabIndex={0}
                    onClick={() => window.open('https://github.com/spaceone-dev')}
                    onKeyPress={() => window.open('https://github.com/spaceone-dev')}
                >
                    <span className="__btn__git__inner">
                        <span className="__icon__lft">{isHover ? <GithubLogoFill/> : <GithubLogo/>}</span>
                        <em className="__btn__git__inner__txt">GitHub</em>
                        <span className="__icon__rgt">{isHover ? <ExternalLinkFill/> : <ExternalLink/>}</span>
                    </span>
                    <span className="__btn__git__border"><Github/></span>
                </a>
            </Content>
            <Figures>
                <div className="__wave__wrap">
                    <div className="__wave1"><Wave1/></div>
                    <div className="__wave2"><Wave2/></div>
                </div>
                <div className="__ellipse1"><div className="__orbit"><Ellipse1/></div></div>
                <div className="__ellipse2"><Ellipse2/></div>
                <div className="__spaceman"><Lottie options={optionsSpaceMan}/></div>
            </Figures>
        </Box>
    );
};
const Box = styled.section`
  overflow: hidden;
  position: relative;
  width: 100%;
  min-height: 96rem;

  @media ${device.tablet} {
    min-height: 102.4rem;
  }

  @media ${device.mobile} {
    min-height: 81.2rem;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  letter-spacing: -0.01em;
  text-align: center;
  color: ${({theme}) => theme.color.primary[200]};

  @media ${device.desktop} {
    max-width: 109rem;
  }

  h2 {
    padding-top: 23rem;
    font-size: 7rem;
    font-weight: 400;

    @media ${device.mobile} {
      font-size: 3.4rem;
      line-height: 1.23;
      padding-top: 18rem;
    }

    .__gradient {
      background: linear-gradient(to right, #65cba0, #cf88a0, #5ca2b1);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .__sub {
    width: 52.2rem;
    margin: 0 auto;
    padding-top: 3rem;
    font-size: 2.2rem;
    line-height: 130%;
    opacity: 0.7;

    @media ${device.mobile} {
      width: auto;
      padding: 0 15%;
      margin-top: 2.4rem;
      font-size: 1.8rem;
      line-height: 1.3;
    }
  }

  .__btn__git {
    display: inline-block;
    position: relative;
    width: 13.4rem;
    height: 4rem;
    margin-top: 13.2rem;
    cursor: pointer;
    color: white;
    border-radius: 3rem;

    @media ${device.tablet} {
      margin-top: 30.5rem;
    }

    @media ${device.mobile} {
      margin-top: 19.4rem;
    }

    &:hover {
      background: linear-gradient(90deg,
      #65cba0 0%,
      #cf88a0 52.6%,
      #5ca2b1 100%);
      color: #001b33;
    }

    &__inner {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 1.6rem;
      font-weight: 400;
      font-family: "Helvetica Neue";
      letter-spacing: 0.04em;

      &__txt {
        margin-left: .8rem;
      }
    }

    .__icon__rgt {
      margin-left: .4rem;
      margin-top: .1rem;
    }
  }

  &__border {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`

const Figures = styled.figure`
  position: absolute;
  top: 0;
  z-index: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translateX(-50%);

  @media ${device.mobile} {
    max-width: 100vw;
  }

  .__wave__wrap {
    position: absolute;
    top: 0;
    left: -10vw;
    width: 120vw;
    opacity: 0.5;
    transform: matrix(1, -0.1, 0.07, 1, 0, 0);

    @media ${device.desktop} {
      left: 0;
      opacity: 1;
      transform: initial;
    }

    .__wave1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      @media ${device.desktop} {
        width: 144rem;
        height: 96.4rem;
      }
    }

    .__wave2 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      @media ${device.desktop} {
        width: 143.6rem;
        height: 84.7rem;
      }
    }
  }

  .__ellipse1 {
    position: absolute;
    top: 11.2rem;
    left: 0;
    width: 31rem;
    height: 57rem;

    @media ${device.mobile} {
      width: 29rem;
      height: 29rem;
      top: 10rem;
      left: -13rem;
    }

    .__orbit {
      width: 100%;
      height: 100%;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  .__ellipse2 {
    position: absolute;
    width: 31.9rem;
    height: 29.4rem;
    top: 0;
    left:50%;
    margin-left: 19rem;
    transform: rotate(-5.95deg);

    @media ${device.tablet} {
      width: 29.4rem;
      height: 26.7rem;
      margin-left: 7rem;
    }

    @media ${device.mobile} {
      top: 5rem;
      width: 15.2rem;
      height: 13.8rem;
      margin-left: 3rem;
    }
  }

  .__spaceman {
    position: absolute;
    width: 20rem;
    height: 20rem;
    top: 59rem;
    left: 50%;
    margin-left: 8rem;
    opacity: .9;

    @media ${device.tablet} {
      top: 60rem;
      width: 18rem;
      height: 18rem;
      margin-left: -9rem;
    }

    @media ${device.mobile} {
      top: 43rem;
      width: 14rem;
      height: 14rem;
      margin-left: -7rem;
    }
  }
}
`

export default Scroll1;