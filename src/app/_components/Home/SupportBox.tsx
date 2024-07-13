'use client';

import { styled } from 'styled-components';
import Margin from '../Margin';
import { useWindowSize } from '@/app/_context/WindowSizeContext';
import { Device } from '@/app/_types/windowSize.types';
import { support } from '@/app/_data/mainContentData';

export default function SuppertBox() {
  const { device } = useWindowSize();
  const { title, blocks } = support;

  return (
    <Wrapper $device={device}>
      <Margin height={110} />
      <p dangerouslySetInnerHTML={{ __html: title }} />
      <div>
        {blocks.map(({ blockTitle, blockContent }, index) => (
          <div key={index}>
            <p dangerouslySetInnerHTML={{ __html: blockTitle }} />
            <p dangerouslySetInnerHTML={{ __html: blockContent }} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $device?: Device }>`
  padding: 0px 30px;
  margin: 0 auto;
  max-width: ${({ $device }) => ($device === 'desktop' ? '1020px' : '100%')};
  & > p {
    margin-bottom: ${({ $device }) => ($device === 'desktop' ? '56px' : '40px')};
    font-weight: bold;
    font-size: ${({ $device }) => ($device === 'desktop' ? '56px' : '28px')};
    line-height: ${({ $device }) => ($device === 'desktop' ? '72px' : '37px')};
    color: var(--grey800);
  }
  & > div {
    ${({ $device }) =>
      $device === 'desktop' &&
      'display: flex; -webkit-box-pack: justify; justify-content: space-between; margin-bottom: 100px;'}
    & > div {
      margin-right: ${({ $device }) => ($device === 'desktop' ? '40px' : '0px')};
      margin-bottom: ${({ $device }) => ($device === 'desktop' ? '0px' : '26px')};
      & > p {
      }
      & > p:nth-of-type(1) {
        margin-bottom: ${({ $device }) => ($device === 'desktop' ? '14px' : '10px')};
        font-weight: bold;
        font-size: ${({ $device }) => ($device === 'desktop' ? '20px' : '18px')};
        line-height: ${({ $device }) => ($device === 'desktop' ? '28px' : '24px')};
        color: var(--grey800);
      }
      & > p:nth-of-type(2) {
        color: var(--grey600);
        font-size: ${({ $device }) => ($device === 'desktop' ? '15px' : '14px')};
        line-height: ${({ $device }) => ($device === 'desktop' ? '25px' : '23px')};
      }
      &:last-of-type {
        margin-right: 0px;
      }
    }
  }
`;
