import { create } from 'zustand';

interface NavbarState {
  navbarBgColor: string;
  setNavbarBgColor: (color: string) => void;
  navbarSubBgColor: string;
  setNavbarSubBgColor: (color: string) => void;
  navbarHoverBgColor: string;
  setNavbarHoverBgColor: (color: string) => void;
  navbarBorder: string;
  setNavbarBorder: (border: string) => void;
  navbarTextColor: string;
  setNavbarTextColor: (color: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isSubMenuOpen: boolean;
  setIsSubMenuOpen: (open: boolean) => void;
}

export const useNavbarStore = create<NavbarState>()((set) => ({
  navbarBgColor: '#00000000',
  setNavbarBgColor: (color) => set({ navbarBgColor: color }),
  navbarHoverBgColor: 'var(--whiteOpacity100)',
  setNavbarHoverBgColor: (color) => set({ navbarHoverBgColor: color }),
  navbarSubBgColor: 'var(--darkThemeBackgroundLevel01)',
  setNavbarSubBgColor: (color) => set({ navbarSubBgColor: color }),
  navbarBorder: 'var(#00000000)',
  setNavbarBorder: (border) => set({ navbarBorder: border }),
  navbarTextColor: 'var(--white)',
  setNavbarTextColor: (color) => set({ navbarTextColor: color }),
  isMenuOpen: false,
  setIsMenuOpen: (open) => set({ isMenuOpen: open }),
  isSubMenuOpen: false,
  setIsSubMenuOpen: (open) => set({ isSubMenuOpen: open }),
}));
