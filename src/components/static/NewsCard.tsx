// import { useState } from 'react'
import { styled } from "styled-components";
// import newsImage from "../../assets/Jpegs/opti3.jpg";
import { SlCalender } from "react-icons/sl";
import { AiOutlineFieldTime } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsArrowRightShort } from "react-icons/bs"


export interface newsProps {
    newsImage: string
    headline : string;
    details: string;
    date: string;
    time: string;
    location: string;
}

const NewsCard:React.FC<newsProps> = ({ newsImage, headline, details, date, time, location }) => {

    // const Datee : any =  Date()

    // const today = () => {
    //     const day : any = new Date().getTime();

    //     return day;
    // }

    // const [back, setBack] = useState(false)

    // const image = () => {
    //     setBack(true)
    // }


    return (
      <div>

        <Card>

            <CardImgs
            //   bgImage={newsImage}
            
            >
                {/* <CardImg src="" /> */}

                {/* <Image> */}
                    <Imag src={newsImage} />
                {/* </Image> */}

                <Blac></Blac>

                <Latest>Latest</Latest>

                <Headline>
                    {/* iSTGTH celebrates 5 year of Giving. */}
                    {headline}
                </Headline>
            </CardImgs>

            <NewInfo>
                {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis placeat aut maiores vero laboriosam numquam tempora mollitia ullam cum. Assumenda in reprehenderit distinctio quibusdam odit. */}
                {details}
            </NewInfo>

            <Timer>

                <Dater>
                    <DateIcon>
                       <SlCalender />
                    </DateIcon>

                    <Loc>
                        {date}
                    </Loc>
                </Dater>

                <Dater>
                    <DateIcon>
                       <AiOutlineFieldTime />
                    </DateIcon>

                    <Loc>
                        {time}
                    </Loc>
                </Dater>

                <Dater>
                    <DateIcon>
                       <CiLocationOn />
                    </DateIcon>

                    <Loc>
                        {location}
                    </Loc>
                </Dater>

                <Read href="https://www.facebook.com/istandtogivetohumanity">Read more <BsArrowRightShort /></Read>

            </Timer>

            

        </Card>

      </div>
    )
  }
  
  export default NewsCard;
  
  const Read = styled.a`
  text-align: right;
  font-size: 11px;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 3px;
  margin-left: 10px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 320px) {
    margin-left: 5px;
  }
  `;

  const Imag = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left: 0;
  `;
  
//   const Image = styled.div`
//   width: 100%;
//   height: 100%;
// //   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   top:0;
//   left: 0;
//   `;
  
  const Loc = styled.div`
  font-size: 11px;

  @media screen and (max-width: 768px) {
    font-size: 9px;
  }
  `;
  
  const DateIcon = styled.div`
  font-size: 15px;
  color: orange;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
  `;
  
  const Dater = styled.div`
  display: flex;
  align: items: center;
  gap: 3px;

  @media screen and (max-width: 320px) {
    gap: 2px;
  }
  `;
  
  const Timer = styled.div`
  width: 90%;
  display: flex;
  gap: 8px;
  align-items: center;

  @media screen and (max-width: 768px) {
    gap: 5px;
  }

//   @media screen and (max-width: 320px) {
//     gap: 5px;
//   }
  `;
  
  const NewInfo = styled.div`
  font-size: 14px;
  width: 90%;
  height: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 400;
  text-align: justify;
  color: #1c15e7;

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
  `;
  
  const Latest = styled.div`
  background-color: orange;
  z-index: 10;
  width: 90px;
  height: 30px;
  border-radius: 15px;
  position: absolute;
  left: 20px; 
  bottom: 80px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;

  @media screen and (max-width: 320px) {
    bottom: 60px;
    font-size: 12px;
    width: 80px;
    height: 30px;
  }
  `;
  
  const Headline = styled.div`
  color: white;
  z-index: 10;
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  width: 80%;
  left: 20px;
  bottom: 15px;

  @media screen and (max-width: 320px) {
    font-size: 17px;
  }
  `;
  
  const Blac = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: linear-gradient(to top, #000000 15%, transparent);
  `;
  
  const CardImgs = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  `;
  
  const Card = styled.div`
  width: 350px;
  height: 500px;
//   box-shadow: 0 0 4px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 35px;

  @media screen and (max-width: 768px) {
    width: 320px;
    margin-left: 15px;
  }

  @media screen and (max-width: 500px) {
    width: 320px;
    margin-left: 25px;
  }

  @media screen and (max-width: 425px) {
    width: 320px;
    margin-left: 27px;
  }

  @media screen and (max-width: 375px) {
    width:  320px;
    margin-left: 5px;
  }

  @media screen and (max-width: 320px) {
    width:  270px;
    height: 400px;
    margin-bottom: 55px;
  }
  `;