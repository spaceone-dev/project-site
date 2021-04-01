import styled from 'styled-components';
import {device} from '../styles/theme';
import {UniverseDesktop, UniverseTablet, UniverseMobile,} from '../public/assets';

const Section5 = () => (
    <Box>
        <Content>
            <h3>our <br></br>universe</h3>
            <div className="__universewrap __only__desktop">
                <UniverseDesktop/>
            </div>
            <div className="__universewrap __only__tablet">
                <UniverseTablet/>
            </div>
            <div className="__universewrap __only__mobile">
                <UniverseMobile/>
            </div>
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
  
  @media ${device.tablet} {
    height: 102.4rem;
  }
  
  @media ${device.mobile} {
    height: auto;
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
    color: ${({theme}) => theme.color.pink};
    font-weight: 600;
    font-size: 2.6rem;
    text-transform: uppercase;
    text-align: center;
  }

  .__universewrap {
    display: none;
    position: relative;
    z-index: 1;
  }

  @media ${device.desktop} {
    .__only__desktop {
      display: block;
      width: 100%;
      width: 118vw;
      max-width: 171rem;
      margin-left:-55rem;
    }
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

    .__only__tablet {
      display: block;
      margin-left: -52rem;
    }
    
    h3 {
      top: 15rem;
      left:0;
      width: 100%;
    }
  }

  @media ${device.mobile} {
    width: 100vw;
    padding-top: 32vw;
    padding-bottom: 4vw;

    h3 {
      top: 12rem;
      left:0;
      width: 100%;
      font-size: 2rem;
    }

    .__only__mobile {
      display: block;
      margin-left: -33rem;
    }
  }
}`;
export default Section5;
