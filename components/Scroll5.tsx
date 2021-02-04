import styled from 'styled-components';
import Lottie from 'react-lottie';
import {
  // svg
  Universe,
  Upcoming,
  // json
  SpinPurple,
  SpinWhite,
  SpinBlue,
} from '../public/assets';
import { media } from '../styles/theme';

const Scroll5 = () => (
  <Box>
    <Container>
      <Container>
        <UniverseGroup>
          <Lotties />
          <Universe />
        </UniverseGroup>
        <div data-aos="fade" data-aos-delay="500" className="__upcoming">
          <Upcoming />
        </div>
      </Container>
      <Background />
    </Container>
  </Box>
);

/**
 * lotties
 */
const Lotties = () => {
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
  const optionsSpinBlue = {
    animationData: SpinBlue,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Lottie
        options={optionsSpinPurple}
        style={{
          position: 'absolute',
          width: '11.2rem',
          height: '11.2rem',
          left: '8rem',
          top: '37rem',
          transform: 'rotate(70.54deg)',
          opacity: '0.5',
        }}
      />
      <Lottie
        options={optionsSpinPurple}
        style={{
          position: 'absolute',
          width: '17.6rem',
          height: '17.6rem',
          left: '40rem',
          top: '67rem',
          opacity: '0.5',
        }}
      />
      <Lottie
        options={optionsSpinBlue}
        style={{
          position: 'absolute',
          width: '13.3rem',
          height: '13.3rem',
          left: '16rem',
          bottom: '24rem',
          opacity: '0.5',
          transform: 'matrix(0.87, -0.5, 0.5, 0.87, 0, 0)',
        }}
      />
      <Lottie
        options={optionsSpinBlue}
        style={{
          position: 'absolute',
          width: '9rem',
          height: '9rem',
          left: '62.5rem',
          bottom: '25rem',
          transform: 'rotate(-90deg)',
          opacity: '0.5',
        }}
      />
      <Lottie
        options={optionsSpinWhite}
        style={{
          position: 'absolute',
          width: '7.277rem',
          height: '7.277rem',
          left: '87rem',
          top: '48rem',
          opacity: '0.2',
          transform: 'rotate(-17.7deg)',
        }}
      />
    </>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: #001b33;
  opacity: 0.5;
  position: absolute;
  left: 0;
  top: 0;
`;

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  ${media[768]} {
    left: -22rem;
  }
  .__upcoming {
    margin-left: 5rem;
  }
`;

const UniverseGroup = styled.div`
  position: relative;
`;

export default Scroll5;
