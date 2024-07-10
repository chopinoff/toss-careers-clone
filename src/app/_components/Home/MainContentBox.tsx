'use client';

import { useWindowSize } from '@/app/_context/WindowSizeContext';
import { styled } from 'styled-components';
import Margin from '../Margin';
import ContentBlock from './ContentBlock';
import { Device } from '@/app/_types/windowSize.types';
import { Detail } from '@/app/_types/contentSection.types';

export default function MainContentBox({ title, content, blocks, index }: Detail & { index: number }) {
  const { device } = useWindowSize();
  const boxIndex = index;
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
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div``;

const Inner = styled.div<{ $device?: Device }>`
  width: ${({ $device }) => ($device === 'desktop' ? '960px' : '100%')};
  margin: ${({ $device }) => ($device === 'desktop' ? 'auto' : '0px')};
  padding: ${({ $device }) => ($device === 'desktop' ? '0px' : '0px 15px')};
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
  display: grid;
  column-gap: 30px;
  row-gap: 30px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 370px 370px;
`;
