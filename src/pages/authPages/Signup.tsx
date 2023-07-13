// import React from 'react'

import { styled } from "styled-components";
import signupImg from "../../assets/Jpegs/p1000-4.jpg"
// import logo3 from "../../assets/Jpegs/optiLogo.jpg"


const Signup = () => {
  return (
    <div>

        <Sign>

                <SignupLeft>
                    <SignCover></SignCover>

                    {/* <Our>

                        <Hand>
                            Our Goal is to be that Helping Hand
                        </Hand>
                        
                    </Our> */}
                </SignupLeft>

                
                <SignupRight>
                    <SignupForm>
        
                        {/* <Logo3>
                            <LogoImg3 src={logo3} alt="logo"/>
                        </Logo3> */}

                        {/* <Up>Become a Member</Up> */}

                        <ImageHold>
                            <SignupImage />
                        </ImageHold>

                        <FullName placeholder="FullName" />

                        <FullName placeholder="Email" />

                        <FullName placeholder="Business Name" />

                        <FullName placeholder="Business Contact" />

                        <FullName placeholder="Create Password" />

                        <FullName placeholder="Confirm Password" />

                        <Signupp>Signup</Signupp>


                    </SignupForm>
                </SignupRight>

                

        </Sign>

    </div>
  )
}

export default Signup;

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

const Signupp = styled.button`
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

const FullName = styled.input`
width: 90%;
height: 35px;
padding-left: 5px;
outline: none;
border: none;
border-bottom: 2px solid #1c15e7;
border-radius: 7px;
`;

const SignupImage = styled.img`
width: 90%;
height: 90%;
border: 1ps solid #1c15e7;
border-radius: 50%;
`;

const ImageHold = styled.div`
width: 110px;
height: 110px;
border-radius: 50%;
border: 1px solid #1c15e7;
display: flex;
justify-content: center;
align-items: center;
`;

// const Up = styled.div`
// margin: 0;
// font-size: 15px;
// font-weight: 600;
// color: #1c15e7;
// `;

// const LogoImg3 = styled.img`
// width: 140%;
// `;

// const Logo3 = styled.div`
// width: 60px;
// height: 60px;
// background-color: white;
// display: flex;
// justify-content: center;
// align-items: center;
// border-radius: 50%;
// overflow: hidden;
// `;


const SignupForm = styled.form`
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

const SignupRight = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const SignCover = styled.div`
width: 100%;
height: 100%;
// top: 0;
// left: 0;
background-color: black;
opacity: 0.5;
position: absolute;
`;

const SignupLeft = styled.div`
width: 50%;
height: 100%;
background-image: url(${signupImg});
background-size: cover;
background-position: center;
position: relative;
`;

const Sign = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: space-between;
align-items: center;
`;