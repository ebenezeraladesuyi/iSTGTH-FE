// import React from 'react'

import styled from 'styled-components';


const Value = () => {
    return(
        <Values>

            <ValueHold>

                <ValueTop>
                    <Saving>The Values</Saving>

                    <Saving2>Empowering communities through compassion. Providing aid, education, healthcare, and hope. Join us in creating positive change. Together, we make a difference.</Saving2>
                </ValueTop>
                
                <ValueDown>

                    <Downbox>
                        {/* <DownImg src="/images/Passion.png" alt="" /> */}
                        <Pass>Passion</Pass>
                        <Ward>Empowering communities through our passionate commitment to humanitarian aid and positive change worldwide.</Ward>
                    </Downbox>

                    <Downbox>
                        {/* <DownImg src="/images/Delivery.png" alt="" /> */}
                        <Pass>Delivery</Pass>
                        <Ward>We have dedicated partners,  fostering hope, and making positive impact through compassionate delivery efforts.</Ward>
                    </Downbox>

                    <Downbox>
                        {/* <DownImg src="/images/Team.png" alt="" /> */}
                        <Pass>Team</Pass>
                        <Ward>Dedicated team of compassionate individuals united to bring positive change through humanitarian efforts.</Ward>
                    </Downbox>

                </ValueDown>

            </ValueHold>
        
        </Values>
    )
}

export default Value;

const Values = styled.div`
width:100%;
min-height:75vh;
display:flex;
justify-content:center;
align-items:center;
// background:#FAF7FD;
padding-top: 30px;

// @media screen and (max-width: 768px) {
//     height:110vh;
// };
`;

const ValueHold = styled.div`
width:85%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;`;

const ValueTop = styled.div`
width:100%;
height:13%;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;
margin-bottom:20px;

@media screen and (max-width: 768px) {
    margin-top: -20px;
};`;

const Saving = styled.div`
font-size:32px;
font-weight:600;
margin-bottom:15px;

@media screen and (max-width: 768px) {
    font-size:25px;
};

@media screen and (max-width: 425px) {
    font-size:20px;
    margin-bottom:10px;
    margin-top:15px;
};`;

const Saving2= styled.div`
font-size:20px;
font-weight:500;
width:90%;
text-align:center;

@media screen and (max-width: 768px) {
    font-size:18px;
};

@media screen and (max-width: 425px) {
    font-size:13px;
    margin-bottom: 15px;
};`;

const ValueDown = styled.div`
width:100%;
// height:80%;
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;

@media screen and (max-width: 768px) {
    justify-content:space-around;
};`;

const Downbox = styled.div`
border:2px solid #F1F3F6;
width:300px;
height:300px;
background:#FAF7FD;
display:flex;
justify-content:center;
align-items:center;flex-direction:column;

@media screen and (max-width: 768px) {
    width: 260px;
    height: 260px;
    margin-bottom: 40px;
};

@media screen and (max-width: 425px) {
    width: 240px;
    height: 240px;
};
`;

// const DownImg = styled.img`
// width:50px;
// height:50px;
// padding:5px;
// border-radius:50%;
// background:#F1F3F6;
// margin-bottom:20px;

// @media screen and (max-width: 768px) {
//     width:40px;
//     height:40px;
//     margin-bottom:10px;
// };

// @media screen and (max-width: 425px) {
//     width:28px;
//     height:28px;
// };`;

const Pass = styled.div`
font-size:24px;
font-weight:600;
margin-bottom:20px;

@media screen and (max-width: 768px) {
    margin-bottom:10px;
};

@media screen and (max-width: 425px) {
    font-size: 18px;
};`;

const Ward = styled.div`
font-size:17px;
width:60%;
text-align:center;
font-weight:400;

@media screen and (max-width: 768px) {
    width:75%;
    font-size:15px;
};

@media screen and (max-width: 425px) {
    width:80%;
    font-size:13px;
};`;