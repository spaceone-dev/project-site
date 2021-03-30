import styled from 'styled-components';
import Lottie from 'react-lottie';
import {Cloud, Plugin, OpenAPI} from '../public/assets';
import {device} from '../styles/theme';

const optionsCloudNative = {
    animationData: Cloud,
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        progressiveLoad: true,
    },
};
const optionsPlugin = {
    animationData: Plugin,
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        progressiveLoad: true,
    },
};
const optionsOpenAPI = {
    animationData: OpenAPI,
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        progressiveLoad: true,
    },
};

const Scroll4 = () => {
    return (
        <Box>
            <Content>
                <h3>our strength:</h3>
                <ul className="__strength__list">
                    <li data-aos="fade-up" data-aos-once="true">
                        <figure className="__ico__cloud">
                            <Lottie options={optionsCloudNative}/>
                        </figure>
                        <div className="__keyword">Cloud Native</div>
                        <div className="__describe">
                            We are architecting Cloud Native-Based Technology;
                            <i style={{fontStyle: 'italic'}}> K8S, Helm, Prometheus, gRPC, Istio.</i>
                        </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                        <figure className="__ico__plugin">
                            <Lottie options={optionsPlugin}/>
                        </figure>
                        <div className="__keyword">Plugin Architecture</div>
                        <div className="__describe">
                            You can build your own plugin and share with others. You also
                            can find various plugins including multi-cloud service, power
                            managements, even scheduling over resources.
                        </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
                        <figure className="__ico__openapi">
                            <Lottie options={optionsOpenAPI}/>
                        </figure>
                        <div className="__keyword">Open API</div>
                        <div className="__describe">
                            We offer you new perspectives on development environments;
                            Expand and customize with open APIs if your need arise.
                        </div>
                    </li>
                </ul>
            </Content>
        </Box>
    );
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
    height: 102.4rem;
  }

  @media ${device.mobile} {
    padding: 9.8rem 0 9rem;
  }
`;

const Content = styled.div`
  width: 100vw;
  max-width: 106rem;

  h3 {
    margin-bottom: 4.4rem;
    opacity: 0.8;
    color: ${({theme}) => theme.color.pink};
    font-weight: 600;
    font-size: 2.6rem;
    text-transform: uppercase;
  }

  .__strength__list {
    display: flex;
    justify-content: space-between;
    width: 106rem;

    li {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      width: 33rem;
      padding: 5rem 2.5rem 3.6rem;
      box-sizing: border-box;

      ::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: #001b33;
        opacity: 0.3;
        box-shadow: 0px 4px 15px rgba(0, 92, 179, 0.3);
        border-radius: 2rem;
      }

      figure {
        width: 14rem;
        height: 14rem;
        margin: 0 auto;
      }

      .__keyword {
        margin-top: 2.5rem;
        margin-bottom: 1.2rem;
        font-weight: 400;
        font-size: 3rem;
        line-height: 3.5rem;
        letter-spacing: -0.01em;
        color: ${({theme}) => theme.color.primary[300]};
      }

      .__describe {
        padding-right: 2.3rem;
        font-family: Helvetica Neue;
        font-weight: 300;
        font-size: 1.9rem;
        line-height: 130%;
        opacity: 0.8;
        color: ${({theme}) => theme.color.primary[200]};
      }
    }

    li:nth-child(3) {
      .__ico__openapi {
        width: 17rem;
        height: 17rem;
        margin-top: -.5rem;
      }

      .__keyword {
        margin-top: 0;
      }
    }
  }

  @media ${device.tablet} {
    width: 100%;
    height: auto;
    padding: 0 5rem;

    h3 {
      margin-bottom: 3.8rem;
      font-size: 2.2rem;
    }

    .__strength__list {
      width: 100%;
      flex-wrap: wrap;
      margin-top: 0;
      box-sizing: border-box;

      li {
        width: 47.7%;
        padding: 0 2rem 3.3rem;
        margin-bottom: 2rem;

        figure {
          width: 11.4rem;
          height: 11.4rem;
        }

        .__keyword {
          margin-top: 2rem;
          margin-bottom: .8rem;
        }
      }
    }
  }

  @media ${device.mobile} {
    width: 100%;
    padding: 0 3rem;

    h3 {
      font-size: 2rem;
    }

    .__strength__list {
      width: 100%;
      flex-direction: column;
      margin-top: 0;

      li {
        width: 100%;
        min-height: auto;
        padding-top: 1rem;
        padding-bottom: 2rem;
        margin-bottom: 3rem;

        figure {
          width: 8.5rem;
          height: 8.5rem;
        }

        .__keyword {
          margin-top: 1rem;
          margin-bottom: .4rem;
          font-size: 2.2rem;
        }

        .__describe {
          font-size: 1.4rem;
          line-height: 1.29;
        }
      }

      li:nth-child(3) {
        .__ico__openapi {
          width: 10.5rem;
          height: 10.5rem;
        }
      }
    }
  }
`;
export default Scroll4;
