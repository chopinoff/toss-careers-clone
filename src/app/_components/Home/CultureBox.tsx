'use client';

import { useWindowSize } from '@/app/_context/WindowSizeContext';
import { culture } from '@/app/_data/mainContentData';
import { Device } from '@/app/_types/windowSize.types';
import { styled } from 'styled-components';

export default function CultureBox() {
  const { title, content } = culture;
  const { device } = useWindowSize();
  return (
    <Wrapper $device={device}>
      <p dangerouslySetInnerHTML={{ __html: title }} />
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $device?: Device }>`
  padding-top: ${({ $device }) => ($device === 'desktop' ? '432px' : '264px')};
  padding-bottom: 48px;
  background-image: ${({ $device }) =>
    $device === 'desktop' ? 'url(/images/home-cover.jpg)' : 'url(/images/home-cover-mobile.jpg)'};
  background-size: cover;
  background-position: center center;
  & > p {
    text-align: center;
    color: var(--white);
  }
  & > p:nth-of-type(1) {
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 32px;
    line-height: 42px;
  }
  & > p:nth-of-type(2) {
    font-size: 14px;
    line-height: 21px;
  }
`;
