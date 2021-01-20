import { useState } from "react";
import styled from "styled-components";
import {
  ExternalLink_blue,
  GithubLogo_menu,
  ExternalLink_blue_sm,
  GithubLogo_menu_hover,
} from "../../assets";

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
    <MenuList
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {text}
      {isHover && (
        <span style={{ marginLeft: "1.8rem" }}>
          <ExternalLink_blue />
        </span>
      )}
    </MenuList>
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
        <span style={{ marginLeft: "1.2rem" }}>
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
          <div>
            {menuList.map((item) => (
              <List text={item.name} />
            ))}
          </div>
          <div className="__small">
            {smallMenuList.map((item) => (
              <SmallList text={item.name} />
            ))}
            <div className="__small__email">support@spaceone.dev</div>
          </div>
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
  color: white;
  font-size: 4.2rem;
  font-weight: 300;
  .__small {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 16.6rem;
    margin-left: 40rem;
    &__text {
      cursor: pointer;
      display: flex;
      margin-bottom: 2rem;
      &:hover {
        color: #65cba0;
      }
    }
    &__email {
      font-family: Roboto;
      position: absolute;
      font-size: 1.8rem;
      bottom: 10rem;
    }
  }
`;

const MenuList = styled.div`
  cursor: pointer;
  margin-left: 19rem;
  margin-bottom: 3.6rem;
  font-size: 4.6rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  &:hover {
    color: #65cba0;
  }
`;

export default Menu;
