'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

type NavbarColor = 'var(--darkThemeBackgroundLevel01)' | '#00000000';

interface NavbarColorContextType {
  navbarColor: NavbarColor;
  setNavbarColor: Dispatch<SetStateAction<NavbarColor>>;
}
const NavbarColorContext = createContext<NavbarColorContextType>({
  navbarColor: '#00000000',
  setNavbarColor: () => {},
});

export const NavbarColorProvider = ({ children }: { children: ReactNode }) => {
  const [navbarColor, setNavbarColor] = useState<NavbarColor>('#00000000');

  return <NavbarColorContext.Provider value={{ navbarColor, setNavbarColor }}>{children}</NavbarColorContext.Provider>;
};

export default NavbarColorContext;
