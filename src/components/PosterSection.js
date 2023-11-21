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
    <PDiv>
        <Div1>
            <Wrap1>
                <Maintitle src={main}/>
                <SubWrap1>
                    <Subtitle src={sub}/>
                    <Subimg src={semicolon_g}/>
                </SubWrap1>
            </Wrap1>
            <Wrap2>
                <DInfo1>
                    <DateInfo src={date}/>
                    <PlaceInfo src={place}/>
                </DInfo1>
                <DInfo2>
                    <Sinfo1 src={major}/>
                    <Sinfo2 src={sinfo}/>
                </DInfo2>
                <Dcolon src={transcolon}/>
            </Wrap2>
        </Div1>
        <Div2>
            <Line/>
        </Div2>
    </PDiv>
  )
}
const PDiv =styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(#7FC1A1, white);
    height: 100%;
`;
const Div1 = styled.div`
background-image: url(${maincolon}); // 배경 이미지 설정
  background-size: 244px 561px; // 배경 이미지가 Div를 꽉 채우도록 설정
  background-position: center; // 배경 이미지를 Div의 중앙에 위치하도록 설정
  background-repeat: no-repeat; // 배경 이미지가 반복되지 않도록 설정
  height: 100%;
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
    justify-content: space-between;
    padding: 0px 29px 0px 27px;
    margin-top: 49px;
    margin-bottom: 287px;
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
const DInfo1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 44px;
`;
const DateInfo = styled.img`
    margin-bottom: 13px;
`;
const PlaceInfo = styled.img`
    width: 100%;
`;
const DInfo2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 69px;
`;
const Sinfo1 = styled.img`
    margin-bottom: 36px;
`;
const Sinfo2 = styled.img`
width: 40px;
`;
const Dcolon = styled.img`
    width: 21px;
    height: 95px;
`;

const Div2 =styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Line = styled.div`
    width: 2px;
    height: 136px;
    background-color: #79C9D1;
    margin-top: 62px;
    margin-bottom: 45px;
`
export default PosterSection