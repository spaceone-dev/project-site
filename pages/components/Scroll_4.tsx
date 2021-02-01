import Lottie from "react-lottie";
import styled from "styled-components";
import cloud from "../../public/assets/cloud.json";
import plugin from "../../public/assets/plugin architecture.json";
import openAPI from "../../public/assets/openbox.json";
import { media } from "../../styles/theme";

const Scroll_4 = () => {
  const optionsCloudNative = {
    animationData: cloud,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const optionsPlugin = {
    animationData: plugin,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const optionsOpenAPI = {
    animationData: openAPI,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box>
      <Container>
        <Padding>
          <div className="__title">our strength:</div>
          <Cards>
            <Card>
              <div className="__content">
                <Lottie
                  options={optionsCloudNative}
                  style={{
                    position: "absolute",
                    width: "14rem",
                    height: "14rem",
                    top: "5rem",
                    left: "9.5rem",
                  }}
                />
                <div className="__content__keyword">Cloud Native</div>
                <div className="__content__explain">
                  We are architecting Cloud Native-Based Technology;
                  <div style={{ fontStyle: "italic" }}>
                    K8S, Helm, Prometheus, gRPC, Istio.
                  </div>
                </div>
              </div>
              <CardBg />
            </Card>
            <Card>
              <div className="__content">
                <Lottie
                  options={optionsPlugin}
                  style={{
                    position: "absolute",
                    width: "14.4rem",
                    height: "14.4rem",
                    top: "4.8rem",
                    left: "8.7rem",
                  }}
                />
                <div className="__content__keyword">Plugin Architecture</div>
                <div className="__content__explain">
                  You can build your own plugin and share with others. You also
                  can find various plugins including multi-cloud service, power
                  managements, even scheduling over resources.
                </div>
              </div>
              <CardBg />
            </Card>
            <Card>
              <div className="__content">
                <Lottie
                  options={optionsOpenAPI}
                  style={{
                    position: "absolute",
                    width: "20rem",
                    height: "20rem",
                    top: "2rem",
                    left: "6.5rem",
                  }}
                />
                <div className="__content__keyword">Open API</div>
                <div className="__content__explain">
                  We offer you new perspectives on development environments;
                  Expand and customize with open APIs if your need arise.
                </div>
              </div>
              <CardBg />
            </Card>
          </Cards>
        </Padding>
      </Container>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Padding = styled.div`
  padding: 20rem 19rem;
  display: flex;
  ${media[768]} {
    padding: 20rem 7rem;
  }
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 144rem;
  height: 96rem;
  display: flex;
  .__title {
    color: ${({ theme }) => theme.color.pink};
    font-weight: 600;
    opacity: 0.8;
    font-size: 2.6rem;
    text-transform: uppercase;
    ${media[768]} {
      font-size: 2.4rem;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  margin-top: 4.4rem;
`;

const Card = styled.div`
  position: relative;
  width: 33rem;
  height: 45rem;
  display: flex;
  flex-direction: column;
  &:not(first-child) {
    margin-right: 3.5rem;
  }
  .__content {
    z-index: 1;
    padding: 0 2.5rem;

    &__keyword {
      margin-top: 21.6rem;
      font-weight: 500;
      font-size: 3rem;
      line-height: 3.5rem;
      letter-spacing: -0.01em;
      color: ${({ theme }) => theme.color.primary[300]};
    }
    &__explain {
      font-family: Helvetica Neue;
      margin-top: 1.3rem;
      font-weight: 400;
      font-size: 1.9rem;
      line-height: 130%;
      opacity: 0.8;
      color: ${({ theme }) => theme.color.primary[200]};
    }
  }
`;

const CardBg = styled.div`
  position: absolute;
  width: 33rem;
  height: 45rem;
  background: #001b33;
  opacity: 0.3;
  box-shadow: 0px 4px 15px rgba(0, 92, 179, 0.3);
  border-radius: 20px;
`;

export default Scroll_4;
