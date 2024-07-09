'use client';

import { useState } from 'react';
import { styled } from 'styled-components';
import { useScroll } from './_hooks/useScroll';
import ScrollSection from './_components/Home/ScrollSection';
import ContentSection from './_components/Home/ContentSection';
import FooterSection from './_components/Home/FooterSection';

export default function Home() {
  return (
    <Main>
      <ScrollSection />
      <ContentSection />
      <FooterSection />
    </Main>
  );
}

const Main = styled.main``;
