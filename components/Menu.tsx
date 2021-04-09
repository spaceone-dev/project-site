import styled from 'styled-components';
import { theme, device } from '../styles/theme';

import { GithubLogoMenu, ExternalLinkMenuSm, Mail } from '../public/assets';

const Menu = ({ isMenuOpen, isMenuShown }) => {
    const nav1 = [
        { name: 'Home', url: '/' },
        { name: 'User Guide', url: 'https://spaceone-dev.gitbook.io/user-guide/' },
        { name: 'API Reference', url: 'https://spaceone-dev.gitbook.io/spaceone-apis/' },
        { name: 'Release Note', url: '/release-note' },
    ];

    const nav2 = [
        { name: 'Github', url: 'https://github.com/spaceone-dev' },
        { name: 'Get In Touch', url: 'mailto:support@spaceone.dev' },
    ];

    return (
        <Box isMenuOpen={isMenuOpen} isMenuShown={isMenuShown}>
            <nav>
                <ul className="__nav1">
                    {nav1.map((item, idx) => (
                        <li className="__text">
                            <a
                                key={item.name}
                                tabIndex={idx + 1}
                                href={item.url}
                                target={item.name !== 'Home' && item.name !== 'Release Note' && ('_blank')}
                                style={{ color: `${((item.name === 'Home' && item.url === '/')) && theme.color.green}` }}
                            >
                                {item.name}
                                {item.name !== 'Home' && item.name !== 'Release Note' && (
                                    <span className="__ico__external"><ExternalLinkMenuSm /></span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="__nav2">
                    {nav2.map((item, idx) => (
                        <li className="__text">
                            <a
                                key={item.name}
                                tabIndex={idx + 1}
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {item.name === 'Github' && (
                                    <span className="__ico"><GithubLogoMenu /></span>
                                )}
                                {item.name === 'Get In Touch' && (
                                    <span className="__ico"><Mail /></span>
                                )}
                                {item.name}
                                <span className="__ico__external"><ExternalLinkMenuSm /></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </Box>
    );
};

const Box = styled.div<{ isMenuOpen: boolean; isMenuShown: boolean }>`
  overflow: auto;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background: #001b33;
  animation: ${({ isMenuOpen }) => (isMenuOpen ? 'openMenu' : 'closeMenu')} 0.5s;

  nav {
    display: flex;
    justify-content: space-between;
    width: 100vw;
    max-width: 106rem;
    height: auto;
    padding: 19.6rem 10rem 0;
    font-weight: 400;
    color: ${({ theme: t }) => t.color.primary[200]};

    .__nav1 {
      cursor: pointer;
      font-size: 4rem;
      letter-spacing: -0.01em;

      .__text {
        display: flex;
        align-items: center;
        height: 4.1rem;
        margin-bottom: 2.8rem;
        cursor: pointer;
        transition: color .2s;
        
        &:hover {
          color: ${({ theme: t }) => t.color.green};
          transition: color .2s;
        }
      }
    }

    .__nav2 {
      margin-top: 6.4rem;
      margin-right: 10rem;
      font-size: 3rem;

      .__text {
        height: 3.6rem;
        margin-bottom: 2rem;
        transition: color .2s;
        
        a {
          display: flex;
          align-items: center;
        }
        .__ico path {
          transition: fill .2s;
        }
        
        &:hover {
          color: ${({ theme: t }) => t.color.green};
          transition: color .2s;

          .__ico path {
            fill: ${({ theme: t }) => t.color.green};
            transition: fill .2s;
          }
        }
      }
    }

    .__ico {
      width: 3.2rem;
      margin-right: .8rem;
      text-align: center;
    }

    .__ico__external {
      margin-top: .3rem;
      margin-left: .7rem;
    }

    @media ${device.tablet} {
      flex-direction: column;
      justify-content: flex-start;
      width: 100vw;
      height: 100vh;
      padding: 23rem 5.7rem 0;
      font-size: 4rem;
      box-sizing: border-box;

      .__nav1 {
        margin-bottom: 17rem;

        .__text {
          margin-bottom: 1.9rem;
        }
      }

      .__nav2 {
        margin-top: 0;
        margin-right: 0;
      }
    }

    @media ${device.mobile} {
      height: 100vh;
      flex-direction: column;
      justify-content: flex-start;
      width: 100vw;
      padding: 10.3rem 3rem 0;
      box-sizing: border-box;

      .__nav1 {
        font-size: 3rem;
        margin-bottom: 8rem;

        .__text {
          margin-bottom: 2rem;
        }
      }

      .__nav2 {
        margin-top: 0;
        margin-right: 0;
        font-size: 2.4rem;
      }
    }
  }
`;

export default Menu;
