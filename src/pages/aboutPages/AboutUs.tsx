// import React from 'react'

import styled from 'styled-components';
import pic1 from "../../assets/images/IMG-20230716-WA0032.jpg";
import pic2 from "../../assets/images/IMG-20230716-WA0036.jpg";


const AboutUs = () => {
    return(
        <>

        <AboutHero>

            <AboutHold>
                <AboutLeft>
                    <Ipsu>About Us</Ipsu>
                    <Ipsu2>
                        MISSION : To restore 'HOPE' among vulnerable children, widows and communities that have been affected by poverty, abuse, violence, disease and other natural calamities. <br/><br/><br/>
                        VISION : Communities where children and their caregivers are empowered to impprove their own livelihood through appropriate and affordable alternatives. <br/><br/><br/>
                        VISION : Communities where children and their caregivers are empowered to impprove their own livelihood through appropriate and affordable alternatives.     
                    </Ipsu2>
                </AboutLeft>

                <AboutRight>

                    <Abt1>
                        <AboutLady  src={pic1} />
                    </Abt1>

                    <Abt2>
                        <AboutLady2  src={pic2} />
                    </Abt2>
                    
                    {/* <LadyBack></LadyBack> */}
                </AboutRight>

            </AboutHold>
        
        </AboutHero>
        
        </>
    )
}

export default AboutUs;

const Abt1 = styled.div`
width: 300px;
height: 300px;
border-left: 6px solid orange;
border-top: 6px solid orange;
border-bottom: 6px solid orange;
border-radius: 10px;
overflow: hidden;
position : absolute;
left: 20px;
bottom: -130px;
display: flex;
justify-content: center;
align-items: center;
`;

const Abt2 = styled.div`
width: 300px;
height: 300px;
border-right: 6px solid orange;
border-bottom: 6px solid orange;
border-left: 6px solid orange;
border-radius: 10px;
overflow: hidden;
position : absolute;
right: 30px;
top: -30px;
display: flex;
justify-content: center;
align-items: center;
`;

const AboutHero = styled.div`
width:100%;
min-height:85vh;
display:flex;
justify-content:center;
align-items:center;
background:#FAF7FD;
overflow:hidden;
background: rgba(6, 6, 6, 0.771);
padding-bottom: 30px;

@media screen and (max-width: 768px) {
    height:70vh;
  };
  
  @media screen and (max-width: 425px) {
    height:60vh;
  };
  `;

const AboutHold = styled.div`
width:85%;
height:100%;
display:flex;
justify-content:space-between;
align-items:center;`;

const AboutLeft = styled.div`
height:65%;
width:45%;
display:flex;
justify-content: space-between;
flex-direction:column;
 
@media screen and (max-width: 768px) {
    width:100%;
    margin-top:-30px;
  };
 
  @media screen and (max-width: 320px) {
      width:100%;
      margin-top:-55px;
    };`;

const Ipsu = styled.div`
font-size:30px;
font-weight:600;
color: rgba(214, 211, 211, 0.771);
margin-top: 50px;

@media screen and (max-width: 769px) {
    margin-top: 30px;
};

@media screen and (max-width: 425px) {
    font-size:20px;
    margin-top: 50px;
};

@media screen and (max-width: 320px) {
    font-size:17px;
};`;

const Ipsu2 = styled.div`
font-size:17px;
color: white;
width:75%;
text-align:justify;
margin-top: 20px;
 
@media screen and (max-width: 768px) {
    width:100%;
  };
 
@media screen and (max-width: 425px) {
      font-size:13px;
    };`;

const AboutRight = styled.div`
height:100%;
width:50%;
display:flex;
align-items:center;
position:relative;
 
@media screen and (max-width: 768px) {
    display:none;
  };`;

const AboutLady = styled.img`
width:155%;
`;

const AboutLady2 = styled.img`
width: 155%;
`;

// const LadyBack = styled.img`
// width:500px;
// height:200px;
// border-radius:110px 0 0 110px;
// position:absolute;
// background:#DFC5FE;
// top:60px;
// right:-120px;`;