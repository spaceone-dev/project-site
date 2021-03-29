import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import styled from "styled-components";
import Lottie from 'react-lottie';
import {device} from '../styles/theme';
import {SpaceONE, SOneMenuV2, UpIcon, Scroll, Close} from '../public/assets';
import {Menu} from "./index";

const optionsScroll = {
    animationData: Scroll,
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

const Header = () => {
    const router = useRouter();
    const pathname = useRouter().pathname;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuShown, setIsMenuShown] = useState(false);
    const [isScrollable, setIsScrollable] = useState(true);
    const [isUpShown, setIsUpShown] = useState(false);
    const [currentY, setCurrentY] = useState(0);

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuShown) {
            setIsMenuOpen(true);
            setIsMenuShown(true);
            setCurrentY(window.pageYOffset);
        } else {
            // according to position change
            setIsScrollable(true);
            setIsUpShown(false);

            setIsMenuOpen(false);
            window.scrollTo(0, currentY);

            setTimeout(() => {
                setIsMenuShown(false);
            }, 500);
        }
    };

    const moveToTop = () => {
        window.scroll({top: 0, behavior: 'smooth'});
    };

    const redirectToHome = () => {
        if (pathname === '/') {
            router.reload();
            window.scrollTo(0, 0);
        } else {
            router.push('/');
            window.scrollTo(0, 0);
        }
    }

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
        <HeaderWrap isMenuOpen={isMenuOpen}>
            <header>
                <div className="__inner">
                    <h1
                        className="__logo"
                        role="link"
                        tabIndex={0}
                        onClick={redirectToHome}
                        onKeyPress={redirectToHome}
                    ><SpaceONE/>
                    </h1>
                    <div
                        className="__menu"
                        role="button"
                        tabIndex={0}
                        onClick={handleMenuOpen}
                        onKeyPress={handleMenuOpen}
                    >
                        <span className="__ico_menu">{isMenuOpen ? <Close/> : <SOneMenuV2/>}</span>
                        <span className="__txt">{isMenuOpen ? 'Close' : 'Menu'}</span>
                    </div>
                </div>
            </header>
            {isMenuShown && (
                <Menu
                    pathname={pathname}
                    isMenuOpen={isMenuOpen}
                    isMenuShown={isMenuShown}
                />
            )}
            <ScrollBtns>
                {isScrollable && (
                    <ScrollBtn>
                        <Lottie
                            options={optionsScroll}
                            style={{
                                width: '2rem',
                                height: '3.25rem',
                            }}
                        />
                        <div className="__text">scroll</div>
                    </ScrollBtn>
                )}
                {isUpShown && (
                    <UpBtn
                        isMenuOpen={isMenuOpen}
                        onClick={moveToTop}
                    >
                        <UpIcon/>
                        <div className="__text">up</div>
                    </UpBtn>
                )}
            </ScrollBtns>
        </HeaderWrap>
    )
}

const HeaderWrap = styled.div<{ isMenuOpen: boolean }>`
  font-size: 3rem;

  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
    width: 100vw;
    height: 6rem;
    background-color: rgba(0, 27, 51, .5);

    .__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 144rem;
      height: 100%;
      margin: 0 auto;
      padding: 0 3rem;
      box-sizing: border-box;
    }
  }

  .__logo {
    width: 18.24rem;
    cursor: pointer;
  }

  .__menu {
    display: flex;
    align-items: center;
    padding: 0;
    color: ${({theme}) => theme.color.primary[200]};
    font-size: 2rem;
    font-family: "Roboto";
    font-weight: 300;
    cursor: pointer;

    .__ico_menu {
      margin-right: .4rem;
    }

    &:hover {
      transition: 0.3s;
      color: #65cba0;

      .__ico_menu {
        path {
          fill: #65cba0;
          transition: fill 0.3s;
        }
      }
    }
  }

  @media ${device.mobile} {
    header .__inner {
      padding: 0 2rem;
    }

    .__logo {
      width: 13.3rem;
    }

    .__menu {
      top: 2.5rem;
      right: 1rem;
    }
  }
`;

const ScrollBtns = styled.div`
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

const ScrollBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .__text {
    margin-top: 1rem;
    color: ${({theme}) => theme.color.primary[200]};
    font-size: 1.2rem;
    font-family: "Roboto";
  }
`;

const UpBtn = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  animation: ${({isMenuOpen}) => (!isMenuOpen ? 'openMenu' : 'closeMenu')} 0.5s;
  cursor: pointer;

  .__text {
    margin-top: 1rem;
    color: ${({theme}) => theme.color.primary[200]};
    font-size: 1.2rem;
    font-family: "Roboto";
  }
`;

export default Header;
