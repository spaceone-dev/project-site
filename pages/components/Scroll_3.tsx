import styled from "styled-components";
import { media } from "../../styles/theme";
import Image from "next/image";
import Slider from "react-slick";

const Scroll_3 = () => {
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <Box>
      <Container>
        <Padding>
          <Slider className="text-slider" {...settings1}>
            <div>Manage Cloud Resource</div>
            <div>Project-Based Management System</div>
            <div>Consolidated Billing</div>
            <div>Real-Time Monitoring</div>
          </Slider>
          <Slider className="image-slider" {...settings}>
            <div>
              <Image src="/assets/img1.png" alt="s" width="700" height="560" />
            </div>
            <div>
              <Image src="/assets/img2.png" alt="s" width="700" height="560" />
            </div>
            <div>
              <Image src="/assets/img3.png" alt="s" width="700" height="560" />
            </div>
            <div>
              <Image src="/assets/img4.png" alt="s" width="700" height="560" />
            </div>
          </Slider>
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
  /* overflow: hidden; */
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
  .text-slider {
    width: 34rem;
    color: white;
  }
  .image-slider {
    width: 700px;
  }
  .dots {
    color: red;
  }
`;

export default Scroll_3;
