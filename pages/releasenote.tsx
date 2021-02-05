import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import useSWR from 'swr';
import {
  SOneMan, SpaceONE, UpIcon, Scroll, Loading,
} from '../public/assets';
import { media } from '../styles/theme';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Dropdown from '../components/Dropdown';

// const MDElement = () => {
//   const [markdown, setMarkdown] = useState(null);

//   const getReadme = async () => {
//     try {
//       const { data: rawData } = await axios({
//         url:
//           'https://raw.githubusercontent.com/spaceone-dev/spaceone/master/release_notes/en/version_1.6.1.md',
//         method: 'get',
//       });
//       const { data: md } = await axios({
//         url: 'https://api.github.com/markdown/raw',
//         method: 'post',
//         headers: {
//           'Content-Type': 'text/x-markdown',
//         },
//         data: rawData,
//       });
//       setMarkdown(md);
//       return md;
//     } catch (e) {
//       return e;
//     }
//   };

//   useEffect(() => {
//     getReadme();
//   }, []);

//   // eslint-disable-next-line react/no-danger
//   return <div className="markdown" dangerouslySetInnerHTML={{ __html: markdown }} />;
// };

const fetcher = (url:string) => axios.get(url).then((res) => res.data);

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
    } else {
      // according to position change
      setIsScrollable(true);
      setIsUpShown(false);

      setIsMenuOpen(false);
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

  const getNoteData = async (version: string) => {
    setLoading(true);
    setNoteVersion(version);
    const res = await axios.get(`api/release-note/${version}`);
    setNoteData(res.data.noteData);
    console.log(noteData);
    setLoading(false);
  };

  return (
    <Container isMenuOpen={isMenuOpen}>
      <Tab>
        <span className="__text">SpaceONE Release Note</span>
      </Tab>
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
      <div
        className="__menu"
        role="button"
        tabIndex={0}
        onClick={handleMenuOpen}
        onKeyPress={handleMenuOpen}
      >
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
      {loading ? (<Box><div className="__loading"><Loading /></div></Box>)
        : isError ? (<div>error occurred</div>) : (
          <>
            <Box>
              <Dropdown list={noteList} selected={noteVersion} getNoteData={getNoteData} />
              <br />
              {noteData ? (<pre className="markdown">{noteData}</pre>) : (<div>No Data</div>)}
            </Box>
            <Footer />
          </>
        )}
    </Container>
  );
};

const Container = styled.div<{ isMenuOpen: boolean }>`
  position: ${({ isMenuOpen }) => (isMenuOpen ? 'fixed' : 'relative')};
  font-size: 3rem;
  background-color: #001B33;
  overflow-x: hidden;
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

const Tab = styled.div`
  width: 100%;
  font-weight: 300;
  color: ${({ theme }) => theme.color.white};
  position: fixed;
  background-color: #001B33;
  z-index: 3;
  display: flex;
  .__text {
    padding-bottom: 1.6rem;
    margin-top: 13.6rem;
    margin-left: 10rem;
    margin-right: 10rem;
    width: 100%;
    border: 0 solid ${({ theme }) => theme.color.gray[700]};
    border-bottom-width: 1px;
  }
`;

const Box = styled.div`
  padding: 0 19rem;
  .__loading{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
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
  animation: ${({ isMenuOpen }) => (!isMenuOpen ? 'openMenu' : 'closeMenu')} 0.5s;
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
