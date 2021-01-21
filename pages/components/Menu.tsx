import { useState } from "react";
import styled from "styled-components";
import {
  GithubLogo_menu,
  ExternalLink_blue_sm,
  GithubLogo_menu_hover,
} from "../../public/assets";

const menuList = [
  { name: "User Guide", url: "" },
  { name: "API Reference", url: "" },
  { name: "Release Note", url: "" },
];
const smallMenuList = [
  { name: "Github", url: "" },
  { name: "Get In Touch", url: "" },
];

const List = ({ text }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="__big__text"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {text}
      {isHover && (
        <span style={{ marginLeft: "1rem", marginTop: "0.05rem" }}>
          <ExternalLink_blue_sm />
        </span>
      )}
    </div>
  );
};

const SmallList = ({ text }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="__small__text"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {text === "Github" &&
        (!isHover ? <GithubLogo_menu /> : <GithubLogo_menu_hover />)}
      <span style={{ marginLeft: text === "Github" && "0.8rem" }}>{text}</span>
      {isHover && (
        <span style={{ marginLeft: "1rem", marginTop: "0.15rem" }}>
          <ExternalLink_blue_sm />
        </span>
      )}
    </div>
  );
};

const Menu = ({ isMenuOpen, isMenuShown }) => {
  return (
    <>
      <Box isMenuOpen={isMenuOpen} isMenuShown={isMenuShown}>
        <Container>
          <div className="__big">
            {menuList.map((item) => (
              <List text={item.name} />
            ))}
          </div>
          <div className="__small">
            {smallMenuList.map((item) => (
              <SmallList text={item.name} />
            ))}
          </div>
          <div className="__small__email">support@spaceone.dev</div>
        </Container>
      </Box>
    </>
  );
};

const Box = styled.div<{ isMenuOpen: Boolean; isMenuShown: Boolean }>`
  width: 100%;
  height: 100vh;
  background: #001b33;
  box-shadow: 0px 4px 15px rgba(0, 92, 179, 0.3);
  z-index: 5;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  animation: ${({ isMenuOpen }) => (isMenuOpen ? "openMenu" : "closeMenu")} 0.5s;
`;

const Container = styled.div`
  padding-top: 26rem;
  display: flex;
  width: 144rem;
  height: auto;
  font-size: 4.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.primary[200]};
  .__big {
    cursor: pointer;
    margin-left: 19rem;
    font-size: 4.6rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    &__text {
      margin-bottom: 4rem;
      height: 4.1rem;
      cursor: pointer;
      display: flex;
      &:hover {
        color: ${({ theme }) => theme.color.green};
      }
    }
  }
  .__small {
    position: absolute;
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 16.6rem;
    margin-left: 94.6rem;
    &__text {
      height: 3.6rem;
      cursor: pointer;
      display: flex;
      margin-bottom: 2rem;
      &:hover {
        color: ${({ theme }) => theme.color.green};
      }
    }
    &__email {
      color: ${({ theme }) => theme.color.primary[100]};
      font-family: Roboto;
      position: absolute;
      font-size: 1.8rem;
      margin-left: 94.6rem;
      bottom: 10rem;
      font-weight: 300;
    }
  }
`;

export default Menu;
