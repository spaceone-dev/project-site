import styled from "styled-components";
import { media } from "../../styles/theme";
import { ExternalLink_green } from "../../public/assets";
import Lottie from "react-lottie";
import spaceship from "../../public/assets/spaceship.json";

const Scroll_6 = () => {
  const optionsSpaceship = {
    animationData: spaceship,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box>
      <Container>
        <div className="__ghInfo">
          <div style={{ width: "34rem" }}>
            <span className="__ghInfo__num">76</span>
            <span style={{ marginLeft: "1rem" }}>Enrolled Projects</span>
          </div>
          <div style={{ width: "34rem", marginLeft: "2rem" }}>
            <span className="__ghInfo__num">28</span>
            <span style={{ marginLeft: "1rem" }}>Contributors</span>
            <div className="__ghInfo__link">
              View Contribution Guide
              <span style={{ marginLeft: "0.4rem", marginTop: "0.2rem" }}>
                <ExternalLink_green />
              </span>
            </div>
          </div>
        </div>
        <div className="__content">
          SpaceONE’s Mission is to Accelerate the Multi-Cloud Native Technology
          for Sustainable Ecosystem.
        </div>
        <Lottie
          options={optionsSpaceship}
          style={{
            width: "14rem",
            height: "14rem",
            marginTop: "7.1rem",
          }}
        />
        <div className="__gradient">
          Climb Aboard the <span style={{ fontWeight: 500 }}>SpaceONE</span>
          ship
        </div>
      </Container>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  height: 100vh;
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
  .__ghInfo {
    padding-bottom: 5rem;
    width: 100%;
    display: flex;
    font-size: 2.2rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.color.gray[300]};
    border: 0 solid ${({ theme }) => theme.color.primary[300]};
    border-bottom-width: 0.1rem;

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
      text-decoration: underline;
      font-size: 1.7rem;
      color: ${({ theme }) => theme.color.green};
      display: flex;
      align-items: center;
      letter-spacing: -0.01em;
    }
  }
  .__content {
    font-weight: 300;
    padding: 0 3.5rem;
    margin-top: 5rem;
    color: ${({ theme }) => theme.color.primary[200]};
    font-size: 3.7rem;
    line-height: 130%;
    opacity: 0.8;
    letter-spacing: -0.01em;
    text-align: center;
  }
  .__gradient {
    margin-top: -2rem;
    font-weight: 400;
    font-size: 3.4rem;
    background: linear-gradient(to right, #65cba0, #cf88a0, #5ca2b1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default Scroll_6;
