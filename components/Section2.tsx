import styled from 'styled-components';
import {device} from '../styles/theme';
import {Ellipse3, Integrate, Improve, Manage,} from '../public/assets';

const Section2 = () => {
    return (
        <Box>
            <Content>
                <h3>we&apos;re very capable:</h3>
                <div className="__keywords">
                    <div className="__keyword __keyword1">
                        <figure><Integrate/></figure>
                        <em className="__word">Integrate</em>
                        <div className="__sub">Multi-Cloud Accounts</div>
                    </div>
                    <div className="__keyword __keyword2">
                        <figure><Improve/></figure>
                        <em className="__word">Improve</em>
                        <div className="__sub">Operation Efficiency</div>
                    </div>
                    <div className="__keyword __keyword3">
                        <figure><Manage/></figure>
                        <em className="__word">Manage</em>
                        <div className="__sub">Cloud Expense</div>
                    </div>
                </div>
            </Content>
            <Figures>
                <figure className="__ellipse3"><Ellipse3/></figure>
            </Figures>
        </Box>
    )
};

const Box = styled.section`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 96rem;

  @media ${device.tablet} {
    min-height: 102.4rem;
  }

  @media ${device.mobile} {
    min-height: 81.2rem;
    padding-top: 0;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 109rem;
  padding: 0 9.8%;

  h3 {
    margin-bottom: 18.3rem;
    color: ${({theme}) => theme.color.pink};
    font-weight: 600;
    opacity: 0.8;
    font-size: 2.6rem;
    text-transform: uppercase;
  }

  .__keywords {
    display: flex;
    font-weight: 400;
    color: ${({theme}) => theme.color.primary[100]};
  }

  .__keyword {
    width: 34rem;

    figure {
      width: 5rem;
      height: 5rem;
    }

    .__word {
      display: inline-block;
      margin-top: .8rem;
      margin-bottom: .8rem;
      font-size: 4.6rem;
      color: ${({theme}) => theme.color.primary[300]};
    }

    .__sub {
      font-size: 3rem;
      letter-spacing: -0.02em;
    }
  }

  @media ${device.desktop} {
    .__keywords {
      margin-bottom: 15rem;
    }

    .__keyword2 {
      margin-right: 2vw;
      margin-left: 2vw;
    }
  }

  @media ${device.tablet} {
    width: 100vw;
    padding-left: 5rem;

    h3 {
      margin-bottom: 9rem;
    }

    .__keywords {
      flex-direction: column;
      margin-top: 5rem;
    }

    .__keyword {
      margin-bottom: 4rem;

      .__word {
        font-size: 4.6rem;
        line-height: 1.17;
      }

      .__sub {
        font-size: 3rem;
        line-height: 1.17;
      }
    }
  }

  @media ${device.mobile} {
    width: 100vw;
    padding-left: 3rem;

    h3 {
      margin-bottom: 5rem;
      font-size: 2rem;

    }

    .__keywords {
      flex-direction: column;

      .__keyword {

        margin-bottom: 4rem;
        width: auto;
      }

      figure {
        width: 3.4rem;
        height: 3.4rem;
      }

      .__word {
        font-size: 3.2rem;
        line-height: 1.1;
      }

      .__sub {

        font-size: 2rem;
      }
    }
  }
`;

const Figures = styled.figure`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  max-width: 134rem;
  transform: translate(-50%, -50%);

  .__ellipse3 {
    width: 100%;
    max-width: 129rem;
    margin: 1rem auto 0;
  }

  @media ${device.tablet} {
    overflow: hidden;
    max-width: 120vw;
  }

  @media ${device.mobile} {
    overflow: hidden;
    width: 80rem;
    max-width: 120vw;
  }
`
export default Section2;
