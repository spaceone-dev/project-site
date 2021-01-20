import styled from "styled-components";
import Lottie from "react-lottie";
import { Universe, Plugin1, Plugin2, Plugin3, Plugin4 } from "../../assets";
import spinPurple from "../../assets/spin_purple_final.json";
import spinWhite from "../../assets/spin_white_final.json";
import spinBlue from "../../assets/spin_blue_final.json";

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
          <div className="__plugin1">
            <Plugin1 />
          </div>
          <div className="__plugin2">
            <Plugin2 />
          </div>
          <div className="__plugin3">
            <Plugin3 />
          </div>
          <div className="__plugin4">
            <Plugin4 />
          </div>
          <Upcoming>
            UPCOMING
            <div className="__plugins">Plugins</div>
          </Upcoming>
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
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  .__universe {
    position: absolute;
    left: 0;
  }
  .__plugin1 {
    position: absolute;
    left: 11rem;
    top: 31rem;
  }
  .__plugin2 {
    position: absolute;
    left: 25rem;
    top: 16rem;
  }
  .__plugin3 {
    position: absolute;
    left: 53rem;
    top: 10rem;
  }
  .__plugin4 {
    position: absolute;
    left: 95rem;
    top: 25rem;
  }
`;

const Upcoming = styled.div`
  position: absolute;
  font-family: Roboto;
  line-height: 2.1rem;
  font-size: 1.8rem;
  text-align: center;
  font-weight: bold;
  color: #b9dcff;
  left: 96.7rem;
  top: 18rem;
  .__plugins {
    font-weight: normal;
    color: #e9f4ff;
    font-size: 1.6rem;
  }
`;

export default Scroll_5;
