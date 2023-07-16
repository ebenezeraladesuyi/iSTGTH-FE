// import React from 'react'

import styled from "styled-components";
import logo from "../../../assets/Jpegs/optiLogo.jpg";
import { useState } from "react";
import { ImMenu } from "react-icons/im"
import { CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";


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

  const [out, setOut] = useState(false)

  const outMobile = () => {
    setOut(!out)
  }

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

                <Link offset={-100} smooth={true} duration={500} to="contactus">
                    <Nav cl={scroll ? "#1c15e7" : "white"} style={{transition:"all 350ms ease-in-out"}} 
                    >
                      Contact Us
                    </Nav>
                </Link>

                <Nav cl={scroll ? "#1c15e7" : "white"} style={{transition:"all 350ms ease-in-out"}} 
                >Donate</Nav>

                <Nav cl={scroll ? "#1c15e7" : "white"} style={{transition:"all 350ms ease-in-out"}} 
                >About</Nav>

              </Navs>

              <Buttons>
                <Signin 
                  to='/signin'
                  bbg={scroll ? "#1c15e7" : "white"} clr={scroll ? "white" : "#1c15e7"}  style={{transition:"all 350ms ease-in-out"}}>Signin</Signin>

                <Signup 
                  to='/signup'
                  bb={scroll ? "1px solid #1c15e7" : "1px solid white"} clr={scroll ? "#1c15e7" : "white"}  style={{transition:"all 350ms ease-in-out"}}>Join Us</Signup>
              </Buttons>

              { out ?
                <Toggle onClick={outMobile}>
                  <CgClose />
                </Toggle>
              :
                <Toggle onClick={outMobile}>
                  <ImMenu />
                </Toggle>
              }

              {/* <Toggle onClick={outMobile}>
                 <ImMenu />
              </Toggle> */}

              { out ? 
                <Mob onClick={outMobile}>
                  <div></div>

                  <Mobile>
                    <Navs1>
                      <Nav1 style={{transition:"all 350ms ease-in-out"}} 
                      >Home</Nav1>
                      <Nav1 style={{transition:"all 350ms ease-in-out"}} 
                      >Members</Nav1>
                      <Nav1 style={{transition:"all 350ms ease-in-out"}} 
                      >Contact Us</Nav1>
                      <Nav1 style={{transition:"all 350ms ease-in-out"}} 
                      >Donate</Nav1>
                      <Nav1 style={{transition:"all 350ms ease-in-out"}} 
                      >About</Nav1>
                    </Navs1>

                    <Buttons1>
                      <Signin1 
                        to='/signin'
                        style={{transition:"all 350ms ease-in-out"}}>Signin</Signin1>

                      <Signup1
                        to='/signup'
                        style={{transition:"all 350ms ease-in-out"}}>Join Us</Signup1>
                    </Buttons1>

                  </Mobile>
                </Mob>
                :
                null
              }
                
            </HeadHold>

        </Head>

    </div>
  )
}

export default Header;

// const Head = styled.div``;

// const Toggle = styled.div``;

// const Head = styled.div``;

// const Toggle = styled.div``;

// const Head = styled.div``;

// const Toggle = styled.div``;

const Signup1 = styled(NavLink)`
width: 100%;
height: 40px;
cursor: pointer;
font-weight: 700;
background: transparent;
color:  #1c15e7;
border: 1px solid #1c15e7;
border-radius: 5px;
margin-top: 15px;
text-decoration: none;

&:hover{
  background-color: #1c15e7;
  border: 1px solid #1c15e7;
  color: white;
}
`;

const Signin1 = styled(NavLink)`
width: 100%;
height: 40px;
cursor: pointer;
background-color: #1c15e7;
color: white;
border: none;
border-radius: 5px;
font-weight: 700;
text-decoration: none;

  &:hover{
    background-color: #1c15e7;
    color: white;
  }
`;

const Buttons1 = styled.div`
padding: 30px 15px;
`;

const Nav1 = styled.div`
font-weight: 700;
cursor: pointer;
color: #1c15e7;
border-bottom: 1px solid #1c15e7;
height: 30px;

&:hover{
    color: orange;
}
`;

const Navs1 = styled.div`
display: flex;
flex-direction: column;
gap: 1.5rem;
padding-left: 15px;
padding-right: 15px;
padding-top: 30px;
`;

const Mobile = styled.div`
width: 300px;
height: 430px;
background: white;
border-radius: 10px;
display: flex;
flex-direction: column;
padding: 10px 10px;
margin-right: 75px;
backdrop-filter: blur(5px);

// --transform-scale-x: .95;
// --transform-scale-y: .95;
// --transform-skew-y: 12deg;

@media screen and (max-width: 500px) {
  margin-right: 45px;
}

@media screen and (max-width: 375px) {
  margin-right: 35px;
}

@media screen and (max-width: 320px) {
  margin-right: 35px;
}
`;

const Mob = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
justify-content: space-between;
position: absolute;
top: 80px;
`;

const Toggle = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    background: white;
    width: 35px;
    height: 35px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #1c15e7;
}
`;

const Signup = styled(NavLink)<{bb: string, clr: string}>`
padding: 10px 15px;
cursor: pointer;
margin-left: 20px;
font-weight: 700;
// background-color: #1A395B;
background: transparent;
text-decoration: none;
color:  ${(props) => props.clr};
border: ${(props) => props.bb};
border-radius: 5px;

&:hover{
  background-color: #1c15e7;
  border: 1px solid #1c15e7;
  color: white;
}
`;

const Signin = styled(NavLink)<{bbg: string, clr: string}>`
padding: 10px 15px;
cursor: pointer;
background-color: ${(props: any) => props.bbg};
// color: #1A395B;
color: ${(props: any) => props.clr};
border: none;
border-radius: 5px;
font-weight: 700;
text-decoration: none;

  &:hover{
    background-color: #1c15e7;
    color: white;
  }
`;

const Buttons = styled.div`
gap: 2rem;

@media screen and (max-width: 768px) {
    display: none;
}
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

@media screen and (max-width: 768px) {
    display: none;
}
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
