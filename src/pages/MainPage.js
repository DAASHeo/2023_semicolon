import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Poster from "../components/PosterSection";
import Invitation from "../components/Invitation";
import Projects from "../components/Projects";
import Footer from "../components/FooterSection";
import shareicon from "../images/share.png";
import upicon from "../images/up_icon.png";

function MainPage() {
  const topRef = useRef(null);
  const scrollToTop = () => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Div>
      <div ref={topRef}></div>
      <Poster />
      <Invitation />
      <Projects />
      <Footer />
      <BtnSection>
        {/* <ShareBtn>
          <img src={shareicon} />
          <Btntext1>공유</Btntext1>
        </ShareBtn> */}
        <UpBtn onClick={scrollToTop}>
          <img src={upicon} />
          <Btntext>맨위로</Btntext>
        </UpBtn>
      </BtnSection>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  @media (min-width: 430px) {
    margin: 0 auto;
    width: 430px;
  }
  height: 100%;
  width: 100vw;
`;
const UpBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65px;
  height: 65px;
  background-color: white;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  justify-content: center;
`;
const Btntext = styled.div`
  margin-bottom: 10px;
`;
const BtnSection = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 100;
  bottom: 20px; // 화면 하단에서 20px 떨어진 위치
  right: 20px; // 화면 오른쪽에서 20px 떨어진 위치
`;
const ShareBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65px;
  height: 65px;
  background-color: white;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  justify-content: center;
  margin-bottom: 12px;
  gap: 5px;
`;
const Btntext1 = styled.div``;
export default MainPage;
