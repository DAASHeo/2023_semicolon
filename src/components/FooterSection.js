import React from "react";
import styled from "styled-components";
import logo from "../images/footerlogo.png";

function FooterSection() {
  return (
    <Div>
      <DTile src={logo} />
      <DName>&lt; Developed by Heo Eun / &gt;</DName>
    </Div>
  );
}

const Div = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(white, #7fc1a1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;
const DTile = styled.img`
  height: 1.2rem;
`;
const DName = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 300;
    color: gray;
    font-size: 11px;
`;

export default FooterSection;
