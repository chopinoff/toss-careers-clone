'use client';

import { useWindowSize } from '@/app/_context/WindowSizeContext';
import { SubCarouselDetail } from '@/app/_types/contentSection.types';
import { Device } from '@/app/_types/windowSize.types';
import { MutableRefObject } from 'react';
import { styled } from 'styled-components';

export default function SubCarouselItem({
  carouselTitle,
  carouselContent,
  index,
  itemRef,
}: SubCarouselDetail & { index: string; itemRef: MutableRefObject<HTMLDivElement | null> }) {
  const { device } = useWindowSize();
  return (
    <ItemWrapper $device={device} ref={itemRef}>
      <div>
        <img src={`/images/${index}.jpg`} alt={index} />
        <p>
          <strong>{carouselTitle}</strong> {carouselContent}
        </p>
      </div>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div<{ $device?: Device }>`
  position: relative;
  margin-right: ${({ $device }) => ($device === 'desktop' ? '30px' : '15px')};
  & div {
    width: ${({ $device }) => ($device === 'desktop' ? 'calc((50vw + 400px) / 3)' : 'calc(100vw - 80px)')};
    & > img {
      width: 100%;
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: ${({ $device }) => ($device === 'desktop' ? '24px' : '16px')};
    }
    & > p {
      display: inline;
      text-align: left;
      color: var(--grey600);
      font-size: 13px;
      line-height: 20px;
      & > strong {
        font-weight: bold;
      }
    }
  }
`;
