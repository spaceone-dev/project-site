import styled from 'styled-components';
import {media} from '../styles/theme';
import {device} from '../styles/theme';

import Swiper from './Swiper';

const Scroll3 = () => (
    <Section>
        <Container>
            <h3 className="__title">our approach:</h3>
            <SwiperContainer>
                <Swiper/>
            </SwiperContainer>
        </Container>
        <Background/>
    </Section>
);

const Section = styled.section`
  width: 100%;
  height: 96rem;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media ${device.tablet} {
    height: 80rem;
  }
  @media ${device.mobile} {
    height: 70rem;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 106rem;
  height: 100%;
  padding: 20rem 0 16.4rem;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 76.8rem;
    padding: 10rem 0;
  }
  @media ${device.mobile} {
    width: 100vw;
    padding: 0;
  }

  .__title {
    color: ${({theme}) => theme.color.pink};
    font-weight: 500;
    opacity: 0.8;
    font-size: 2.6rem;
    text-transform: uppercase;

    @media ${device.tablet} {
      padding: 0 3rem;
    }
    @media ${device.mobile} {
      padding: 10rem 3rem 0;
      box-sizing: border-box;
    }
  }
`;

const SwiperContainer = styled.div`
  position: absolute;
  top: 236px;
  left: 50%;
  transform: translateX(-50%);

  @media ${device.tablet} {
    top: unset;
    bottom: 5rem;
  }
  @media ${device.mobile} {
    top: 16.2rem;
    bottom: unset;
  }
`
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: #001b33;
  opacity: 0.5;
  position: absolute;
`;

export default Scroll3;
