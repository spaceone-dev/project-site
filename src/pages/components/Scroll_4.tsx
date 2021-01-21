import styled from "styled-components";

const Scroll_4 = () => {
  return (
    <Box>
      <Container>
        <div className="__title">Cloud Native Infrastructure</div>
        <div style={{ display: "flex" }}>
          <Card>
            <div className="__keyword">Plugin Architecture</div>
            <div className="__explain">
              Integrate all multi account and discovery resources automatically
              on the dashboards.
            </div>
          </Card>
          <Card>
            <div className="__keyword">Kbunernetis</div>
            <div className="__explain">
              Integrate all multi account and discovery resources automatically
              on the dashboards.
            </div>
          </Card>
          <Card>
            <div className="__keyword">Microservice Architecture</div>
            <div className="__explain">
              Integrate all multi account and discovery resources automatically
              on the dashboards.
            </div>
          </Card>
        </div>
      </Container>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 144rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .__title {
    padding-top: 20rem;
    color: ${({ theme }) => theme.color.green};
    font-size: 3rem;
    opacity: 0.8;
    font-weight: bold;
  }
`;

const Card = styled.div`
  width: 34rem;
  margin-top: 3rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 34rem;
  color: ${({ theme }) => theme.color.white};
  .__keyword {
    /* margin-top: 4rem; */
    margin-top: 30rem;
    font-weight: bold;
    font-size: 4.2rem;
    line-height: 4.9rem;
  }
  .__explain {
    margin-top: 1.5rem;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 2rem;
    line-height: 150%;
  }
`;

export default Scroll_4;
