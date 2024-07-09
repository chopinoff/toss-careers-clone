'use client';

import { styled } from 'styled-components';
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
