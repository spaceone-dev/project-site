import styled from "styled-components";
import Lottie from "react-lottie";
import Manage from "../../assets/ManageResources_final.json";
import Govern from "../../assets/GovernAnalytics_final.json";
import Offer from "../../assets/offerautomating_final.json";

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
        <div className="__title">ALSO...</div>
        <Card>
          <Lottie
            options={optionsManage}
            style={{
              position: "absolute",
              width: "13.3rem",
              height: "13.3rem",
              top: "33.3rem",
            }}
          />
          <div className="__keyword">Manage Resources</div>
          <div className="__explain">
            Manage User and Multicloud account. Detect Multicloud resources and
            Categorization. Monitoring and Provide spend information. Monitoring
            and Provide spend information.
          </div>
        </Card>
        <Card>
          <Lottie
            options={optionsGovern}
            style={{
              position: "absolute",
              width: "16rem",
              height: "10.3rem",
              top: "35rem",
              left: "56rem",
            }}
          />
          <div className="__keyword">Govern Analytics</div>
          <div className="__explain">
            Manage User and Multicloud account. Detect Multicloud resources and
            Categorization. Monitoring and Provide spend information. Monitoring
            and Provide spend information.
          </div>
        </Card>
        <Card>
          <Lottie
            options={optionsOffer}
            style={{
              position: "absolute",
              width: "29.3rem",
              height: "17.3rem",
              left: "77rem",
              top: "28rem",
            }}
          />
          <div className="__keyword">Offer Automating</div>
          <div className="__explain">
            Manage User and Multicloud account. Detect Multicloud resources and
            Categorization. Monitoring and Provide spend information. Monitoring
            and Provide spend information.
          </div>
        </Card>
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
  background-color: #001b33;
`;

const Container = styled.div`
  width: 144rem;
  height: 100vh;
  position: relative;
  padding: 0 19rem;
  display: flex;
  /* margin-top: 20rem; */
  .__title {
    padding-top: 20rem;
    position: absolute;
    color: #cf88a0;
    font-family: "Roboto";
    font-size: 2.8rem;
  }
`;

const Card = styled.div`
  margin-top: 32.3rem;
  margin-right: 2rem;
  /* flex: 0.3; */
  .__keyword {
    margin-top: 17rem;
    font-family: "Roboto Slab";
    font-weight: bold;
    font-size: 2.8rem;
    color: #ffffff;
  }
  .__explain {
    margin-top: 1.4rem;
    font-family: "Roboto";
    font-weight: 300;
    font-size: 2rem;
    line-height: 140%;
    color: #e9f4ff;
    opacity: 0.8;
  }
`;

export default Scroll_3;
