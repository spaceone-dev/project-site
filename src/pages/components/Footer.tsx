import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Top></Top>
      <Bottom></Bottom>
    </>
  );
};

const Top = styled.div`
  width: 100%;
  height: 38rem;
  background: #001b33;
`;

const Bottom = styled.div`
  width: 100%;
  height: 38rem;
  background: #000f1c;
`;

export default Footer;
