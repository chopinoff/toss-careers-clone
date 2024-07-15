'use client';

import { styled } from 'styled-components';
import ScrollSection from './_components/Home/ScrollSection';
import ContentSection from './_components/Home/ContentSection';
import FooterSection from './_components/Home/FooterSection';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <Main>
      <ScrollSection />
      <ContentSection />
    </Main>
  );
}

const Main = styled.main``;
