import styled from "styled-components";
import {
  Ellipse1,
  Ellipse2,
  ExternalLink,
  Github,
  GithubLogo,
  Wave1,
  Wave2,
  SpaceONE,
} from "../../assets";

const Scroll_1 = () => {
  return (
    <Container>
      <div className="__wave1">
        <Wave1 />
      </div>
      <div className="__wave2">
        <Wave2 />
      </div>
      <div className="__ellipse1">
        <Ellipse1 />
      </div>
      <div className="__ellipse2">
        <Ellipse2 />
      </div>

      <Title>
        <div className="__one">Manage</div>
        <div className="__two">All Cloud Resources</div>
        <div className="__three">
          in<span className="__three__gradient">One Platform</span>
        </div>
        <div className="__info">
          <div>Open-source Multicloud Management Platform;</div>
          <br />
          <div>
            SpaceONE provides advantage of the best of each cloud provider.
          </div>
        </div>
      </Title>
      <div className="__git">
        <GithubBtn />
        <div className="__git__content">
          <span style={{ marginBottom: "0.2rem" }}>
            <GithubLogo />
          </span>
          <span style={{ marginLeft: "0.9rem" }}>Github</span>
          <span style={{ marginLeft: "0.5rem" }}>
            <ExternalLink />
          </span>
        </div>
      </div>
    </Container>
  );
};

// Github button
const GithubBtn = () => {
  return <Github />;
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  .__wave1 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    /* transform: rotate(-4.84deg); */
    /* left: -163px;
    top: -4.94px; */
  }
  .__wave2 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    /* transform: rotate(-1.71deg); */
    /* left: -94.43px;
    top: 2.26px; */
  }
  .__ellipse1 {
    position: absolute;
    top: 0;
    left: 0;
  }
  .__ellipse2 {
    position: absolute;
    top: 0;
    left: 72rem;
  }
  .__git {
    margin-left: 19rem;
    margin-top: 11.8rem;
    position: relative;
    &__content {
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
      position: absolute;
      width: 16rem;
      height: 4.8rem;
      bottom: 0.15rem;
      z-index: 0;
      color: white;
      margin-top: -3rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const Title = styled.div`
  font-size: 7.4rem;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  letter-spacing: -0.01em;
  color: #ebeaf6;
  margin-top: 14.4rem;
  margin-left: 19rem;
  .__two {
    margin-top: 2rem;
  }
  .__three {
    font-family: "Roboto Slab", sans-serif;
    font-size: 6.8rem;
    letter-spacing: -0.02em;
    display: flex;
    align-items: flex-end;
    margin-top: 1.2rem;
    &__gradient {
      margin-left: 1.4rem;
      font-size: 8rem;
      font-weight: 500;
      background: linear-gradient(to right, #65cba0, #cf88a0, #5ca2b1);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .__info {
    font-family: "Roboto", sans-serif;
    font-size: 1.8rem;
    line-height: 1.5rem;
    color: #ebeaf6;
    margin-top: 3rem;
  }
`;

export default Scroll_1;
