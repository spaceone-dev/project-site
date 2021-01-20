import styled from "styled-components";

const Scroll_4 = () => {
  return (
    <Box>
      <Container>
        <div className="__title">CLOUD NATIVE INFRASTRUCTURE:</div>
        <Card>
          <div className="__keyword">Plugin Architecture</div>
          <div className="__explain">
            Integrate all multi account and discovery resources automatically on
            the dashboards.
          </div>
        </Card>
        {/* <Card>
          <div
            style={{
              position: "absolute",
              width: "34rem",
              height: "34rem",
            }}
          />
          <div className="__keyword__center">Kubernetis</div>
          <div className="__explain__right">
            Integrate all multi account and discovery resources automatically on
            the dashboards.
          </div>
        </Card>
        <Card>
          <div className="__keyword">Microservice Architecture</div>
          <div className="__explain">
            Integrate all multi account and discovery resources automatically on
            the dashboards.
          </div>
        </Card> */}
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
  position: relative;
  width: 144rem;
  height: 100vh;
  .__title {
    padding-top: 20rem;
    color: #cf88a0;
    font-family: "Roboto";
    font-size: 2.8rem;
    margin-left: 19rem;
  }
`;

const Card = styled.div`
  display: flex;
  height: 34rem;
  color: white;
  padding: 0 19rem;
  align-items: center;
  .__keyword {
    font-family: "Roboto Slab";
    font-weight: bold;
    font-size: 4.2rem;
    line-height: 55px;
    &__center {
      font-weight: bold;
      font-size: 4.2rem;
      margin-left: 37rem;
    }
  }
  .__explain {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 2rem;
    line-height: 150%;
    margin-left: 12rem;
    margin-right: 37rem;
    &__right {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 300;
      font-size: 2rem;
      line-height: 150%;
      margin-left: 13rem;
    }
  }
`;

export default Scroll_4;
