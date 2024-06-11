import { create } from 'zustand';

interface NavbarColorState {
  navbarColor: string;
  changeNavbarColor: (color: string) => void;
  isMenuOpen: boolean;
  handleIsMenuOpen: (open: boolean) => void;
  isSubMenuOpen: boolean;
  handleIsSubMenuOpen: (open: boolean) => void;
}

export const useNavbarStore = create<NavbarColorState>()((set) => ({
  navbarColor: '#00000000',
  changeNavbarColor: (color) => set({ navbarColor: color }),
  isMenuOpen: false,
  handleIsMenuOpen: (open) => set({ isMenuOpen: open }),
  isSubMenuOpen: false,
  handleIsSubMenuOpen: (open) => set({ isSubMenuOpen: open }),
}));
