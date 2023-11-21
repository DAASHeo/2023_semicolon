import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import marker from '../images/marker.png';
const {kakao} = window;

function Invitation() {

    const [isDraggable, setIsDraggable] = useState(true);
    useEffect(()=>{
    const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(37.65533404021884, 127.0480100466395),
        level:2,
        draggable: false
    };
    const map = new kakao.maps.Map(container, options);
    const markerPosition  = new kakao.maps.LatLng(37.65533404021884, 127.0480100466395); 
    var iwContent = '<div style="padding:5px 10px; margin:0 auto; border-radius:5px;">서울창업허브 창동</div>', 
    iwPosition = new kakao.maps.LatLng(37.65553404021884, 127.0480100466395), 
    iwRemoveable = false;


var infowindow = new kakao.maps.InfoWindow({
    map: map, 
    position : iwPosition, 
    content : iwContent,
    removable : iwRemoveable
});
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);

    
}, [isDraggable]);

const handleDraggableChange = (e) => {
    setIsDraggable(e.target.value === 'true');
}

  return (
    <Div>
        <Invi>
            <Ititle>INVITATION</Ititle>
            <Itext>졸업은 학부 생활의 마침표인 동시에<br/> 대학 그 이후의 세상으로 나아감의 의미를 가지고 있습니다.<br/> 열정을 다해 달려온 학부생활의 마침표를 찍고,<br/> 문을 열었을 때 그 앞에 무엇이 펼쳐져있을지는 알 수 없습니다.<br/><br/> 다만, 알 수 없는 그 너머의 공간이<br/> 우리 모두가 꿈꾸던 찬란한 세상이길 바라며,<br/> 마침표를 의미하는 세미콜론, 그리고 그 틈새로 비치는<br/> 미정의 세계를 보여주는 전시를 기획했습니다.</Itext>
        </Invi>
        <Info>
            <TitleBox>
                <Line/>
                <Ititle2>INFORMATION</Ititle2>
                <Line/>
            </TitleBox>
            <TimeInfo>
                <Infotitle>전시 일정</Infotitle>
                <TimeBox>
                    <TDate>2023.11.29</TDate>
                    <TTime>10:00 - 17:00</TTime>
                </TimeBox>
                <TimeBox>
                    <TDate>2023.11.30</TDate>
                    <TTime>10:00 - 17:00</TTime>
                </TimeBox>
                <TimeBox>
                    <TDate>2023.12.01</TDate>
                    <TTime>10:00 - 14:00</TTime>
                </TimeBox>
            </TimeInfo>
            <PlaceInfo>
                <Infotitle>오시는 길</Infotitle>
                <MapContainer>
                    <Map id="map" />
                    <Detail>
                        <Micon src={marker}/>
                        <Maddress>서울 도봉구 마들로13길 84</Maddress>
                    </Detail>
                </MapContainer>
            </PlaceInfo>
        </Info>
    </Div>
    
  )
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0px 36px;
`;
const Invi = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 45px;
`;
const Ititle = styled.div`
    font-family: pretendard;
    font-weight: 400;
    color: #79C9D1;
    font-size: 1.4rem;
    margin-bottom: 35px;
`;
const Itext = styled.div`
    line-height: 27px;
    font-family: Noto Sans KR;
    text-align: center;
    font-size: 0.74rem;
    word-break:keep-all;
`;

const MapContainer = styled.div`
    width: 100%;
    margin: 25px 0px;
`;

const Map = styled.div`
width:100%;height:270px;
`;
const RadioContainer = styled.div`
    top: 10px; // 상단에서 얼마나 떨어져 있는지
    right: 10px; // 우측에서 얼마나 떨어져 있는지
    background: transparent; // 배경색
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
    padding: 5px 0px;
`;
const Maddress = styled.div`
font-family: Noto Sans KR;
align-self: flex-start;
`;
const Micon = styled.img`
    width: 16px;
    height: 16px;
`;
const Detail = styled.div`
    display: flex;
    flex-direction: row;
    line-height: 18px;
    background-color: white;
    padding: 5px;
    gap: 10px;
    align-items: center;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
const TimeInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    height: 255px;
    gap: 25px;
    margin-bottom: 50px;
`;
const Infotitle = styled.div`
    font-family: pretendard;
    font-weight: 400;
    font-size: 1.15rem;

`;
const TimeBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    border-radius: 5px;
    background: #FFF;
    height: 50px;
    box-shadow: 1px 5px 9px 0px rgba(0, 0, 0, 0.25);
    align-items: center;
`;
const TDate = styled.div`
    padding-left: 14px;
    font-family: pretendard;
    font-weight: 500;
`;
const TTime = styled.div`
    font-family: pretendard;
    padding-right: 14px;
    color: #AEAEAE;
    font-weight: 100;
`;
const PlaceInfo = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
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
    color: #79C9D1;
    font-size: 1.4rem;
`;
const Line = styled.div`
    background: #79C9D1;
    width: 20%;
    height: 2px;
`;
export default Invitation