import { useState } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie-light-js';
import { device } from '../styles/theme';
import {
    Ellipse1,
    Ellipse2,
    ExternalLink,
    ExternalLinkFill,
    GithubLogo,
    GithubLogoFill,
    Wave1,
    Wave2,
    Spaceman,
} from '../public/assets';

const Section1 = () => {
    const optionsSpaceMan = {
        animationData: Spaceman,
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
            progressiveLoad: true,
        },
    };

    const [isHover, setIsHover] = useState(false);
    return (
        <Box>
            <Content>
                <h2>Manage All<br />Cloud Resources<br />in <span className="__gradient">One Platform</span></h2>
                <div className="__sub">
                    SpaceONE is an Open-Source Platform and Enables Integrated Management of
                    Multi-Cloud.
                </div>
                <a
                    className="__btn__git"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    tabIndex={0}
                    href="https://github.com/spaceone-dev"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="__icon__lft">{isHover ? <GithubLogoFill /> : <GithubLogo />}</span>
                    <em className="__btn__git__txt">GitHub</em>
                    <span className="__icon__rgt">{isHover ? <ExternalLinkFill /> : <ExternalLink />}</span>
                </a>
            </Content>
            <Figures>
                <figure className="__wave__wrap">
                    <figure className="__wave1"><Wave1 /></figure>
                    <figure className="__wave2"><Wave2 /></figure>
                </figure>
                <figure className="__ellipse1"><Ellipse1 /></figure>
                <figure className="__ellipse2"><Ellipse2 /></figure>
                <figure className="__spaceman"><Lottie options={optionsSpaceMan} /></figure>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  letter-spacing: -0.01em;
  text-align: center;
  color: ${({ theme }) => theme.color.primary[200]};

  h2 {
    padding-top: 23rem;
    font-size: 7rem;
    font-weight: 400;

    .__gradient {
      background: linear-gradient(to right, #65cba0, #cf88a0, #5ca2b1);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .__sub {
    width: 52.2rem;
    padding-top: 3rem;
    font-size: 2.2rem;
    line-height: 130%;
    opacity: 0.7;
  }

  .__btn__git {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13.4rem;
    height: 4rem;
    margin-top: 13.2rem;
    cursor: pointer;
    color: white;
    border-radius: 3rem;
    background: url('/assets/github_border.svg') no-repeat center / contain;
    font-size: 1.6rem;
    font-weight: 400;
    font-family: "Helvetica Neue";
    letter-spacing: 0.04em;

    &__txt {
      margin-left: .8rem;
    }

    &:hover {
      background: linear-gradient(90deg,
      #65cba0 0%,
      #cf88a0 52.6%,
      #5ca2b1 100%);
      color: #001b33;
    }

    .__icon__rgt {
      margin-left: .4rem;
      margin-top: .1rem;
    }
  }

  @media ${device.desktop} {
    max-width: 109rem;
  }

  @media ${device.tablet} {
    .__btn__git {
      margin-top: 30.5rem;
    }
  }

  @media ${device.mobile} {
    h2 {
      font-size: 3.4rem;
      line-height: 1.23;
      padding-top: 18rem;
    }

    .__sub {
      width: auto;
      padding: 0 15%;
      margin-top: 2.4rem;
      font-size: 1.8rem;
      line-height: 1.3;
    }

    .__btn__git {
      margin-top: 19.4rem;
    }
  }
`;

const Figures = styled.figure`
  position: absolute;
  top: 0;
  z-index: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translateX(-50%);

  .__wave__wrap {
    position: absolute;
    top: 0;
    left: -10vw;
    width: 120vw;
    opacity: 0.5;
    transform: matrix(1, -0.1, 0.07, 1, 0, 0);

    .__wave1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }

    .__wave2 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }

  .__ellipse1 {
    position: absolute;
    top: 11.2rem;
    left: 0;
    width: 31rem;
    height: 57rem;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .__ellipse2 {
    position: absolute;
    width: 31.9rem;
    height: 29.4rem;
    top: 0;
    left: 50%;
    margin-left: 19rem;
    transform: rotate(-5.95deg);
  }

  .__spaceman {
    position: absolute;
    width: 20rem;
    height: 20rem;
    top: 59rem;
    left: 50%;
    margin-left: 8rem;
    opacity: .9;
  }

  @media ${device.desktop} {
    .__wave__wrap {
      left: 0;
      opacity: 1;
      transform: initial;

      .__wave1 {
        width: 144rem;
        height: 96.4rem;
      }

      .__wave2 {
        width: 143.6rem;
        height: 84.7rem;
      }
    }
  }

  @media ${device.mobile} {
    max-width: 100vw;

    .__ellipse1 {
      width: 29rem;
      height: 29rem;
      top: 10rem;
      left: -13rem;
    }

    .__ellipse2 {
      top: 5rem;
      width: 15.2rem;
      height: 13.8rem;
      margin-left: 3rem;
    }

    .__spaceman {
      top: 43rem;
      width: 14rem;
      height: 14rem;
      margin-left: -7rem;
    }
  }

  @media ${device.tablet} {
    .__ellipse2 {
      width: 29.4rem;
      height: 26.7rem;
      margin-left: 7rem;
    }

    .__spaceman {
      top: 60rem;
      width: 18rem;
      height: 18rem;
      margin-left: -9rem;

    }
  }
}
`;

export default Section1;
