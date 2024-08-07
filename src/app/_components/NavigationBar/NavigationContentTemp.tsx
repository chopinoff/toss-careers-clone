'use client';

import Link from 'next/link';
import { useWindowSize } from '@/app/_context/WindowSizeContext';
import { useEffect } from 'react';
import { styled } from 'styled-components';
import { useNavbarStore } from '@/app/_store/navbarStore';
import HamburgerIcon from './HamburgerIcon';
import SearchIcon from './SearchIcon';
import CloseIcon from './CloseIcon';

export default function NavigationContent() {
  const { device } = useWindowSize();
  const Menu = device === 'mobile' ? MobileMenu : DesktopMenu;
  const SubMenu = device === 'mobile' ? MobileSubMenu : DesktopSubMenu;
  const isMenuOpen = useNavbarStore((store) => store.isMenuOpen);
  const setIsMenuOpen = useNavbarStore((store) => store.setIsMenuOpen);
  const isSubMenuOpen = useNavbarStore((store) => store.isSubMenuOpen);
  const setIsSubMenuOpen = useNavbarStore((store) => store.setIsSubMenuOpen);
  const navbarSubBgColor = useNavbarStore((store) => store.navbarSubBgColor);
  const navbarHoverBgColor = useNavbarStore((store) => store.navbarHoverBgColor);
  const navbarTextColor = useNavbarStore((store) => store.navbarTextColor);

  function handleMenu(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (device === 'mobile') {
      setIsMenuOpen(!isMenuOpen);
    }
  }

  function handleSubMenu(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (device === 'desktop') {
      if (e.type === 'mouseover') {
        setIsSubMenuOpen(true);
      } else if (e.type === 'mouseout') {
        setIsSubMenuOpen(false);
      }
    } else {
      if (e.type === 'click') {
        setIsSubMenuOpen(!isSubMenuOpen);
      }
    }
  }

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  }, [device]);

  useEffect(() => {
    if (device === 'mobile') {
      const subMenuHeight = String(document.querySelector('.nav-sub-menu > ul')?.scrollHeight);
      const navSubMenu = document.querySelector('.nav-sub-menu') as HTMLElement;
      navSubMenu.style.height = isSubMenuOpen ? subMenuHeight + 'px' : '0px';
      navSubMenu.style.transition = 'all 0.2s';
      const navMenu = document.querySelector('.nav-menu') as HTMLElement;
      navMenu.style.height = isMenuOpen ? (isSubMenuOpen ? '612px' : '255px') : '0px';
      navMenu.style.opacity = isMenuOpen ? '1' : '0';
      navMenu.style.transition = 'all 0.2s';
    }
  }, [isMenuOpen, isSubMenuOpen]);
  return (
    <>
      {device === 'mobile' && (
        <MobileNav>
          <li>
            <SearchBtn>
              <SearchIcon color={navbarTextColor} />
            </SearchBtn>
          </li>
          <li>
            <MenuBtn onClick={handleMenu} $isMenuOpen={isMenuOpen}>
              <div>
                <HamburgerIcon className="hamburger" color={navbarTextColor} />
                <CloseIcon className="close" color={navbarTextColor} />
              </div>
            </MenuBtn>
          </li>
        </MobileNav>
      )}
      {device && (
        <Menu $isMenuOpen={isMenuOpen} $navbarHoverBgColor={navbarHoverBgColor} className="nav-menu">
          <ul>
            <li onMouseOver={handleSubMenu} onMouseOut={handleSubMenu} onClick={handleSubMenu}>
              <button>
                토스커뮤니티
                {device === 'mobile' && (
                  <Toggle $isSubMenuOpen={isSubMenuOpen} src="/images/toggle-icon.svg" alt="toggle icon" />
                )}
              </button>
              <SubMenu
                $isSubMenuOpen={isSubMenuOpen}
                $navbarSubBgColor={navbarSubBgColor}
                $navbarHoverBgColor={navbarHoverBgColor}
                className="nav-sub-menu"
              >
                <ul>
                  <li>
                    <Link onClick={handleMenu} href="/">
                      토스
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleMenu} href="/">
                      토스인슈어런스
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleMenu} href="/">
                      토스페이먼츠
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleMenu} href="/">
                      토스증권
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleMenu} href="/">
                      토스씨엑스
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleMenu} href="/">
                      토스뱅크
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleMenu} href="/">
                      토스플레이스
                    </Link>
                  </li>
                </ul>
              </SubMenu>
            </li>
            <li>
              <Link onClick={handleMenu} href="/">
                채용 공고
              </Link>
            </li>
            <li>
              <Link onClick={handleMenu} href="/">
                합류 여정
              </Link>
            </li>
            <li>
              <Link onClick={handleMenu} href="/">
                자주 묻는 질문
              </Link>
            </li>
            <li>
              <Link onClick={handleMenu} href="/">
                아티클
              </Link>
            </li>
          </ul>
        </Menu>
      )}
    </>
  );
}

