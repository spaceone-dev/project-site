import styled from "styled-components";
import Lottie from "react-lottie";
import { Universe, Plugins, Upcoming } from "../../public/assets";
import spinPurple from "../../public/assets/spin_purple_final.json";
import spinWhite from "../../public/assets/spin_white_final.json";
import spinBlue from "../../public/assets/spin_blue_final.json";
import { media } from "../../styles/theme";

const Scroll_5 = () => {
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
  const optionsSpinBlue = {
    animationData: spinBlue,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box>
      <Container>
        <div style={{ position: "absolute", zIndex: 1 }}>
          <Lottie
            options={optionsSpinPurple}
            style={{
              position: "absolute",
              width: "11.2rem",
              height: "11.2rem",
              left: "8rem",
              top: "20rem",
              transform: "rotate(70.54deg)",
              opacity: "0.5",
            }}
          />
          <Lottie
            options={optionsSpinPurple}
            style={{
              position: "absolute",
              width: "17.6rem",
              height: "17.6rem",
              left: "42rem",
              top: "54rem",
              opacity: "0.5",
            }}
          />
          <Lottie
            options={optionsSpinBlue}
            style={{
              position: "absolute",
              width: "9rem",
              height: "9rem",
              left: "13.4rem",
              top: "76.5rem",
              transform: "rotate(-90deg)",
              opacity: "0.7",
            }}
          />
          <Lottie
            options={optionsSpinBlue}
            style={{
              position: "absolute",
              width: "13.3rem",
              height: "13.3rem",
              left: "73.7rem",
              top: "63rem",
              opacity: "0.5",
            }}
          />
          <Lottie
            options={optionsSpinWhite}
            style={{
              position: "absolute",
              width: "7.277rem",
              height: "7.277rem",
              left: "89rem",
              top: "25rem",
              opacity: "0.5",
              transform: "rotate(-17.7deg)",
            }}
          />

          <div className="__universe">
            <Universe />
          </div>
          <div className="__plugins">
            <Plugins />
          </div>
          <div className="__upcoming">
            <Upcoming />
          </div>
        </div>
        <Background />
      </Container>
    </Box>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: #001b33;
  opacity: 0.5;
`;

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  ${media[768]} {
    left: -22rem;
  }
  .__universe {
    position: absolute;
    left: -30rem;
  }
  .__plugins {
    position: absolute;
    left: 25rem;
    top: 16rem;
  }
  .__upcoming {
    position: absolute;
    left: 95rem;
    top: 25rem;
  }
`;

export default Scroll_5;
