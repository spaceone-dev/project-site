import {useRouter} from 'next/router';
import {useState} from 'react';
import {theme} from '../styles/theme';
import styled from 'styled-components';
import {device} from '../styles/theme';
import {GithubLogoMenu, ExternalLinkMenuSm, GithubLogoMenuHover, Mail, MailHover} from '../public/assets';

const Menu = ({isMenuOpen, isMenuShown, pathname}) => {
    const nav1 = [
        {name: 'Home', url: '/'},
        {name: 'User Guide', url: 'https://spaceone-dev.gitbook.io/user-guide/'},
        {name: 'API Reference', url: 'https://spaceone-dev.gitbook.io/spaceone-apis/'},
        {name: 'Release Note', url: '/release-note'},
    ];
    const nav2 = [
        {name: 'Github', url: 'https://github.com/spaceone-dev'},
        {name: 'Get In Touch', url: 'mailto:support@spaceone.dev'},
    ];
    const router = useRouter();

    const handleRouting = (name: string, url: string) => {
        if ((name === 'Home' && pathname === '/') || (name === 'Release Note' && pathname === '/release-note')) {
            router.reload();
            window.scrollTo(0, 0);
        } else if (name !== 'Home' && name !== 'Release Note') {
            window.open(url);
        } else {
            router.push(url);
        }
    };

    return (
        <Box isMenuOpen={isMenuOpen} isMenuShown={isMenuShown}>
            <nav>
                <ul className="__nav1">
                    {nav1.map((item, idx) => (
                        <li
                            key={item.name}
                            role="link"
                            tabIndex={idx + 1}
                            onClick={() => handleRouting(item.name, item.url)}
                            onKeyPress={() => handleRouting(item.name, item.url)}>
                            <Nav1 pathname={pathname} text={item.name}/>
                        </li>
                    ))}
                </ul>
                <ul className="__nav2">
                    {nav2.map((item, idx) => (
                        <li
                            key={item.name}
                            role="link"
                            tabIndex={idx + 1}
                            onClick={() => handleRouting(item.name, item.url)}
                            onKeyPress={() => handleRouting(item.name, item.url)}>
                            <Nav2 key={item.name} text={item.name}/>
                        </li>
                    ))}
                </ul>
            </nav>
        </Box>
    );
};
const Nav1 = ({text, pathname}) => {
    return (
        <div
            className="__nav1__text"
            style={{color: `${((text === 'Home' && pathname === '/') || (text === 'Release Note' && pathname === '/release-note')) && theme.color.green}`,}}
        >
            <span>{text}</span>
            {text !== 'Home' && text !== 'Release Note' && (
                <span className="__ico_external"><ExternalLinkMenuSm/></span>
            )}
        </div>
    );
};

const Nav2 = ({text}) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className="__nav2__text"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {text === 'Github' && (
                !isHover ? (
                    <span className="__ico"><GithubLogoMenu/></span>
                ) : (
                    <span className="__ico"><GithubLogoMenuHover/></span>
                )
            )}
            {text === 'Get In Touch' && (
                !isHover ? (
                    <span className="__ico"><Mail/></span>
                ) : (
                    <span className="__ico"><MailHover/></span>
                )
            )}
            <span>{text}</span>
            <span className="__ico_external"><ExternalLinkMenuSm/></span>
        </div>
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
  animation: ${({isMenuOpen}) => (isMenuOpen ? 'openMenu' : 'closeMenu')} 0.5s;

  nav {
    display: flex;
    justify-content: space-between;
    width: 100vw;
    max-width: 106rem;
    height: auto;
    padding: 19.6rem 10rem 0;
    font-weight: 400;
    color: ${({theme: t}) => t.color.primary[200]};

    .__nav1 {
      cursor: pointer;
      font-size: 4rem;
      letter-spacing: -0.01em;

      &__text {
        display: flex;
        align-items: center;
        margin-bottom: 2.8rem;
        height: 4.1rem;
        cursor: pointer;

        &:hover {
          color: ${({theme: t}) => t.color.green};
        }
      }
    }

    .__nav2 {
      margin-top: 6.4rem;
      margin-right: 10rem;
      font-size: 3rem;

      &__text {
        height: 3.6rem;
        cursor: pointer;
        display: flex;
        margin-bottom: 2rem;

        &:hover {
          color: ${({theme: t}) => t.color.green};
        }
      }
    }

    .__ico {
      width: 3.2rem;
      margin-right: .8rem;
      text-align: center;
    }

    .__ico_external {
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

        &__text {
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

        &__text {
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
