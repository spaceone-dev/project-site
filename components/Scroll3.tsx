import styled from 'styled-components';
import {device} from '../styles/theme';

import Swiper from './Swiper';

const Scroll3 = () => (
    <Box>
        <Content>
            <h3>our approach:</h3>
            <div className="__swiperWrap">
                <Swiper/>
            </div>
        </Content>
    </Box>
);

const Box = styled.section`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 96rem;
  background-color: rgba(0, 27, 51, .5);

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
  max-width: 106rem;
  box-sizing: border-box;

  h3 {
    margin-bottom: 5rem;
    color: ${({theme}) => theme.color.pink};
    font-weight: 500;
    opacity: 0.8;
    font-size: 2.6rem;
    text-transform: uppercase;
  }

  @media ${device.tablet} {
    width: 76.8rem;
    padding: 0 3rem;

    .__swiperWrap {
      width: 70.8rem;
    }
  }

  @media ${device.mobile} {
    width: 100vw;
    padding: 0 3rem;

    h3 {
      box-sizing: border-box;
    }
  }
`;

export default Scroll3;
