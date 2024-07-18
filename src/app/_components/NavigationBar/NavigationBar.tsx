'use client';

import { styled } from 'styled-components';
import NavigationLogo from './NavigationLogo';
import NavigationContent from './NavigationContent';
import { useEffect } from 'react';
import { useNavbarStore } from '@/app/_store/navbarStore';

export default function NavgationBar() {
  const navbarBgColor = useNavbarStore((state) => state.navbarBgColor);
  const navbarSubBgColor = useNavbarStore((state) => state.navbarSubBgColor);
  const navbarTextColor = useNavbarStore((state) => state.navbarTextColor);
  const navbarBorder = useNavbarStore((state) => state.navbarBorder);
  const isMenuOpen = useNavbarStore((state) => state.isMenuOpen);
  const isSubMenuOpen = useNavbarStore((state) => state.isSubMenuOpen);

  useEffect(() => {
    const nav = document.querySelector('.nav-bg') as HTMLElement;
    nav.style.transition = 'all 0.2s';
    if (isMenuOpen) {
      nav.style.opacity = '1';
      nav.style.height = isSubMenuOpen ? '672px' : '315px';
    } else {
      nav.style.opacity = '0';
      nav.style.height = '0px';
    }
  }, [isMenuOpen, isSubMenuOpen]);

  return (
    <NavBar
      $navbarBgColor={navbarBgColor}
      $navbarSubBgColor={navbarSubBgColor}
      $navbarTextColor={navbarTextColor}
      $navbarBorder={navbarBorder}
      className="nav"
    >
      <div className="nav-bg"></div>
      <div>
        <div>
          <NavigationLogo />
          <NavigationContent />
        </div>
      </div>
    </NavBar>
  );
}

const NavBar = styled.nav<{
  $navbarBgColor: string;
  $navbarSubBgColor: string;
  $navbarTextColor: string;
  $navbarBorder: string;
}>`
  position: fixed;
  z-index: 10;
  width: 100%;
  font-size: 15px;
  height: 60px;
  transition: all 0.2s;
  color: ${({ $navbarTextColor }) => $navbarTextColor};
  & > div {
    z-index: 10;
    background-color: ${(props) => props.$navbarBgColor};
    border-bottom: ${({ $navbarBorder }) => $navbarBorder};
    margin: auto;
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 92%;
      min-height: 60px;
      max-width: 1140px;
      margin: auto;
    }
  }
  & > div:first-child {
    z-index: -2;
    position: absolute;
    width: 100%;
    height: 0px;
    opacity: 0;
    background-color: ${({ $navbarSubBgColor }) => $navbarSubBgColor};
  }
`;
