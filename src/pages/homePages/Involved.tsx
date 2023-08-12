// import React from 'react'

import { styled } from "styled-components";
import invImage from "../../assets/Jpegs/opti3.jpg";
import { Link } from "react-router-dom";


const Involved = () => {
  return (
    <>

        <Inv>
            <InvHold>
                
                <InvLeft>
                    <LeftStroke></LeftStroke>

                    <InvImg src={invImage} />
                </InvLeft>
                
                <InvRight>
                    <Stand>iStandToGiveToHumanity</Stand>

                    <Goal>
                        Our Goal is to be that Helping Hand
                    </Goal>

                    <Goals>Our goal is aim at tackling specific social, economic, environmental, or humanitarian issues. One of our primary goal is to make a positive impact on these issues and bring about meaningful change in society.
                    </Goals>

                    <Link style={{ textDecoration: "none" }} to={"/signup"}><InButton>Get Involved</InButton></Link>

                </InvRight>

            </InvHold>
        </Inv>

    </>
  )
}

export default Involved;

// const Head = styled.div``;

// const Head = styled.div``;

const InButton = styled.button`
// background: orange;
background: #1c15e7;
padding: 15px 25px;
border: none;
border-radius: 5px;
margin-top: 20px;
color: white;
font-weight: 700;
cursor: pointer;
`;

const Goals = styled.h6`
font-size: 15px;
margin: 0px;

@media screen and (max-width: 768px) {
    text-align: center;
}

@media screen and (max-width: 425px) {
    font-size: 13px;
}

@media screen and (max-width: 375px) {
    font-size: 11px;
}
`;

const Goal = styled.h4`
font-size: 35px;
width: 80%;
line-height: 40px;
margin: 0px;
margin-top: 20px;
margin-bottom: 20px;

@media screen and (max-width: 768px) {
    text-align: center;
}

@media screen and (max-width: 425px) {
    font-size: 28px;
}

@media screen and (max-width: 375px) {
    font-size: 24px;
    line-height: 30px;
}
`;

const Stand = styled.h5`
font-size: 20px;
margin: 0px;
// color: #1c15e7;
color: orange;

@media screen and (max-width: 425px) {
    font-size: 17px;
}

@media screen and (max-width: 375px) {
    font-size: 14px;
}
`;

const InvRight = styled.div`
width: 50%;

@media screen and (max-width: 768px) {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

const LeftStroke = styled.div`
width: 18px;
height: 200px;
background: #1c15e7;
border-radius: 10px;

@media screen and (max-width: 500px) {
    width: 16px;
    height: 150px;
}

@media screen and (max-width: 320px) {
    width: 14px;
    height: 120px;
}
`;

const InvImg = styled.img`
width: 80%;
opacity: 0.8;
// border-bottom: 4px solid #1c15e7;
// border-right: 4px solid #1c15e7;
border-radius: 25px;

@media screen and (max-width: 500px) {
    width: 85%;
}

@media screen and (max-width: 425px) {
    width: 90%;
}
`;

const InvLeft = styled.div`
width: 50%;
display: flex;
gap: 2rem;

@media screen and (max-width: 768px) {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

@media screen and (max-width: 425px) {
    gap: 1rem;
}
`;

const InvHold = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media screen and (max-width: 768px) {
  flex-direction: column-reverse;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 40px;
}
`;

const Inv = styled.div`
width: 100%;
min-height: 70vh;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`;