import Head from "next/head";
import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import axios from 'axios';
import useSWR from 'swr';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {
    Footer, Menu, Dropdown,
} from '../components';
import {
    SOneMenuV2, SpaceONE, UpIcon, Scroll, LoadingV2, Close,
} from '../public/assets';
import {device} from '../styles/theme';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const ReleaseNote = () => {
    const router = useRouter();
    const pathname = useRouter().pathname;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuShown, setIsMenuShown] = useState(false);
    const [isScrollable, setIsScrollable] = useState(true);
    const [isUpShown, setIsUpShown] = useState(false);
    const [currentY, setCurrentY] = useState(0);

    // api
    const {data, error} = useSWR('api/release-note', fetcher);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [noteList, setNoteList] = useState([]);
    const [noteVersion, setNoteVersion] = useState('');
    const [noteData, setNoteData] = useState('');

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

    const getNoteData = async (version: string) => {
        setLoading(true);
        setNoteVersion(version);
        const res = await axios.get(`api/release-note/${version}`);
        setNoteData(res.data.noteData);
        setLoading(false);
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

    useEffect(() => {
        if (error) {
            setIsError(true);
        } else if (data) {
            setIsError(false);
            setNoteList(data.noteList);
            setNoteVersion(data.noteVersion);
            setNoteData(data.noteData);
            setLoading(false);
        }
    }, [data, error]);

    const optionsScroll = {
        animationData: Scroll,
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const optionsLoading = {
        animationData: LoadingV2,
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <Container className="release-note" isMenuOpen={isMenuOpen} loading={loading.toString()}>
            <Head>
                <title>SpaceONE - Release Note</title>
            </Head>
            <header>
                <div
                    className="__logo"
                    role="link"
                    tabIndex={0}
                    onClick={() => router.push('/')}
                    onKeyPress={() => router.push('/')}
                >
                    <SpaceONE/>
                </div>
                <div
                    className="__menu"
                    role="button"
                    tabIndex={0}
                    onClick={handleMenuOpen}
                    onKeyPress={handleMenuOpen}
                >
                    <span className="__ico_menu">{isMenuOpen ? <Close/> : <SOneMenuV2/>}</span>
                    <span> {isMenuOpen ? 'Close' : 'Menu'}</span>
                </div>
            </header>
            {isMenuShown && (
                <Menu
                    pathname={pathname}
                    isMenuOpen={isMenuOpen}
                    isMenuShown={isMenuShown}
                />
            )}
            <Tab>
                <span className="__text">SpaceONE Release Note</span>
            </Tab>
            {isScrollable && !loading && (
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
                    onClick={() => window.scroll({top: 0, behavior: 'smooth'})}
                >
                    <UpIcon/>
                    <div className="__text">up</div>
                </UpBtn>
            )}
            {loading ? (
                    <Box>
                        <div className="__loading">
                            <Lottie options={optionsLoading} style={{width: '14rem', height: '14rem',}}/>
                        </div>
                    </Box>
                )
                : isError ? (<div>error occurred</div>) : (
                    <>
                        <Box>
                            <Dropdown list={noteList} selected={noteVersion} getNoteData={getNoteData}/>
                            <br/>
                            {noteData ? (<ReactMarkdown plugins={[gfm]} className="markdown"
                                                        allowDangerousHtml>{noteData}</ReactMarkdown>) : (
                                <div>No Data</div>)}
                        </Box>
                        <Footer/>
                    </>
                )}
        </Container>
    );
};

const Container = styled.div<{ isMenuOpen: boolean, loading: string }>`
  width: 100%;
  font-size: 3rem;
  overflow-x: hidden;

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
    opacity: ${({isMenuOpen}) => isMenuOpen && '0.6'};
    animation: ${({isMenuOpen}) => (isMenuOpen ? 'openMenuLogo' : 'closeMenuLogo')} 0.5s;

    :hover {
      opacity: 1;
    }
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
}

@media ${device.tablet} {
  header {
    top: 5rem;
    padding: 1.5rem 5.7rem;
  }

  .__menu {
    right: 4rem;
  }
}

@media ${device.mobile} {
  top: 2.5rem;
  left: 1rem;

  header {
    top: 2rem;
    padding: 1.5rem 3rem;
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

const Tab = styled.div`
  width: 100%;
  max-width: 144rem;
  font-weight: 300;
  color: ${({theme}) => theme.color.white};
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background-color: inherit;
  z-index: 3;
  display: flex;

  .__text {
    padding-bottom: 1.6rem;
    margin-top: 13.6rem;
    margin-left: 10rem;
    margin-right: 10rem;
    width: 100%;
    border: 0 solid ${({theme}) => theme.color.gray[700]};
    border-bottom-width: 1px;

    @media ${device.tablet} {
      margin-left: 5.7rem;
      margin-right: 5.7rem;
    }
    @media ${device.mobile} {
      margin-top: 10.6rem;
      margin-left: 3rem;
      margin-right: 3rem;
    }
  }
`;

const Box = styled.div`
  //border: solid 1px red;
  max-width: 144rem;
  margin: 0 auto;
  padding: 0 10rem 5rem;
  box-sizing: border-box;

  @media ${device.tablet} {
    padding: 0 5.7rem 5rem;
  }

  @media ${device.mobile} {
    overflow-x: scroll;
    padding: 0 3rem 5rem;
  }

  .__loading {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__text {
      margin-top: 2rem;
      font-family: Noto Sans;
      color: ${({theme}) => theme.color.gray[400]};
      font-size: 1.5rem;
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
    left: 1rem;
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

  .__text {
    margin-top: 1rem;
    color: ${({theme}) => theme.color.primary[200]};
    font-family: "Roboto";
    font-size: 1.2rem;
  }

  @media ${device.tablet} {
    right: 4rem;
  }
  @media ${device.mobile} {
    right: 1rem;
  }
`;

export default ReleaseNote;
