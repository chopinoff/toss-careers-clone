'use client';

import { useScroll } from '@/app/_hooks/useScroll';
import { styled } from 'styled-components';

export default function ContentSection() {
  const { scrollY } = useScroll();

  return <Section $scrollY={scrollY}></Section>;
}

const Section = styled.section<{ $scrollY: number }>``;
