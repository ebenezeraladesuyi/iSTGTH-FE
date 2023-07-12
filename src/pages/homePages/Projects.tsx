// import React from 'react'

import { styled } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../../components";
import cardImage from "../../assets/Jpegs/opti1.jpg";


const Projects = () => {

    
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 1,
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
                            image={cardImage}
                            projectPlace="Visitation To Orphanage Home, Ado-Ekiti"
                            projectDes="The organization and her Partners.paid a visit to an Ophhanage in Ado-Ekiti. Food, writing materials, clothes and lots of other gift were shared, which put a smile on the faces of the children."
                           />

                           <Card
                             image={cardImage}
                             projectPlace="Visitation To Orphanage Home, Ado-Ekiti"
                             projectDes="The organization and her Partners.paid a visit to an Ophhanage in Ado-Ekiti. Food, writing materials, clothes and lots of other gift were shared, which put a smile on the faces of the children."
                            />

                            <Card
                              image={cardImage}
                              projectPlace="Visitation To Orphanage Home, Ado-Ekiti"
                              projectDes="The organization and her Partners.paid a visit to an Ophhanage in Ado-Ekiti. Food, writing materials, clothes and lots of other gift were shared, which put a smile on the faces of the children."
                             />

                             <Card
                               image={cardImage}
                               projectPlace="Visitation To Orphanage Home, Ado-Ekiti"
                               projectDes="The organization and her Partners.paid a visit to an Ophhanage in Ado-Ekiti. Food, writing materials, clothes and lots of other gift were shared, which put a smile on the faces of the children."
                              />

                              <Card
                                image={cardImage}
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
`;

const Some = styled.div`
font-size: 20px;
font-weight: 700;
color: orange;
margin-bottom: 35px;
`;

const ProHold = styled.div`
width: 90%;
display: flex;
flex-direction: column;
justify-content: space-between;
// align-items: center;
`;

const Pro = styled.div`
width: 100%;
height: 80vh;
display: flex;
justify-content: center;
align-items: center;
background: #f8fffe;
`;