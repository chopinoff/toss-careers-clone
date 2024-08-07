'use client';

import { useWindowSize } from '@/app/_context/WindowSizeContext';
import { styled } from 'styled-components';
import Margin from '../Margin';
import ContentBlock from './ContentBlock';
import { Device } from '@/app/_types/windowSize.types';
import { Detail } from '@/app/_types/contentSection.types';
import MainCarousel from './MainCarousel';

export default function MainContentBox({ title, content, blocks, carousel, boxIndex }: Detail & { boxIndex: number }) {
  const { device } = useWindowSize();
  return (
    <ContentWrapper>
      <Margin height={100} />
      <Inner $device={device}>
        <p dangerouslySetInnerHTML={{ __html: title }} />
        <Margin height={16} />
        <p dangerouslySetInnerHTML={{ __html: content }} />
        <Margin height={32} />
        <BlocksWrapper>
          {blocks.map((block, index) => (
            <ContentBlock key={index} {...block} index={boxIndex + 1 + '-' + (index + 1)} />
          ))}
        </BlocksWrapper>
      </Inner>
      <Margin height={56} />
      <MainCarousel carousel={carousel} boxIndex={boxIndex} />
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div``;

const Inner = styled.div<{ $device?: Device }>`
  width: ${({ $device }) => ($device === 'desktop' ? '1020px' : '100%')};
  margin: ${({ $device }) => ($device === 'desktop' ? '0px auto' : '0px')};
  padding: ${({ $device }) => ($device === 'desktop' ? '0px 30px' : '0px 15px')};
  & > p:nth-of-type(1) {
    color: var(--grey800);
    font-weight: bold;
    font-size: ${({ $device }) => ($device === 'desktop' ? '46px' : '32px')};
  }
  & > p:not(:nth-of-type(1)) {
    color: var(--grey600);
    font-size: ${({ $device }) => ($device === 'desktop' ? '18px' : '15px')};
    line-height: ${({ $device }) => ($device === 'desktop' ? '29px' : '24px')};
  }
`;

const BlocksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  max-width: 960px;
  margin: 0px auto;
`;
