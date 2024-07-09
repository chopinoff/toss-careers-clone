import { create } from 'zustand';

interface NavbarState {
  navbarColor: string;
  setNavbarColor: (color: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isSubMenuOpen: boolean;
  setIsSubMenuOpen: (open: boolean) => void;
}

export const useNavbarStore = create<NavbarState>()((set) => ({
  navbarColor: '#00000000',
  setNavbarColor: (color) => set({ navbarColor: color }),
  isMenuOpen: false,
  setIsMenuOpen: (open) => set({ isMenuOpen: open }),
  isSubMenuOpen: false,
  setIsSubMenuOpen: (open) => set({ isSubMenuOpen: open }),
}));
