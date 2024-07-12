'use client';

import { CarouselDetail } from '@/app/_types/contentSection.types';
import { styled } from 'styled-components';
import CarouselItem from './CarouselItem';
import { useState, useRef, useEffect } from 'react';
import { Device } from '@/app/_types/windowSize.types';
import { useWindowSize } from '@/app/_context/WindowSizeContext';

export default function Carousel({ carousel, boxIndex }: { carousel: CarouselDetail[]; boxIndex: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { device } = useWindowSize();

  function handleMouseDown(e: React.MouseEvent) {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentTranslate(prevTranslate);
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!isDragging) return;
    const currentPosition = e.clientX - startX;
    setCurrentTranslate(prevTranslate + currentPosition);
  }

  function handleMouseUp() {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;
    const carouselWidth = wrapperRef.current?.offsetWidth;
    if (carouselWidth && Math.abs(movedBy) > carouselWidth / 5) {
      if (movedBy < 0) {
        setCurrentIndex((prev) => Math.min(prev + 1, carousel.length - 1));
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  }

  function handleMouseLeave() {
    if (isDragging) handleMouseUp();
  }

  function handleArrowBtn(direction: 'left' | 'right') {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (direction === 'right' && currentIndex < carousel.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${currentTranslate}px)`;
    }
  }, [currentTranslate]);

  useEffect(() => {
    const carouselWidth = wrapperRef.current?.offsetWidth;
    if (carouselWidth) {
      setCurrentTranslate(-currentIndex * carouselWidth);
      setPrevTranslate(-currentIndex * carouselWidth);
    }
  }, [isDragging, currentIndex]);

  return (
    <CarouselWrapper
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      ref={wrapperRef}
      $device={device}
      $index={currentIndex}
      $length={carousel.length}
    >
      <div ref={containerRef}>
        {carousel.map((item, index) => (
          <CarouselItem key={index} {...item} index={`carousel-${boxIndex + 1}-${index + 1}`} />
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
  min-width: 1020px;
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
