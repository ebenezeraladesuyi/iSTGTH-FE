// import React from 'react'

import { styled } from "styled-components";
import { ImLocation2 } from "react-icons/im"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdOutlineMail } from "react-icons/md";
import RevealOnScroll from "../../components/static/onScroll/RevealOnScroll";


const Contact = () => {
  return (
    <>
    <RevealOnScroll>

    <div id="contactus">

        <Con>

            <ConHold>

                <Get>Get in touch with us..</Get>

                <Quote>Mail, call, chat us for any question/discussion about the organization.</Quote>

                <Phone>

                    <PhoneIcon>
                        <ImLocation2 />
                        <span>SOD Suite, opp Adusco Bookshop, Ado-Ekiti, Ekiti State.</span>
                    </PhoneIcon>

                    <PhoneIcon>
                        <BsFillTelephoneFill />
                        <span>+234 816 733 5609</span>
                    </PhoneIcon>

                    <PhoneIcon>
                        <MdOutlineMail />
                        <span>istandtogivetohumanity@gmail.com</span>
                    </PhoneIcon>

                </Phone>

                <ContactForm>

                    <Please>Please, fill this form</Please>

                    <Name type="text" placeholder="Full Name" />

                    <Name type="email" placeholder="Email" />

                    <ConText placeholder="Write your feedback/suggestion." />

                    <Submit>Submit</Submit>

                </ContactForm>

            </ConHold>

        </Con>

    </div>

    </RevealOnScroll>
    </>
  )
}

export default Contact;

// const Con = styled.div``;

// const Con = styled.div``;

// const Con = styled.div``;

// const Con = styled.div``;

// const Con = styled.div``;

// const Con = styled.div``;

const Submit = styled.button`
width: 90%;
height: 40px;
border-radius: 5px;
font-weight: 600;
background-color: #1c15e7;
border: none;
color: white;
cursor: pointer;
padding: 7px;

&:hover{
    background: transparent;
    border: 1px solid #1c15e7;
    color: #1c15e7;
}
`;

const ConText = styled.textarea`
width: 88%;
height: 145px;
border-radius: 5px;
padding: 5px;
`;

const Please = styled.div`
font-size: 13px;
font-weight: 600;
`;

const Name = styled.input`
width: 88%;
height: 35px;
border-radius: 5px;
padding: 5px;
`;

const ContactForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 70%;
height: 330px;
box-shadow: 0 0 3px gray;
padding: 15px;
border-radius: 10px;
gap: 12px;
`;

const PhoneIcon = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 18px;
text-align: center;
width: 30%;
// margin-left: 7px;
color: orange;

span{
    font-size: 13px;
    color: black;
}

@media screen and (max-width: 768px) {
  width: 40%;
  gap: 5px;
}

@media screen and (max-width: 375px) {
  span{
      font-size: 10px;
  }
}
`;

const Phone = styled.div`
display: flex;
width: 80%;
justify-content: space-between;
flex-wrap: wrap;

@media screen and (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
}
`;

const Quote = styled.div`
font-size: 14px;
font-weight: 700;

@media screen and (max-width: 768px) {
  font-size: 12px;
  text-align: center;
}

@media screen and (max-width: 375px) {
  font-size: 10px;
  width: 80%;
}
`;

const Get = styled.div`
color: orange;
font-size: 25px;
font-weight: 600;

@media screen and (max-width: 768px) {
  font-size: 20px;
}

@media screen and (max-width: 375px) {
  font-size: 17px;
}
`;

const ConHold = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 1rem;

@media screen and (max-width: 600px) {
  width: 90%;
}

@media screen and (max-width: 600px) {
  width: 95%;
}
`;

const Con = styled.div`
width: 100%;
min-height: 95vh;
display: flex;
justify-content: center;
align-items: center;
// background-image: linear-gradient(100deg, #000000 15%, #1c15e7);
// background-color: #1c15e7;

// @media screen and (max-width: 768px) {
//   padding-top: 30px;
//   padding-bottom: 30px;
// }

// @media screen and (max-width: 500px) {
//   height: 70vh
// }
`;

