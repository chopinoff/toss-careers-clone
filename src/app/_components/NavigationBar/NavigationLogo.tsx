'use client';

import { useNavbarStore } from '@/app/_store/navbarStore';
import Link from 'next/link';
import { styled } from 'styled-components';
import TextLogo from './TextLogo';

export default function NavigationLogo() {
  const navbarTextColor = useNavbarStore((store) => store.navbarTextColor);
  return (
    <Link href="/">
      <H1>
        <img src="/images/symbol-logo.svg" height={20} alt="toss symbol logo" className="symbol-logo" />
        <TextLogo color={navbarTextColor} />
      </H1>
    </Link>
  );
}

const H1 = styled.h1`
  position: relative;
  display: flex;
  gap: 1px;
  align-items: center;
  & > svg {
    position: absolute;
    height: 20px;
  }
`;
