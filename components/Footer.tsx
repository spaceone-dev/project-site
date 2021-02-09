import styled from 'styled-components';
import { SOneManFooter } from '../public/assets';
import { media } from '../styles/theme';

const Footer = () => (
  <div style={{ position: 'relative' }}>
    <Container>
      <Padding>
        <div className="__card">
          <div style={{ position: 'absolute', left: '0', top: '-8rem' }}>
            <SOneManFooter />
          </div>
          <div className="__card__300">
            SpaceONE <div />
            Copyright 2021
            <div
              className="__card__100"
              style={{ marginTop: '1.8rem', fontSize: '1.4rem' }}
            >
              Sponsored by<span className="__card__300"> MEGAZONE Cloud</span>
            </div>
          </div>
        </div>
        <div className="__card">
          <div className="__card__300">
            Contact
            <div className="__card__100">support@spaceone.dev</div>
          </div>
        </div>
        <div className="__card">
          <div className="__card__300">
            Seoul
            <div className="__card__100">
              46, Nonhyeon-ro 85-gil
              <div />
              Gangnam-gu, Seoul, Korea
            </div>
            <div className="__card__100" style={{ fontSize: '1.7rem' }}>
              +82 1644-2243{' '}
            </div>
          </div>
        </div>
      </Padding>
    </Container>
  </div>
);

const Container = styled.div`
  font-family: Helvetica Neue;
  color: ${({ theme }) => theme.color.primary[100]};
  width: auto;
  height: 50vh;
  background: #000f1c;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Padding = styled.div`
  width: 100%;
  padding: 19rem;
  display: flex;
  align-content: space-between;
  ${media[768]} {
    padding: 6rem;
  }
  .__card {
    width: 100%;
    position: relative;
    color: #ffffff;
    line-height: 7rem;
    &__big {
      font-size: 7.2rem;
      ${media[768]} {
        font-size: 6.8rem;
      }
    }
    &__100 {
      font-size: 2rem;
      font-weight: 100;
      line-height: 2.5rem;
      margin-top: 1rem;
      font-size: 1.8rem;
    }
    &__300 {
      font-size: 2rem;
      font-weight: 300;
      line-height: 2.4rem;
    }
    &__logo {
      position: relative;
      color: #ffffff;
      line-height: 7rem;
      ${media[768]} {
        width: 25rem;
      }
    }
  }
  .__megazone {
    margin-bottom: -1rem;
  }
`;

export default Footer;
