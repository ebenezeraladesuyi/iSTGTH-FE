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

                <Image src={newsImage} />

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

                <Read href="">Read more <BsArrowRightShort /></Read>

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
  `;
  
  const Image = styled.img`
  width: 100%;
  height: 300px;
  position: absolute;
  top:0;
  left: 0;
  `;
  
  const Loc = styled.div`
  font-size: 12px;
  color:
  `;
  
  const DateIcon = styled.div`
  font-size: 15px;
  color: orange;
  `;
  
  const Dater = styled.div`
  display: flex;
  align: items: center;
  gap: 3px;
  `;
  
  const Timer = styled.div`
  width: 90%;
  display: flex;
  gap: 8px;
  align-items: center;
  `;
  
  const NewInfo = styled.div`
  font-size: 14px;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 400;
  text-align: justify;
  color: #1c15e7;
  `;
  
  const Latest = styled.div`
  background-color: orange;
  z-index: 10;
  width: 90px;
  height: 30px;
  border-radius: 15px;
  margin-left: 20px; 
  margin-bottom: 7px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  `;
  
  const Headline = styled.div`
  color: white;
  z-index: 10;
  font-size: 20px;
  font-weight: 700;
  width: 80%;
  margin-left: 20px;
  margin-bottom: 15px;
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
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  `;
  
  const Card = styled.div`
  width: 350px;
  height: 500px;
//   box-shadow: 0 0 4px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 35px;
  `;