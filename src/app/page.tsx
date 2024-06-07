'use client';

import { styled } from 'styled-components';

export default function Home() {
  return (
    <main>
      <Test>test</Test>
    </main>
  );
}

const Test = styled.div`
  background-color: var(--test);
`;
