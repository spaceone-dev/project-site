import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu } from './index';
import { device } from '../styles/theme';
import { SpaceONE, SOneMenuV2, Close } from '../public/assets';

const Header = () => {
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

    return (
        <Wrap isMenuOpen={isMenuOpen}>
            <div className="__header">
                <div className="__inner">
                    <h1 className="__logo">
                        <a
                            href="/"
                            tabIndex={0}
                        >
                            <SpaceONE />
                        </a>
                    </h1>
                    <button
                        type="button"
                        className="__menu"
                        tabIndex={0}
                        onClick={handleMenuOpen}
                        onKeyPress={handleMenuOpen}
                    >
                        <span className="__ico__menu">{isMenuOpen ? <Close /> : <SOneMenuV2 />}</span>
                        <span className="__txt">{isMenuOpen ? 'Close' : 'Menu'}</span>
                    </button>
                </div>
            </div>
            {isMenuShown && (
                <Menu
                    isMenuOpen={isMenuOpen}
                    isMenuShown={isMenuShown}
                />
            )}
        </Wrap>
    );
};

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
    color: ${({ theme }) => theme.color.primary[200]};
    font-size: 2rem;
    font-family: "Roboto";
    font-weight: 300;
    cursor: pointer;

    .__ico__menu {
      margin-right: .4rem;
    }

    &:hover {
      transition: 0.3s;
      color: ${({ theme: t }) => t.color.green};

      path {
        fill: ${({ theme: t }) => t.color.green};
        transition: fill 0.3s;
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
