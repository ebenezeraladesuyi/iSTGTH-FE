// import React from 'react'

import { styled } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../../components";
import cardImage1 from "../../assets/images/IMG-20230716-WA0122.jpg";
import cardImage2 from "../../assets/images/IMG-20230716-WA0028.jpg";
import cardImage3 from "../../assets/images/IMG-20230716-WA0042.jpg";
import cardImage4 from "../../assets/images/IMG-20230716-WA0036.jpg";
import cardImage5 from "../../assets/images/IMG-20230716-WA0074.jpg";
import cardImage6 from "../../assets/images/IMG-20230716-WA0113.jpg";


const Projects = () => {

    
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
        breakpoint: 1000,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        },
          {
          breakpoint: 770,
          settings: {
              slidesToShow: 2,
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


  return (
    <div>
        <Pro>

            <ProHold>

                <Some>Some of Our Projects Over the Years...</Some>

                <Slide>

                    <Slider {...settings}>

                         <Card
                           image={cardImage1}
                           projectPlace="Visitation To Orphanage Home, Ado-Ekiti"
                           projectDes="The organization and her Partners.paid a visit to an Ophhanage in Ado-Ekiti. Food, writing materials, clothes and lots of other gift were shared, which put a smile on the faces of the children."
                          />

                          <Card
                            image={cardImage3}
                            projectPlace="Visitation To Orphanage Home, Ado-Ekiti"
                            projectDes="The organization and her Partners.paid a visit to an Ophhanage in Ado-Ekiti. Food, writing materials, clothes and lots of other gift were shared, which put a smile on the faces of the children."
                           />

                           <Card
                             image={cardImage4}
                             projectPlace="Visitation To Orphanage Home, Ado-Ekiti"
                             projectDes="The organization and her Partners.paid a visit to an Ophhanage in Ado-Ekiti. Food, writing materials, clothes and lots of other gift were shared, which put a smile on the faces of the children."
                            />

                            <Card
                              image={cardImage2}
                              projectPlace="Visitation To Orphanage Home, Ado-Ekiti"
                              projectDes="The organization and her Partners.paid a visit to an Ophhanage in Ado-Ekiti. Food, writing materials, clothes and lots of other gift were shared, which put a smile on the faces of the children."
                             />

                             <Card
                               image={cardImage5}
                               projectPlace="Visitation To Orphanage Home, Ado-Ekiti"
                               projectDes="The organization and her Partners.paid a visit to an Ophhanage in Ado-Ekiti. Food, writing materials, clothes and lots of other gift were shared, which put a smile on the faces of the children."
                              />

                              <Card
                                image={cardImage6}
                                projectPlace="Visitation To Orphanage Home, Ado-Ekiti"
                                projectDes="The organization and her Partners.paid a visit to an Ophhanage in Ado-Ekiti. Food, writing materials, clothes and lots of other gift were shared, which put a smile on the faces of the children."
                               />

                               {/* <Card
                                 image={cardImage5}
                                 projectPlace="Visitation To Orphanage Home, Ado-Ekiti"
                                 projectDes="The organization and her Partners.paid a visit to an Ophhanage in Ado-Ekiti. Food, writing materials, clothes and lots of other gift were shared, which put a smile on the faces of the children."
                                /> */}

                                {/* <Card
                                  image={cardImage4}
                                  projectPlace="Visitation To Orphanage Home, Ado-Ekiti"
                                  projectDes="The organization and her Partners.paid a visit to an Ophhanage in Ado-Ekiti. Food, writing materials, clothes and lots of other gift were shared, which put a smile on the faces of the children."
                                 /> */}

                    </Slider>

                </Slide>

                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"10px"}}>
                    <div></div>
                    <a style={{cursor:"pointer", fontSize:"12px", textDecoration:"none", fontWeight:"700", border:"1px solid #1c15e7", padding:"7px", borderRadius:"5px"}} href="https://www/facebook.com/istandtogivetohumanity">See more Projects...</a>
                </div>

            </ProHold>

        </Pro>
    </div>
  )
}

export default Projects;

// const Head = styled.div``;

// const Head = styled.div``;

const Slide = styled.div`
width: 100%;

@media screen and (max-width: 768px) {
  // margin-left: 10px;
}

// @media screen and (max-width: 475px) {
//   margin-left: 35px;
// }

// @media screen and (max-width: 375px) {
//   margin-left: 20px;
// }

// @media screen and (max-width: 320px) {
//   gap: 5rem;
// }
`;

const Some = styled.div`
font-size: 20px;
font-weight: 700;
color: orange;
margin-bottom: 35px;

@media screen and (max-width: 768px) {
  text-align: center;
}

@media screen and (max-width: 768px) {
  font-size: 16px;
}
`;

const ProHold = styled.div`
width: 90%;
display: flex;
flex-direction: column;
justify-content: space-between;
// align-items: center;

// @media screen and (max-width: 768px) {
//   width: 80%;
// }

// @media screen and (max-width: 320px) {
//   width: 95%;
// }
`;

const Pro = styled.div`
width: 100%;
height: 80vh;
display: flex;
justify-content: center;
align-items: center;
background: #f8fffe;
overflow: hidden;

@media screen and (max-width: 500px) {
  height: 65vh;
  padding-top: 30px;
  padding-bottom: 30px;
}
`;