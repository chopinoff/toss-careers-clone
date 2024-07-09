'use client';

import { styled } from 'styled-components';

export default function Margin({ height }: { height: number }) {
  return <MarginDiv $height={height}></MarginDiv>;
}

const MarginDiv = styled.div<{ $height: number }>`
  height: ${(props) => props.$height + 'px'};
`;
