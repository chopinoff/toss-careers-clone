'use client';

import { styled } from 'styled-components';
import { useScroll } from '@/app/_hooks/useScroll';
import { useWindowSize } from '@/app/_context/WindowSizeContext';

type Device = 'desktop' | 'mobile';

export default function ScrollSection() {
  const { scrollY } = useScroll();
  const { device } = useWindowSize();

  return (
    <Section $scrollY={scrollY} $device={device}>
      <div></div>
      <div></div>
      <div>
        <p>
          당신도 깊게 몰입했던
          <br />
          무언가가 있나요?
        </p>
      </div>
    </Section>
  );
}

const Section = styled.section<{ $scrollY: number; $device?: Device }>`
  width: 100vw;
  height: calc(100vh * 4);
  pointer-events: none;
  & > div:nth-of-type(1) {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-image: url('/images/home-background.jpg');
    background-size: cover;
    background-position: center center;
    transform: scale(${(props) => (props.$scrollY < 1600 ? 1 + ((props.$scrollY / 1600) * 3) / 4 : 1.75)});
  }
  & > div:nth-of-type(2) {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: ${(props) => (props.$scrollY < 600 ? 0.4 : props.$scrollY < 1300 ? props.$scrollY / 1400 - 1 / 35 : 0.9)};
  }
  & > div:nth-of-type(3) {
    position: fixed;
    width: 100vw;
    height: 100vh;
    & > p {
      position: fixed;
      width: 100%;
      text-align: center;
      color: var(--white);
    }
    & > p:first-of-type {
      top: ${(props) => (props.$device === 'desktop' ? '22vh' : '120px')};
      font-size: ${(props) => (props.$device === 'desktop' ? '70px' : '32px')};
      font-weight: bold;
      line-height: ${(props) => (props.$device === 'desktop' ? '90px' : '47px')};
      opacity: ${(props) => (props.$scrollY > 250 ? 0 : (240 - props.$scrollY) / 240)};
    }
  }
`;
