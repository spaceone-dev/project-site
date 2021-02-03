import styled from "styled-components";
import { Img1, Img2, Img3, Img4, Img5 } from "../public/assets";
import { media } from "../styles/theme";

const Scroll_3 = () => {
  return (
    <Box>
      <Container>
        <Padding>
          <div className="__title">our approach:</div>
          <div style={{ display: "flex", position: "relative", width: "100%" }}>
            <TextSlider />
            <ImageSlider />
          </div>
        </Padding>
      </Container>
      <Background />
    </Box>
  );
};

/**
 * text slider
 */
const TextSlider = () => (
  <div
    style={{
      position: "absolute",
      height: "100%",
      top: "4.8rem",
    }}
  >
    <TextSlide
      style={{
        animationDelay: "0s",
        color: "white",
      }}
    >
      <Content>
        Manage Cloud Resource
        <div className="__sub">
          Quick and Easy Visualisation{" "}
          <span style={{ color: "#858894" }}>of Multi-Cloud Resources.</span>
        </div>
      </Content>
    </TextSlide>
    <TextSlide
      style={{
        animationDelay: "4s",
        color: "white",
      }}
    >
      <Content>
        Project-Based Management System
        <div className="__sub">
          <span style={{ color: "#858894" }}>Manage All Resources </span>
          with Own Role and the Project{" "}
          <span style={{ color: "#858894" }}>over All Clouds.</span>
        </div>
      </Content>
    </TextSlide>
    <TextSlide
      style={{
        animationDelay: "8s",
        color: "white",
      }}
    >
      <Content>
        Consolidated Billing
        <div className="__sub">
          <span style={{ color: "#858894" }}>Easy View on </span>
          Resource Expenses and Cost Optimization{" "}
          <span style={{ color: "#858894" }}>with the Most Efficiency.</span>
        </div>
      </Content>
    </TextSlide>
    <TextSlide
      style={{
        animationDelay: "12s",
        color: "white",
      }}
    >
      <Content>
        Real-Time Monitoring
        <div className="__sub">
          <span style={{ color: "#858894" }}>Support </span>Various Mornitoring
          System:{" "}
          <span style={{ color: "#858894" }}>
            Cloudwatch, Stackdriver, Azure monitor.
          </span>
        </div>
      </Content>
    </TextSlide>
    <TextSlide
      style={{
        animationDelay: "16s",
        color: "white",
      }}
    >
      <Content>
        Core Resource Automation Process
        <div className="__sub">
          <span style={{ color: "#858894" }}>Power Scheduling lets you </span>
          Set Resource and Control Expenses.
        </div>
      </Content>
    </TextSlide>
  </div>
);

/**
 * image slider
 */
const ImageSlider = () => (
  <div style={{ position: "absolute", left: "36rem" }}>
    <div
      style={{
        height: "56rem",
        width: "70rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "350rem",
          height: "56rem",
          overflow: "hidden",
          display: "flex",
          animation: "slide 20s infinite",
        }}
      >
        <Slide>
          <Img1 />
        </Slide>
        <Slide>
          <Img2 />
        </Slide>
        <Slide>
          <Img3 />
        </Slide>
        <Slide>
          <Img4 />
        </Slide>
        <Slide>
          <Img5 />
        </Slide>
      </div>
    </div>
    <div
      style={{
        position: "relative",
        background: "white",
        height: "0.3rem",
        width: "70rem",
      }}
    >
      <ProgressBar />
    </div>
    <div
      style={{
        display: "flex",
        position: "absolute",
        right: "-0.65rem",
        marginTop: "1.3rem",
        alignItems: "center",
      }}
    >
      <Carousel
        style={{
          animationDelay: "0s",
        }}
      />
      <Carousel
        style={{
          animationDelay: "4s",
        }}
      />
      <Carousel
        style={{
          animationDelay: "8s",
        }}
      />
      <Carousel
        style={{
          animationDelay: "12s",
        }}
      />
      <Carousel
        style={{
          animationDelay: "16s",
        }}
      />
    </div>
  </div>
);

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: #001b33;
  opacity: 0.5;
  position: absolute;
`;

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Padding = styled.div`
  padding: 20rem 19rem;
  ${media[768]} {
    padding: 20rem 7rem;
  }
`;

const Container = styled.div`
  width: 144rem;
  height: 96rem;
  display: flex;
  position: absolute;
  z-index: 1;
  align-content: space-between;
  .__title {
    color: ${({ theme }) => theme.color.pink};
    font-weight: 500;
    opacity: 0.8;
    font-size: 2.6rem;
    text-transform: uppercase;
    ${media[768]} {
      font-size: 2.4rem;
    }
  }
  .text-slider {
    width: 34rem;
    color: white;
  }
  .image-slider {
    width: 700px;
  }
  .dots {
    color: red;
  }
`;

const Slide = styled.div`
  width: 70rem;
  height: 56rem;
  background-color: white;
`;

const ProgressBar = styled.div`
  height: 0.3rem;
  background-color: ${({ theme }) => theme.color.primary[400]};
  position: absolute;
  animation: progress 4s infinite;
`;

const TextSlide = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  animation: fade 20s infinite;
`;

const Content = styled.div`
  width: 33rem;
  font-weight: 400;
  font-size: 4.6rem;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.color.primary[300]};
  .__sub {
    margin-top: 2rem;
    padding-right: 3rem;
    font-family: Helvetica Neue;
    font-size: 2.1rem;
    line-height: 140%;
    color: ${({ theme }) => theme.color.white};
  }
`;

const Carousel = styled.div`
  animation: carousel 20s infinite;
  margin: 0 0.65rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.primary[200]};
`;

export default Scroll_3;
