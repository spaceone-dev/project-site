import React, {useEffect, useState} from 'react';
import {UpIcon, Scroll} from "../public/assets";
import Lottie from 'react-lottie';
import styled from "styled-components";
import {device} from "../styles/theme";

const ScrollBtns = () => {
    const optionsScroll = {
        animationData: Scroll,
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
            progressiveLoad: true,
        },
        useSubFrames: false,
    };

    const [isScrollable, setIsScrollable] = useState(true);
    const [isUpShown, setIsUpShown] = useState(false);

    const moveToTop = () => {
        window.scroll({top: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        // Show scroll icon or not
        const html = document.documentElement;
        const handleScroll = () => {
            if (html.scrollHeight - window.pageYOffset === window.innerHeight) {
                setIsScrollable(false);
                setIsUpShown(true);
            } else {
                setIsScrollable(true);
                setIsUpShown(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        // cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <BtnGrp>
            {isScrollable && (
                <Btn leftSide={true}
                >
                    <Lottie
                        options={optionsScroll}
                        style={{
                            width: '2rem',
                            height: '3.25rem',
                        }}
                    />
                    <div className="__text">scroll</div>
                </Btn>
            )}
            {isUpShown && (
                <Btn leftSide={false}
                     onClick={moveToTop}
                >
                    <UpIcon/>
                    <div className="__text">up</div>
                </Btn>
            )}
        </BtnGrp>
    )
}
const BtnGrp = styled.div`
  position: fixed;
  left: 50%;
  bottom: 7rem;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 144rem;
  padding: 0 3rem;
  transform: translateX(-50%);
  box-sizing: border-box;

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const Btn = styled.button<{ leftSide: boolean; }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-left: ${({leftSide}) => leftSide ? `0` : `auto`};
  
  .__text {
    margin-top: 1rem;
    color: ${({theme}) => theme.color.primary[200]};
    font-size: 1.2rem;
    font-family: "Roboto";
  }
`;

export default ScrollBtns;
