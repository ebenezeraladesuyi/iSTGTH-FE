// import React from 'react'

import { styled } from "styled-components";
import { AiOutlineProject } from "react-icons/ai"
import { GiReceiveMoney } from "react-icons/gi"
import { MdOutlineVolunteerActivism } from "react-icons/md"
import { IoIosPeople } from "react-icons/io"

const Record = () => {

  return (
    <div>

        <Rec>

            <RecHold>

                <Total>
                    <Icon>
                        <AiOutlineProject />
                    </Icon>

                    <Number>50+</Number>

                    <Pros>Total Projects</Pros>
                </Total>

<Total>
    <Icon>
        <GiReceiveMoney />
    </Icon>

    <Number>N1,000,000+</Number>

    <Pros>Raised Funds</Pros>
</Total>

<Total>
    <Icon>
        <MdOutlineVolunteerActivism />
    </Icon>

    <Number>100+</Number>

    <Pros>Satisfied Donors</Pros>
</Total>

<Total>
    <Icon>
        <IoIosPeople />
    </Icon>

    <Number>1000+</Number>

    <Pros>Happy Beneficiaries</Pros>
</Total>

            </RecHold>

        </Rec>

    </div>
  )
}

export default Record;

// const Head = styled.div``;

// const Head = styled.div``;

const Pros = styled.div`
font-size: 20px;
font-weight: 700;
`;

const Number = styled.div`
font-size: 35px;
font-weight: 700;
`;

const Icon = styled.div`
font-size: 50px;
font-weight: 700;
`;

const Total = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const RecHold = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
color: white;
`;

const Rec = styled.div`
width: 100%;
min-height: 40vh;
background-image: linear-gradient(120deg, #000000, #1c15e7);
display: flex;
justify-content: center;
align-items: center;
`;