'use client';

import { styled } from 'styled-components';
import SubCarouselItem from './SubCarouselItem';
import { useEffect, useRef, useState } from 'react';
import { Device } from '@/app/_types/windowSize.types';
import { useWindowSize } from '@/app/_context/WindowSizeContext';
import { useCarousel } from '@/app/_hooks/useCarousel';
import { subCarousel } from '@/app/_data/mainContentData';
import Margin from '../Margin';

export default function SubCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const { device } = useWindowSize();
  const { title, carousel } = subCarousel;
  const [lastIndex, setLastIndex] = useState<number>(carousel.length);
  const [margin, setMargin] = useState<number>(0);
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
    margin: margin,
    lastIndex: lastIndex,
  });

  useEffect(() => {
    if (device) {
      setLastIndex(device === 'desktop' ? 3 : carousel.length - 1);
      setMargin(device === 'desktop' ? 30 : 15);
    }
  }, [device]);

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
      $lastIndex={lastIndex}
    >
      <div>
        <p dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div>
        <div ref={containerRef}>
          {carousel.map((item, index) => (
            <SubCarouselItem key={index} {...item} index={`carousel-4-${index + 1}`} itemRef={itemRef} />
          ))}
        </div>
      </div>
      {device === 'desktop' && (
        <div>
          <div>
            <button onClick={() => handleArrowBtn('left')} disabled={currentIndex === 0}>
              <img src="https://static.toss.im/career/icn-right-arrow-circle.png" alt="Arrow" />
            </button>
            <button onClick={() => handleArrowBtn('right')} disabled={currentIndex === lastIndex}>
              <img src="https://static.toss.im/career/icn-right-arrow-circle.png" alt="Arrow" />
            </button>
          </div>
        </div>
      )}
      <Margin height={device === 'desktop' ? 108 : 52} />
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div<{ $device?: Device; $index: number; $lastIndex: number }>`
  position: relative;
  cursor: grab;
  overflow: hidden;
  &:active {
    cursor: grabbing;
  }
  & > div:nth-of-type(1) {
    width: ${({ $device }) => ($device === 'desktop' ? '1020px' : '100%')};
    margin: ${({ $device }) => ($device === 'desktop' ? '0px auto' : '0px')};
    padding-left: 30px;
    & > p {
      font-weight: bold;
      margin-top: ${({ $device }) => ($device === 'desktop' ? '0px' : '40px')};
      margin-bottom: ${({ $device }) => ($device === 'desktop' ? '24px' : '16px')};
      font-size: ${({ $device }) => ($device === 'desktop' ? '32px' : '26px')};
      line-height: ${({ $device }) => ($device === 'desktop' ? '42px' : '37px')};
      color: var(--grey800);
    }
  }
  & > div:nth-of-type(2) {
    width: ${({ $device }) => ($device === 'desktop' ? '1020px' : '100%')};
    margin: ${({ $device }) => ($device === 'desktop' ? '0px auto' : '0px')};
    padding: 0 30px;
    & > div {
      position: relative;
      display: flex;
      width: 100%;
      transition: transform 0.3s ease-out;
    }
  }
  & > div:nth-of-type(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    & > div {
      display: flex;
      justify-content: space-between;
      width: 140px;
      & > button {
        width: 56px;
        height: 56px;
        padding: 12px;
        & > img {
          width: 32px;
          height: 32px;
        }
      }
      & > button:nth-of-type(1) {
        left: 44%;
        opacity: ${({ $index }) => ($index === 0 ? '0.3' : '1')};
        & > img {
          transform: rotate(180deg);
        }
      }
      & > button:nth-of-type(2) {
        right: 44%;
        opacity: ${({ $index, $lastIndex }) => ($index === $lastIndex ? '0.3' : '1')};
      }
    }
  }
`;
