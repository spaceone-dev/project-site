import styled from "styled-components";
import Lottie from "react-lottie";
import { Universe } from "../../assets";
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
    <>
      <Box>
        <Container>
          <div style={{ position: "absolute", zIndex: "1" }}>
            <Lottie
              options={optionsSpinPurple}
              style={{
                position: "absolute",
                width: "11.2rem",
                height: "11.2rem",
                left: "8rem",
                top: "13.7rem",
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
                top: "48rem",
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
                top: "70rem",
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
                left: "74rem",
                top: "56.5rem",
                opacity: "0.5",
              }}
            />
            <Lottie
              options={optionsSpinWhite}
              style={{
                position: "absolute",
                width: "7.277rem",
                height: "7.277rem",
                left: "88.7rem",
                top: "18rem",
                opacity: "0.5",
                transform: "rotate(-17.7deg)",
              }}
            />
            <div className="__universe">
              <Universe />
            </div>
            <Upcoming>
              UPCOMING
              <div className="__plugins">Plugins</div>
            </Upcoming>
          </div>
          <Background />
        </Container>
      </Box>
    </>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: #001b33;
  opacity: 0.5;
  position: absolute;
  z-index: 0;
`;

const Box = styled.div`
  width: 100%;
  height: 100vh;
  background: #090a0f;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  .__universe {
    position: absolute;
    z-index: 1;
    left: 0;
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
  top: 12rem;
  .__plugins {
    font-weight: normal;
    color: #e9f4ff;
    font-size: 1.6rem;
  }
`;

export default Scroll_5;
