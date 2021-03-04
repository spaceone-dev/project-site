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
import {device} from '../styles/theme';

const Scroll5 = () => (
    <Box>
        <Container>
            <Container>
                <UniverseGroup>
                    <Lotties/>
                    <Universe className="__universe"/>
                </UniverseGroup>
                <div data-aos="fade" data-aos-delay="500" className="__upcoming">
                    <Upcoming/>
                </div>
            </Container>
            <Background/>
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
                    top: '36rem',
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
                    left: '38.5rem',
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
                    bottom: '23.5rem',
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
                    bottom: '25.5rem',
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
                    left: '86rem',
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

  .__upcoming {
    margin-left: 5rem;
    width: 18.7rem;
    height: 62.6rem;

    @media ${device.tablet} {
      flex-shrink: 0;
      margin-left: 0;
    }
    @media ${device.mobile} {
      flex-shrink: 0;
      width: 18rem;
      margin-left: -3rem;
    }
  }
`;

const UniverseGroup = styled.div`
  position: relative;
  flex-shrink: 1;
  text-align: center;

  .__universe {
    width: 98.9rem;
    height: 130.7rem;

    @media ${device.tablet} {
      margin-left: 0;
    }
    @media ${device.mobile} {
      width: 50rem;
      margin-left: -13rem;
    }
  }
`;


export default Scroll5;
