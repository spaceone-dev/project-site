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
    box-sizing: border-box;
  }

  @media ${device.mobile} {
    min-height: 81.2rem;
    padding: 48vw 0;
    box-sizing: border-box;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100vw;
  max-width: 106rem;
  box-sizing: border-box;

  h3 {
    margin-bottom: 3rem;
    color: ${({theme}) => theme.color.pink};
    font-weight: 600;
    opacity: 0.8;
    font-size: 2.6rem;
    text-transform: uppercase;
  }

  @media ${device.tablet} {
    h3 {
      padding:0 5rem;
    }
  }

  @media ${device.mobile} {
    width: 100vw;

    h3 {
      padding: 0 3rem;
      font-size: 2rem;
    }
  }
`;

export default Scroll3;
