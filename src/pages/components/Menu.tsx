import { useState } from "react";
import styled from "styled-components";
import {
  ExternalLink_blue,
  GithubLogo_menu,
  ExternalLink_blue_sm,
} from "../../assets";

const menuList = [
  { name: "User Guide", url: "" },
  { name: "API Reference", url: "" },
  { name: "Release Note", url: "" },
];
const smallMenuList = [
  { name: "Github", url: "" },
  { name: "Contact", url: "" },
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
      {text === "Github" && <GithubLogo_menu />}
      <span style={{ marginLeft: text === "Github" && "0.8rem" }}>{text}</span>
      {isHover && (
        <span style={{ marginLeft: "1.2rem" }}>
          <ExternalLink_blue_sm />
        </span>
      )}
    </div>
  );
};

const Menu = () => {
  return (
    <Container>
      <div style={{ marginTop: "16.6rem" }}>
        {menuList.map((item) => (
          <List text={item.name} />
        ))}
      </div>
      <div className="__small">
        {smallMenuList.map((item) => (
          <SmallList text={item.name} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 45.2rem;
  background: #001b33;
  box-shadow: 0px 4px 15px rgba(0, 92, 179, 0.3);
  color: white;
  position: fixed;
  font-size: 4.2rem;
  font-weight: 300;
  top: 0;
  z-index: 2;
  font-family: "Roboto";
  .__small {
    position: absolute;
    font-size: 3.4rem;
    margin-top: 16.6rem;
    margin-left: 91rem;
    &__text {
      cursor: pointer;
      display: flex;
      margin-bottom: 2rem;
      &:hover {
        text-decoration: underline solid white 0.2rem;
      }
    }
  }
`;

const MenuList = styled.div`
  cursor: pointer;
  margin-left: 19rem;
  margin-bottom: 3.6rem;
  font-weight: 100;
  &:hover {
    text-decoration: underline solid white 0.2rem;
  }
`;

export default Menu;
