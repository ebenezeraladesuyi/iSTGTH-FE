// import React from 'react'

import { styled } from "styled-components";
import signupImg from "../../assets/Jpegs/p1000-4.jpg"
import avatar from "../../assets/Jpegs/avatar.jpg"
import { BsCamera } from "react-icons/bs";
import { useState } from "react";
// import { UseAppDispatch } from "../../hooks/global/Store";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../utils/Apis";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DatasIsaLoading from "../homePages/DataIsLoading";


const Signup = () => {

    const [myAvatar, setMyAvatar] = useState(avatar)
    const [image, setImage] = useState("")

    const imgUpload = (e : any) => {
        const file = e.target.files[0];
        const save = URL.createObjectURL(file);
        image
        setImage(file);
        setMyAvatar(save);
    }

    // const dispatch = UseAppDispatch();

    const schema = yup
        .object({
            fullName: yup.string().required("input fullname"),
            businessName : yup.string().required(),
            businessContact : yup.string().required(),
            businessServices : yup.string().required(),
            email : yup.string().required("input a valid email"),
            memberImage : yup.string().required("upload an image"),
            password : yup.string().min(8).required("create a password"),
            confirmPassword : yup.string().oneOf([yup.ref("password")], "password must match").required("password does not match")
        })
        .required();

        type formData = yup.InferType<typeof schema>;

        const posting = useMutation({
            mutationKey: ['iStandUser'],
            mutationFn: signup,


            onSuccess: (data: any) => {
                if (data.message === "Registration Done") {
                  Swal.fire({
                    title: "Account Created",
                    text: "Pls, check your mail for OTP verification",
                    icon: "success",
                  });
                //   navigate("/otp");
                }
                if (data.response.data.err === "Can't Use An Existing Email ❌❌") {
                  Swal.fire({
                    icon: "error",
                    title: "Something Went Wrong",
                    text: `${data.response.data.err}`,
                  });
                }
                if (data.message === "Network Error") {
                  Swal.fire({
                    icon: "error",
                    title: `${data.message}`,
                    text: "Please Check Your Internet Connection",
                  });
                }
              },

        });

        const {
          handleSubmit,
          formState: { errors },
        //   reset,
          register,
        } = useForm<formData>({
          resolver: yupResolver(schema),
        });


        const Submit = handleSubmit(async (data) => {
          posting.mutate(data);

          console.log(data)
      
        //   if (posting?.mutate(data)) {
            // reset();
        //   } else {
        //     return null;
        //   }
        });


  return (
    <div>

        <Sign>

                <SignupLeft>
                    <SignCover></SignCover>
                   
                    <Our>

                        <Han>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                        </Han>
                        <Han>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                        </Han>
                        <Han>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                        </Han>
                        <Han>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                        </Han>
                        <Han>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                            <Hand></Hand>
                        </Han>
                        
                    </Our>
                </SignupLeft>

                
                <SignupRight>
                    <SignupForm onSubmit={Submit}>
        
                        {/* <Logo3>
                            <LogoImg3 src={logo3} alt="logo"/>
                        </Logo3> */}

                        {/* <Up>Become a Member</Up> */}

                        <ImageHold>
                            <SignupImage src={myAvatar} id="img" {...register("memberImage")} />

                            <input type="file" id="input" style={{display:"none"}} 
                            onChange={imgUpload} 
                            />

                            <Upload htmlFor="input" >
                                <BsCamera style={{ fontSize: "18px" }} />
                                Upload
                            </Upload>
                        </ImageHold>              
                            <p style={{ fontSize: "7px", margin:"0px" }}>
                                {errors?.memberImage && errors?.memberImage?.message}
                            </p>

                        <FullName placeholder="FullName"
                            {...register("fullName")} />              
                            <p style={{ fontSize: "7px", margin:"0px" }}>
                                {errors?.fullName && errors?.fullName?.message}
                            </p>

                        <FullName placeholder="Email"
                            {...register("email")} 
                            />              
                        <p style={{ fontSize: "7px", margin:"0px" }}>
                            {errors?.email && errors?.email?.message}
                        </p>

                        <FullName placeholder="Business Name"
                            {...register("businessName")} />              
                            <p style={{ fontSize: "7px", margin:"0px" }}>
                                {errors?.businessName && errors?.businessName?.message}
                            </p>

                        <FullName placeholder="Business Contact"
                            {...register("businessContact")} />              
                            <p style={{ fontSize: "7px", margin:"0px" }}>
                                {errors?.businessContact && errors?.businessContact?.message}
                            </p>

                        <FullName placeholder="Business Services"
                            {...register("businessServices")} />              
                            <p style={{ fontSize: "7px", margin:"0px" }}>
                                {errors?.businessServices && errors?.businessServices?.message}
                            </p>

                        <FullName placeholder="Create Password"
                            {...register("password")} />              
                            <p style={{ fontSize: "7px", margin:"0px" }}>
                                {errors?.password && errors?.password?.message}
                            </p>

                        <FullName placeholder="Confirm Password"
                            {...register("confirmPassword")} />              
                            <p style={{ fontSize: "7px", margin:"0px" }}>
                                {errors?.confirmPassword && errors?.confirmPassword?.message}
                            </p>

                        {
                            posting.isLoading ? (
                                <>
                                    <DatasIsaLoading />
                                </>
                            ) : (

                                <Signupp type="submit">Signup</Signupp>
                            )
                        }

                        <SignCover5 style={{marginBottom:"10px"}}>Have an Account?<span>Signin</span></SignCover5>


                    </SignupForm>
                </SignupRight>

                

        </Sign>

    </div>
  )
}

