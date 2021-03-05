import styled from 'styled-components';
import Lottie from 'react-lottie';
import {
    // svg
    Ellipse3,
    Integrate,
    Improve,
    Manage,
    // json
    SpinPurple,
    SpinWhite,
} from '../public/assets';
import {device} from '../styles/theme';

const Scroll2 = () => {

    const optionsSpinPurple = {
        animationData: SpinPurple,
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const optionsSpinWhite = {
        animationData: SpinWhite,
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <Box>
            <Container>
                <div className="__ellipse">
                    <div className="EllipseWrap">
                        <Ellipse3/>
                    </div>

                    <Lottie
                        options={optionsSpinPurple}
                        style={{
                            position: 'absolute',
                            left: '17rem',
                            bottom: '9rem',
                            width: '17.6rem',
                            height: '17.6rem',
                            transform: 'rotate(-30deg)',
                            opacity: '0.5',
                        }}
                    />
                    <Lottie
                        options={optionsSpinWhite}
                        style={{
                            left: '75rem',
                            top: '25.4rem',
                            position: 'absolute',
                            width: '7.339rem',
                            height: '7.339rem',
                            transform: 'rotate(-30deg)',
                            opacity: '0.7',
                        }}
                    />
                    <Lottie
                        options={optionsSpinPurple}
                        style={{
                            right: '12rem',
                            bottom: '23rem',
                            position: 'absolute',
                            width: '12.145rem',
                            height: '12.145rem',
                            opacity: '0.5',
                            transform: 'rotate(30deg)',
                        }}
                    />
                </div>

                <Padding>
                    <div className="__title">we&apos;re very capable:</div>

                    <Keywords>
                        <div data-aos="fade-up">
                            <Integrate/>
                            <div className="__word">Integrate</div>
                            <div className="__sub">Multi-Cloud Accounts</div>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="__keyword2"
                        >
                            <Improve/>
                            <div className="__word">Improve</div>
                            <div className="__sub">Operation Efficiency</div>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            <Manage/>
                            <div className="__word">Manage</div>
                            <div className="__sub">Cloud Spend</div>
                        </div>
                    </Keywords>
                </Padding>
            </Container>
        </Box>
    )
};

const Box = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  //height: 96rem;


  @media ${device.desktop} {
    height: 96rem;
  }
`;

const Padding = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20rem 19rem;

  @media ${device.tablet} {
    padding: 20rem 7rem;
  }

  @media ${device.mobile} {
    padding: 0 3rem 10rem;
  }
`;

const Container = styled.div`
  position: relative;
  width: 144rem;
  height: 100%;

  @media ${device.tablet} {
    width: 76.8rem;
  }

  @media ${device.mobile} {
    width: 100vw;
  }

  .__title {
    color: ${({theme}) => theme.color.pink};
    font-weight: 500;
    opacity: 0.8;
    font-size: 2.6rem;
    text-transform: uppercase;
  }

  .__ellipse {
    position: absolute;
    top: 18rem;
    left: 5rem;
    width: 134.1rem;
    height: 64rem;

    @media ${device.tablet} {
      left: -15rem;
    }
    @media ${device.mobile} {
      top: 23rem;
      left: -25rem;
      width: 80rem;
      margin-top: 10rem;
    }
  }
`;

const Keywords = styled.div`
  display: flex;
  margin-top: 15rem;
  font-weight: 400;
  color: ${({theme}) => theme.color.primary[100]};

  > div {
    margin-top: 5rem;
  }

  @media ${device.desktop} {
    width: 114rem;
    .__keyword2 {
      margin-right: 6rem;
      margin-left: 6rem;
    }

    > div {
      flex-shrink: 0;
      margin-top: 5rem;
    }
  }
  @media ${device.tablet} {
    flex-direction: column;
    margin-top: 5rem;
  }
  @media ${device.mobile} {
    flex-direction: column;
    margin-top: 5rem;
    margin: 4rem 0;
  }
}

.__word {
  margin-top: 1rem;
  font-size: 4.6rem;
  color: ${({theme}) => theme.color.primary[300]};

  @media ${device.tablet} {
    font-size: 3.2rem;
  }
  @media ${device.mobile} {
    font-size: 3.2rem;
  }
}

.__sub {
  font-size: 3rem;
  margin-top: 1.5rem;
  letter-spacing: -0.02em;

  @media ${device.tablet} {
    font-size: 3rem;
  }
  @media ${device.mobile} {
    font-size: 2rem;
  }
}
`;

export default Scroll2;