const MobileNav = styled.ul`
  display: flex;
  gap: 20px;
  & svg {
    width: 20px;
    height: 20px;
  }
`;
const MobileBtn = styled.button`
  padding: 12px 0px;
`;
const SearchBtn = styled(MobileBtn)``;
const MenuBtn = styled(MobileBtn)<{ $isMenuOpen?: boolean }>`
  & > div {
    position: relative;
    width: 20px;
    height: 20px;
    & > svg {
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }
    & .hamburger {
      opacity: ${(props) => (props.$isMenuOpen ? 0 : 1)};
    }
    & .close {
      opacity: ${(props) => (props.$isMenuOpen ? 1 : 0)};
    }
  }
`;
const Menu = styled.div<{ $isMenuOpen?: boolean }>`
  & > ul > li {
    position: relative;
    & > button,
    & > a {
      display: block;
    }
  }
  transition: all 0.2s;
`;
const DesktopMenu = styled(Menu)<{ $navbarHoverBgColor: string }>`
  display: flex;
  align-items: center;
  & > ul {
    display: flex;
    & > li {
      > button,
      > a {
        padding: 12px 10px;
        border-radius: var(--radius-s);
      }
      & > button:hover,
      & > a:hover {
        background-color: ${({ $navbarHoverBgColor }) => $navbarHoverBgColor};
      }
    }
  }
`;
const MobileMenu = styled(Menu)<{ $isMenuOpen?: boolean; $navbarHoverBgColor: string }>`
  position: absolute;
  top: 60px;
  left: 0px;
  width: 100%;
  overflow: hidden;
  transition: all 0.2s;
  // 최초 토글 시 transition 미적용 이슈 해결
  ${(props) => props.$isMenuOpen === false && 'opacity: 0; height: 0;'}
  & > ul {
    position: absolute;
    width: 100%;
    top: 0;
    & > li {
      & button {
        display: flex;
        justify-content: space-between;
      }
      & > button,
      & > a {
        width: 100%;
        padding: 18px 20px;
        text-align: left;
      }
      & > a:hover {
        background-color: ${({ $navbarHoverBgColor }) => $navbarHoverBgColor};
      }
    }
  }
`;
const Toggle = styled.img<{ $isSubMenuOpen?: boolean }>`
  width: 8px;
  height: 8px;
  transform: rotate(${(props) => (props.$isSubMenuOpen ? '180deg' : '0deg')});
  transition: all 0.2s;
`;
const SubMenu = styled.div<{ $isSubMenuOpen?: boolean; $navbarSubBgColor: string; $navbarHoverBgColor: string }>`
  & > ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    background-color: ${({ $navbarSubBgColor }) => $navbarSubBgColor};
    & > li > a {
      cursor: pointer;
      display: block;
    }
    & > li > a:hover {
      background-color: ${({ $navbarHoverBgColor }) => $navbarHoverBgColor};
    }
  }
`;
const DesktopSubMenu = styled(SubMenu)`
  display: ${(props) => (props.$isSubMenuOpen ? 'block' : 'none')};
  position: absolute;
  width: 142.75px;
  top: 34px;
  left: calc((97.82px - 142.75px) / 2);
  padding: 10px;
  & > ul {
    position: relative;
    padding: 6px;
    gap: 6px;
    border-radius: var(--radius-m);
    & > li > a {
      padding: 12px 10px;
      border-radius: var(--radius-s);
    }
  }
`;
const MobileSubMenu = styled(SubMenu)`
  position: relative;
  overflow: hidden;
  transition: all 0.2s;
  & ul {
    position: absolute;
    & a {
      width: 100%;
      padding: 18px 36px;
    }
  }
`;
