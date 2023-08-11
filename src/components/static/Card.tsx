// import React from 'react'

import { styled } from "styled-components";
// import cardImage from "../../assets/Jpegs/opti1.jpg"

export interface ProjectCards {
    image?: string;
    projectPlace?: string;
    projectDes?: string;
}

const Card:React.FC<ProjectCards> = ({image, projectPlace, projectDes}) => {

  return (
    <div>
        <CardHold>
            <CardIcon>
                <CardImg src={image} />
            </CardIcon>

            <CardWord>
                {/* Visitation To Orphanage Home, Ado-Ekiti */}
                {projectPlace}
            </CardWord>

            <CardText>
                {/* The organization and her Partners.paid a visit to an Ophhanage in Ado-Ekiti. Food, writing materials, clothes and lots of other gift were shared, which put a smile on the faces of the children. */}
                {projectDes}
            </CardText>

        </CardHold>
    </div>
  )
}

export default Card;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

const CardImg = styled.img`
width: 105%;
height: 100%;
`;

const CardText = styled.h6`
width: 80%;
text-align: center;
margin: 0;
margin-top: 10px;
margin-bottom: 20px;
font-weight: 500;
`;

const CardWord = styled.h4`
width: 85%;
text-align: center;
font-size: 20px;
margin: 0;
color: #1c15e7;
line-height: 22px;
margin-top: 10px;
`;

const CardIcon = styled.div`
width: 100%;
height: 60%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`;

const CardHold = styled.div`
width: 280px;
height: 370px;
background: white;
border-radius: 10px;
box-shadow: 2px 0px 8px gray;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
overflow: hidden;
margin-left: 15px;
margin-bottom: 8px;

@media screen and (max-width: 768px) {
  margin-left: 40px;
}

@media screen and (max-width: 475px) {
  margin-left: 50px;
}

@media screen and (max-width: 375px) {
  margin-left: 20px;
}

@media screen and (max-width: 320px) {
  margin-left: 4px;
}
`;