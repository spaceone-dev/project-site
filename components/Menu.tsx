import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import {
  GithubLogoMenu,
  ExternalLinkMenuSm,
  GithubLogoMenuHover,
  Mail,
  MailHover,
  SOneMenu,
} from '../public/assets';
import { theme } from '../styles/theme';

const leftList = [
  { name: 'Home', url: '/' },
  { name: 'User Guide', url: 'https://spaceone-dev.gitbook.io/user-guide/' },
  { name: 'API Reference', url: 'https://spaceone-dev.gitbook.io/spaceone-apis/' },
  { name: 'Release Note', url: '/release-note' },
];
const rightList = [
  { name: 'Github', url: 'https://github.com/spaceone-dev' },
  { name: 'Get In Touch', url: 'mailto:support@spaceone.dev' },
];

const Menu = ({ isMenuOpen, isMenuShown, pathname }) => {
  const router = useRouter();

  const handleRouting = (name: string, url: string) => {
    if (name !== 'Home' && name !== 'Release Note') window.open(url);
    else router.push(url);
  };

  return (
    <Box isMenuOpen={isMenuOpen} isMenuShown={isMenuShown}>
      <Container>
        <div className="__big">
          {leftList.map((item, idx) => (
            <div
              key={item.name}
              role="link"
              tabIndex={idx + 1}
              onClick={() => handleRouting(item.name, item.url)}
              onKeyPress={() => handleRouting(item.name, item.url)}
            >
              <LeftList pathname={pathname} text={item.name} />
            </div>
          ))}
        </div>
        <div className="__small">
          {rightList.map((item, idx) => (
            <div
              key={item.name}
              role="link"
              tabIndex={idx + 1}
              onClick={() => handleRouting(item.name, item.url)}
              onKeyPress={() => handleRouting(item.name, item.url)}
            >
              <RightList key={item.name} text={item.name} />
            </div>
          ))}
        </div>
      </Container>
    </Box>
  );
};

const LeftList = ({ text, pathname }) => {
  const [, setIsHover] = useState(false);

  return (
    <div
      style={{
        color: `${
          ((text === 'Home' && pathname === '/')
            || (text === 'Release Note' && pathname === '/release-note'))
          && theme.color.green
        }`,
      }}
      className="__big__text"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {((text === 'Home' && pathname === '/')
        || (text === 'Release Note' && pathname === '/release-note')) && (
        <SOneMenu />
      )}
      <span
        style={{
          marginLeft: `${
            ((text === 'Home' && pathname === '/')
              || (text === 'Release Note' && pathname === '/release-note'))
            && '1rem'
          }`,
        }}
      >
        {text}
      </span>
      {text !== 'Home' && text !== 'Release Note' && (
        <span style={{ marginLeft: '0.7rem', marginTop: '0.3rem' }}>
          <ExternalLinkMenuSm />
        </span>
      )}
    </div>
  );
};

const RightList = ({ text }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="__small__text"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {text === 'Github'
        && (!isHover ? <GithubLogoMenu /> : <GithubLogoMenuHover />)}
      {text === 'Get In Touch'
        && (!isHover ? (
          <span style={{ marginLeft: '0.5rem', marginRight: '1.3rem' }}>
            <Mail />
          </span>
        ) : (
          <span style={{ marginLeft: '0.5rem', marginRight: '1.3rem' }}>
            <MailHover />
          </span>
        ))}
      <span style={{ marginLeft: text === 'Github' && '0.8rem' }}>{text}</span>
      <span style={{ marginLeft: '0.7rem', marginTop: '0.3rem' }}>
        <ExternalLinkMenuSm />
      </span>
    </div>
  );
};

const Box = styled.div<{ isMenuOpen: boolean; isMenuShown: boolean }>`
  width: 100%;
  height: 100vh;
  background: #001b33;
  z-index: 5;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  animation: ${({ isMenuOpen }) => (isMenuOpen ? 'openMenu' : 'closeMenu')} 0.5s;
`;

const Container = styled.div`
  padding-top: 26rem;
  display: flex;
  width: 144rem;
  height: auto;
  font-size: 4.6rem;
  font-weight: 500;
  font-weight: 400;
  color: ${({ theme: t }) => t.color.primary[200]};
  .__big {
    cursor: pointer;
    margin-left: 19rem;
    font-size: 4rem;
    letter-spacing: -0.01em;
    &__text {
      display: flex;
      align-items: center;
      margin-bottom: 4rem;
      height: 4.1rem;
      cursor: pointer;
      display: flex;
      &:hover {
        color: ${({ theme: t }) => t.color.green};
      }
    }
  }
  .__small {
    position: absolute;
    right: 0;
    font-size: 3rem;
    margin-bottom: 16.6rem;
    margin-right: 30rem;
    &__text {
      height: 3.6rem;
      cursor: pointer;
      display: flex;
      margin-bottom: 2rem;
      &:hover {
        color: ${({ theme: t }) => t.color.green};
      }
    }
  }
`;

export default Menu;
