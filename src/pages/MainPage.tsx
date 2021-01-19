import styled from "styled-components";
import Lottie from "react-lottie";
import { SpaceONE, SOneMan } from "../assets";
import { theme } from "../styles/theme";
import Footer from "./components/Footer";
import Scroll_1 from "./components/Scroll_1";
import Scroll_2 from "./components/Scroll_2";
import Scroll_3 from "./components/Scroll_3";
import Scroll_4 from "./components/Scroll_4";
import Scroll_5 from "./components/Scroll_5";
import scroll from "../assets/scroll_FINAL.json";
import Menu from "./components/Menu";
import { useState } from "react";

const MainPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const optionsScroll = {
    animationData: scroll,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Background>
      <div className="stars" />
      <div className="stars2" />
      <div className="stars3" />
      <Container>
        {isMenuOpen && <Menu />}
        <div className="__logo">
          <SpaceONE />
        </div>
        <div className="__menu" onClick={handleMenuOpen}>
          <SOneMan />
          <span style={{ marginLeft: "0.4rem", marginTop: "0.2rem" }}>
            {isMenuOpen ? "Close" : "Menu"}
          </span>
        </div>
        <ScrollBtn>
          <Lottie
            options={optionsScroll}
            style={{
              width: "2rem",
              height: "3.25rem",
            }}
          />
          <div className="__text">scroll</div>
        </ScrollBtn>

        <Scroll_1 />
        <div style={{ marginTop: "-1rem" }}>
          <Scroll_2 />
        </div>
        <Scroll_3 />
        <Scroll_4 />
        <Scroll_5 />
        <Footer />
      </Container>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  z-index: -2;
  overflow: hidden;
`;

const Container = styled.div`
  font-family: "Roboto Slab", serif;
  font-size: 3rem;
  .__logo {
    cursor: pointer;
    position: fixed;
    left: 10rem;
    top: 8rem;
    z-index: 10;
  }
  .__menu {
    cursor: pointer;
    position: fixed;
    z-index: 10;
    display: flex;
    align-items: center;
    right: 12.5rem;
    top: 8rem;
    color: #ebeaf6;
    font-family: "Roboto";
    font-size: 1.8rem;
    &:hover {
      color: #65cba0;
    }
  }
`;

const ScrollBtn = styled.div`
  position: fixed;
  left: 10rem;
  bottom: 7rem;
  z-index: 10;
  .__text {
    margin-top: 1rem;
    color: #ebeaf6;
    font-family: "Roboto";
    font-size: 1.2rem;
  }
`;

export default MainPage;
