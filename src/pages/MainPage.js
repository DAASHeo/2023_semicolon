import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import Poster from '../components/PosterSection'
import Invitation from '../components/Invitation'
import Projects from '../components/Projects'
import Footer from '../components/FooterSection'
import upicon from '../images/up_icon.png'

const gradientColors = [
    'linear-gradient(to bottom, #7FC1A1, white)',
    'linear-gradient(to bottom, #79C9D1, white)',
    'linear-gradient(to bottom, #93C85F, white)',
    'linear-gradient(to bottom, #EAEC89, white)',
  ];
  

function MainPage() {

    const [gradient, setGradient] = useState(gradientColors[0]);
  const posterRef = useRef(null);
  const invitationRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

  const updateBackground = () => {
    const scrollY = window.scrollY;
    const posterPosition = posterRef.current.offsetTop;
    const invitationPosition = invitationRef.current.offsetTop;
    const projectsPosition = projectsRef.current.offsetTop;
    const footerPosition = footerRef.current.offsetTop;

    if (scrollY >= posterPosition && scrollY < invitationPosition) {
        setGradient(gradientColors[0]);
      } else if (scrollY >= invitationPosition && scrollY < projectsPosition) {
        setGradient(gradientColors[1]);
      } else if (scrollY >= projectsPosition && scrollY < footerPosition) {
        setGradient(gradientColors[2]);
      } else if (scrollY >= footerPosition) {
        setGradient(gradientColors[3]); // Footer 섹션에 해당하는 그라디언트
      }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateBackground);
    return () => window.removeEventListener('scroll', updateBackground);
  }, []);

  return (
    <Div style={{ background: gradient }}>
        <Poster ref={posterRef}/>
        <Invitation ref={invitationRef}/>
        <Projects ref={projectsRef}/>
        <Footer ref={footerRef} />
        <UpBtn>
            <img src={upicon}/>
            <Btntext>맨위로</Btntext>
        </UpBtn>
    </Div>
  )
}

const Div = styled.div`
display: flex;
flex-direction: column;
    background-color: white;
  transition: background 1s ease;
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 375px;
  }
  height: 100vh;
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
bottom: 20px;    // 화면 하단에서 20px 떨어진 위치
  right: 20px;     // 화면 오른쪽에서 20px 떨어진 위치

`;
const Btntext = styled.div`
    margin-bottom: 10px;
`;

export default MainPage