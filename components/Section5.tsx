import styled from 'styled-components';
import { device } from '../styles/theme';

const Section5 = () => (
    <Box>
        <div className="__universe" />
        <Content>
            <h3>our <br />universe</h3>
        </Content>
    </Box>
);

const Box = styled.section`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 96rem;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100%;
    background: #001b33;
    opacity: 0.5;
  }

  .__universe {
    position: relative;
    z-index: 5;
    width: auto;
    height: 100%;
    margin-left: -55rem;
    background:url("/assets/universe_desktop.svg") no-repeat center / auto;
    
    @media ${device.tablet} {
      margin-left: -52rem;
      background-image:url("/assets/universe_tab.svg")
    }

    @media ${device.mobile} {
      margin-left:-33rem;
      background-image:url("/assets/universe_mo.svg")
    }
  }

  @media ${device.tablet} {
    height: 102.4rem;
  }

  @media ${device.mobile} {
    height: 81.2rem;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  h3 {
    position: absolute;
    z-index: 2;
    opacity: 0.8;
    color: ${({ theme }) => theme.color.pink};
    font-weight: 600;
    font-size: 2.6rem;
    text-transform: uppercase;
    text-align: center;
  }

  .__universewrap {
    position: relative;
    z-index: 1;
    border: solid 1px white;

    img {
      diaplay: inline-block;
      width: 100%;
    }
  }

  @media ${device.desktop} {
    h3 {
      top: 46rem;
      left: 50%;
      margin-left: -50rem;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1280px) {
    h3 {
      margin-left: -47rem;
    }
  }

  @media ${device.tablet} {
    width: 100vw;
    h3 {
      top: 15rem;
      left: 0;
      width: 100%;
    }
  }

  @media ${device.mobile} {
    width: 100vw;
    padding-top: 32vw;
    padding-bottom: 4vw;

    h3 {
      top: 12rem;
      left: 0;
      width: 100%;
      font-size: 2rem;
    }

    .__universewrap {
      display: block;
      margin-left: -33rem;
      border: solid 1px yellow;
    }
  }
}`;
export default Section5;
