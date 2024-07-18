'use client';

import { styled } from 'styled-components';
import ScrollSection from './_components/Home/ScrollSection';
import ContentSection from './_components/Home/ContentSection';
import { useEffect } from 'react';
import { useNavbarStore } from './_store/navbarStore';

export default function Home() {
  const setNavbarBgColor = useNavbarStore((store) => store.setNavbarBgColor);
  const setNavbarSubBgColor = useNavbarStore((store) => store.setNavbarSubBgColor);
  const setNavbarHoverBgColor = useNavbarStore((store) => store.setNavbarHoverBgColor);
  const setNavbarTextColor = useNavbarStore((store) => store.setNavbarTextColor);

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
    setNavbarBgColor('#00000000');
    setNavbarSubBgColor('var(--grey900)');
    setNavbarHoverBgColor('var(--whiteOpacity100)');
    setNavbarTextColor('var(--white)');
  }, []);

  return (
    <Main>
      <ScrollSection />
      <ContentSection />
    </Main>
  );
}

const Main = styled.main``;
