'use client';

import styled from 'styled-components';
import { useScroll } from '@/app/_hooks/useScroll';
import { useWindowSize } from '@/app/_context/WindowSizeContext';
import { useEffect, useRef } from 'react';
import { useNavbarStore } from '@/app/_store/navbarStore';
import { Device } from '@/app/_types/windowSize.types';

export default function ScrollSection() {
  const { scrollY } = useScroll();
  const { device } = useWindowSize();
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const setNavbarBgColor = useNavbarStore((store) => store.setNavbarBgColor);

  useEffect(() => {
    if (backgroundRef.current) {
      const opacity = scrollY < 600 ? 0.4 : scrollY < 1300 ? scrollY / 1400 - 1 / 35 : 0.9;
      backgroundRef.current.style.opacity = String(opacity);
    }
    if (titleRef.current) {
      const opacity = scrollY > 240 ? 0 : (240 - scrollY) / 240;
      titleRef.current.style.opacity = String(opacity);
    }
    if (scrollY > 2500) {
      setNavbarBgColor('var(--grey900)');
    } else {
      setNavbarBgColor('#00000000');
    }
  }, [scrollY]);

  useEffect(() => {
    if (backgroundRef.current) {
      requestAnimationFrame(() => {
        const animation = backgroundRef.current!.animate([{ opacity: 0 }, { opacity: 0.4 }], {
          duration: 500,
        });
        animation.onfinish = () => {
          backgroundRef.current!.style.opacity = '0.4';
        };
      });
    }
    if (titleRef.current) {
      requestAnimationFrame(() => {
        const animation = titleRef.current!.animate(
          [
            { opacity: 0, transform: 'translateY(40px)' },
            { opacity: 1, transform: 'translateY(0px)' },
          ],
          {
            duration: 500,
            delay: 500,
          },
        );
        animation.onfinish = () => {
          titleRef.current!.style.opacity = '1';
          titleRef.current!.style.transform = 'translateY(0px)';
        };
      });
    }
  }, [device]);

  return (
    <Section $scrollY={scrollY} $device={device}>
      <div></div>
      <div ref={device && backgroundRef}></div>
      <div>
        <p ref={device && titleRef}>
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
      <div>
        <img alt="장식용 이미지" src="https://static.toss.im/web-general/homepage/static/images/down-arrow.png" />
      </div>
    </Section>
  );
}

const Section = styled.section<{ $scrollY: number; $device?: Device }>`
  width: 100vw;
  height: 3000px;
  opacity: ${(props) => (props.$scrollY < 1400 ? 1 : props.$scrollY < 2500 ? (2500 - props.$scrollY) / 1100 : 0)};
  pointer-events: none;
  & > div:nth-of-type(1) {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-image: ${({ $device }) =>
      $device === 'desktop' ? 'url(/images/home-background.jpg)' : 'url(/images/home-background-mobile.jpg)'};
    background-size: cover;
    background-position: center center;
    transform: scale(${(props) => (props.$scrollY < 1600 ? 1 + ((props.$scrollY / 1600) * 3) / 4 : 1.75)});
    transition: all 0.3s;
  }
  & > div:nth-of-type(2) {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
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
      opacity: 0;
    }

    & > p:nth-of-type(2) {
      top: ${(props) => (props.$device === 'desktop' ? '24vh' : '120px')};
      font-weight: bold;
      font-size: ${(props) => (props.$device === 'desktop' ? '24px' : '15px')};
      line-height: ${(props) => (props.$device === 'desktop' ? '34px' : '24px')};
      opacity: ${(props) => (props.$scrollY < 600 ? 0 : props.$scrollY < 830 ? (props.$scrollY - 600) / 230 : 1)};
      transform: translateY(
        ${(props) =>
          (props.$scrollY < 600 ? 20 : props.$scrollY < 830 ? ((830 - props.$scrollY) * 20) / 230 : 0) + 'px'}
      );
    }
    & > p:nth-of-type(3) {
      top: ${(props) => (props.$device === 'desktop' ? 'calc(136px + 24vh)' : '216px')};
      font-weight: bold;
      font-size: ${(props) => (props.$device === 'desktop' ? '24px' : '15px')};
      line-height: ${(props) => (props.$device === 'desktop' ? '34px' : '24px')};
      opacity: ${(props) => (props.$scrollY < 870 ? 0 : props.$scrollY < 1100 ? (props.$scrollY - 870) / 230 : 1)};
      transform: translateY(
        ${(props) =>
          (props.$scrollY < 870 ? 20 : props.$scrollY < 1100 ? ((1100 - props.$scrollY) * 20) / 230 : 0) + 'px'}
      );
    }
    & > p:nth-of-type(4) {
      top: ${(props) => (props.$device === 'desktop' ? 'calc(238px + 24vh)' : '288px')};
      font-weight: bold;
      font-size: ${(props) => (props.$device === 'desktop' ? '24px' : '15px')};
      line-height: ${(props) => (props.$device === 'desktop' ? '34px' : '24px')};
      opacity: ${(props) => (props.$scrollY < 1140 ? 0 : props.$scrollY < 1370 ? (props.$scrollY - 1140) / 230 : 1)};
      transform: translateY(
        ${(props) =>
          (props.$scrollY < 1140 ? 20 : props.$scrollY < 1370 ? ((1370 - props.$scrollY) * 20) / 230 : 0) + 'px'}
      );
    }
  }
  @keyframes arrow-animation {
    0% {
      opacity: 0.8;
      transform: translateY(0px);
    }
    50% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 0.8;
      transform: translateY(0px);
    }
  }
  & > div:nth-of-type(4) {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    box-sizing: inherit;
    & > img {
      width: ${({ $device }) => ($device === 'desktop' ? '36px' : '28px')};
      height: auto;
      animation: 2s ease 0s infinite normal none running arrow-animation;
    }
  }
`;
