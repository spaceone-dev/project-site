import styled from 'styled-components';
import Lottie from 'react-lottie';
import {
    // svg
    UniverseDesktop,
    UniverseTablet,
    UniverseMobile,
    Upcoming,
    UpcomingM,
    // json
    SpinPurple,
    SpinWhite,
    SpinBlue,
} from '../public/assets';
import {device} from '../styles/theme';

// const optionsSpinPurple = {
//     animationData: SpinPurple,
//     loop: true,
//     autoplay: true,
//     rendererSettings: {
//         preserveAspectRatio: 'xMidYMid slice',
//     },
// };
// const optionsSpinWhite = {
//     animationData: SpinWhite,
//     loop: true,
//     autoplay: true,
//     rendererSettings: {
//         preserveAspectRatio: 'xMidYMid slice',
//     },
// };
// const optionsSpinBlue = {
//     animationData: SpinBlue,
//     loop: true,
//     autoplay: true,
//     rendererSettings: {
//         preserveAspectRatio: 'xMidYMid slice',
//     },
// };
const Scroll5 = () => (
    <Box>
        <Content>
            <h3>our universe</h3>
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
        <Figures>
            {/*<figure className="__spinpurple1"><Lottie options={optionsSpinPurple}/></figure>*/}
            {/*<figure className="__spinpurple2"><Lottie options={optionsSpinPurple}/></figure>*/}
            {/*<figure className="__spinblue1"><Lottie options={optionsSpinBlue}/></figure>*/}
            {/*<figure className="__spinblue2"><Lottie options={optionsSpinBlue}/></figure>*/}
            {/*<figure className="__spinwhite"><Lottie options={optionsSpinWhite}/></figure>*/}
        </Figures>
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
    font-weight: 500;
    font-size: 2rem;
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
      margin-left:-65rem;
    }
    h3 {
      top: 48rem;
      left: 50%;
      margin-left: -55rem;
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

const Figures = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100%;

  figure {
    position: absolute;
    left: 50%;
    opacity: 0.5;
  }

  .__spinpurple1 {
    width: 11.2rem;
    height: 11.2rem;
    top: 18.5rem;
    margin-left: -65rem;
    transform: rotate(70.54deg);
  }

  .__spinpurple2 {
    width: 17.6rem;
    height: 17.6rem;
    top: 48rem;
    margin-left: -33rem;
  }

  .__spinblue1 {
    width: 13.3rem;
    height: 13.3rem;
    bottom: 6rem;
    margin-left: -58rem;
    transform: matrix(0.87, -0.5, 0.5, 0.87, 0, 0);
  }

  .__spinblue2 {
    width: 9rem;
    height: 9rem;
    bottom: 7rem;
    margin-left: -10rem;
    transform: rotate(-90deg);
  }

  .__spinwhite {
    width: 7.277rem;
    height: 7.277rem;
    top: 30rem;
    margin-left: 14rem;
    opacity: 0.2;
    transform: rotate(-17.7deg);
  }

  @media ${device.tablet} {
    figure {
      display: none;
    }
  }
  @media ${device.mobile} {
    figure {
      display: none;
    }
  }
`

export default Scroll5;
