// import React from 'react'

import styled from 'styled-components';
import { AiFillLinkedin } from 'react-icons/ai';
// import brain1 from "../../assets/images/IMG-20230716-WA0032.jpg";
import avatar from "../../assets/Jpegs/avatar.jpg"
// import RevealOnScroll from '../../components/static/onScroll/RevealOnScroll';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Brain = () => {

    
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 1,
  rtl: true,
  responsive: [
    {
    breakpoint: 1000,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    },
      {
      breakpoint: 770,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
      }
      },
      {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
      },
      {
          breakpoint: 475,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      }
  ]
};

    return(
        <>
        {/* <RevealOnScroll> */}

        <Brains>

            <BrainHold>

            <BrainTop>
            <Behind>The Team</Behind>
            <Behind2>Meet some of our Partners</Behind2>
            </BrainTop> 


            <BrainDown>

                <Slider {...settings} >

                    <BrainBox>
                        <BrainImg src={avatar} alt="tobi" />
                        <Ada>Hussien Oluwatobi</Ada>
                        <Manager>Convener</Manager>
                        <Icon>
                            <AiFillLinkedin />
                        </Icon>
                    </BrainBox>

                    <BrainBox>
                    <BrainImg src={avatar} alt="tobi" />
                    <Ada>iSTGACF</Ada>
                    <Manager>Secretary</Manager>
                    <Icon>
                        <AiFillLinkedin />
                    </Icon>
                    </BrainBox>

                    <BrainBox>
                    <BrainImg src={avatar} alt="tobi"  />
                    <Ada>iSTGACF</Ada>
                    <Manager>Project Coordinator</Manager>
                    <Icon>
                        <AiFillLinkedin />
                    </Icon>
                    </BrainBox>

                    <BrainBox>
                    <BrainImg src={avatar} alt="tobi" />
                    <Ada>iSTGACF</Ada>
                    <Manager>Editorial Lead</Manager>
                    <Icon>
                        <AiFillLinkedin />
                    </Icon>
                    </BrainBox>

                    <BrainBox>
                    <BrainImg src={avatar} alt="tobi"  />
                    <Ada>iSTGACF</Ada>
                    <Manager>Visual Designer</Manager>
                    <Icon>
                        <AiFillLinkedin />
                    </Icon>
                    </BrainBox>

                    <BrainBox>
                    <BrainImg src={avatar} alt="tobi"  />
                    <Ada>iSTGACF</Ada>
                    <Manager>Public Media Personnel</Manager>
                    <Icon>
                        <AiFillLinkedin />
                    </Icon>
                    </BrainBox>

                </Slider>

            </BrainDown>               

            </BrainHold>
        
        </Brains>

        {/* </RevealOnScroll> */}
        </>
    )
}

export default Brain;

const Brains = styled.div`
width:100%;
height:70vh;
display:flex;
justify-content:center;
align-items:center;
padding-bottom: 30px;
overflow: hidden;

// @media screen and (max-width: 800px) {
//     min-height: 120vh;
// };

// @media screen and (max-width: 425px) {
//     // height: 80vh;
// };
`;

const BrainHold = styled.div`
width:85%;
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
width: 100%;
margin-top: 30px;
margin-left: 70px;
// display:flex;
// justify-content:space-between;
// align-items:center;

// @media screen and (max-width: 600px) {
//     justify-content: center;
// };

@media screen and (max-width: 500px) {
    width: 100%;
    margin-left: 220px;
};

@media screen and (max-width: 400px) {
    width: 100%;
    margin-left: 170px;
};

@media screen and (max-width: 325px) {
    width: 100%;
    margin-left: 120px;
};
`;

const BrainBox = styled.div`
width:200px;
height: 220px;
margin-bottom: 40px;
// margin-top: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

// @media screen and (max-width: 800px) {
//     margin-left: 50px;
//     width: 230px;
//     height: 250px;
// };

// @media screen and (max-width: 600px) {
//     margin-bottom: 20px;
//     margin-top: 10px;
// };
`;

const BrainImg = styled.img`
width:190px;
height:190px;
// border-radius:5px;
border-radius:50%;
border: 1px solid gray;
box-shadow: 0 0 3px gray;
margin-bottom: 10px;

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
text-align: center;

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
text-align: center;

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
text-align: center;

@media screen and (max-width: 425px) {
    font-size:15px;
};`;