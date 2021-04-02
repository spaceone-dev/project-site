import styled from 'styled-components';

const Background = () => (
  <Container>
    <figure className="stars stars1" />
    <figure className="stars stars2" />
    <figure className="stars stars3" />
  </Container>
);

const Container = styled.figure`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
`;

export default Background;