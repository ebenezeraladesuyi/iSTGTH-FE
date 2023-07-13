// import React from 'react'

import styled from "styled-components";
import logo from "../../assets/Jpegs/optiLogo.jpg";
import { AiFillFacebook, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
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

                <Social>
                    <AiFillFacebook />
                </Social>
                <Social>
                    <FaTwitter />
                </Social>
                <Social>
                    <AiFillInstagram />
                </Social>
                <Social>
                    <AiOutlineMail />
                </Social>

              </Socials>

            </FootHold>
        </Foot>
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
justify-content: space-between;
// align-items: center;
`;

const Foot = styled.div`
width: 100%;
min-height: 20vh;
display: flex;
justify-content: center;
align-items: center;
background-image: linear-gradient(120deg, #000000, #1c15e7);
`;

