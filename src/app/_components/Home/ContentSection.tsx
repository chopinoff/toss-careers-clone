'use client';

import { useScroll } from '@/app/_hooks/useScroll';
import { styled } from 'styled-components';
import { Detail } from '@/app/_types/contentSection.types';
import MainContentBox from './MainContentBox';

const details: Detail[] = [
  {
    title: '누구나 가진 몰입의 힘을 믿습니다',
    content:
      '만약 누군가의 몰입이 없었다면, 모두를 위한 새로운 혁신은 없었을 것입니다.<br/>토스커뮤니티에서는 누구나 각자의 방식으로 몰입할 수 있습니다.',
    blocks: [
      {
        blockHeader: 'Direct Responsible Individual',
        blockTitle: '모두가 맡은 바에<br/>최종 의사결정할 수 있습니다.',
        blockContent:
          '탁월한 역량과 도덕성을 함께 갖춘 전문가를 동료로 모십니다. 전문가보다 의사결정을 더 잘할 수 있는 사람은 없다고 믿습니다.<br/><br/>맡은 일에 대한 DRI(Direct Responsible Individual, 최종의사결정권)를 바탕으로 모든 것을 스스로 결정하고 주도적으로 진행하며, 결과에 대한 책임을 집니다.<br/><br/>결과에 따른 신뢰 확장을 통해 DRI로 내릴 수 있는 일의 범위도 점차 확장시킬 수 있습니다.',
      },
      {
        blockHeader: 'Freedom & Responsibility',
        blockTitle: '자율과 책임으로<br/>일합니다.',
        blockContent:
          '팀원을 믿지 못해 만든 규칙과 프로세스를 최소화합니다. 자율을 악용하지 않을 도덕성이 높은 동료만 모시기에 가능한 일입니다.<br/><br/>이 덕분에 업무의 대부분은 자율과 책임의 환경에서 진행되며, 팀원들 모두가 더욱 몰입해서 일할 수 있습니다.<br/><br/>서로 간의 신뢰를 더욱 높이기 위한 노력은 매일 계속되고 있습니다.',
      },
      {
        blockHeader: 'Radical Transparency',
        blockTitle: '정보는 모두에게<br/>열려있습니다.',
        blockContent:
          '전문가로서 최적의 의사결정을 하기 위해선 누구나 필요한 정보에 접근할 수 있어야 합니다.<br/><br/>의사결정에 필요한 최대한의 정보를 팀 전체에 공개하고 있으며, 접근하기 힘든 정보가 있다면 접근성을 높이기 위해서 노력합니다.<br/><br/>정보의 비대칭은 불합리한 권력과 불필요한 정치를 만듭니다. 토스커뮤니티에서는 이러한 것들이 없으며, 팀원 모두가 동일한 수준의 정보 위에서 일할 수 있습니다.',
      },
      {
        blockHeader: 'Courage to Fail Fast',
        blockTitle: '용기 있는 빠른 실패를 통해<br/>성장합니다.',
        blockContent:
          '실패를 두려워하지 않는 마음은 성공으로 가는 지름길입니다. 처음부터 성공하고 싶은 마음이 들수록 실패하더라도 더 빨리 시도해보기 위한 용기와 담대함을 갖고자 노력합니다.<br/><br/>더 빨리 실패를 선언하고, 그 실패에서 배운 러닝을 통해 다음을 향해 용기 있게 나아가는 것에 언제나 박수를 쳐줍니다.',
      },
    ],
  },
];

export default function ContentSection() {
  const { scrollY } = useScroll();

  return (
    <Section $scrollY={scrollY}>
      {details.map((detail, index) => (
        <MainContentBox key={index} {...detail} index={index} />
      ))}
    </Section>
  );
}

const Section = styled.section<{ $scrollY: number }>``;
