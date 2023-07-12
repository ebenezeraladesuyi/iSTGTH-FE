// import React from 'react'

import styled from "styled-components";
import logo from "../../../assets/Jpegs/optiLogo.jpg";
import { useState } from "react";

const Header = () => {

  const [scroll, setScroll] = useState(false);

  const changeBg = () => {
    if(window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false)
    }
  }

  window.addEventListener("scroll", changeBg)

  return (
    <div>

        <Head 
            bg={scroll ? "white" : "transparent"} 
            bs={scroll ? "0 0 2px gray" : "null" }
            style={{transition:"all 350ms ease-in-out"}} >

            <HeadHold>

              <Logo>
                <LogoImg src={logo} alt="Logo"/>
              </Logo>

              <Navs>
                <Nav cl={scroll ? "#1c15e7" : "white"} style={{transition:"all 350ms ease-in-out"}} 
                >Home</Nav>
                <Nav cl={scroll ? "#1c15e7" : "white"} style={{transition:"all 350ms ease-in-out"}} 
                >Members</Nav>
                <Nav cl={scroll ? "#1c15e7" : "white"} style={{transition:"all 350ms ease-in-out"}} 
                >Contact Us</Nav>
                <Nav cl={scroll ? "#1c15e7" : "white"} style={{transition:"all 350ms ease-in-out"}} 
                >Donate</Nav>
                <Nav cl={scroll ? "#1c15e7" : "white"} style={{transition:"all 350ms ease-in-out"}} 
                >About</Nav>
              </Navs>

              <Buttons>
                <Signin bbg={scroll ? "#1c15e7" : "white"} clr={scroll ? "white" : "#1c15e7"}  style={{transition:"all 350ms ease-in-out"}}>Signin</Signin>

                <Signup bb={scroll ? "1px solid #1c15e7" : "1px solid white"} clr={scroll ? "#1c15e7" : "white"}  style={{transition:"all 350ms ease-in-out"}}>Join Us</Signup>
              </Buttons>
                
            </HeadHold>

        </Head>

    </div>
  )
}

export default Header;

// const Head = styled.div``;

// const Head = styled.div``;

const Signup = styled.button<{bb: string, clr: string}>`
padding: 10px 15px;
cursor: pointer;
margin-left: 20px;
font-weight: 700;
// background-color: #1A395B;
background: transparent;
color:  ${(props) => props.clr};
border: ${(props) => props.bb};
border-radius: 5px;

&:hover{
  // background-color: #1A395B;
  background-color: #1c15e7;
  border: 1px solid #1c15e7;
}
`;

const Signin = styled.button<{bbg: string, clr: string}>`
padding: 10px 15px;
cursor: pointer;
background-color: ${(props) => props.bbg};
// color: #1A395B;
color: ${(props) => props.clr};
border: none;
border-radius: 5px;
font-weight: 700;

  &:hover{
    // background-color: #1A395B;
    background-color: #1c15e7;
    color: white;
  }
`;

const Buttons = styled.div`
gap: 2rem;
`;

const Nav = styled.div<{cl: string}>`
font-weight: 700;
cursor: pointer;
color: ${(props) => props.cl};

&:hover{
    color: orange;
}
`;

const Navs = styled.div`
display: flex;
align-items: center;
gap: 1.5rem;
`;

const LogoImg = styled.img`
width: 140%;
`;

const Logo = styled.div`
width: 60px;
height: 60px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
overflow: hidden;
`;

const HeadHold = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Head = styled.div<{bg: string, bs: string}>`
width: 100%;
height: 75px;
z-index: 50;
box-shadow: ${(props) => props.bs };
display: flex;
justify-content: center;
align-items: center;
position: fixed;
background-color: ${(props) => props.bg};
`;
