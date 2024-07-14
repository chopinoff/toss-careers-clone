'use client';

import { CarouselDetail } from '@/app/_types/contentSection.types';
import { styled } from 'styled-components';
import CarouselItem from './MainCarouselItem';
import { useRef } from 'react';
import { Device } from '@/app/_types/windowSize.types';
import { useWindowSize } from '@/app/_context/WindowSizeContext';
import { useCarousel } from '@/app/_hooks/useCarousel';

export default function MainCarousel({ carousel, boxIndex }: { carousel: CarouselDetail[]; boxIndex: number }) {
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
  } = useCarousel({
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
        {carousel.map((item, index) => (
          <CarouselItem key={index} {...item} index={`carousel-${boxIndex + 1}-${index + 1}`} itemRef={itemRef} />
        ))}
      </div>
      <button onClick={() => handleArrowBtn('left')} disabled={currentIndex === 0}>
        <img src="https://static.toss.im/career/icn-right-arrow-circle.png" alt="Arrow" />
      </button>
      <button onClick={() => handleArrowBtn('right')} disabled={currentIndex === carousel.length - 1}>
        <img src="https://static.toss.im/career/icn-right-arrow-circle.png" alt="Arrow" />
      </button>
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div<{ $device?: Device; $index: number; $length: number }>`
  position: relative;
  width: 100%;
  ${({ $device }) => $device === 'desktop' && 'min-width : 1020px;'}
  overflow: hidden;
  background-color: var(--grey100);
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
  & > div {
    display: flex;
    width: 400%;
    transition: transform 0.3s ease-out;
  }
  & > button {
    position: absolute;
    bottom: ${({ $device }) => ($device === 'desktop' ? 'calc(50% - 28px)' : '38px')};
    width: ${({ $device }) => ($device === 'desktop' ? '56px' : '44px')};
    height: ${({ $device }) => ($device === 'desktop' ? '56px' : '44px')};
    padding: ${({ $device }) => ($device === 'desktop' ? '12px' : '8px')};
    & > img {
      width: ${({ $device }) => ($device === 'desktop' ? '32px' : '28px')};
      height: ${({ $device }) => ($device === 'desktop' ? '32px' : '28px')};
    }
  }
  & > button:nth-of-type(1) {
    left: ${({ $device }) => ($device === 'desktop' ? '10%' : '38%')};
    opacity: ${({ $index }) => ($index === 0 ? '0.3' : '1')};
    & > img {
      transform: rotate(180deg);
    }
  }
  & > button:nth-of-type(2) {
    right: ${({ $device }) => ($device === 'desktop' ? '10%' : '38%')};
    opacity: ${({ $index, $length }) => ($index === $length - 1 ? '0.3' : '1')};
  }
`;
