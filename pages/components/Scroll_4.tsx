import styled from "styled-components";
import { media } from "../../styles/theme";

const Scroll_4 = () => {
  return (
    <Box>
      <Container>
        <Padding>
          <div className="__title">
            Cloud
            <div />
            Native
            <div />
            Infrastructure
          </div>
          <Cards>
            <Card>
              <div className="__keyword">Plugin Architecture</div>
              <div className="__explain">
                Integrate all multi account and discovery resources
                automatically on the dashboards.
              </div>
            </Card>
            <Card>
              <div className="__keyword">Kbunernetis</div>
              <div className="__explain">
                Integrate all multi account and discovery resources
                automatically on the dashboards.
              </div>
            </Card>
            <Card>
              <div className="__keyword">Microservice Architecture</div>
              <div className="__explain">
                Integrate all multi account and discovery resources
                automatically on the dashboards.
              </div>
            </Card>
          </Cards>
        </Padding>
      </Container>
    </Box>
  );
};

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
  .__title {
    width: 34rem;
    /* ${media[768]} {
      width: 15rem;
      word-break: break-all;
    } */
    color: ${({ theme }) => theme.color.green};
    font-size: 2.4rem;
    opacity: 0.8;
    font-weight: bold;
    line-height: 2.8rem;
    text-transform: uppercase;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const Card = styled.div`
  width: 34rem;
  height: 34rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.primary[100]};
  .__keyword {
    font-weight: 500;
    font-size: 2.8rem;
    line-height: 3.3rem;
  }
  .__explain {
    margin-top: 1.5rem;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 150%;
  }
`;

export default Scroll_4;
