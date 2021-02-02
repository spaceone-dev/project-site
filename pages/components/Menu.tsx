import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import {
  GithubLogo_menu,
  ExternalLink_menu_sm,
  GithubLogo_menu_hover,
  Mail,
  Mail_hover,
  SOne_menu,
} from "../../public/assets";
import { theme } from "../../styles/theme";

const menuList = [
  { name: "Home", url: "/" },
  { name: "User Guide", url: "" },
  { name: "API Reference", url: "" },
  { name: "Release Note", url: "/releasenote" },
];
const smallMenuList = [
  { name: "Github", url: "" },
  { name: "Get In Touch", url: "" },
];

const Menu = ({ isMenuOpen, isMenuShown, pathname }) => {
  const router = useRouter();

  return (
    <Box isMenuOpen={isMenuOpen} isMenuShown={isMenuShown}>
      <Container>
        <div className="__big">
          {menuList.map((item) => (
            <div onClick={() => router.push(item.url)}>
              <List pathname={pathname} text={item.name} />
            </div>
          ))}
        </div>
        <div className="__small">
          {smallMenuList.map((item) => (
            <SmallList text={item.name} />
          ))}
        </div>
      </Container>
    </Box>
  );
};

const List = ({ text, pathname }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      style={{
        color: `${
          ((text === "Home" && pathname === "/") ||
            (text === "Release Note" && pathname === "/releasenote")) &&
          theme.color.green
        }`,
      }}
      className="__big__text"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {((text === "Home" && pathname === "/") ||
        (text === "Release Note" && pathname === "/releasenote")) && (
        <SOne_menu />
      )}
      <span
        style={{
          marginLeft: `${
            ((text === "Home" && pathname === "/") ||
              (text === "Release Note" && pathname === "/releasenote")) &&
            "1rem"
          }`,
        }}
      >
        {text}
      </span>
      {text !== "Home" && text !== "Release Note" && (
        <span style={{ marginLeft: "0.7rem", marginTop: "0.3rem" }}>
          <ExternalLink_menu_sm />
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
      {text === "Get In Touch" &&
        (!isHover ? (
          <span style={{ marginLeft: "0.5rem", marginRight: "1.3rem" }}>
            <Mail />
          </span>
        ) : (
          <span style={{ marginLeft: "0.5rem", marginRight: "1.3rem" }}>
            <Mail_hover />
          </span>
        ))}
      <span style={{ marginLeft: text === "Github" && "0.8rem" }}>{text}</span>
      <span style={{ marginLeft: "0.7rem", marginTop: "0.3rem" }}>
        <ExternalLink_menu_sm />
      </span>
    </div>
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
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary[200]};
  .__big {
    cursor: pointer;
    margin-left: 19rem;
    font-size: 4rem;
    letter-spacing: -0.01em;
    &__text {
      display: flex;
      align-items: center;
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
  }
`;

export default Menu;
