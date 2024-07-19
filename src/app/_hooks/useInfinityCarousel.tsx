import { MutableRefObject, useEffect, useRef, useState } from 'react';

export function useInfinityCarousel({
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
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex + 1 >= items.length - 1) {
          moveToNthSlide(1);
        }
        return prevIndex + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
        if (currentIndex + 1 === items.length - 1) {
          moveToNthSlide(1);
        }
        setCurrentIndex((prev) => Math.min(prev + 1, lastIndex));
      } else if (movedBy >= 0 && lastIndex) {
        if (currentIndex - 1 === 0) {
          moveToNthSlide(items.length - 2);
        }
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
        if (currentIndex + 1 === items.length - 1) {
          moveToNthSlide(1);
        }
        setCurrentIndex((prev) => Math.min(prev + 1, lastIndex));
      } else if (movedBy >= 0 && currentIndex > 0) {
        if (currentIndex - 1 === 0) {
          moveToNthSlide(items.length - 2);
        }
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
      if (currentIndex - 1 === 0) {
        moveToNthSlide(items.length - 2);
      }
      setCurrentIndex((prev) => prev - 1);
    } else if (direction === 'right' && currentIndex < items.length - 1) {
      if (currentIndex + 1 === items.length - 1) {
        moveToNthSlide(1);
      }
      setCurrentIndex((prev) => prev + 1);
    }
  }

  const moveToNthSlide = (index: number) => {
    setTimeout(() => {
      if (containerRef.current) {
        setCurrentIndex(index);
        containerRef.current.style.transition = 'all 0s';
      }
    }, 300);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${currentTranslate}px)`;
    }
  }, [currentTranslate]);

  useEffect(() => {
    if (itemRef.current && containerRef.current) {
      const itemWidth = itemRef.current?.offsetWidth + margin;
      setCurrentTranslate(-currentIndex * itemWidth);
      setPrevTranslate(-currentIndex * itemWidth);
      if (currentIndex !== 1 && currentIndex !== items.length - 2) {
        containerRef.current.style.transition = 'all 0.3s';
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
