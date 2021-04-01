import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {Menu} from "./index";
import styled from "styled-components";
import {device} from '../styles/theme';
import {SpaceONE, SOneMenuV2, Close} from '../public/assets';

const Header = () => {
    const router = useRouter();
    const pathname = useRouter().pathname;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuShown, setIsMenuShown] = useState(false);
    const [currentY, setCurrentY] = useState(0);

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuShown) {
            setIsMenuOpen(true);
            setIsMenuShown(true);
            setCurrentY(window.pageYOffset);
        } else {
            setIsMenuOpen(false);
            window.scrollTo(0, currentY);

            setTimeout(() => {
                setIsMenuShown(false);
            }, 500);
        }
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

    return (
        <Wrap isMenuOpen={isMenuOpen}>
            <div className="__header">
                <div className="__inner">
                    <h1
                        className="__logo"
                        role="link"
                        tabIndex={0}
                        onClick={redirectToHome}
                        onKeyPress={redirectToHome}
                    ><SpaceONE/>
                    </h1>
                    <button
                        className="__menu"
                        role="button"
                        tabIndex={0}
                        onClick={handleMenuOpen}
                        onKeyPress={handleMenuOpen}
                    >
                        <span className="__ico_menu">{isMenuOpen ? <Close/> : <SOneMenuV2/>}</span>
                        <span className="__txt">{isMenuOpen ? 'Close' : 'Menu'}</span>
                    </button>
                </div>
            </div>
            {isMenuShown && (
                <Menu
                    pathname={pathname}
                    isMenuOpen={isMenuOpen}
                    isMenuShown={isMenuShown}
                />
            )}
        </Wrap>
    )
}

const Wrap = styled.header<{ isMenuOpen: boolean }>`
  font-size: 3rem;

  .__header {
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
    .__inner {
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

export default Header;
