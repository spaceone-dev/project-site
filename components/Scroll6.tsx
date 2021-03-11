import styled from 'styled-components';
import Lottie from 'react-lottie';
import { ExternalLinkGreen, Spaceship } from '../public/assets';
import { device } from '../styles/theme';

const Scroll6 = () => {
  const optionsSpaceship = {
    animationData: Spaceship,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box>
      <Container>
        <div className="__ghInfo">
          <div className="__info"
              data-aos="fade-up"
          >
            <span className="__ghInfo__num">76</span>
            <span style={{ marginLeft: '1rem' }}>Enrolled Projects</span>
          </div>
          <div className="__info"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span className="__ghInfo__num">28</span>
            <span style={{ marginLeft: '1rem' }}>Contributors</span>
            <div className="__ghInfo__link">
              View Contribution Guide
              <span style={{
                marginLeft: '0.4rem',
                marginTop: '0.2rem'
              }}
              >
                <ExternalLinkGreen />
              </span>
            </div>
          </div>
        </div>
        <div className="__content">
          SpaceONE’s Mission is to Accelerate the Multi-Cloud Native Technology
          for Sustainable Ecosystem.
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <LottieWrap>
            <Lottie options={optionsSpaceship} />
          </LottieWrap>
          <div className="__gradient">Climb Aboard the <span style={{ fontWeight: 600 }}>SpaceONE</span>ship</div>
        </div>
      </Container>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  height: 96rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled.div`
  width: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: -0.02em;
  
  @media ${device.mobile}{
    width:100%;
  }
  .__ghInfo {
    padding-bottom: 5rem;
    width: 100%;
    display: flex;
    font-size: 2.2rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.color.gray[300]};
    border-bottom: .1rem solid ${({ theme }) => theme.color.primary[300]};
    justify-content: space-between;
    flex-wrap:wrap;

    @media ${device.mobile} {
      width:calc(100% - 5rem);
    }
    &__num {
      font-family: Helvetica Neue;
      font-size: 6rem;
      font-weight: 400;
      line-height: 7.2rem;
      color: ${({ theme }) => theme.color.primary[300]};
    }
    &__link {
      font-weight: 300;
      cursor: pointer;
      font-size: 1.7rem;
      color: ${({ theme }) => theme.color.green};
      display: flex;
      align-items: center;
      letter-spacing: -0.01em;
      &:hover {
        text-decoration: underline;
      }
    }
    .__info {
      width:50%;
       
      @media ${device.mobile} {
        width: 100%;
        margin-bottom: 2rem;
        padding: 0 4.2rem;
      }
    }
  }
  .__content {
    font-weight: 400;
    margin-top: 5rem;
    color: ${({ theme }) => theme.color.primary[200]};
    font-size: 3.7rem;
    line-height: 130%;
    opacity: 0.8;
    letter-spacing: -0.01em;
    text-align: center;
    
    @media ${device.mobile} {
      padding:0 2.7rem;
      font-size:2.2rem;
      line-height: 1.27;
    }
  }
  .__gradient {
    margin-top: -2rem;
    font-weight: 500;
    font-size: 3.4rem;
    background: linear-gradient(to right, #65cba0, #cf88a0, #5ca2b1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    @media ${device.mobile} {
      width: 25.5rem;
      font-size: 2.4rem;
      line-height :1.1;
      text-align: center;
    }
  }
`;

const LottieWrap = styled.div`
  width: 14rem;
  height: 14rem;
  margin: 7.1rem auto 0;
  
  @media ${device.mobile} {
    margin-top: 2rem;
  }
`
export default Scroll6;
