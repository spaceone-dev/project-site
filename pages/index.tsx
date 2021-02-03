import Router, { useRouter } from "next/router";
import styled from "styled-components";
import Lottie from "react-lottie";
import { SpaceONE, SOneMan, UpIcon } from "../public/assets";
import Footer from "../components/Footer";
import Scroll_1 from "../components/Scroll_1";
import Scroll_2 from "../components/Scroll_2";
import Scroll_3 from "../components/Scroll_3";
import Scroll_4 from "../components/Scroll_4";
import Scroll_5 from "../components/Scroll_5";
import scroll from "../public/assets/scroll_FINAL.json";
import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Background from "../components/Background";
import { media } from "../styles/theme";
import Scroll_6 from "../components/Scroll_6";

const Index = () => {
  const pathname = useRouter().pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isScrollable, setIsScrollable] = useState(true);
  const [isUpShown, setIsUpShown] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuShown) {
      setIsMenuOpen(true);
      setIsMenuShown(true);
    } else {
      setIsMenuOpen(false);
      setTimeout(() => {
        setIsMenuShown(false);
      }, 500);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Show scroll icon or not
    const html = document.documentElement;
    window.addEventListener("scroll", () => {
      if (html.scrollHeight - window.pageYOffset === window.innerHeight) {
        setIsScrollable(false);
        setIsUpShown(true);
      } else {
        setIsScrollable(true);
        setIsUpShown(false);
      }
    });
  }, []);

  const optionsScroll = {
    animationData: scroll,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container isMenuOpen={isMenuOpen}>
      {isMenuShown && (
        <Menu
          pathname={pathname}
          isMenuOpen={isMenuOpen}
          isMenuShown={isMenuShown}
        />
      )}
      <Background />
      <div className="__logo">
        <SpaceONE />
      </div>
      <div className="__menu" onClick={handleMenuOpen}>
        <SOneMan />
        <span style={{ marginLeft: "0.4rem", marginTop: "0.2rem" }}>
          {isMenuOpen ? "Close" : "Menu"}
        </span>
      </div>
      {isScrollable && (
        <ScrollBtn isMenuOpen={isMenuOpen}>
          <Lottie
            options={optionsScroll}
            style={{
              width: "2rem",
              height: "3.25rem",
            }}
          />
          <div className="__text">scroll</div>
        </ScrollBtn>
      )}
      {isUpShown && (
        <UpBtn
          isMenuOpen={isMenuOpen}
          onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
        >
          <UpIcon />
          <div className="__text">up</div>
        </UpBtn>
      )}
      <Scroll_1 />
      <Scroll_2 />
      <Scroll_3 />
      <Scroll_4 />
      <Scroll_5 />
      <Scroll_6 />
      <Footer />
    </Container>
  );
};

const Container = styled.div<{ isMenuOpen: Boolean }>`
  font-size: 3rem;
  .__logo {
    cursor: pointer;
    position: fixed;
    left: 10rem;
    ${media[768]} {
      left: 4rem;
    }
    top: 8rem;
    z-index: 10;
    opacity: ${({ isMenuOpen }) => isMenuOpen && "0.6"};
    animation: ${({ isMenuOpen }) =>
        isMenuOpen ? "openMenuLogo" : "closeMenuLogo"}
      0.5s;
  }
  .__menu {
    cursor: pointer;
    font-weight: 300;
    position: fixed;
    z-index: 10;
    display: flex;
    align-items: center;
    ${media[768]} {
      right: 4rem;
    }
    right: 12.5rem;
    top: 8rem;
    color: ${({ theme }) => theme.color.primary[200]};
    font-family: "Roboto";
    font-size: 1.8rem;
    &:hover {
      transition: 0.3s;
      color: #65cba0;
    }
  }
`;

const ScrollBtn = styled.div<{ isMenuOpen: Boolean }>`
  position: fixed;
  left: 10rem;
  bottom: 7rem;
  z-index: 3;
  animation: ${({ isMenuOpen }) => (!isMenuOpen ? "openMenu" : "closeMenu")}
    0.5s;
  .__text {
    margin-top: 1rem;
    color: ${({ theme }) => theme.color.primary[200]};
    font-family: "Roboto";
    font-size: 1.2rem;
  }
  ${media[768]} {
    left: 4rem;
  }
`;

const UpBtn = styled.div<{ isMenuOpen: Boolean }>`
  cursor: pointer;
  position: fixed;
  right: 12.5rem;
  bottom: 7rem;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${({ isMenuOpen }) => (!isMenuOpen ? "openMenu" : "closeMenu")}
    0.5s;
  .__text {
    margin-top: 1rem;
    color: ${({ theme }) => theme.color.primary[200]};
    font-family: "Roboto";
    font-size: 1.2rem;
  }
  ${media[768]} {
    right: 4rem;
  }
`;

export default Index;
