import { MutableRefObject, useEffect, useRef, useState } from 'react';

export function useCarousel({
  items,
  wrapperRef,
  containerRef,
  itemRef,
  margin,
  lastIndex,
}: {
  items: any[];
  wrapperRef: MutableRefObject<HTMLDivElement | null>;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  itemRef: MutableRefObject<HTMLDivElement | null>;
  margin: number;
  lastIndex: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

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
    const itemWidth = itemRef.current?.offsetWidth;
    if (itemWidth && Math.abs(movedBy) > itemWidth / 5) {
      if (movedBy < 0 && lastIndex) {
        setCurrentIndex((prev) => Math.min(prev + 1, lastIndex));
      } else if (movedBy >= 0 && lastIndex) {
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
    } else if (direction === 'right' && currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${currentTranslate}px)`;
    }
  }, [currentTranslate]);

  useEffect(() => {
    if (itemRef.current && wrapperRef.current) {
      const itemWidth = itemRef.current?.offsetWidth + margin;
      const wrapperWidth = wrapperRef.current?.offsetWidth;
      if (items.length - 1 === lastIndex && currentIndex === lastIndex) {
        setCurrentTranslate(-currentIndex * itemWidth + 20);
        setPrevTranslate(-currentIndex * itemWidth + 20);
      } else {
        setCurrentTranslate(-currentIndex * itemWidth);
        setPrevTranslate(-currentIndex * itemWidth);
      }
    }
  }, [isDragging, currentIndex, lastIndex]);

  return { currentIndex, handleMouseDown, handleMouseUp, handleMouseMove, handleMouseLeave, handleArrowBtn };
}
