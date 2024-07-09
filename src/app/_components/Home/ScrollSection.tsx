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
        <p>
          시간 가는 줄 모르고 무엇에 빠져드는 경험.
          <br />
          함께 한 방향으로 달려가는 느낌.
          <br />
          해냈을 때의 쾌감과 기쁨.
        </p>
        <p>
          이 몰입의 경험을 일에서 느낀다면 어떨까요?
          <br />
          일을 방해하는 요소가 없다면 어떨까요?
        </p>
        <p>
          토스커뮤니티에 모인 사람들은
          <br />
          일에 몰입하는 즐거움과 성장의 기쁨을 느끼며,
          <br />
          새로운 역사를 만들고 있습니다.
        </p>
      </div>
    </Section>
  );
}

const Section = styled.section<{ $scrollY: number; $device?: Device }>`
  width: 100vw;
  height: 3500px;
  opacity: ${(props) => (props.$scrollY < 1400 ? 1 : props.$scrollY < 2500 ? (2500 - props.$scrollY) / 1100 : 0)};
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
    & > p:nth-of-type(1) {
      top: ${(props) => (props.$device === 'desktop' ? '22vh' : '120px')};
      font-size: ${(props) => (props.$device === 'desktop' ? '70px' : '32px')};
      font-weight: bold;
      line-height: ${(props) => (props.$device === 'desktop' ? '90px' : '47px')};
      opacity: ${(props) => (props.$scrollY > 250 ? 0 : (240 - props.$scrollY) / 240)};
    }
    & > p:nth-of-type(2) {
      top: ${(props) => (props.$device === 'desktop' ? '24vh' : '120px')};
      font-weight: bold;
      font-size: ${(props) => (props.$device === 'desktop' ? '24px' : '15px')};
      line-height: ${(props) => (props.$device === 'desktop' ? '34px' : '24px')};
      opacity: ${(props) => (props.$scrollY < 600 ? 0 : props.$scrollY < 830 ? (props.$scrollY - 600) / 230 : 1)};
    }
    & > p:nth-of-type(3) {
      top: ${(props) => (props.$device === 'desktop' ? 'calc(136px + 24vh)' : '216px')};
      font-weight: bold;
      font-size: ${(props) => (props.$device === 'desktop' ? '24px' : '15px')};
      line-height: ${(props) => (props.$device === 'desktop' ? '34px' : '24px')};
      opacity: ${(props) => (props.$scrollY < 870 ? 0 : props.$scrollY < 1100 ? (props.$scrollY - 870) / 230 : 1)};
    }
    & > p:nth-of-type(4) {
      top: ${(props) => (props.$device === 'desktop' ? 'calc(238px + 24vh)' : '288px')};
      font-weight: bold;
      font-size: ${(props) => (props.$device === 'desktop' ? '24px' : '15px')};
      line-height: ${(props) => (props.$device === 'desktop' ? '34px' : '24px')};
      opacity: ${(props) => (props.$scrollY < 1140 ? 0 : props.$scrollY < 1370 ? (props.$scrollY - 1140) / 230 : 1)};
    }
  }
`;
