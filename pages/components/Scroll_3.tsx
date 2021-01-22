import styled from "styled-components";
import Lottie from "react-lottie";
import Manage from "../../public/assets/manageresourcesguy_120.json";
import Govern from "../../public/assets/GovernAnalytics_final (1).json";
import Offer from "../../public/assets/offerautomatingguy_120.json";

const Scroll_3 = () => {
  const optionsManage = {
    animationData: Manage,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const optionsGovern = {
    animationData: Govern,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const optionsOffer = {
    animationData: Offer,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box>
      <Container>
        <div style={{ padding: "19rem", display: "flex" }}>
          <div className="__title">ALSO...</div>
          <Card>
            <Lottie
              options={optionsManage}
              style={{
                position: "absolute",
                width: "13.3rem",
                height: "13.3rem",
              }}
            />
            <div className="__keyword">Manage Resources</div>
            <div className="__explain">
              Manage User and Multicloud account. Detect Multicloud resources
              and Categorization. Monitoring and Provide spend information.
              Monitoring and Provide spend information.
            </div>
          </Card>
          <Card>
            <Lottie
              options={optionsGovern}
              style={{
                position: "absolute",
                width: "16rem",
                height: "10.3rem",
                top: "2rem",
                left: "2rem",
              }}
            />
            <div className="__keyword">Govern Analytics</div>
            <div className="__explain">
              Manage User and Multicloud account. Detect Multicloud resources
              and Categorization. Monitoring and Provide spend information.
              Monitoring and Provide spend information.
            </div>
          </Card>
          <Card>
            <Lottie
              options={optionsOffer}
              style={{
                position: "absolute",
                width: "29.3rem",
                height: "17.3rem",
                top: "-5rem",
                left: "-13rem",
              }}
            />
            <div className="__keyword">Offer Automating</div>
            <div className="__explain">
              Manage User and Multicloud account. Detect Multicloud resources
              and Categorization. Monitoring and Provide spend information.
              Monitoring and Provide spend information.
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
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #001b33;
`;

const Container = styled.div`
  width: 144rem;
  height: 100vh;
  display: flex;
  .__title {
    position: absolute;
    color: ${({ theme }) => theme.color.teal};
    font-size: 2.4rem;
    opacity: 0.8;
    font-weight: bold;
  }
`;

const Card = styled.div`
  position: relative;
  margin-top: 15rem;
  margin-right: 2rem;
  .__keyword {
    margin-top: 15rem;
    font-weight: bold;
    font-size: 2.8rem;
    color: ${({ theme }) => theme.color.white};
    font-weight: 600;
  }
  .__explain {
    margin-top: 1.4rem;
    font-family: "Roboto";
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 140%;
    color: ${({ theme }) => theme.color.blue[200]};
    opacity: 0.8;
  }
`;

export default Scroll_3;
