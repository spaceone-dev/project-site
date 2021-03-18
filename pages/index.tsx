import Head from 'next/head';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
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
    SpaceONE, SOneMenuV2, UpIcon, Scroll, Close
} from '../public/assets';
import {device} from '../styles/theme';

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
                <meta property="og:title" content="SpaceONE - Open Source Project"/>
                <meta property="og:image" content="/assets/ogimg.png"/>
            </Head>
            <Container className="area_sub" isMenuOpen={isMenuOpen}>
                {isMenuShown && (
                    <Menu
                        pathname={pathname}
                        isMenuOpen={isMenuOpen}
                        isMenuShown={isMenuShown}
                    />
                )}
                <Background/>
                <header>
                    <div
                        className="__logo"
                        role="link"
                        tabIndex={0}
                        onClick={() => route.reload()}
                        onKeyPress={() => route.reload()}
                    ><SpaceONE/>
                    </div>
                    <div className="__menu"
                         role="button"
                         tabIndex={0}
                         onClick={handleMenuOpen}
                         onKeyPress={handleMenuOpen}
                    >
                        <span className="__ico_menu">{isMenuOpen ? <Close/> : <SOneMenuV2/>}</span>
                        <span className="__txt">{isMenuOpen ? 'Close' : 'Menu'}</span>
                    </div>
                </header>
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
                        <UpIcon/>
                        <div className="__text">up</div>
                    </UpBtn>
                )}
                <Scroll1/>
                <Scroll2/>
                <Scroll3/>
                <Scroll4/>
                <Scroll5/>
                <Scroll6/>
                <Footer/>
            </Container>
        </>
    );
};

const Container = styled.div<{ isMenuOpen: boolean }>`
  font-size: 3rem;

  header {
    position: fixed;
    top: 7rem;
    left: 50%;
    z-index: 11;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    max-width: 144rem;
    padding: 1rem 10rem;
    transform: translateX(-50%);
    box-sizing: border-box;
  }

  .__logo {
    cursor: pointer;
    width: 18.24rem;
  }

  .__menu {
    display: flex;
    align-items: center;
    padding: 0;
    cursor: pointer;
    font-weight: 300;
    color: ${({theme}) => theme.color.primary[200]};
    font-family: "Roboto";
    font-size: 2rem;

    .__ico_menu {
      margin-right: .4rem;
    }

    &:hover {
      transition: color 0.3s;
      color: #65cba0;

      .__ico_menu {
        path {
          fill: #65cba0;
          transition: fill 0.3s;
        }
      }
    }
  }
}


@media ${device.tablet} {
  header {
    top: 5rem;
    padding: 1.5rem 5.7rem;
  }
}

@media ${device.mobile} {
  header {
    top: 2rem;
    padding: 1.5rem 3rem;
  }

  .__logo {
    width: 13.3rem;
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
  animation: ${({isMenuOpen}) => (!isMenuOpen ? 'openMenu' : 'closeMenu')} 0.5s;

  .__text {
    margin-top: 1rem;
    color: ${({theme}) => theme.color.primary[200]};
    font-family: "Roboto";
    font-size: 1.2rem;
  }

  @media ${device.tablet} {
    left: 4rem;
  }

  @media ${device.mobile} {
    left: 3rem;
    bottom: 3rem;
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
  animation: ${({isMenuOpen}) => (!isMenuOpen ? 'openMenu' : 'closeMenu')} 0.5s;

  @media ${device.tablet} {
    right: 4rem;
  }

  @media ${device.mobile} {
    right: 3rem;
    bottom: 3rem;
  }

  .__text {
    margin-top: 1rem;
    color: ${({theme}) => theme.color.primary[200]};
    font-family: "Roboto";
    font-size: 1.2rem;
  }
`;

export default Index;
