'use client';

import { styled } from 'styled-components';
import { useWindowSize } from '@/app/_context/WindowSizeContext';
import { Device } from '@/app/_types/windowSize.types';
import Margin from '../Margin';
import { BlockDetail } from '@/app/_types/contentSection.types';

export default function ContentBlock({
  blockHeader,
  blockTitle,
  blockContent,
  index,
}: BlockDetail & { index: string }) {
  const { device } = useWindowSize();

  return (
    <BlockWrapper $device={device} $index={index}>
      <div></div>
      <div>
        <p>{blockHeader}</p>
        <Margin height={8} />
        <p dangerouslySetInnerHTML={{ __html: blockTitle }} />
        <Margin height={20} />
        <span>
          <img src="/images/more-btn.svg" />
        </span>
        <p dangerouslySetInnerHTML={{ __html: blockContent }} />
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
    padding: 32px;
    & > span {
      display: block;
      opacity: 1;
      width: 24px;
      height: 24px;
      overflow: hidden;
      transition: all 0.3s;
    }
    & > p:nth-of-type(1) {
      display: none;
      color: #0019364f;
      font-size: 15px;
      opacity: 0;
      transition: all 0.3s;
    }
    & > p:nth-of-type(2) {
      color: var(--grey800);
      font-weight: bold;
      font-size: ${({ $device }) => ($device === 'desktop' ? '32px' : '21px')};
      line-height: ${({ $device }) => ($device === 'desktop' ? '38px' : '25px')};
      transition: all 0.3s;
    }
    & > p:nth-of-type(3) {
      color: var(--grey800);
      font-size: 14px;
      opacity: 0;
      transition: all 0.3s;
    }
  }
  &:hover {
    & > div:nth-of-type(2) {
      backdrop-filter: blur(10px);
      & > span {
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
`;
