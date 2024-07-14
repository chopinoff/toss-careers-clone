import { MutableRefObject, useEffect, useRef, useState } from 'react';

export function useCarousel({
  items,
  containerRef,
  itemRef,
  margin,
  lastIndex,
}: {
  items: any[];
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

  function handleTouchStart(e: React.TouchEvent) {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setPrevTranslate(currentTranslate);
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!isDragging) return;
    const currentPosition = e.clientX - startX;
    setCurrentTranslate(prevTranslate + currentPosition);
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (!isDragging) return;
    const currentPosition = e.touches[0].clientX - startX;
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

  function handleTouchEnd() {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;
    const itemWidth = itemRef.current?.offsetWidth;
    if (itemWidth && Math.abs(movedBy) > itemWidth / 5) {
      if (movedBy < 0 && currentIndex < lastIndex) {
        setCurrentIndex((prev) => Math.min(prev + 1, lastIndex));
      } else if (movedBy >= 0 && currentIndex > 0) {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  }

  function handleMouseLeave() {
    if (isDragging) handleMouseUp();
  }

  function handleTouchCancel() {
    if (isDragging) handleTouchEnd();
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
    if (itemRef.current) {
      const itemWidth = itemRef.current?.offsetWidth + margin;
      if (items.length - 1 === lastIndex && currentIndex === lastIndex) {
        setCurrentTranslate(-currentIndex * itemWidth + 20);
        setPrevTranslate(-currentIndex * itemWidth + 20);
      } else {
        setCurrentTranslate(-currentIndex * itemWidth);
        setPrevTranslate(-currentIndex * itemWidth);
      }
    }
  }, [isDragging, currentIndex, lastIndex]);

  return {
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
  };
}
