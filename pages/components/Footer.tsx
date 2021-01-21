import styled from "styled-components";
import { MZ, CNCF, SOneMan_footer } from "../../public/assets";

const Footer = () => {
  return (
    <div style={{ position: "relative" }}>
      <Top>
        <Box>
          <div className="__card">
            <div className="__card__big">76</div>
            <div className="__card__300">Enrolled Projects</div>
          </div>
          <div className="__card">
            <div className="__card__big">28</div>
            <div className="__card__300">Contributors</div>
          </div>
          <div className="__card">
            <div className="__megazone">
              <MZ />
            </div>
            <div className="__card__300">
              <div>Official Partner</div>
              <div>
                Official Member of
                <span style={{ marginLeft: "0.6rem" }}>
                  <CNCF />
                </span>
              </div>
            </div>
          </div>
        </Box>
      </Top>
      <Bottom>
        <Box>
          <div className="__card">
            <div style={{ position: "absolute", left: "0", top: "-8rem" }}>
              <SOneMan_footer />
            </div>
            <div className="__card__400">
              SpaceONE <div />
              Copyright 2021
              <div className="__card__500">MEGAZONE Cloud</div>
            </div>
          </div>
          <div className="__card">
            <div className="__card__400">
              Contacts
              <div className="__card__300__18">MEGAZONE Cloud</div>
            </div>
          </div>
          <div className="__card">
            <div className="__card__400">
              Seoul
              <div className="__card__300__18">
                46, Nonhyeon-ro 85-gil
                <div />
                Gangnam-gu, Korea
              </div>
              <div className="__card__300__18">+82 1644-2243 </div>
            </div>
          </div>
        </Box>
      </Bottom>
    </div>
  );
};

const Top = styled.div`
  width: auto;
  height: 50vh;
  background: #001b33;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bottom = styled.div`
  width: auto;
  height: 50vh;
  background: #000f1c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 144rem;
  display: flex;
  display: flex;
  justify-content: center;
  .__card {
    position: relative;
    width: 30rem;
    margin-left: 6rem;
    font-family: "Roboto";
    color: #ffffff;
    line-height: 7rem;
    &__big {
      font-size: 7.2rem;
    }
    &__300 {
      font-size: 2rem;
      font-weight: 300;
      line-height: 2.5rem;
      &__18 {
        margin-top: 1rem;
        font-weight: 300;
        font-size: 1.8rem;
      }
    }
    &__400 {
      font-size: 2rem;
      font-weight: 400;
      line-height: 2.5rem;
    }
    &__500 {
      font-size: 2rem;
      font-weight: 500;
      line-height: 2.5rem;
      margin-top: 2.4rem;
    }
  }
  .__megazone {
    margin-bottom: -1rem;
  }
`;

export default Footer;
