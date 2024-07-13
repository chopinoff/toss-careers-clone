'use client';

import { useWindowSize } from '@/app/_context/WindowSizeContext';
import { CarouselDetail } from '@/app/_types/contentSection.types';
import { Device } from '@/app/_types/windowSize.types';
import { MutableRefObject } from 'react';
import { styled } from 'styled-components';

export default function CarouselItem({
  carouselContent,
  name,
  index,
  itemRef,
}: CarouselDetail & { index: string; itemRef: MutableRefObject<HTMLDivElement | null> }) {
  const { device } = useWindowSize();
  return (
    <ItemWrapper $device={device} ref={itemRef}>
      <div>
        <img src={`/images/${index}.png`} alt={index} />
        <p dangerouslySetInnerHTML={{ __html: carouselContent }} />
        <p dangerouslySetInnerHTML={{ __html: name }} />
      </div>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div<{ $device?: Device }>`
  overflow: hidden;
  width: 100%;
  padding: ${({ $device }) => ($device === 'desktop' ? '60px 0px' : '52px 0px 96px')};
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${({ $device }) => ($device === 'desktop' ? '640px' : 'calc(100% - 60px)')};
    margin: ${({ $device }) => ($device === 'desktop' ? 'auto' : '0px 30px')};
    & > img {
      width: 84px;
      height: 84px;
      border-radius: 84px;
      overflow: hidden;
      margin-bottom: 32px;
    }
    & > p:nth-of-type(1) {
      color: var(--grey700);
      text-align: center;
      font-size: ${({ $device }) => ($device === 'desktop' ? '19px' : '15px')};
      line-height: ${({ $device }) => ($device === 'desktop' ? '30px' : '24px')};
      margin-bottom: ${({ $device }) => ($device === 'desktop' ? '28px' : '15px')};
    }
    & > p:nth-of-type(2) {
      color: var(--grey500);
      font-size: ${({ $device }) => ($device === 'desktop' ? '15px' : '13px')};
      line-height: ${({ $device }) => ($device === 'desktop' ? '21px' : '17px')};
    }
  }
`;
