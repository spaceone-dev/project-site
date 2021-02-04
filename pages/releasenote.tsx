import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import useSWR from 'swr';
import axios from 'axios';
import {
  SOneMan, SpaceONE, UpIcon, Scroll,
} from '../public/assets';
import { media } from '../styles/theme';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const ReleaseNote = () => {
  const pathname = useRouter().pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isScrollable, setIsScrollable] = useState(true);
  const [isUpShown, setIsUpShown] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuShown) {
      setIsMenuOpen(true);
      setIsMenuShown(true);
      setIsScrollable(false);
      setIsUpShown(false);
    } else {
      setIsMenuOpen(false);
      setIsScrollable(true);
      setIsUpShown(true);
      setTimeout(() => {
        setIsMenuShown(false);
      }, 500);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Show scroll icon or not
    const html = document.documentElement;
    window.addEventListener('scroll', () => {
      if (html.scrollHeight - window.pageYOffset === window.innerHeight) {
        setIsScrollable(false);
        setIsUpShown(true);
      } else {
        setIsScrollable(true);
        setIsUpShown(false);
      }
    });
  }, []);

  const optionsScroll = {
    animationData: Scroll,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const { data, error } = useSWR('api/release-note', fetcher);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [noteList, setNoteList] = useState([]);
  const [noteVersion, setNoteVersion] = useState('');
  const [noteData, setNoteData] = useState('');
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

  const getNoteData = async (version) => {
    setLoading(true);
    setNoteVersion(version);
    const res = await axios.get(`api/release-note/${version}`);
    setNoteData(res.data.noteData);
    setLoading(false);
  };

  return (
    <Container isMenuOpen={isMenuOpen}>
      {isMenuShown && (
        <Menu
          pathname={pathname}
          isMenuOpen={isMenuOpen}
          isMenuShown={isMenuShown}
        />
      )}
      <div className="__logo">
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
          onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
        >
          <UpIcon />
          <div className="__text">up</div>
        </UpBtn>
      )}
      {loading ? (<div>loading...</div>)
        : isError ? (<div>error occurred</div>) : (
          <div>
            <p>Note List: </p>
            {noteList.map((d) => (<div onClick={() => getNoteData(d)} key={d}>{d}</div>))}
            <br />
            <br />
            <p>Selected Version: {noteVersion}</p>
            <br />
            <br />
            {noteData ? (<pre>{noteData}</pre>) : (<div>No Data</div>)}
          </div>
        )}
      <Footer />
    </Container>
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
  }
  .__menu {
    cursor: pointer;
    position: fixed;
    z-index: 10;
    display: flex;
    align-items: center;
    ${media[768]} {
      right: 4rem;
    }
    right: 12.5rem;
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
  position: fixed;
  left: 10rem;
  bottom: 7rem;
  z-index: 10;
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
  position: fixed;
  right: 12.5rem;
  bottom: 7rem;
  z-index: 10;
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

export default ReleaseNote;