export default Signup;

// const Foot = styled.div``;

const SignCover5 = styled.div`
color: #1c15e7;
font-size: 11px;

span{
    color: orange;
    cursor: pointer;

    &:hover{
        color: #1c15e7;
    }
}
`;

const Upload = styled.label`
position: absolute;
padding: 7px 14px;
background: #1c15e7;
color: white;
border: none;
border-radius: 5px;
right: -50px;
bottom: -20px;
cursor: pointer;

animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

&:hover{
    background: orange;
    // border: 1px solid #1c15e7;
    // color: #1c15e7;
}
`;

const Han = styled.div`
display: flex;
gap: 8px;
margin-bottom: 10px;
`;

const Hand = styled.div`
background: white;
height: 10px;
width: 10px;
border-radius: 50%;
`;

const Our = styled.div`
position: absolute;
left: 70px;
top: 50px;
// z-index: 100;
animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
`;

const Signupp = styled.button`
width: 93%;
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

animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
`;

const FullName = styled.input`
width: 90%;
height: 35px;
padding-left: 5px;
outline: none;
border: none;
border-bottom: 2px solid #1c15e7;
border-radius: 7px;
`;

const SignupImage = styled.img`
width: 90%;
height: 90%;
border: 1ps solid #1c15e7;
border-radius: 50%;
`;

const ImageHold = styled.div`
width: 110px;
height: 115px;
border-radius: 50%;
border: 2px solid #1c15e7;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`;

// const Up = styled.div`
// margin: 0;
// font-size: 15px;
// font-weight: 600;
// color: #1c15e7;
// `;

// const LogoImg3 = styled.img`
// width: 140%;
// `;

// const Logo3 = styled.div`
// width: 60px;
// height: 60px;
// background-color: white;
// display: flex;
// justify-content: center;
// align-items: center;
// border-radius: 50%;
// overflow: hidden;
// `;


const SignupForm = styled.form`
width: 350px;
height: 700px;
padding: 10px;
// box-shadow: 0 0 3px gray;
border-radius: 7px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;

@media screen and (max-width: 768px) {
        background: white;
        opacity: 0.8;
        z-index: 20;
        margin-top: 30px;
        margin-bottom: 30px;
    }

@media screen and (max-width: 425px) {
        width: 300px;
    }

@media screen and (max-width: 375px) {        
        width: 290px;
    }

@media screen and (max-width: 320px) {
        width: 250px;
    }
`;

const SignupRight = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
    width: 100%;
    background-image: url(${signupImg});
    background-size: cover;
    background-position: center;
    backdrop-filter: blur(5px);
}
`;

const SignCover = styled.div`
width: 100%;
height: 100%;
// top: 0;
// left: 0;
background-color: black;
opacity: 0.5;
position: absolute;
`;

const SignupLeft = styled.div`
width: 50%;
height: 112vh;
background-image: url(${signupImg});
background-size: cover;
background-position: center;
position: relative;


@media screen and (max-width: 768px) {
    display: none;
}
`;

const Sign = styled.div`
width: 100%;
height: 120vh;
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 768px) {
    // height: 100%;
}
`;