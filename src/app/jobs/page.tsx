'use client';

import { useEffect } from 'react';
import { useNavbarStore } from '../_store/navbarStore';

export default function Jobs() {
  const setNavbarBgColor = useNavbarStore((store) => store.setNavbarBgColor);
  const setNavbarSubBgColor = useNavbarStore((store) => store.setNavbarSubBgColor);
  const setNavbarHoverBgColor = useNavbarStore((store) => store.setNavbarHoverBgColor);
  const setNavbarTextColor = useNavbarStore((store) => store.setNavbarTextColor);
  useEffect(() => {
    setNavbarBgColor('var(--white)');
    setNavbarSubBgColor('var(--white)');
    setNavbarHoverBgColor('var(--greyOpacity100)');
    setNavbarTextColor('#202632');
  }, []);
  return <main></main>;
}
