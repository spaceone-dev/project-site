import { useState } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import {
  // svg
  Circle105,
  Circle109,
  Circle110,
  Circle111,
  Circle96,
  Ellipse1,
  Ellipse2,
  Circle171,
  ExternalLink,
  ExternalLinkFill,
  GithubLogo,
  GithubLogoFill,
  Wave1,
  Wave2,
  Github,
  // json
  SpinPurple,
  SpinWhite,
  Spaceman,
  PurplePlanet,
} from '../public/assets';

const Scroll1 = () => {
  const [isHover, setIsHover] = useState(false);
  const optionsSpaceMan = {
    animationData: Spaceman,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box>
      <Container>

        <div className="__wave1">
          <Wave1 />
        </div>
        <div className="__wave2">
          <Wave2 />
        </div>
        <BigEllipse />
        <SmallEllipse />

        <div style={{ position: 'relative' }}>
          <Title>
            <div>
              Manage All
              <div />
              Cloud Resources
              <div />
              in <span className="__gradient">One Platform</span>
            </div>
            <div className="__info">
              <div>SpaceONE is an Open-Source Platform and</div>
              <div />
              <div>Enables Integrated Management of Multi-Cloud.</div>
            </div>
            <Lottie
              options={optionsSpaceMan}
              style={{
                position: 'absolute',
                width: '20rem',
                height: '20rem',
                left: '37rem',
                top: '33rem',
                opacity: '0.8',
              }}
            />
            <div
              className="__git"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <div style={{ position: 'absolute', bottom: '-1rem' }}>
                <Github />
              </div>
              <div className="__git__content">
                <span>{isHover ? <GithubLogoFill /> : <GithubLogo />}</span>
                <span className="__git__content__text">GitHub</span>
                <span style={{ marginLeft: '0.4rem', marginTop: '0.1rem' }}>
                  <span>
                    {isHover ? <ExternalLinkFill /> : <ExternalLink />}
                  </span>
                </span>
              </div>
            </div>
          </Title>
        </div>
      </Container>
    </Box>
  );
};

/**
 * big ellipse
 */
const BigEllipse = () => {
  const optionsPlanet = {
    animationData: PurplePlanet,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const optionsSpinPurple = {
    animationData: SpinPurple,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="__ellipse1">
      <Ellipse1 />

      <Lottie
        options={optionsSpinPurple}
        style={{
          top: '5rem',
          left: '12rem',
          position: 'absolute',
          width: '13.563rem',
          height: '13.563rem',
          transform: 'rotate(-30deg)',
          opacity: '0.7',
        }}
      />
      <Lottie
        options={optionsPlanet}
        style={{
          top: '22rem',
          left: '-6rem',
          position: 'absolute',
          width: '12.6rem',
          height: '12.033rem',
          transform: 'matrix(0.97, 0.21, -0.24, 0.98, 0, 0)',
          opacity: '0.4',
        }}
      />

      <div style={{ position: 'absolute', left: '14rem', bottom: '7.3rem' }}>
        <Circle96 />
      </div>
      <div style={{ position: 'absolute', left: '26rem', bottom: '13rem' }}>
        <Circle105 />
      </div>
      <div style={{ position: 'absolute', left: '10rem', bottom: '1rem' }}>
        <Circle109 />
      </div>
      <div style={{ position: 'absolute', left: '8rem', bottom: '6rem' }}>
        <Circle110 />
      </div>
      <div style={{ position: 'absolute', left: '4.5rem', top: '4rem' }}>
        <Circle111 />
      </div>
    </div>
  );
};

/**
 * small ellipse
 */
const SmallEllipse = () => {
  const optionsSpinWhite = {
    animationData: SpinWhite,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="__ellipse2">
      <Ellipse2 />

      <Lottie
        options={optionsSpinWhite}
        style={{
          top: '12.5rem',
          left: '1.8rem',
          position: 'absolute',
          width: '7.557rem',
          height: '7.557rem',
          transform: 'rotate(-27.22deg)',
          opacity: '0.8',
        }}
      />

      <div style={{ position: 'absolute', left: '0rem', top: '10rem' }}>
        <Circle171 />
      </div>
    </div>
  );
};

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled.div`
  width: 144rem;
  height: 100vh;
  display: flex;
  margin-top: 23rem;
  justify-content: center;
  .__wave1 {
    position: absolute;
    top: 0;
    left: 0;
  }
  .__wave2 {
    position: absolute;
    top: 0;
    left: 0;
  }
  .__ellipse1 {
    position: absolute;
    top: 11.2rem;
    left: 0;
  }
  .__ellipse2 {
    position: absolute;
    top: 0;
    left: 90rem;
  }
  .__git {
    width: 13.4rem;
    height: 4rem;
    top: 13.2rem;
    cursor: pointer;
    position: relative;
    color: white;
    &:hover {
      background: linear-gradient(
        90deg,
        #65cba0 0%,
        #cf88a0 52.6%,
        #5ca2b1 100%
      );
      color: #001b33;
    }
    border-radius: 3rem;

    &__content {
      font-size: 1.6rem;
      position: absolute;
      bottom: 1rem;
      margin-left: 2rem;
      display: flex;

      &__text {
        font-weight: 400;
        font-family: Helvetica Neue;
        letter-spacing: 0.04em;
        margin-left: 0.6rem;
      }
    }
  }
`;

const Title = styled.div`
  font-size: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  letter-spacing: -0.01em;
  text-align: center;
  color: ${({ theme }) => theme.color.primary[200]};
  .__gradient {
    background: linear-gradient(to right, #65cba0, #cf88a0, #5ca2b1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .__info {
    font-size: 2.2rem;
    line-height: 130%;
    opacity: 0.7;
    margin-top: 3rem;
  }
`;

export default Scroll1;
