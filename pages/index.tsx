import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import {
  Footer,
  Scroll1,
  Scroll2,
  Scroll3,
  Scroll4,
  Scroll5,
  Scroll6,
  Menu,
  Background,
} from '../components';
import {
  SpaceONE, SOneMan, UpIcon, Scroll,
} from '../public/assets';
import { media } from '../styles/theme';

const Index = () => {
  const route = useRouter();
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
    window.scroll({ top: 0, behavior: 'smooth' });
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

  const optionsScroll = {
    animationData: Scroll,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Head>
        <title>SpaceONE - Open Source Project</title>
        <meta property="og:title" content="SpaceONE - Open Source Project" />
        <meta property="og:image" content="/assets/ogimg.png" />
      </Head>
      <Container className="area_sub" isMenuOpen={isMenuOpen}>
        {isMenuShown && (
          <Menu
            pathname={pathname}
            isMenuOpen={isMenuOpen}
            isMenuShown={isMenuShown}
          />
        )}
        <Background />
        <div
          className="__logo"
          role="link"
          tabIndex={0}
          onClick={() => route.reload()}
          onKeyPress={() => route.reload()}
        >
          <SpaceONE />
        </div>
        <div className="__menu" role="button" tabIndex={0} onClick={handleMenuOpen} onKeyPress={handleMenuOpen}>
          <SOneMan />
          <span style={{ marginLeft: '0.4rem', marginTop: '0.2rem' }}>
            {isMenuOpen ? 'Close' : 'Menu'}
          </span>
        </div>
        {isScrollable && (
          <ScrollBtn isMenuOpen={isMenuOpen}>
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
            <UpIcon />
            <div className="__text">up</div>
          </UpBtn>
        )}
        <Scroll1 />
        <Scroll2 />
        <Scroll3 />
        <Scroll4 />
        <Scroll5 />
        <Scroll6 />
        <Footer />
      </Container>
    </>
  );
};

const Container = styled.div<{ isMenuOpen: boolean }>`
  font-size: 3rem;
  .__logo {
    cursor: pointer;
    position: fixed;
    left: 10rem;
    ${media[768]} {
      left: 4rem;
    }
    top: 8rem;
    z-index: 10;
    opacity: ${({ isMenuOpen }) => isMenuOpen && '0.6'};
    animation: ${({ isMenuOpen }) => (isMenuOpen ? 'openMenuLogo' : 'closeMenuLogo')}
      0.5s;
    :hover{
      opacity: 1;
    }
  }
  .__menu {
    cursor: pointer;
    font-weight: 300;
    position: fixed;
    z-index: 10;
    display: flex;
    align-items: center;
    ${media[768]} {
      right: 4rem;
    }
    right: 10rem;
    top: 8rem;
    color: ${({ theme }) => theme.color.primary[200]};
    font-family: "Roboto";
    font-size: 1.8rem;
    &:hover {
      transition: 0.3s;
      color: #65cba0;
    }
  }
`;

const ScrollBtn = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 10rem;
  bottom: 7rem;
  z-index: 3;
  animation: ${({ isMenuOpen }) => (!isMenuOpen ? 'openMenu' : 'closeMenu')}
    0.5s;
  .__text {
    margin-top: 1rem;
    color: ${({ theme }) => theme.color.primary[200]};
    font-family: "Roboto";
    font-size: 1.2rem;
  }
  ${media[768]} {
    left: 4rem;
  }
`;

const UpBtn = styled.div<{ isMenuOpen: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 12.5rem;
  bottom: 7rem;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${({ isMenuOpen }) => (!isMenuOpen ? 'openMenu' : 'closeMenu')}
    0.5s;
  .__text {
    margin-top: 1rem;
    color: ${({ theme }) => theme.color.primary[200]};
    font-family: "Roboto";
    font-size: 1.2rem;
  }
  ${media[768]} {
    right: 4rem;
  }
`;

export default Index;
