'use client';

import { styled } from 'styled-components';
import { useRef } from 'react';
import { Device } from '@/app/_types/windowSize.types';
import { useWindowSize } from '@/app/_context/WindowSizeContext';
import { useInfinityCarousel } from '@/app/_hooks/useInfinityCarousel';
import { adsCarouselData } from '@/app/_data/adsCarouselData';
import ArrowIcon from './ArrowIcon';
import AdsCarouselDetail from '@/app/_types/adsCarousel.type';

export default function AdsCarousel() {
  const carousel = [
    adsCarouselData.at(-1) as AdsCarouselDetail,
    ...adsCarouselData,
    adsCarouselData[0] as AdsCarouselDetail,
  ];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const { device } = useWindowSize();
  const {
    currentIndex,
    handleMouseDown,
    handleTouchStart,
    handleMouseUp,
    handleTouchEnd,
    handleMouseMove,
    handleTouchMove,
    handleMouseLeave,
    handleTouchCancel,
    handleArrowBtn,
  } = useInfinityCarousel({
    items: carousel,
    containerRef: containerRef,
    itemRef: itemRef,
    margin: 0,
    lastIndex: carousel.length - 1,
  });

  return (
    <CarouselWrapper
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onTouchCancel={handleTouchCancel}
      $device={device}
      $index={currentIndex}
      $length={carousel.length}
    >
      <div ref={containerRef}>
        {carousel.map(({ index, bgColor }, keyIndex) => (
          <CarouselItem key={keyIndex} ref={itemRef} $index={index} $bgColor={bgColor}>
            <img src={`/images/ads-carousel-${index}.png`} alt={`ads-carousel-${index}`} />
          </CarouselItem>
        ))}
      </div>
      <button onClick={() => handleArrowBtn('left')}>
        <ArrowIcon />
      </button>
      <button onClick={() => handleArrowBtn('right')}>
        <ArrowIcon />
      </button>
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div<{ $device?: Device; $index: number; $length: number }>`
  position: relative;
  width: 100%;
  height: 130px;
  overflow: hidden;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
  & > div {
    display: flex;
    height: 100%;
    width: 700%;
    /* transition: transform 0.3s ease-out; */
  }
  & > button {
    position: absolute;
    top: 0;
    width: 56px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & > img {
      width: 32px;
      height: 32px;
    }
  }
  & > button:nth-of-type(1) {
    left: 0px;
  }
  & > button:nth-of-type(2) {
    right: 0px;
    & > svg {
      transform: rotate(180deg);
    }
  }
`;

const CarouselItem = styled.div<{ $index: number; $bgColor: string }>`
  background-color: ${({ $bgColor }) => $bgColor};
  width: 100%;
  display: flex;
  justify-content: center;
  & > img {
    display: inline-block;
    width: auto;
    height: 130px;
  }
`;
