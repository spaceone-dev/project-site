import styled from "styled-components";
import { media } from "../../styles/theme";

const Scroll_3 = () => {
  return (
    <Box>
      <Container>
        <Padding>
          <div className="__title">our approach:</div>
        </Padding>
      </Container>
      <Background />
    </Box>
  );
};

const Background = styled.div`
  width: 100%;
  height: 110vh;
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
  display: flex;
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
    font-weight: 600;
    opacity: 0.8;
    font-size: 2.6rem;
    text-transform: uppercase;
    ${media[768]} {
      font-size: 2.4rem;
    }
  }
`;

export default Scroll_3;
