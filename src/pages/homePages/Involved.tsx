// import React from 'react'

import { styled } from "styled-components";
import invImage from "../../assets/Jpegs/opti3.jpg";


const Involved = () => {
  return (
    <div>

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

                    <Goals>Our gaol is aim at tackling specific social, economic, environmental, or humanitarian issues. One of our primary goal is to make a positive impact on these issues and bring about meaningful change in society.
                    </Goals>

                    <InButton>Get Involved</InButton>

                </InvRight>

            </InvHold>
        </Inv>

    </div>
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
`;

const Goal = styled.h4`
font-size: 35px;
width: 80%;
line-height: 40px;
margin: 0px;
margin-top: 20px;
margin-bottom: 20px;
`;

const Stand = styled.h5`
font-size: 20px;
margin: 0px;
// color: #1c15e7;
color: orange;
`;

const InvRight = styled.div`
width: 50%;
`;

const LeftStroke = styled.div`
width: 18px;
height: 200px;
background: #1c15e7;
border-radius: 10px;
`;

const InvImg = styled.img`
width: 80%;
opacity: 0.8;
// border-bottom: 4px solid #1c15e7;
// border-right: 4px solid #1c15e7;
border-radius: 25px;
`;

const InvLeft = styled.div`
width: 50%;
display: flex;
gap: 2rem;
`;

const InvHold = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Inv = styled.div`
widthL 100%;
min-height: 70vh;
display: flex;
justify-content: center;
align-items: center;
`;