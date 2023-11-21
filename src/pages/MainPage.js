import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import Poster from '../components/PosterSection'
import Invitation from '../components/Invitation'
import Projects from '../components/Projects'
import Footer from '../components/FooterSection'
import upicon from '../images/up_icon.png'

function MainPage() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 스크롤 효과를 위해 'smooth' 옵션을 사용
    });
    console.log("click");
  };


  return (
    <Div >
        <Poster />
        <Invitation/>
        <Projects/>
        <Footer  />
        <UpBtn onClick={scrollToTop}>
            <img src={upicon} />
            <Btntext>맨위로</Btntext>
        </UpBtn>
    </Div>
  )
}

const Div = styled.div`
display: flex;
flex-direction: column;
    background-color: white;
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 375px;
  }
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const UpBtn = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    width: 65px;
    height: 65px;
    background-color: white;
    border-radius: 50%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    justify-content: center;
    position: fixed;
    z-index: 100;
    bottom: 20px;    // 화면 하단에서 20px 떨어진 위치
    right: 20px;     // 화면 오른쪽에서 20px 떨어진 위치

`;
const Btntext = styled.div`
    margin-bottom: 10px;
`;

export default MainPage