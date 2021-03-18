import styled from 'styled-components';
import {SOneManFooter} from '../public/assets';
import {device} from '../styles/theme';

const Footer = () => (
    <Box>
        <Content>
            <figure className="__footer__logo"><SOneManFooter/></figure>
            <div className="__item __copyright">
                <h4>SpaceONE<br/>Copyright 2021</h4>
                <div className="__item__conts __sponsored"><span>Sponsored by </span>MEGAZONE Cloud</div>
            </div>
            <div className="__item __contact">
                <h4>Contact</h4>
                <a href="mailto:webmaster@example.com" target="_blank" className="__item__conts">support@spaceone.dev</a>
            </div>
            <div className="__item __address">
                <h4>Seoul</h4>
                <span className="__item__conts">46, Nonhyeon-ro 85-gil <br/>Gangnam-gu, Seoul, Korea</span>
                <br/>
                <a href="tel:+82 1644-2243" className="__item__conts">+82 1644-2243</a>
            </div>
        </Content>
    </Box>
);

const Box = styled.footer`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 43rem;
  background: #000f1c;
  font-family: Helvetica Neue;
  color: ${({theme}) => theme.color.primary[100]};

  @media ${device.tablet} {
    height: 54rem;
  }
  @media ${device.mobile} {
    height: auto;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 106rem;
  height: 100%;
  padding-top: 17.6rem;
  box-sizing: border-box;

  .__footer__logo {
    display: inline-block;
    position: absolute;
    top: 10rem;
    left: 0;
    width: 6.2rem;
    height: 6.2rem;
  }

  .__item {
    h4 {
      font-size: 2rem;
      line-height: 1.3;
    }

    &__conts {
      display: inline-block;
      margin-top: 1rem;
      font-size: 1.8rem;
      line-height: 1.3;
      font-weight: 300;
    }

    a {
      color: ${({theme}) => theme.color.primary[100]};
      text-decoration: none;
    }

    .__sponsored span {
      font-size: 1.4rem;
    }
  }

  @media ${device.tablet} {
    width: 83rem;
    padding: 16rem 1rem 10rem;

    .__copyright {
      flex-basis: 100%;
      margin-bottom: 10rem;
      margin-top: 1.4rem;
    }
  }

  @media ${device.mobile} {
    padding: 16rem 3rem 10rem;
    
    .__footer__logo {
      width: 5rem;
      height: 5rem;
      left: 3rem;
    }

    .__item {
      flex-basis: 50%;
      flex-shrink: 0;

      h4 {
        font-size: 1.6rem;
        line-height: 1.4;
      }

      &__conts {
        margin-top: 1rem;
        font-size: 1.3rem;
        letter-spacing: .01rem;
      }

      .__sponsored {
        margin-top: 2rem;
        font-size: 1.5rem;
        font-weight: 400;

        span {
          display: block;
          font-size: 1.2rem;
          font-weight: 300;
        }
      }
    }

    .__copyright {
      flex-basis: 100%;
      margin-bottom: 6rem;
    }
  }
`;

export default Footer;
