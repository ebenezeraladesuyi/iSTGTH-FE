// import React from 'react'

import { styled } from "styled-components";
import bg1 from "../../assets/Jpegs/opti1.jpg";
import { FaDonate } from "react-icons/fa"


const Donate = () => {
  return (
    <div>
    <Herro2>

      <Blackk2></Blackk2>

      <HerroHold2>

        <Icon>
            <FaDonate />
        </Icon>

            <Support>
                WE'RE HERE TO SUPPORT THEM
            </Support>

        <Create2>
          <i>Fundraising for the  <span>People
          </span> and<br /> Causes you Care About</i>
        </Create2>

        <Button2>Donate</Button2> 

        <Ital>Coming Soon!!!</Ital>

      </HerroHold2>

    </Herro2>

    </div>
  )
}

export default Donate;

const Ital = styled.div`
    color: #cccaca;
    font-size: 10px;
    margin-top: 20px;
`;

const Icon = styled.div`
font-size: 60px;
color: white;
`;

const Support = styled.div`
font-size: 18px;
color: #cccaca;
margin-top: 15px;
margin-bottom: 15px;
`;

const Button2 = styled.button`
width: 200px;
height: 50px;
font-weight: 700;
border-radius: 25px;
margin-top: 30px;
// background: #1A395B;
background: transparent;
border: 2px solid #cccaca;
color: white;
cursor: pointer;

&:hover{
  border: none;
  background:  #1c15e7;
}
`;

const Create2 = styled.div`
font-size: 40px;
font-weight: 700;
color: white;
text-align: center;
`;

const HerroHold2 = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 10;
`;

// const Blackk = styled.div`
// position: absolute;
// width: 100px;
// height: 100px;
// background-color: black;
// opacity: 0.7;
// left: 0;
// top: 0;
// `;

const Blackk2 = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: black;
opacity: 0.8;
left: 0;
top: 0;
`;

const Herro2 = styled.div`
width: 100%;
min-height: 80vh;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${bg1});
background-size: cover;
position: relatiive;
overflow: hidden;
backdrop-filter: blur(5px);
`;