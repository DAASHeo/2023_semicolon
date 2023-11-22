import React from "react";
import styled from "styled-components";
import team1 from "../images/projects/team1.png";
import team2 from "../images/projects/덕공이산.png";
import team3 from "../images/projects/덕썸니아.png";
import team4 from "../images/projects/덕진스.png";
import team5 from "../images/projects/아람.png";
import team6 from "../images/projects/지켜줄개.png";
import team7 from "../images/projects/집탐험대.png";
import team8 from "../images/projects/천원은행복.png";
import team9 from "../images/projects/코딩하는세포들.png";
import team10 from "../images/projects/하이파이브Ent.png";
import team11 from "../images/projects/A202.png";
import team12 from "../images/projects/Freaks.png";
import team13 from "../images/projects/Meme.png";

function Projects() {
  return (
    <Div>
      <Info>
        <TitleBox>
          <Line />
          <Ititle2>PROJECTS</Ititle2>
          <Line />
        </TitleBox>
      </Info>
      <PSection>
        <PInner>
          <PImg src={team1} />
          <PInfo>
            <PTitle>이번 여행지능(TravAI)</PTitle>
            <PTeam>95%</PTeam>
          </PInfo>
          <PMem>오서현 | 임지희 | 천수진 | 허은</PMem>
          <PText>
            사용자 개인에게 최적화된 AI 기반 여행 일정 자동 생성 서비스이다.
          </PText>
        </PInner>
        <PInner>
          <PImg src={team11} />
          <PInfo>
            <PTitle>비마커 기반 실내 측위기술을 활용한 AR도슨트</PTitle>
            <PTeam>A202</PTeam>
          </PInfo>
          <PMem>김윤아 | 신지현 | 오유선 | 이예림</PMem>
          <PText>
            가상 콘텐츠 체험을 기반으로 박물관의 재미를 증대시키고, 물리적 제약
            없이 전시품 설명을 들을 수 있게 하는 AR도슨트 앱이다.
          </PText>
        </PInner>
        <PInner>
          <PImg src={team12} />
          <PInfo>
            <PTitle>트래킹을 활용한 인터랙티브 미디어아트</PTitle>
            <PTeam>Freaks</PTeam>
          </PInfo>
          <PMem>김수민 | 오유림 | 윤해주 | 한가윤</PMem>
          <PText>
            현실적인 그래픽과 자유로운 행동이 가능한 트래커를 이용해 사용자에게
            극대화된 몰입 경험과 콘텐츠를 통한 휴식을 체험하게 하는 미디어 아트
          </PText>
        </PInner>
        <PInner>
          <PImg src={team13} />
          <PInfo>
            <PTitle>ME:MUSE</PTitle>
            <PTeam>MEME</PTeam>
          </PInfo>
          <PMem>이가영 | 박세연 | 이시윤 | 김가현 | 손유빈</PMem>
          <PText>
            음성인식을 기반으로 생성형 AI를 통해 그림을 그리고 전시할 수 있는
            배리어프리 창작 서비스이다.
          </PText>
        </PInner>
        <PInner>
          <PImg src={team2} />
          <PInfo>
            <PTitle>OVER THE GLASS</PTitle>
            <PTeam>덕공이산</PTeam>
          </PInfo>
          <PMem>구인영 | 주경연 | 홍서연</PMem>
          <PText>
            다자간 대화 상황에서 AR글래스와 얼굴 인식을 통한 발화자 파악으로
            발화자 주변에 실시간 자막을 보여주는 난청인을 위한 웹 서비스이다.
          </PText>
        </PInner>
        <PInner>
          <PImg src={team3} />
          <PInfo>
            <PTitle>EarZing(이어징)</PTitle>
            <PTeam>덕썸니아</PTeam>
          </PInfo>
          <PMem>이정민 | 박연우 | 이현진 | 박혜선</PMem>
          <PText>
            청각장애인을 위한 음성인식 기반 위급상황 알림 및 일상생활 음향 분류
            모바일 앱이다.
          </PText>
        </PInner>
        <PInner>
          <PImg src={team4} />
          <PInfo>
            <PTitle>ViewMe</PTitle>
            <PTeam>덕진스</PTeam>
          </PInfo>
          <PMem>김채연 | 오효진 | 이혜빈 | 박주하</PMem>
          <PText>
            시각장애인, 저시력인들이 자유롭게 외출하고 위험을 벗어나 안전하게
            이동할 수 있도록 객체 인식 기반의 AR 보행 서비스를 제공해주는
            애플리케이션
          </PText>
        </PInner>
        <PInner>
          <PImg src={team5} />
          <PInfo>
            <PTitle>소서특필</PTitle>
            <PTeam>아람</PTeam>
          </PInfo>
          <PMem>오상은 | 이민서 | 이지원 | 한유진</PMem>
          <PText>
            사용자의 손글씨로부터 자체 훈련한 특성 분석 모델을 통해 특성을
            분석하고, 추천 피드를 정렬해주는 글씨 공유 커뮤니티 서비스이다.
          </PText>
        </PInner>
        <PInner>
          <PImg src={team6} />
          <PInfo>
            <PTitle>로그도그(LogDog)</PTitle>
            <PTeam>지켜줄개</PTeam>
          </PInfo>
          <PMem>김채연 | 정성혜 | 김희진 | 권현진</PMem>
          <PText>
            '로그도그(LogDog)'는 강아지 아바타로 즐기는 커뮤니티 플랫폼이다.
          </PText>
        </PInner>
        <PInner>
          <PImg src={team7} />
          <PInfo>
            <PTitle>개인 맞춤형 주거 지역 추천 서비스</PTitle>
            <PTeam>집탐험대</PTeam>
          </PInfo>
          <PMem>김지호 | 김시은 | 이현지 | 김효정</PMem>
          <PText>
            사용자의 라이프스타일을 반영하여 맞춤형 주거지역을 추천해주고
            추천받은 지역의 정보를 제공하는 서비스이다.
          </PText>
        </PInner>
        <PInner>
          <PImg src={team8} />
          <PInfo>
            <PTitle>mAInd</PTitle>
            <PTeam>천원은행복</PTeam>
          </PInfo>
          <PMem>이은수 | 장지원 | 천윤서</PMem>
          <PText>
            감정 분석을 통해 상담 일지 작성을 자동화해주는 인공지능 기반 비대면
            심리 상담 서비스이다.
          </PText>
        </PInner>
        <PInner>
          <PImg src={team9} />
          <PInfo>
            <PTitle>재활운동회</PTitle>
            <PTeam>코딩하는 세포들</PTeam>
          </PInfo>
          <PMem>신소연 | 이소현 | 민예은 | 이승현</PMem>
          <PText>
            뇌졸중 환자들의 반복적인 재활로 인한 흥미와 재활 동기 부재, 우울증
            해결을 위해 Gamification을 도입한 XR 이중재활 프로그램
          </PText>
        </PInner>
        <PInner>
          <PImg src={team10} />
          <PInfo>
            <PTitle>버추얼스테이지</PTitle>
            <PTeam>하이파이브Ent</PTeam>
          </PInfo>
          <PMem>김예진 | 박미주 | 성지연 | 임기빈 | 허정현</PMem>
          <PText>
            동작 인식을 기반으로 한 3D 아바타 안무 유사도 측정 애플리케이션,
            당신도 K-POP 안무 챌린지에 참여할 수 있다!
          </PText>
        </PInner>
      </PSection>
    </Div>
  );
}

