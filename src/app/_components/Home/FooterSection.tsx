'use client';

import { useWindowSize } from '@/app/_context/WindowSizeContext';
import { Device } from '@/app/_types/windowSize.types';
import { styled } from 'styled-components';

export default function FooterSection() {
  const { device } = useWindowSize();
  return (
    <Footer $device={device}>
      <div>
        <div>
          <ul>
            <li>
              <div>서비스</div>
            </li>
            <li>
              <a href="https://toss.im/notice">공지사항</a>
            </li>
            <li>
              <a href="https://support.toss.im/faq">자주 묻는 질문</a>
            </li>
            <li>
              <a href="https://toss.im/cert">공동인증서 관리</a>
            </li>
            <li>
              <a href="http://support.toss.im/suspend">계정 일시잠금</a>
            </li>
            <li>
              <a href="https://support.toss.im">고객센터</a>
            </li>
            <li>
              <a href="https://brand.toss.im/">브랜드 리소스센터</a>
            </li>
            <li>
              <a href="https://privacy.toss.im">토스의 개인정보 보호</a>
            </li>
            <li>
              <a href="https://toss.im/teens/uss-card">토스유스카드</a>
            </li>
          </ul>
          <ul>
            <li>
              <div>회사</div>
            </li>
            <li>
              <a href="https://toss.im/team">회사 소개</a>
            </li>
            <li>
              <a href="https://tosspayments.com/">토스페이먼츠</a>
            </li>
            <li>
              <a href="https://toss.im/insurance">토스인슈어런스</a>
            </li>
            <li>
              <a href="https://corp.tossinvest.com/">토스증권</a>
            </li>
            <li>
              <a href="https://tosscx.com">토스씨엑스</a>
            </li>
            <li>
              <a href="https://www.tossbank.com/">토스뱅크</a>
            </li>
            <li>
              <a href="https://tossplace.com/?referrer=toss_recruit_footer">토스플레이스</a>
            </li>
            <li>
              <a href="https://tossmobile.co.kr">토스모바일</a>
            </li>
            <li>
              <a href="https://toss.im/career">채용</a>
            </li>
            <li>
              <a href="https://blog.toss.im/">블로그</a>
            </li>
            <li>
              <a href="https://toss.im/announcement">공고</a>
            </li>
          </ul>
          <ul>
            <li>
              <div>문의</div>
            </li>
            <li>
              <a href="mailto:partnership@toss.im">사업 제휴</a>
            </li>
            <li>
              <a href="https://toss.im/shopping-seller?utm_source=homepage&amp;utm_medium=homepage_lead&amp;utm_campaign=traffic_homepage_performance&amp;utm_content=traffic_homepage_231103">
                토스쇼핑 입점문의
              </a>
            </li>
            <li>
              <a href="https://ads-platform.toss.im/login">광고 문의</a>
            </li>
            <li>
              <a href="https://toss.im/tosscert">인증 사업 문의</a>
            </li>
            <li>
              <a href="mailto:support@toss.im">마케팅·PR</a>
            </li>
            <li>
              <a href="mailto:ir@toss.im">IR</a>
            </li>
          </ul>
          <ul>
            <li>
              <div>고객센터</div>
            </li>
            <li>
              <a href="tel:1599-4905">전화: 1599-4905 (24시간 연중무휴)</a>
            </li>
            <li>
              <a href="mailto:support@toss.im">이메일(고객전용): support@toss.im</a>
            </li>
            <li>
              <a href="mailto:safe@toss.im">이메일(외부기관전용): safe@toss.im</a>
            </li>
            <li>
              <a href="https://support.toss.im/customer-complaint">민원 접수</a>
            </li>
          </ul>
        </div>
        <address>
          <strong>
            ㈜비바리퍼블리카
            <br />
            Copyright ⓒ Toss. All Rights Reserved
          </strong>
          <br />
          사업자 등록번호 : 120-88-01280 | 대표 : 이승건
          <br />
          호스팅 서비스 : 주식회사 비바리퍼블리카 | 통신판매업 신고번호 : 2014-서울강남-03377
          <br />
          <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1208801280">사업자정보확인</a>
          <br />
          06236 서울특별시 강남구 테헤란로 142, 4층, 10층, 11층, 12층, 13층, 22층, 23층 (역삼동, 아크플레이스)
          <br />
          고객센터 : 서울특별시 강남구 테헤란로 133, 9층 (역삼동, 한국타이어빌딩)
        </address>
        <ul>
          <li>
            <a href="https://toss.im/terms">서비스 이용약관</a>
          </li>
          <li>
            <a href="https://toss.im/docs/500">통합 금융정보 서비스 약관</a>
          </li>
          <li>
            <a href="https://toss.im/docs/11567">마이데이터 서비스 이용약관</a>
          </li>
          <li>
            <a href="https://static-docs.toss.im/privacy/safety">이용자의 권리 및 유의사항</a>
          </li>
          <li>
            <a href="https://toss.im/privacy-policy">
              <strong>개인정보 처리방침</strong>
            </a>
          </li>
          <li>
            <a href="https://toss.im/docs/11185">
              <strong>채용팀 개인정보 처리방침</strong>
            </a>
          </li>
          <li>
            <a href="https://service.toss.im/terms/4336">
              <strong>어드민 서비스 개인정보 처리방침</strong>
            </a>
          </li>
          <li>
            <a href="https://toss.im/docs/11175">영상정보처리기기 운영 관리 방침</a>
          </li>
          <li>
            <a href="https://toss.im/agreement/locationInfo">
              <strong>위치기반서비스 이용약관</strong>
            </a>
          </li>
          <li>
            <a href="https://toss.im/docs/10290">가맹점 고지사항</a>
          </li>
          <li>
            <a href="https://toss.im/tosscert/cps">토스 전자서명인증업무준칙</a>
          </li>
          <li>
            <a href="https://toss.im/docs/49">토스 전자인증서비스 약관</a>
          </li>
          <li>
            <a href="https://toss.im/financial-consumer-protection">금융소비자보호</a>
          </li>
          <li>
            <a href="https://service.toss.im/terms/5867">
              <strong>토스비즈니스 개인정보 처리방침</strong>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a aria-label="Toss Facebook" target="_blank" href="https://www.facebook.com/toss.official">
              <img src="https://static.toss.im/assets/homepage/safety/icn-facebook.svg" alt="Toss Facebook" />
            </a>
          </li>
          <li>
            <a aria-label="Toss Blog" target="_blank" href="https://blog.toss.im">
              <img src="https://static.toss.im/assets/homepage/safety/icn-blog.svg" alt="Toss Blog" />
            </a>
          </li>
          <li>
            <a aria-label="Toss Naver Post" target="_blank" href="https://post.naver.com/tossblog">
              <img src="https://static.toss.im/assets/homepage/safety/icn-naver.svg" alt="Toss Naver Post" />
            </a>
          </li>
          <li>
            <a aria-label="Toss Twitter" target="_blank" href="https://twitter.com/toss__official">
              <img src="https://static.toss.im/assets/homepage/safety/icn-twitter.svg" alt="Toss Twitter" />
            </a>
          </li>
          <li>
            <a aria-label="Toss Instagram" target="_blank" href="https://www.instagram.com/toss.im/">
              <img src="https://static.toss.im/assets/homepage/safety/icn-instagram.svg" alt="Toss Instagram" />
            </a>
          </li>
        </ul>
      </div>
    </Footer>
  );
}

