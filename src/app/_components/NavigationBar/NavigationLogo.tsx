'use client';

import Link from 'next/link';
import { styled } from 'styled-components';

export default function NavigationLogo() {
  return (
    <Link href="/">
      <H1>
        <img src="/images/symbol-logo.svg" height={20} alt="toss symbol logo" className="symbol-logo" />
        <img src="/images/text-logo.svg" height={14.4} alt="toss text logo" />
      </H1>
    </Link>
  );
}

const H1 = styled.h1`
  display: flex;
  gap: 4px;
  align-items: center;
`;
