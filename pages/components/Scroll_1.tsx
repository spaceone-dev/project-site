import styled from "styled-components";
import Lottie from "react-lottie";
import {
  Circle105,
  Circle109,
  Circle110,
  Circle111,
  Circle96,
  Ellipse1,
  Ellipse2,
  Circle101,
  Circle102,
  Circle171,
  ExternalLink,
  ExternalLink_fill,
  GithubLogo,
  GithubLogo_fill,
  Wave1,
  Wave2,
  Github,
} from "../../public/assets";
import spinPurple from "../../public/assets/spin_purple_final.json";
import spinWhite from "../../public/assets/spin_white_final.json";
import spaceMan from "../../public/assets/spaceman0119_final.json";
import planet from "../../public/assets/purpleplanet.json";
import { useState } from "react";

const Scroll_1 = () => {
  const optionsPlanet = {
    animationData: planet,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const optionsSpinPurple = {
    animationData: spinPurple,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const optionsSpinWhite = {
    animationData: spinWhite,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const optionsSpaceMan = {
    animationData: spaceMan,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [isHover, setIsHover] = useState(false);

  return (
    <Box>
      <Container>
        {/* Background */}
        <div className="__wave1">
          <Wave1 />
        </div>
        <div className="__wave2">
          <Wave2 />
        </div>
        <div className="__ellipse1">
          <Ellipse1 />
        </div>
        <div className="__ellipse2">
          <Ellipse2 />
        </div>

        <div style={{ position: "absolute", left: "14rem", top: "58.2rem" }}>
          <Circle96 />
        </div>
        <div style={{ position: "absolute", left: "26rem", top: "53rem" }}>
          <Circle105 />
        </div>
        <div style={{ position: "absolute", left: "11.5rem", top: "64rem" }}>
          <Circle109 />
        </div>
        <div style={{ position: "absolute", left: "8.5rem", top: "59rem" }}>
          <Circle110 />
        </div>
        <div style={{ position: "absolute", left: "4.5rem", top: "16rem" }}>
          <Circle111 />
        </div>

        <div
          style={{ position: "absolute", left: "90.84rem", top: "33.958rem" }}
        >
          <Circle101 />
        </div>
        <div
          style={{ position: "absolute", left: "90.647rem", top: "25.491rem" }}
        >
          <Circle102 />
        </div>
        <div style={{ position: "absolute", left: "91.1rem", top: "11rem" }}>
          <Circle171 />
        </div>
        {/* Background */}

        {/* Lotties */}
        <Lottie
          options={optionsSpinPurple}
          style={{
            position: "absolute",
            width: "13.563rem",
            height: "13.563rem",
            left: "10rem",
            top: "20rem",
            transform: "rotate(-30deg)",
            opacity: "0.7",
          }}
        />
        <Lottie
          options={optionsSpinWhite}
          style={{
            position: "absolute",
            width: "7.557rem",
            height: "7.557rem",
            left: "92.387rem",
            top: "12.5rem",
            transform: "rotate(-27.22deg)",
            opacity: "0.8",
          }}
        />
        <Lottie
          options={optionsPlanet}
          style={{
            position: "absolute",
            width: "12.6rem",
            height: "12.033rem",
            left: "-6rem",
            top: "33.9rem",
            transform: "matrix(0.97, 0.21, -0.24, 0.98, 0, 0)",
            opacity: "0.4",
          }}
        />
        {/* Lotties */}

        <div style={{ position: "relative" }}>
          <Title>
            <div>
              Manage All
              <div />
              Cloud Resources
              <div />
              in <span className="__gradient">One Platform</span>
            </div>
            <div className="__info">
              <div>SpaceONE is an Open-Source Platform and</div>
              <div />
              <div>Enables Integrated Management of Multi-Cloud.</div>
            </div>
            <Lottie
              options={optionsSpaceMan}
              style={{
                position: "absolute",
                width: "20rem",
                height: "20rem",
                left: "37rem",
                top: "33rem",
                opacity: "0.8",
              }}
            />
            <div
              className="__git"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <div style={{ position: "absolute", bottom: "-1rem" }}>
                <Github />
              </div>
              <div className="__git__content">
                <span>{isHover ? <GithubLogo_fill /> : <GithubLogo />}</span>
                <span style={{ marginLeft: "0.6rem" }}>GitHub</span>
                <span style={{ marginLeft: "0.4rem" }}>
                  <span>
                    {isHover ? <ExternalLink_fill /> : <ExternalLink />}
                  </span>
                </span>
              </div>
            </div>
          </Title>
        </div>
      </Container>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled.div`
  width: 144rem;
  height: 100vh;
  display: flex;
  margin-top: 23rem;
  justify-content: center;
  .__wave1 {
    position: absolute;
    top: 0;
    left: 0;
  }
  .__wave2 {
    position: absolute;
    top: 0;
    left: 0;
  }
  .__ellipse1 {
    position: absolute;
    top: 11.2rem;
    left: 0;
  }
  .__ellipse2 {
    position: absolute;
    top: 0;
    left: 90rem;
  }
  .__git {
    width: 13.4rem;
    height: 4rem;
    top: 13.2rem;
    cursor: pointer;
    position: relative;
    color: white;
    &:hover {
      background: linear-gradient(
        90deg,
        #65cba0 0%,
        #cf88a0 52.6%,
        #5ca2b1 100%
      );
      color: #001b33;
    }
    border-radius: 3rem;
    &__content {
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      font-size: 1.6rem;
      position: absolute;
      bottom: 1rem;
      margin-left: 2.4rem;
      display: flex;
      align-items: center;
    }
  }
`;

const Title = styled.div`
  font-size: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  letter-spacing: -0.01em;
  text-align: center;
  color: ${({ theme }) => theme.color.primary[200]};
  .__gradient {
    background: linear-gradient(to right, #65cba0, #cf88a0, #5ca2b1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .__info {
    font-size: 2.2rem;
    line-height: 130%;
    opacity: 0.7;
    margin-top: 3rem;
  }
`;

export default Scroll_1;
