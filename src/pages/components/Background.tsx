import styled from "styled-components";

const Background = () => {
  return (
    <Container>
      <div className="stars" />
      <div className="stars2" />
      <div className="stars3" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 1000vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  position: fixed;
`;

export default Background;
