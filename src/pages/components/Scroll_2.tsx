import styled from "styled-components";
import Lottie from "react-lottie";
import { Ellipse3 } from "../../assets";
import spinPurple from "../../assets/spin_purple_final.json";
import spinWhite from "../../assets/spin_white_final.json";

const Scroll_2 = () => {
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

  return (
    <Box>
      <Container>
        <Lottie
          options={optionsSpinPurple}
          style={{
            position: "absolute",
            width: "17.6rem",
            height: "17.6rem",
            left: "3.5rem",
            top: "48rem",
            transform: "rotate(-30deg)",
            opacity: "0.5",
          }}
        />
        <Lottie
          options={optionsSpinWhite}
          style={{
            position: "absolute",
            width: "7.339rem",
            height: "7.339rem",
            left: "84rem",
            top: "42.8rem",
            transform: "rotate(-30deg)",
            opacity: "0.7",
          }}
        />
        <Lottie
          options={optionsSpinPurple}
          style={{
            position: "absolute",
            width: "12.145rem",
            height: "12.145rem",
            left: "117rem",
            top: "45rem",
            opacity: "0.5",
            transform: "rotate(30deg)",
          }}
        />

        <div className="__title">WE'RE VERY CAPABLE:</div>
        <div className="__ellipse">
          <Ellipse3 />
        </div>
        <Keywords>
          <div>
            <div className="__word">Integrate</div>
            <div className="__sub">Multicloud Accounts</div>
          </div>
          <div style={{ marginLeft: "6rem" }}>
            <div className="__word">Improve</div>
            <div className="__sub">Operation Efficiency</div>
          </div>
          <div style={{ marginLeft: "6rem" }}>
            <div className="__word">Manage</div>
            <div className="__sub">Cloud Spend</div>
          </div>
        </Keywords>
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
  position: relative;
  .__title {
    padding-top: 20rem;
    color: ${({ theme }) => theme.color.pink};
    font-weight: 600;
    opacity: 0.8;
    font-size: 2.6rem;
    margin-left: 19rem;
  }
  .__ellipse {
    display: flex;
    width: 134.017rem;
    height: 64rem;
    position: absolute;
    justify-content: center;
    left: 5rem;
    top: 18rem;
  }
`;

const Keywords = styled.div`
  display: flex;
  margin-top: 19.5rem;
  margin-left: 19rem;
  color: ${({ theme }) => theme.color.primary[100]};
  .__word {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 4rem;
  }
  .__sub {
    font-weight: normal;
    font-size: 2.8rem;
    margin-top: 1.5rem;
    letter-spacing: -0.02em;
  }
`;

export default Scroll_2;
