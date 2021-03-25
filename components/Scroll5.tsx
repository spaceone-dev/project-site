import styled from 'styled-components';
import Lottie from 'react-lottie';
import {
    // svg
    UniverseV2,
    UniverseM,
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
                <div className="__universe"><UniverseV2/></div>
                <div className="__upcoming" data-aos="fade" data-aos-delay="300" data-aos-once="true"><Upcoming/></div>
            </div>
            <div className="__universewrap __only__mobile">
                <div className="__universe"><UniverseM/></div>
                <div className="__upcoming" data-aos="fade" data-aos-delay="300" data-aos-once="true"><UpcomingM/></div>
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
  display: flex;
  align-items: center;
  justify-content: center;
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

  @media ${device.mobile} {
    height: auto;
  }
`;

const Content = styled.div`
  h3 {
    display: none;
    position: relative;
    z-index: 1;
    margin-bottom: 2.6rem;
    opacity: 0.8;
    color: ${({theme}) => theme.color.pink};
    font-weight: 500;
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
  }

  .__universewrap {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .__universe {
    width: 143.4rem;
    margin-left: -58rem;
  }

  .__upcoming {
    margin-left: 12.6rem;
    width: 18.7rem;
  }

  .__only__mobile {
    display: none;
  }

  @media ${device.tablet} {
    width: 100vw;

    .__universe {
      width: 100vw;
      margin-left: -35rem;
    }
  }

  @media ${device.mobile} {
    width: 100vw;
    padding-top: 32vw;
    padding-bottom: 4vw;

    h3 {
      display: block;
      font-size: 2rem;
    }

    .__only__desktop {
      display: none;
    }

    .__only__mobile {
      display: flex;
    }
    
    .__universe {
      display: inline-block;
      width: 162.67vw;
      height: 162.67vw;
      margin-left: -83.47vw;
    }

    .__upcoming {
      width: 33.33vw;
      margin-left: -16vw;

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
