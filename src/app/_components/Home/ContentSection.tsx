'use client';

import { useScroll } from '@/app/_hooks/useScroll';
import { styled } from 'styled-components';
import MainContentBox from './MainContentBox';
import { details } from '@/app/_data/mainContentData';

export default function ContentSection() {
  const { scrollY } = useScroll();

  return (
    <Section $scrollY={scrollY}>
      <MainContentBox {...details[0]} boxIndex={0} />
      <MainContentBox {...details[1]} boxIndex={1} />
      <MainContentBox {...details[2]} boxIndex={2} />
    </Section>
  );
}

const Section = styled.section<{ $scrollY: number }>``;
