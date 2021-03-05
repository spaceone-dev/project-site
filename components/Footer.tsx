import styled from 'styled-components';
import { SOneManFooter } from '../public/assets';
import { device } from '../styles/theme';

const Footer = () => (
  <Container>
    <Padding>
      <div className="__card __copyright">
        <SOneManFooterWrap>
          <SOneManFooter />
        </SOneManFooterWrap>
        <div className="__card__300">
          SpaceONE <div /> Copyright 2021
          <div
            className="__card__100"
            style={{ marginTop: '1.8rem', fontSize: '1.4rem' }}
          >
            Sponsored by<span className="__card__300"> MEGAZONE Cloud</span>
          </div>
        </div>
      </div>
      <div className="__card __contact">
        <div className="__card__300">
          Contact
          <div className="__card__100">support@spaceone.dev</div>
        </div>
      </div>
      <div className="__card __address">
        <div className="__card__300">
          Seoul
          <div className="__card__100">46, Nonhyeon-ro 85-gil <br />Gangnam-gu, Seoul, Korea</div>
          <div className="__card__100">
            +82 1644-2243
          </div>
        </div>
      </div>
    </Padding>
  </Container>
);

const Container = styled.div`
  overflow: hidden;
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 43rem;
  background: #000f1c;
  font-family: Helvetica Neue;
  color: ${({ theme }) => theme.color.primary[100]};
  
  @media ${device.mobile} {
    height:auto; 
  }
`;

const SOneManFooterWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%);
`

const Padding = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position:relative;
  width: 106rem;
  height: 100%;
  padding-top: 17.6rem;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 83rem;
    padding: 16rem 1rem 10rem;
  }
  @media ${device.mobile} {
    padding: 16rem 3rem 10rem;
  }
  .__card {
    position: relative;
    color: #ffffff;
    line-height: 7rem;
    box-sizing: border-box;
    flex: 1; 
    
    @media ${device.mobile} {
      flex: 0 1 50%;
    }
    
    &__big {
      font-size: 7.2rem;
      @media ${device.tablet} {
        font-size: 6.8rem;
      }
    }
    &__100 {
      font-size: 2rem;
      font-weight: 100;
      line-height: 2.5rem;
      margin-top: 1rem;
      font-size: 1.8rem;
      
      @media ${device.mobile} {
        font-size: 1.3rem;
        line-height: 1.15;
      }
    }
    &__300 {
      font-size: 2rem;
      font-weight: 300;
      line-height: 2.4rem;
      
      @media ${device.mobile} {
        font-size: 1.6rem;
        line-height: 1.2;
      }
    }
    &__tel {
      @media ${device.mobile} {
        font-size: 1.3rem;
        line-height: 1.85;
      }
      
    }
    &__logo {
      position: relative;
      color: #ffffff;
      line-height: 7rem;
      @media ${device.tablet} {
        width: 25rem;
      }
    }
  }
  .__copyright {
    @media ${device.mobile} {
      flex: 1 0 100%;
      margin-bottom:6.2rem;
    }
  }
  .__megazone {
    margin-bottom: -1rem;
  }
`;

export default Footer;
