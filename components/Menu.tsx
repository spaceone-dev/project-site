import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import {
  GithubLogo_menu as GithubLogoMenu,
  ExternalLink_menu_sm as ExternalLinkMenuSm,
  GithubLogo_menu_hover as GithubLogoMenuHover,
  Mail,
  Mail_hover as MailHover,
  SOne_menu as SOneMenu,
} from '../public/assets';
import { theme } from '../styles/theme';

const leftList = [
  { name: 'Home', url: '/' },
  { name: 'User Guide', url: '' },
  { name: 'API Reference', url: '' },
  { name: 'Release Note', url: '/releasenote' },
];
const rightList = [
  { name: 'Github', url: '' },
  { name: 'Get In Touch', url: '' },
];

const Menu = ({ isMenuOpen, isMenuShown, pathname }) => {
  const router = useRouter();

  return (
    <Box isMenuOpen={isMenuOpen} isMenuShown={isMenuShown}>
      <Container>
        <div className="__big">
          {leftList.map((item, idx) => (
            <div key={item.name} role="link" tabIndex={idx + 1} onClick={() => router.push(item.url)} onKeyPress={() => router.push(item.url)}>
              <LeftList pathname={pathname} text={item.name} />
            </div>
          ))}
        </div>
        <div className="__small">
          {rightList.map((item) => (
            <RightList key={item.name} text={item.name} />
          ))}
        </div>
      </Container>
    </Box>
  );
};

const LeftList = ({ text, pathname }) => {
  // eslint-disable-next-line no-unused-vars
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      style={{
        color: `${
          ((text === 'Home' && pathname === '/')
            || (text === 'Release Note' && pathname === '/releasenote'))
          && theme.color.green
        }`,
      }}
      className="__big__text"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {((text === 'Home' && pathname === '/')
        || (text === 'Release Note' && pathname === '/releasenote')) && (
        <SOneMenu />
      )}
      <span
        style={{
          marginLeft: `${
            ((text === 'Home' && pathname === '/')
              || (text === 'Release Note' && pathname === '/releasenote'))
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
  box-shadow: 0px 4px 15px rgba(0, 92, 179, 0.3);
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
    font-size: 3rem;
    margin-bottom: 16.6rem;
    margin-left: 94.6rem;
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
