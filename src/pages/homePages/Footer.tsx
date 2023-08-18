// import React from 'react'

import styled from "styled-components";
import logo from "../../assets/Jpegs/optiLogo.jpg";
import { AiFillFacebook, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import RevealOnScroll from "../../components/static/onScroll/RevealOnScroll";


const Footer = () => {

  return (
    <div>
      <RevealOnScroll>

        <Foot>
            <FootHold>                

              <Logo2>
                <LogoImg2 src={logo} alt="logo"/>
              </Logo2>
              
              <Navi>
                <Navis>Home</Navis>
                <Navis>Members</Navis>
                <Navis>Donate</Navis>
                <Navis>About</Navis>
              </Navi>

              <Socials>

                <Social href="https://www.facebook.com/istandtogivetohumanity">
                    <AiFillFacebook />
                </Social>
                <Social>
                    <FaTwitter />
                </Social>
                <Social>
                    <AiFillInstagram />
                </Social>
                <Social href="https://istandtogiveandcarefoundation@gmail.com">
                    <AiOutlineMail />
                </Social>

              </Socials>

            </FootHold>
        </Foot>

      </RevealOnScroll>
    </div>
  )
}

export default Footer;

// const Foot = styled.div``;

// const Foot = styled.div``;

// const Foot = styled.div``;

// const Foot = styled.div``;

// const Foot = styled.div``;

const Social = styled.a`
text-decoration: none;
cursor: pointer;
color: white;

&:hover{
    color: orange;
}
`;

const Socials = styled.div`
display: flex;
align-items: center;
gap: 1.5rem;

@media screen and (max-width: 768px) {
  gap: 1rem;
}

@media screen and (max-width: 600px) {
  gap: 0.5rem;
}
`;

const Navis = styled.div`
cursor: pointer;
font-size: 15px;
font-weight: 600;

&:hover{
    color: orange;
}
`;

const Navi = styled.div`
display: flex;
align-items: center;
gap: 2rem;
color: white;

@media screen and (max-width: 768px) {
  gap: 1rem;
}

@media screen and (max-width: 600px) {
  gap: 0.5rem;
}

@media screen and (max-width: 500px) {
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
}
`;

const LogoImg2 = styled.img`
width: 140%;
`;

const Logo2 = styled.div`
width: 60px;
height: 60px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
overflow: hidden;
`;

const FootHold = styled.div`
width: 90%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
// align-items: center;

@media screen and (max-width: 500px) {
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
`;

const Foot = styled.div`
width: 100%;
min-height: 20vh;
display: flex;
justify-content: center;
align-items: center;
background-image: linear-gradient(120deg, #000000, #1c15e7);
overflow: hidden;

@media screen and (max-width: 500px) {
  padding-top: 30px;
  padding-bottom: 30px;
}
`;

