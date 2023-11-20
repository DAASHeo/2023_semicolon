import React from 'react'
import styled from 'styled-components'
import semicolon_g from '../images/poster/semicolon_gray.png'
import transcolon from '../images/poster/trans_colon.png'
import date from '../images/poster/date.png'
import sub from '../images/poster/guess.png'
import main from '../images/poster/maintitle.png'
import maincolon from '../images/poster/semicolon.png'
import place from '../images/poster/place.png'
import sinfo from '../images/poster/sinfo.png'
import major from '../images/poster/major.png'

function PosterSection() {
  return (
    <Div>
        <Wrap1>
            <Maintitle src={main}/>
            <SubWrap1>
                <Subtitle src={sub}/>
                <Subimg src={semicolon_g}/>
            </SubWrap1>
        </Wrap1>
        <Wrap2>
            <DInfo>
                <DateInfo src={date}/>
                <PlaceInfo src={place}/>
            </DInfo>
            <DInfo>
                <Sinfo1 src={sinfo}/>
                <Sinfo2 src={major}/>
            </DInfo>
            <Dcolon src={transcolon}/>
        </Wrap2>
    </Div>
  )
}

const Div = styled.div`
background-image: url(${maincolon}); // 배경 이미지 설정
  background-size: cover; // 배경 이미지가 Div를 꽉 채우도록 설정
  background-position: center; // 배경 이미지를 Div의 중앙에 위치하도록 설정
  background-repeat: no-repeat; // 배경 이미지가 반복되지 않도록 설정
  height: 100vh; // 예시로 설정한 높이, 실제 필요에 따라 조절해야 함
`;
const Wrap1 = styled.div`
    display: flex;
    flex-direction: row;
    padding: 21px 19px 0px 27px ;
    justify-content: space-between;
    height: fit-content;
`;
const Wrap2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 319px;
`;
const Maintitle = styled.img`
width: 8.625rem;
`;
const SubWrap1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
const Subtitle = styled.img`
width: 2.3125rem;
`;
const Subimg = styled.img`
    width: 0.4375rem;
`;
const DInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: 319px;
`;
const DateInfo = styled.img`
    display: flex;
    flex-direction: row;
    width: 319px;
`;
const PlaceInfo = styled.img`
    display: flex;
    flex-direction: row;
    width: 319px;
`;
const Sinfo1 = styled.img`
    display: flex;
    flex-direction: row;
    width: 319px;
`;
const Sinfo2 = styled.img`
    display: flex;
    flex-direction: row;
    width: 319px;
`;
const Dcolon = styled.img`
    display: flex;
    flex-direction: row;
    width: 319px;
`;
export default PosterSection