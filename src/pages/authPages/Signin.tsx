// import React from 'react'

import { styled } from "styled-components";
import signupImg from "../../assets/Jpegs/p1000-3.jpg"
import logo4 from "../../assets/Jpegs/optiLogo.jpg"


const Signin = () => {
  return (
    <div>

        <Sign2>
                
                <SignupRight2>
                    <SignupForm2>
        
                        <Logo4>
                            <LogoImg4 src={logo4} alt="logo"/>
                        </Logo4>

                        <Up2>Signin</Up2>

                        <FullName2 placeholder="Email" />

                        <FullName2 placeholder="Create Password" />

                        <Signupp2>Signin</Signupp2>


                    </SignupForm2>
                </SignupRight2>

                <SignupLeft2>
                    <SignCover2></SignCover2>

                    {/* <Our>

                        <Hand>
                            Our Goal is to be that Helping Hand
                        </Hand>
                        
                    </Our> */}
                </SignupLeft2>

                

        </Sign2>

    </div>
  )
}

export default Signin;

// const Foot = styled.div``;

// const Foot = styled.div``;

// const Foot = styled.div``;

// const Hand = styled.div`
// color: white;
// font-size: 30px;
// z-index: 100;
// `;

// const Our = styled.div`
// z-index: 100;
// `;

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
`;

const FullName2 = styled.input`
width: 90%;
height: 35px;
padding-left: 5px;
outline: none;
border: none;
border-bottom: 2px solid #1c15e7;
border-radius: 7px;
`;

const Up2 = styled.div`
margin: 0;
font-size: 20px;
font-weight: 700;
color: #1c15e7;
`;

const LogoImg4 = styled.img`
width: 140%;
`;

const Logo4 = styled.div`
width: 60px;
height: 60px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
overflow: hidden;
`;

const SignupForm2 = styled.form`
width: 350px;
height: 650px;
padding: 10px;
// box-shadow: 0 0 3px gray;
border-radius: 7px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;
`;

const SignupRight2 = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
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
`;

const Sign2 = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: space-between;
align-items: center;
`;