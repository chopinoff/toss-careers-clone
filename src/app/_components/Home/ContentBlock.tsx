'use client';

import { styled } from 'styled-components';
import { useWindowSize } from '@/app/_context/WindowSizeContext';
import { Device } from '@/app/_types/windowSize.types';
import Margin from '../Margin';
import { BlockDetail } from '@/app/_types/contentSection.types';
import { useRef, useState } from 'react';

export default function ContentBlock({
  blockHeader,
  blockTitle,
  blockContent,
  index,
}: BlockDetail & { index: string }) {
  const { device } = useWindowSize();
  const boxRef = useRef<HTMLDivElement | null>(null);

  function handleMouseOver() {
    if (boxRef.current && device === 'desktop') {
      boxRef.current.classList.add('focused');
    }
  }
  function handleMouseLeave() {
    if (boxRef.current && device === 'desktop') {
      boxRef.current.classList.remove('focused');
    }
  }
  function handleOpen() {
    if (boxRef.current && !boxRef.current.classList.contains('focused')) {
      boxRef.current.classList.add('focused');
    }
  }
  function handleClose(event: React.MouseEvent) {
    event.stopPropagation();
    if (boxRef.current) {
      boxRef.current.classList.remove('focused');
    }
  }

  return (
    <BlockWrapper
      $device={device}
      $index={index}
      ref={boxRef}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handleOpen}
    >
      <div>
        <div></div>
        <div>
          <span onClick={handleClose}>
            <img src="/images/close-btn.svg" />
          </span>
          <p>{blockHeader}</p>
          <Margin height={8} />
          <p dangerouslySetInnerHTML={{ __html: blockTitle }} />
          <Margin height={20} />
          <span>
            <img src="/images/more-btn.svg" />
          </span>
          <p dangerouslySetInnerHTML={{ __html: blockContent }} />
        </div>
      </div>
    </BlockWrapper>
  );
}

const BlockWrapper = styled.div<{ $device?: Device; $index: string }>`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  width: ${({ $device }) => ($device === 'desktop' ? '466px' : '100%')};
  aspect-ratio: 5 / 4;
  margin: ${({ $device }) => ($device === 'desktop' ? '14px 0px' : '10px 0px')};
  transition: all 0.3s;
  & > div {
    position: relative;
    width: 100%;
    height: 100%;
    & > div:nth-of-type(1) {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-image: url(${({ $index }) => '/images/' + $index + '.jpg'});
      background-size: cover;
      background-position: center center;
    }
    & > div:nth-of-type(2) {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      padding: ${({ $device }) => ($device === 'desktop' ? '32px' : '24px')};
      & > span:nth-of-type(1) {
        display: block;
        opacity: 0;
        width: 24px;
        height: 0px;
        overflow: hidden;
        ${({ $device }) => $device === 'desktop' && 'transition: all 0.3s;'}
      }
      & > span:nth-of-type(2) {
        display: block;
        opacity: 1;
        width: 24px;
        height: 24px;
        overflow: hidden;
        ${({ $device }) => $device === 'desktop' && 'transition: all 0.3s;'}
      }
      & > p:nth-of-type(1) {
        display: none;
        color: #0019364f;
        font-size: 15px;
        opacity: 0;
        ${({ $device }) => $device === 'desktop' && 'transition: all 0.3s;'}
      }
      & > p:nth-of-type(2) {
        color: var(--grey800);
        font-weight: bold;
        font-size: ${({ $device }) => ($device === 'desktop' ? '32px' : '21px')};
        line-height: ${({ $device }) => ($device === 'desktop' ? '38px' : '26px')};
        ${({ $device }) => $device === 'desktop' && 'transition: all 0.3s;'}
      }
      & > p:nth-of-type(3) {
        color: var(--grey800);
        font-size: 14px;
        opacity: 0;
        ${({ $device }) => $device === 'desktop' && 'transition: all 0.3s;'}
      }
    }
  }
  &.focused {
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 0px;
    margin: ${({ $device }) => $device === 'mobile' && '0px'};
    & > div {
      position: absolute;
      top: 0;
      left: 0;
      & > div:nth-of-type(1) {
      }
      & > div:nth-of-type(2) {
        backdrop-filter: blur(10px);
        & > span:nth-of-type(1) {
          ${({ $device }) => $device === 'mobile' && 'height: 24px; opacity: 1; padding-bottom: 50px;'}
        }
        & > span:nth-of-type(2) {
          height: 0;
          opacity: 0;
        }
        & > p:nth-of-type(1) {
          display: block;
          opacity: 1;
        }
        & > p:nth-of-type(2) {
          font-size: 25px;
          line-height: 32px;
        }
        & > p:nth-of-type(3) {
          opacity: 1;
        }
      }
    }
  }
`;