const Footer = styled.footer<{ $device?: Device }>`
  background-color: var(--grey50);
  & > div {
    padding: 60px 40px 80px;
    margin: ${({ $device }) => ($device === 'desktop' ? '0px auto' : '0px')};
    width: ${({ $device }) => ($device === 'desktop' ? '1020px' : '100%')};
    & > div {
      display: flex;
      flex-direction: ${({ $device }) => ($device === 'desktop' ? 'row' : 'column')};
      & > ul {
        padding-bottom: 40px;
        width: 170px;
        & li {
          height: 30px;
          & div {
            color: var(--grey800);
            font-weight: bold;
            font-size: 15px;
          }
          & a {
            color: var(--grey600);
            font-size: 15px;
            line-height: 18px;
          }
        }
      }
      & > ul:last-of-type {
        width: 340px;
      }
    }
    & > address {
      color: var(--grey600);
      font-size: 13px;
      line-height: 18px;
      padding-bottom: 40px;
      & strong {
        display: inline-block;
        padding-bottom: 16px;
        font-weight: bold;
        font-size: 15px;
        color: var(--grey800);
      }
      & * {
      }
    }
    & > ul:first-of-type {
      display: grid;
      grid-row-gap: 8px;
      ${({ $device }) =>
        $device === 'desktop' &&
        'grid-template-columns: repeat(4, auto); grid-column-gap: 34px; grid-row-gap: 4px; padding: 24px 0 30px;'}
      padding: 24px 0 40px;
      & li {
        line-height: 18px;
        & div {
          color: var(--grey800);
          font-weight: bold;
          font-size: 15px;
        }
        & a {
          color: var(--grey600);
          font-size: 13px;
          line-height: 15p;
        }
      }
    }
    & > ul:last-of-type {
      display: flex;
      grid-template-columns: auto;
      grid-column-gap: 8px;
      & li {
        opacity: 0.6;
        transition: opacity 0.3s;
        width: 36px;
        height: 36px;
      }
      & li:hover {
        opacity: 1;
      }
    }
  }
`;
