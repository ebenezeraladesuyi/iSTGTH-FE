// import React from 'react'

import { styled } from "styled-components";
import { BiNews } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NewsCard } from "../../components";
import image1 from "../../assets/Jpegs/opti3.jpg"
import image2 from "../../assets/Jpegs/idanra.jpg"
import image3 from "../../assets/Jpegs/p1000-5.jpg"
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
                      headline="iSTGTH celebrates 5 year of Giving."
                      details="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis placeat aut maiores vero laboriosam numquam tempora mollitia ullam cum. Assumenda in reprehenderit distinctio quibusdam odit."
                      date="12 Jul, 2023"
                      time="10:22am"
                      location="Lagos"
                  />

                  <NewsCard 
                      newsImage={image2}
                      headline="iSTGTH celebrates 5 year of Giving."
                      details="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis placeat aut maiores vero laboriosam numquam tempora mollitia ullam cum. Assumenda in reprehenderit distinctio quibusdam odit."
                      date="12 Jul, 2023"
                      time="10:22am"
                      location="Lagos"
                  />

                  <NewsCard 
                      newsImage={image3}
                      headline="iSTGTH celebrates 5 year of Giving."
                      details="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis placeat aut maiores vero laboriosam numquam tempora mollitia ullam cum. Assumenda in reprehenderit distinctio quibusdam odit."
                      date="12 Jul, 2023"
                      time="10:22am"
                      location="Lagos"
                  />

                  <NewsCard 
                      newsImage={image1}
                      headline="iSTGTH celebrates 5 year of Giving."
                      details="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis placeat aut maiores vero laboriosam numquam tempora mollitia ullam cum. Assumenda in reprehenderit distinctio quibusdam odit."
                      date="12 Jul, 2023"
                      time="10:22am"
                      location="Lagos"
                  />

                  <NewsCard 
                      newsImage={image4}
                      headline="iSTGTH celebrates 5 year of Giving."
                      details="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis placeat aut maiores vero laboriosam numquam tempora mollitia ullam cum. Assumenda in reprehenderit distinctio quibusdam odit."
                      date="12 Jul, 2023"
                      time="10:22am"
                      location="Lagos"
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