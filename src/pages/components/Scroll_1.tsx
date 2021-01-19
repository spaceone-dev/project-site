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
  GithubLogo,
  Wave1,
  Wave2,
  Github,
} from "../../assets";
import spinPurple from "../../assets/spin_purple_final.json";
import spinWhite from "../../assets/spin_white_final.json";
import spaceMan from "../../assets/spaceman0119_final.json";
import { useState } from "react";

const Scroll_1 = () => {
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

        <div style={{ position: "absolute", left: "7rem", top: "47.3rem" }}>
          <Circle96 />
        </div>
        <div style={{ position: "absolute", left: "19rem", top: "40.5rem" }}>
          <Circle105 />
        </div>
        <div style={{ position: "absolute", left: "3.7rem", top: "53.5rem" }}>
          <Circle109 />
        </div>
        <div style={{ position: "absolute", left: "8.5rem", top: "60rem" }}>
          <Circle110 />
        </div>
        <div style={{ position: "absolute", left: "4.1rem", top: "16rem" }}>
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

        <Lottie
          options={optionsSpinPurple}
          style={{
            position: "absolute",
            width: "13.563rem",
            height: "13.563rem",
            left: "-0.1rem",
            top: "12rem",
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
            left: "74.387rem",
            top: "12.5rem",
            transform: "rotate(-27.22deg)",
            opacity: "0.8",
          }}
        />
        <Lottie
          options={optionsSpaceMan}
          style={{
            position: "absolute",
            width: "22rem",
            height: "22rem",
            left: "73.2rem",
            top: "50.2rem",
            opacity: "0.8",
          }}
        />
        <div style={{ position: "absolute", zIndex: 1 }}>
          <Title>
            <div className="__one">Manage</div>
            <div className="__two">All Cloud Resources</div>
            <div className="__three">
              in<span className="__three__gradient">One Platform</span>
            </div>
            <div className="__info">
              <div>Open-source Multicloud Management Platform;</div>
              <br />
              <div>SpaceONE is a cloud management platform that enables</div>
              <br />
              <div>
                integrated management of Multi-Cloud. We boost and maximize
              </div>
              <br />
              <div>
                your operational efficiency in managements as following
                features.
              </div>
            </div>
          </Title>
          <div
            className="__git"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {!isHover ? <Github /> : <Github_fill />}
            <div className="__git__content">
              <span style={{ marginBottom: "0.2rem" }}>
                <GithubLogo />
              </span>
              <span style={{ marginLeft: "0.9rem" }}>Github</span>
              <span style={{ marginLeft: "0.5rem" }}>
                <ExternalLink />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 144rem;
  height: 100vh;
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
    top: 0;
    left: 0;
  }
  .__ellipse2 {
    position: absolute;
    top: 0;
    left: 72rem;
  }
  .__git {
    width: 160px;
    height: 48px;
    left: 19rem;
    top: 4rem;
    cursor: pointer;
    position: relative;
    &__content {
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
      position: absolute;
      bottom: 0;
      margin-bottom: 0.9rem;
      margin-left: 3rem;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const Title = styled.div`
  font-size: 7.4rem;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  letter-spacing: -0.01em;
  color: #ebeaf6;
  margin-top: 14.4rem;
  margin-left: 19rem;
  .__two {
    margin-top: 2rem;
  }
  .__three {
    font-family: "Roboto Slab", sans-serif;
    font-size: 6.8rem;
    letter-spacing: -0.02em;
    display: flex;
    align-items: flex-end;
    margin-top: 1.2rem;
    &__gradient {
      margin-left: 1.4rem;
      font-size: 8rem;
      font-weight: 500;
      background: linear-gradient(to right, #65cba0, #cf88a0, #5ca2b1);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .__info {
    font-family: "Roboto", sans-serif;
    font-size: 1.8rem;
    line-height: 1.5rem;
    color: #a8a5ce;
    margin-top: 3rem;
  }
`;

const Github_fill = styled.div`
  width: 160px;
  height: 48px;
  background: linear-gradient(
    89.89deg,
    #65cba0 0.09%,
    #cf88a0 53.64%,
    #5ca2b1 99.91%
  );
  opacity: 0.4;
  border-radius: 3rem;
`;

export default Scroll_1;
