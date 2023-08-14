// import React from 'react'

import styled from 'styled-components';
import { AiFillLinkedin } from 'react-icons/ai';
import brain1 from "../../assets/images/IMG-20230716-WA0032.jpg"


const Brain = () => {
    return(
        <Brains>

            <BrainHold>

            <BrainTop>
            <Behind>The Team</Behind>
            <Behind2>Meet some of our Partners</Behind2>
            </BrainTop> 


            <BrainDown>

            <BrainBox>
                <BrainImg src={brain1} alt="tobi" />
                <Ada>Hussien Oluwatobi</Ada>
                <Manager>Convener</Manager>
                <Icon>
                    <AiFillLinkedin />
                </Icon>
            </BrainBox>

            <BrainBox>
            <BrainImg src={brain1} alt="tobi" />
            <Ada>Oluwatobi</Ada>
            <Manager>Secretary</Manager>
            <Icon>
                <AiFillLinkedin />
            </Icon>
            </BrainBox>

            <BrainBox>
            <BrainImg src={brain1} alt="tobi"  />
            <Ada>Mark</Ada>
            <Manager>Project Coordinator</Manager>
            <Icon>
                <AiFillLinkedin />
            </Icon>
            </BrainBox>

            <BrainBox>
            <BrainImg src={brain1} alt="tobi" />
            <Ada>Ohiz</Ada>
            <Manager>Editorial Lead</Manager>
            <Icon>
                <AiFillLinkedin />
            </Icon>
            </BrainBox>

            <BrainBox>
            <BrainImg src={brain1} alt="tobi"  />
            <Ada>Tsmaliz</Ada>
            <Manager>Visual Designer</Manager>
            <Icon>
                <AiFillLinkedin />
            </Icon>
            </BrainBox>

            <BrainBox>
            <BrainImg src={brain1} alt="tobi"  />
            <Ada>Habeeb</Ada>
            <Manager>Brand Manager</Manager>
            <Icon>
                <AiFillLinkedin />
            </Icon>
            </BrainBox>

            </BrainDown>               

            </BrainHold>
        
        </Brains>
    )
}

export default Brain;

const Brains = styled.div`
width:100%;
min-height:120vh;
display:flex;
justify-content:center;
align-items:center;
padding-bottom: 30px;

// @media screen and (max-width: 425px) {
//     height: 90vh;
// };

// @media screen and (max-width: 425px) {
//     height: 80vh;
// };
`;

const BrainHold = styled.div`
width:90%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;


@media screen and (max-width: 425px) {
    width:95%;
};`;

const BrainTop = styled.div`
width:100%;
height:12%;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;
margin-bottom:15px;

@media screen and (max-width: 320px) {
    margin-bottom:5px;
    margin-top:-20px;
};`;

const Behind = styled.div`
font-size:33px;
font-weight:600;

@media screen and (max-width: 425px) {
    font-size: 25px;
};

@media screen and (max-width: 320px) {
    font-size: 22px;
};`;

const Behind2 = styled.div`
font-size:20px;
font-weight:500;

@media screen and (max-width: 425px) {
    font-size: 15px;
};

@media screen and (max-width: 320px) {
    font-size: 13px;
    margin-bottom:10px;
};`;

const BrainDown = styled.div`
width: 90%;
// height:80%;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-items:center;

@media screen and (max-width: 600px) {
    justify-content: center;
};

@media screen and (max-width: 500px) {
    width: 100%;
};
`;

const BrainBox = styled.div`
width:250px;
height: 270px;
margin-bottom: 40px;
margin-top: 15px;

@media screen and (max-width: 768px) {
    margin-left: 50px;
};

@media screen and (max-width: 600px) {
    margin-bottom: 20px;
    margin-top: 10px;
};
`;

const BrainImg = styled.img`
width:80%;
height:80%;
border-radius:5px;

// @media screen and (max-width: 768px) {
//     width:80%;
//     height:60%;
// };

// @media screen and (max-width: 425px) {
//     width:93%;
//     height:60%;
// };
`;

const Ada = styled.div`
font-size:18px;
font-weight:600;

@media screen and (max-width: 768px) {
    font-size:15px;
};

@media screen and (max-width: 425px) {
    font-size:13px;
};

// @media screen and (max-width: 375px) {
//     font-size:11px;
// };
`;

const Manager = styled.div`
font-size:17px;
color:#B4B4B4;

@media screen and (max-width: 768px) {
    font-size:13px;
};

// @media screen and (max-width: 425px) {
//     font-size:10px;
// };

// @media screen and (max-width: 375px) {
//     font-size:8px;
// };`;

const Icon = styled.div`
font-size:20px;

@media screen and (max-width: 425px) {
    font-size:15px;
};`;