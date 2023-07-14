// import React from 'react'

import { styled } from "styled-components";
import signupImg from "../../assets/Jpegs/p1000-3.jpg"
import logo4 from "../../assets/Jpegs/optiLogo.jpg";


const Signin = () => {
  return (
    <div>

        <Sign2>
                
                <SignupRight2>
                    <SignupForm2>
        
                        <Logo4>
                            <LogoImg4 src={logo4} alt="logo"/>
                        </Logo4>

                        <Up2>Let's Get You Back in..</Up2>

                        <FullName2 placeholder="Email" />

                        <FullName2 placeholder="Password" />

                        <Signupp2>Signin</Signupp2>


                        {/* <SignCover3></SignCover3> */}

                    </SignupForm2>
                </SignupRight2>

                <SignupLeft2>
                    <SignCover2></SignCover2>

                    <Our>

                        <Han>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                        </Han>
                        <Han>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                        </Han>
                        <Han>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                        </Han>
                        <Han>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                        </Han>
                        <Han>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                        </Han>
                        
                    </Our>

                </SignupLeft2>

                

        </Sign2>

    </div>
  )
}

export default Signin;

// const Foot = styled.div``;

// const Foot = styled.div``;

const Han = styled.div`
display: flex;
gap: 8px;
margin-bottom: 10px;
`;

const Hand = styled.div`
background: white;
height: 10px;
width: 10px;
border-radius: 50%;
`;

const Our = styled.div`
position: absolute;
right: 70px;
top: 50px;
// z-index: 100;
animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
`;

const Signupp2 = styled.button`
width: 93%;
height: 40px;
border-radius: 5px;
font-weight: 600;
background-color: #1c15e7;
border: none;
color: white;
cursor: pointer;
padding: 7px;

&:hover{
    background: transparent;
    border: 1px solid #1c15e7;
    color: #1c15e7;
}

animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
`;

const FullName2 = styled.input`
width: 90%;
height: 35px;
padding-left: 5px;
outline: none;
border: none;
border-bottom: 2px solid #1c15e7;
border-radius: 7px;
// background: transparent;
`;

const Up2 = styled.div`
margin: 0;
font-size: 17px;
font-weight: 600;
background: #1c15e7;
color: white;
padding: 10px 15px;
border-radius: 5px;

@media screen and (max-width: 375px) {
    font-size: 15px;
}
`;

const LogoImg4 = styled.img`
width: 140%;
`;

const Logo4 = styled.div`
width: 100px;
height: 100px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
overflow: hidden;
animation: spin 3s linear infinite;

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

const SignupForm2 = styled.form`
width: 350px;
height: 470px;
padding: 10px;
// box-shadow: 0 0 3px gray;
border-radius: 7px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;

@media screen and (max-width: 768px) {
        background: white;
        opacity: 0.8;
        z-index: 20;
    }

@media screen and (max-width: 425px) {
        width: 300px;
    }

@media screen and (max-width: 375px) {        
        width: 290px;
    }

@media screen and (max-width: 320px) {
        width: 250px;
    }
`;

const SignupRight2 = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
    width: 100%;
    background-image: url(${signupImg});
    background-size: cover;
    background-position: center;
    backdrop-filter: blur(5px);
}
`;

const SignCover2 = styled.div`
width: 100%;
height: 100%;
// top: 0;
// left: 0;
background-color: black;
opacity: 0.5;
position: absolute;
`;

const SignupLeft2 = styled.div`
width: 50%;
height: 100%;
background-image: url(${signupImg});
background-size: cover;
background-position: center;
position: relative;

@media screen and (max-width: 768px) {
    display: none;
}
`;

const Sign2 = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: space-between;
align-items: center;
overflow: hidden;

@media screen and (max-width: 768px) {
    height: 100vh;
    justify-content: center;
}
`;