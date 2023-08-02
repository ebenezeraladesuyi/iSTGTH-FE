import React from 'react'

import styled from "styled-components";
import member from "../../assets/Jpegs/optiLogo.jpg"
import { GetOneUser } from "../../utils/Apis";
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../../hooks/global/Store";


const Members = () => {

    const userOne = useAppSelector((state) => state?.currentUser)

    const { data } = useQuery({
        queryKey : ["post"],
        queryFn : () => GetOneUser(userOne?._id)
    })

    const getDetails = (_id : string | undefined) => {
        return data
        
    }

    const [storeData] = React.useState(getDetails)

    console.log(storeData)

  return (
    <div>

      <Member>

        <MemberHold>

          <MemberSearch>
            <MemSrch type="text" placeholder="Input Member's Name" />  

            <MemButton>Search</MemButton>    

          </MemberSearch>

          {storeData?.map((data: any) => (

            <MemberCard 
            key={data._id}
            >

            <Border></Border>

            <MemberPic src={member} />

            <MemberDetails>

                <MemberName>
                    <MemberEmail>Name</MemberEmail>
                    <MemberNames>Tobi Hussien</MemberNames>
                </MemberName> 

                <MemberName>
                    <MemberEmail>Email</MemberEmail>
                    <MemberNames>tobi@test.com</MemberNames>
                </MemberName> 

                <MemberName>
                    <MemberEmail>Business/Profession</MemberEmail>
                    <MemberNames>Volatic Services</MemberNames>
                </MemberName>  

                <MemberName>
                    <MemberEmail>Business Services</MemberEmail>
                    <MemberNames>Softwares</MemberNames>
                </MemberName>

                <MemberName>
                    <MemberEmail>Business Contact</MemberEmail>
                    <MemberNames>07056765683</MemberNames>
                </MemberName>

                <MemberName>
                    <MemberEmail>Membership Number</MemberEmail>
                    <MemberNames>34578</MemberNames>
                </MemberName> 
                                    
            </MemberDetails>


            </MemberCard> 
            
            ))} 

             

        </MemberHold>

      </Member>

    </div>
  )
}

export default Members;

// const Members = styled.div``;

// const Members = styled.div``;

// const Members = styled.div``;

const Border = styled.div`
position: absolute;
width: 100%;
height: 100%;
left: -20px;
top: -20px;
background: transparent;
border-top: 3px solid #1c15e7;
border-left: 3px solid #1c15e7;
border-radius: 10px;
`;

const MemberNames = styled.div`
font-size: 14px;
font-weight: 700;
color: #1c15e7;    
`;

const MemberEmail = styled.div`
font-size: 12px;
background: #1c15e7;
color: white;
padding: 5px;
border-radius: 3px;
margin-left: 10px;
margin-right: 10px;
`;

const MemberName = styled.div`
display: flex;
align-items: center;
margin-bottom: 7px;
`;

const MemberDetails = styled.div`
width: 90%;
display: flex;
flex-direction: column;
// border-top: 1px solid gray;
`;

const MemberPic = styled.img`
width: 100%;
height: 45%; 
overflow: hidden;
border-radius: 7px 7px 0 0;

`;

const MemberCard = styled.div`
width: 280px;
height: 430px;
// color: white;
box-shadow: 0 0 4px #1c15e7;
border-radius: 7px;
position: relative;
`;

const MemButton = styled.button`
width: 15%;
height: 100%;
border: none;
background: #1c15e7;
color: white;
border-radius: 0 10px 10px 0;
border: 1px solid #1c15e7;
font-weight: 700;
cursor: pointer;

@media screen and (max-width: 460px) {
    width: 30%;
}
`;

const MemSrch = styled.input`
width: 85%;
height: 89%;
border: none;
padding-left: 10px;
background: transparent;
border: 1px solid #1c15e7;
border-radius: 10px 0 0 10px;

@media screen and (max-width: 460px) {
    width: 70%;
}
`;

const MemberSearch = styled.div`
width: 90%;
height: 45px;
// border: 1px solid white;
border-radius: 10px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 50px;
`;

const MemberHold = styled.div`
width:90%;
min-height: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
margin-top: 120px;
`;

const Member = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
// align-items: center;
padding-bottom: 30px;
`;
