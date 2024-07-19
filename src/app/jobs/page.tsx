'use client';

import { useEffect } from 'react';
import { useNavbarStore } from '../_store/navbarStore';
import AdsCarousel from '../_components/Jobs/AdsCarousel';
import Margin from '../_components/Margin';

export default function Jobs() {
  const setNavbarBgColor = useNavbarStore((store) => store.setNavbarBgColor);
  const setNavbarSubBgColor = useNavbarStore((store) => store.setNavbarSubBgColor);
  const setNavbarHoverBgColor = useNavbarStore((store) => store.setNavbarHoverBgColor);
  const setNavbarTextColor = useNavbarStore((store) => store.setNavbarTextColor);
  const setNavbarBorder = useNavbarStore((store) => store.setNavbarBorder);
  useEffect(() => {
    setNavbarBgColor('var(--white)');
    setNavbarSubBgColor('var(--white)');
    setNavbarHoverBgColor('var(--greyOpacity100)');
    setNavbarTextColor('#202632');
    setNavbarBorder('1px solid var(--greyOpacity200)');
  }, []);
  return (
    <main>
      <Margin height={60} />
      <AdsCarousel />
    </main>
  );
}
