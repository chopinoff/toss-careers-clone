'use client';

import { useWindowSize } from '@/app/_context/WindowSizeContext';
import { Device } from '@/app/_types/windowSize.types';
import { styled } from 'styled-components';

export default function OutroBox() {
  const { device } = useWindowSize();
  return (
    <Wrapper $device={device}>
      <p>
        지금도 새로운 역사를
        <br />
        만들고 있습니다
      </p>
      <p>
        토스커뮤니티가 만드는 수많은 혁신의 순간들,
        <br />
        당신과 함께 만들고 싶습니다.
        <br />
        지금, 토스커뮤니티에 합류하세요.
      </p>
      <a href="https://toss.oopy.io/">토스 생활 더 알아보기</a>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $device?: Device }>`
  height: ${({ $device }) => ($device === 'desktop' ? '752px' : '600px')};
  background-image: ${({ $device }) =>
    $device === 'desktop' ? 'url(/images/home-outro-cover.jpg)' : 'url(/images/home-outro-cover-mobile.jpg)'};
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > p {
    color: var(--white);
    text-align: center;
  }
  & > p:nth-of-type(1) {
    font-weight: bold;
    margin-bottom: ${({ $device }) => ($device === 'desktop' ? '40px' : '20px')};
    font-size: ${({ $device }) => ($device === 'desktop' ? '56px' : '32px')};
    line-height: ${({ $device }) => ($device === 'desktop' ? '72px' : '42px')};
  }
  & > p:nth-of-type(2) {
    margin-bottom: ${({ $device }) => ($device === 'desktop' ? '72px' : '52px')};
    font-size: ${({ $device }) => ($device === 'desktop' ? '18px' : '14px')};
    line-height: ${({ $device }) => ($device === 'desktop' ? '29px' : '23px')};
  }
  & > a {
    color: var(--white);
    padding: 11px 16px;
    border-radius: 6px;
    font-size: 15px;
    background-color: var(--blue700);
  }
`;
