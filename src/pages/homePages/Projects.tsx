// import React from 'react'

import { styled } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../../components";
import cardImage from "../../assets/Jpegs/opti1.jpg";
import cardImage2 from "../../assets/Jpegs/idanre3.jpeg";
import cardImage3 from "../../assets/Jpegs/p1000-2.jpg";
import cardImage4 from "../../assets/Jpegs/p1000.jpg";
// import cardImage5 from "../../assets/Jpegs/opti1.jpg";
// import cardImage6 from "../../assets/Jpegs/opti1.jpg";


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
                           image={cardImage}
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
                               image={cardImage}
                               projectPlace="Visitation To Orphanage Home, Ado-Ekiti"
                               projectDes="The organization and her Partners.paid a visit to an Ophhanage in Ado-Ekiti. Food, writing materials, clothes and lots of other gift were shared, which put a smile on the faces of the children."
                              />

                              <Card
                                image={cardImage4}
                                projectPlace="Visitation To Orphanage Home, Ado-Ekiti"
                                projectDes="The organization and her Partners.paid a visit to an Ophhanage in Ado-Ekiti. Food, writing materials, clothes and lots of other gift were shared, which put a smile on the faces of the children."
                               />

                    </Slider>

                </Slide>

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
`;