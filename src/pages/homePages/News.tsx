// import React from 'react'


import { styled } from "styled-components";
import { BiNews } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NewsCard } from "../../components";
import image1 from "../../assets/images/Lagos.jpg"
import image2 from "../../assets/images/Lagos2.jpg"
import image3 from "../../assets/images/LagosDinner.jpg"
import image4 from "../../assets/Jpegs/idanre2.jpeg"
// import image5 from "../../assets/Jpegs/opti3.jpg"
 


const News = () => {

  
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  rtl: true,
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

        <New>
            <NewsHold>

              <Article>
                <i>News and Articles 
                <span>  <BiNews /> </span>
                </i>
              </Article>

              <NeCard>

                <Slider {...settings}>

                  <NewsCard 
                      newsImage={image1}
                      headline="iSTGTH takes August Outreach to Lagos."
                      details="The Foundation will be taking her humanity outreach to Lagos, this August... "
                      date="12 Jul, 2023"
                      time="10:22am"
                      location="Lagos"
                  />

                  <NewsCard 
                      newsImage={image3}
                      headline="iSTGTH celebrates 5 year of Giving."
                      details="The Royalty Dinner which celebtates 5 years of giving to humanity, will be held in Lagos,on Saturday, August 26th 2023..."
                      date="01 Aug, 2023"
                      time="04:03pm"
                      location="Lagos"
                  />

                  <NewsCard 
                      newsImage={image2}
                      headline="Basic Education and Literacy Project"
                      details="iSTGTH collaborates with Rotary E-Club of One Nigeria and CREATE HOPE in the WORLD, for the August Humanity Outreach at SOS Children Village, Isolo, Lagos..."
                      date="06 Aug, 2023"
                      time="11:47am"
                      location="Lagos"
                  />

                  {/* <NewsCard 
                      newsImage={image1}
                      headline="iSTGTH celebrates 5 year of Giving."
                      details="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis placeat aut maiores vero laboriosam numquam tempora mollitia ullam cum. Assumenda in reprehenderit distinctio quibusdam odit."
                      date="12 Jul, 2023"
                      time="10:22am"
                      location="Lagos"
                  /> */}

                  <NewsCard 
                      newsImage={image4}
                      headline="iSTGTH visit the historical Idanre Hills."
                      details="The members of the Foundation enjoyed some fun time during a recent visit to the historical Idanre Hill, Idanre, Ondo State..."
                      date="10 Jun, 2023"
                      time="02:33pm"
                      location="Ondo"
                  />

                </Slider>

              </NeCard>

            </NewsHold>
        </New>

    </div>
  )
}

export default News;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

const NeCard = styled.div`
width: 100%;
`;

const Article = styled.div`
font-size: 35px;
font-weight: 600;
color: orange;
// margin-top: 35px;
margin-bottom: 30px;
display: flex;
align-items: center;
justify-content: center;

span{
  font-size: 55px;
}

@media screen and (max-width: 768px) {
  font-size: 30px;

  span{
    font-size: 45px;
  }
}

@media screen and (max-width: 425px) {
  font-size: 25px;
  margin-top: 10px;

  span{
    font-size: 35px;
  }
}

@media screen and (max-width: 375px) {
  font-size: 18px;

  span{
    font-size: 25px;
  }
}
`;

const NewsHold = styled.div`
width: 90%;
display: flex;
flex-direction: column;
justify-content: center;
`;

const New = styled.div`
width: 100%;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
padding-bottom: 30px;
padding-top: 30px;
overflow: hidden;

@media screen and (max-width: 500px) {
  height: 70vh;
  padding-top: 30px;
  padding-bottom: 30px;
}

@media screen and (max-width: 400px) {
  height: 75vh;
  padding-top: 40px;
  padding-bottom: 40px;
}
`;