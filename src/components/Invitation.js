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
        draggable: isDraggable
    };
    const map = new kakao.maps.Map(container, options);
    const markerPosition  = new kakao.maps.LatLng(37.65533404021884, 127.0480100466395); 
    var iwContent = '<div style="padding:5px 10px; margin:0 auto;">서울창업허브 창동</div>', 
    iwPosition = new kakao.maps.LatLng(37.65553404021884, 127.0480100466395), 
    iwRemoveable = false;


var infowindow = new kakao.maps.InfoWindow({
    map: map, 
    position : iwPosition, 
    content : iwContent,
    removable : iwRemoveable
});
    kakao.maps.event.addListener(map, 'tilesloaded', () => {
        map.setDraggable(isDraggable);
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
        <MapContainer>
    <RadioContainer>
        <label>지도 이동</label>
                <label>
                    <input 
                        type="radio" 
                        name="draggable" 
                        value="true" 
                        checked={isDraggable === true}
                        onChange={handleDraggableChange}
                    />
                    켜기
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="draggable" 
                        value="false"
                        checked={isDraggable === false}
                        onChange={handleDraggableChange}
                    />
                    끄기
                </label>
            </RadioContainer>
        <Map id="map"></Map>
        <Detail>
            <Micon src={marker}/>
            <Maddress>서울 도봉구 마들로13길 84</Maddress>
</Detail>
</MapContainer>
    </Div>
    
  )
}

const Div = styled.div``;

const MapContainer = styled.div`
    width: 100vw;
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
const Maddress = styled.div``;
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
`;
export default Invitation