// import React from 'react'

import styled from "styled-components";
// import member from "../../assets/Jpegs/optiLogo.jpg"
// import { 
//         // GetOneUser, 
//         getData 
//       } from "../../utils/Apis";
// import { useQuery } from "@tanstack/react-query";
// import { useAppSelector } from "../../hooks/global/Store";

import { iUser } from "../../types";
import { useEffect, useState } from "react";
import axios from "axios";


const Members = () => {

    // const userOne = useAppSelector((state) => state?.currentUser)

    // const { data } = useQuery({
    //     queryKey : ["post"],
    //     // queryFn : () => GetOneUser(userOne?._id)
    //     queryFn : () => getData
    // })

    // const getAllUsers = () => {
    //   return data

    //   console.log(data)
    // }

    // const getDetails = (_id : string | undefined) => {
    //     return data
        
    // }

    // const [storeData] = React.useState(getDetails)

    // console.log(storeData)

    const [users, setUsers] = useState<iUser[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const allUsers = await axios.get('https://istandfoundation-api.onrender.com/users'); 
        setUsers(allUsers.data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers()
  }, []);

  
  // console.log(allUsers)

  return (
    <div>

      <Member>

        <MemberHold>

          <MemberSearch>
            <MemSrch type="text" placeholder="Input Member's Name" />  

            <MemButton>Search</MemButton>    

          </MemberSearch>

          {/* {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
            </tr>
          ))} */}

          {/* <Down> */}

            {users.map((user) => (

              <MemberCard 
              key={user._id}
              >

              <Border></Border>

              {/* <MemberPic src={member} /> */}

              <MemberDetails>

                  <MemberName>
                      <MemberEmail>Name</MemberEmail>
                      {/* <MemberNames>Tobi Hussien Aladesuyi</MemberNames> */}
                      <MemberNames>{user.fullName}</MemberNames>
                  </MemberName> 

                  <MemberName>
                      <MemberEmail>Email</MemberEmail>
                      {/* <MemberNames>tobi@test.com</MemberNames> */}
                      <MemberNames>{user.email}</MemberNames>
                  </MemberName> 

                  <MemberName>
                      <MemberEmail>Business/Profession</MemberEmail>
                      {/* <MemberNames>Volatic Services and Production</MemberNames> */}
                      <MemberNames>{user.businessName}</MemberNames>
                  </MemberName>  

                  <MemberName>
                      <MemberEmail>Business Services</MemberEmail>
                      {/* <MemberNames>Softwares and Engineering</MemberNames> */}
                      <MemberNames>{user.businessServices}</MemberNames>
                  </MemberName>

                  <MemberName>
                      <MemberEmail>Business Contact</MemberEmail>
                      {/* <MemberNames>07056765683</MemberNames> */}
                      <MemberNames>{user.businessContact}</MemberNames>
                  </MemberName>

                  <MemberName>
                      <MemberEmail>Membership Number</MemberEmail>
                      {/* <MemberNames>34578</MemberNames> */}
                      <MemberNames>{user.MembershipNumber}</MemberNames>
                  </MemberName> 
                                      
              </MemberDetails>


              </MemberCard> 
              
              ))} 

          {/* </Down> */}

             

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
// border-top: 3px solid #1c15e7;
border-top: 3px solid white;
border-left: 3px solid white;
border-radius: 10px;
`;

const MemberNames = styled.div`
font-size: 11px;
font-weight: 700;
color: white;    
// color: #1c15e7;    
`;

const MemberEmail = styled.div`
font-size: 11px;
font-weight: 700;
// background: #1c15e7;
background: white;
color: #1c15e7;
padding: 5px;
border-radius: 3px;
// margin-left: 10px;
margin-right: 10px;
`;

const MemberName = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;
`;

const MemberDetails = styled.div`
width: 90%;
display: flex;
flex-direction: column;
// border-top: 1px solid gray;
// margin-bottom: 7px;
`;

// const MemberPic = styled.img`
// width: 100%;
// height: 45%; 
// overflow: hidden;
// border-radius: 7px 7px 0 0;
// `;

const MemberCard = styled.div`
width: 280px;
height: 320px;
// color: white;
// box-shadow: 0 0 4px white;
border-radius: 7px;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #1c15e7;
margin-bottom: 50px;
margin-right: 25px;
margin-left: 25px;

// @media screen and (max-width: 800px) {
//   margin-right: 20px;
//   margin-left: 20px;
// }

@media screen and (max-width: 500px) {
  margin-right: 0;
  margin-left: 0;
}
`;

// const Down = styled.div`
// width: 85%;
// height: 100%:
// display: flex;
// flex-wrap: wrap;
// justify-content: center;
// align-items: center;
// `;

const MemButton = styled.button`
width: 15%;
height: 105%;
border: none;
background: white;
// background: #1c15e7;
color: background: #1c15e7;
;
border-radius: 0 10px 10px 0;
// border: 2px solid #1c15e7;
// border: 1px solid white;
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
border: 2px solid white;
outline: none;
color: white;
// border: 1px solid #1c15e7;
border-radius: 10px 0 0 10px;

:placeholder{
  color: blue;
}

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
// flex-direction: column;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin-top: 120px;
`;

const Member = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
// align-items: center;
padding-bottom: 30px;
// background: black;
background: rgba(6, 6, 6, 0.771);
`;