const Div = styled.div`
  padding: 0px 36px;
  display: flex;
  flex-direction: column;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 35px;
  width: 100%;
  justify-content: space-between;
`;
const Ititle2 = styled.div`
  font-family: pretendard;
  font-weight: 400;
  color: #79c9d1;
  font-size: 1.4rem;
`;
const Line = styled.div`
  background: #79c9d1;
  width: 20%;
  height: 2px;
`;
const PSection = styled.div`
  width: 100%;
`;
const PInner = styled.div``;
const PImg = styled.img`
  width: 100%;
  margin-bottom: 12px;
`;
const PInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const PTitle = styled.div`
  font-family: Noto Sans KR;
  font-weight: 600;
  font-size: 0.9rem;
`;
const PTeam = styled.div`
  font-family: Noto Sans KR;
  font-weight: 600;
  font-size: 0.9rem;
`;
const PMem = styled.div`
  color: #909097;
  font-family: Noto Sans KR;
  font-weight: 500;
  line-height: 30px;
  font-size: 0.8rem;
`;
const PText = styled.div`
  width: 100%;
  word-break: keep-all;
  color: #909097;
  font-family: Noto Sans KR;
  font-weight: 200;
  font-size: 0.75rem;
  line-height: 20px;
  margin-bottom: 32px;
`;

export default Projects;
