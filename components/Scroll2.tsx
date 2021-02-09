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
import { media } from '../styles/theme';

const Scroll2 = () => (
  <Box>
    <Container>
      <Ellipse />

      <Padding>
        <div className="__title">we&apos;re very capable:</div>

        <Keywords>
          <div data-aos="fade-up">
            <Integrate />
            <div className="__word">Integrate</div>
            <div className="__sub">Multi-Cloud Accounts</div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            style={{ marginLeft: '6rem' }}
          >
            <Improve />
            <div className="__word">Improve</div>
            <div className="__sub">Operation Efficiency</div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            style={{ marginLeft: '6rem' }}
          >
            <Manage />
            <div className="__word">Manage</div>
            <div className="__sub">Cloud Spend</div>
          </div>
        </Keywords>
      </Padding>
    </Container>
  </Box>
);

/**
 * lotties
 */
const Ellipse = () => {
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

  return (
    <div className="__ellipse">
      <Ellipse3 />

      <Lottie
        options={optionsSpinPurple}
        style={{
          position: 'absolute',
          left: '17rem',
          bottom: '9rem',
          width: '17.6rem',
          height: '17.6rem',
          transform: 'rotate(-30deg)',
          opacity: '0.5',
        }}
      />
      <Lottie
        options={optionsSpinWhite}
        style={{
          left: '75rem',
          top: '25.4rem',
          position: 'absolute',
          width: '7.339rem',
          height: '7.339rem',
          transform: 'rotate(-30deg)',
          opacity: '0.7',
        }}
      />
      <Lottie
        options={optionsSpinPurple}
        style={{
          right: '12rem',
          bottom: '23rem',
          position: 'absolute',
          width: '12.145rem',
          height: '12.145rem',
          opacity: '0.5',
          transform: 'rotate(30deg)',
        }}
      />
    </div>
  );
};

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Padding = styled.div`
  padding: 20rem 19rem;
  display: flex;
  flex-direction: column;
  ${media[768]} {
    padding: 20rem 7rem;
  }
`;

const Container = styled.div`
  width: 144rem;
  height: 96rem;
  position: relative;
  .__title {
    color: ${({ theme }) => theme.color.pink};
    font-weight: 500;
    opacity: 0.8;
    font-size: 2.6rem;
    text-transform: uppercase;
    ${media[768]} {
      font-size: 2.4rem;
    }
  }
  .__ellipse {
    position: absolute;
    top: 18rem;
    left: 5rem;
    ${media[768]} {
      left: -10rem;
    }
  }
`;

const Keywords = styled.div`
  display: flex;
  margin-top: 19rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.primary[100]};
  .__word {
    margin-top: 1rem;
    font-size: 4.6rem;
    color: ${({ theme }) => theme.color.primary[300]};
    ${media[768]} {
      font-size: 3.2rem;
    }
  }
  .__sub {
    font-size: 3rem;
    margin-top: 1.5rem;
    letter-spacing: -0.02em;
    ${media[768]} {
      font-size: 3rem;
    }
  }
`;

export default Scroll2;
