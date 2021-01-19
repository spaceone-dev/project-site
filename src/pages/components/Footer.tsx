import styled from "styled-components";
import { Megazone, CloudNative } from "../../assets";

const Footer = () => {
  return (
    <div style={{ position: "relative" }}>
      <Top>
        <Box>
          <div className="__card">
            <div className="__card__big">76</div>
            <div className="__card__small">Enrolled Projects</div>
          </div>
          <div className="__card">
            <div className="__card__big">28</div>
            <div className="__card__small">Contributors</div>
          </div>
          <div className="__card">
            <div className="__megazone">
              <Megazone />
            </div>
            <div className="__card__small">
              <div>Official Partner</div>
              <div>
                Official Member of
                <span style={{ marginLeft: "0.6rem" }}>
                  <CloudNative />
                </span>
              </div>
            </div>
          </div>
        </Box>
      </Top>
      <Bottom></Bottom>
    </div>
  );
};

const Top = styled.div`
  width: auto;
  height: 38rem;
  background: #001b33;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bottom = styled.div`
  width: 100%;
  height: 38rem;
  background: #000f1c;
`;

const Box = styled.div`
  width: 144rem;
  display: flex;
  display: flex;
  justify-content: center;
  .__card {
    width: 30rem;
    margin-right: 6rem;
    font-family: Roboto;
    color: #ffffff;
    line-height: 7rem;
    &__big {
      font-size: 7.2rem;
    }
    &__small {
      font-size: 2rem;
      font-weight: 300;
      line-height: 23px;
    }
  }
  .__megazone {
  }
`;

export default Footer;
