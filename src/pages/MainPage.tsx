import styled from "styled-components";
import { SpaceONE, SOneMan } from "../assets";
import { theme } from "../styles/theme";
import Scroll_1 from "./components/Scroll_1";
import style from "./index.scss";

const MainPage = () => {
  return (
    <Background>
      {/* <Stars_1 /> */}
      {/* <Stars_2 /> */}
      {/* <Stars_3 /> */}
      <Container>
        <div className="__logo">
          <SpaceONE />
        </div>
        <div className="__menu">
          <SOneMan />
          <span style={{ marginLeft: "0.4rem" }}>Menu</span>
        </div>
        <Scroll_1 />
      </Container>
    </Background>
  );
};

const Background = styled.div`
  height: 650vh;
  background: #141921;
  position: relative;
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
  }
  .__menu {
    cursor: pointer;
    position: fixed;
    display: flex;
    align-items: center;
    right: 12.5rem;
    top: 8rem;
    color: #ebeaf6;
    font-family: "Roboto";
    font-size: 1.8rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// const Stars_1 = styled.div`
//   width: 1px;
//   height: 1px;
//   background: transparent;
//   box-shadow: $shadows-small;
//   animation: animStar 50s linear infinite;

//   &:after {
//     content: " ";
//     position: absolute;
//     top: 2000px;
//     width: 1px;
//     height: 1px;
//     background: transparent;
//     box-shadow: $shadows-small;
//   }
// `;

export default MainPage;
