import { useState } from 'react'

import { styled } from "styled-components";
import signupImg from "../../assets/Jpegs/p1000-3.jpg"
import logo4 from "../../assets/Jpegs/optiLogo.jpg";
import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { UseAppDispatch } from '../../hooks/global/Store';
// import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// import { signin } from '../../utils/Apis';
import DatasIsaLoading from '../homePages/DataIsLoading';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from 'formik';
import { User } from '../../hooks/global/ReduxState';import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
// import { iUser } from "../types";

const url = "https://istgth-apis.onrender.com/users";


// import { useAuth } from '../../hooks/useSWR';


const Signin = () => {

  const queryClient = useQueryClient()

  const [showPassword, setshowPassword] = useState(false);

  const fn = () => [setshowPassword(!showPassword)];

  const dispatch = UseAppDispatch();
  const navigate = useNavigate();

  const validationSchema = yup
  .object({
    email: yup.string().required("Please, input your email"),
    password: yup.string().required("Please, input your password"),
  })
  .required();

  // type formData = yup.InferType<typeof schema>;

  const posting = useMutation(
    (formData: { email: string; password: string }) => axios.post(`${url}/signin`, formData),
    {
      onSuccess: (data : any) => {
        // Handle successful sign-in here, e.g., updating Redux state, storing tokens, etc.
        dispatch(User(data));
        queryClient.invalidateQueries(['iStandUser']);

        
      if (data.data) {
        Swal.fire({
          title: "WELCOME BACK",
          text: "It's so cool to see you!",
          timer: 3000,
          icon: "success",
          timerProgressBar: true,
          // willClose: () => {
          //   window.location.reload();
          // },
        });
        navigate("/", { replace: true });
      } else if (data.message === "Request failed with status code 400") {
        Swal.fire({
          icon: "error",
          title: `${data.message}`,
          text: "User does not exist",
        }) 
        // else (data.message === "Network Error") {
        //   Swal.fire({
        //     icon: "error",
        //     title: `${data.message}`,
        //     text: "Please Check Your Internet Connection",
        //   });
        // } 
      } 
      else if (data.message === "Network Error") {
        Swal.fire({
          icon: "error",
          title: `${data.message}`,
          text: "Please Check Your Internet Connection",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: `Something Went Wrong`,
          text: `${data.response.data.err} ❌❌`,
        });
      }
    }
  }
  );
  //   mutationFn: signin,

  //   onSuccess: (data) => {

  //     dispatch(User(data));

  //     queryClient.invalidateQueries(["istandUser"])

      // if (myData.data) {
      //   Swal.fire({
      //     title: "Signed in successfully",
      //     text: "Welcome!",
      //     timer: 3000,
      //     icon: "success",
      //     timerProgressBar: true,
      //     willClose: () => {
      //       window.location.reload();
      //     },
      //   });
      //   // navigate("/dashboardhome", { replace: true });
      // } else if (myData.message === "Network Error") {
      //   Swal.fire({
      //     icon: "error",
      //     title: `${myData.message}`,
      //     text: "Please Check Your Internet Connection",
      //   });

      //   // Swal.fire(
      //   //   `${data.message}`,
      //   //   "Please Check Your Internet Connection",
      //   //   "question"
      //   // );
      // } else {
      //   Swal.fire({
      //     icon: "error",
      //     title: `Something Went Wrong`,
      //     text: `${myData.response.data.err} ❌❌`,
      //   });
      // }
    // },
  // });

  // const {
  //   handleSubmit,
  //   formState: { errors },
  //   // reset,
  //   register,
  // } = useForm<formData>({
  //   resolver: yupResolver(schema),
  // });

  // const Submit = handleSubmit(async (data) => {
  //   posting.mutate(data);
  // });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      posting.mutate(values);
      // console.log(values)
    },
  });


  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const { login, isLoading, isError } = useAuth();

  // const handleLogin = async (e : any) => {
  //   e.preventDefault();
  //   try {
  //     await login({email, password});
  //     console.log(login)
  //     // Redirect to the dashboard or other protected routes on successful login
  //   } catch (error : any) {
  //     console.error("Login error:", error.message);
  //   }
  // };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>

        <Sign2>
                
                <SignupRight2>
                    <SignupForm2 onSubmit={formik.handleSubmit}>
        
                        <Logo4>
                            <LogoImg4 src={logo4} alt="logo"/>
                        </Logo4>

                        <Up2>Let's Get You Back in..</Up2>

                        <FullName2 
                          placeholder="Email"
                          type="email"
                          // value={email}
                          // onChange={(e : any) => setEmail(e.target.value)}
                          {...formik.getFieldProps("email")}
                        />
                        <p> {formik.touched.email && formik.errors.email} </p>

                        <Wrap><FullName2
                          type={showPassword ? "text" : "password"}
                          style={{
                            height: "90%",
                            boxShadow: "none",
                            width: "100%",
                            borderBottom: "none",
                          }}
                          placeholder="Password" 
                          // value={password}
                          // onChange={(e : any) => setPassword(e.target.value)}
                          {...formik.getFieldProps("password")}
                          />
                          
                          {showPassword ? (
                            <Icon onClick={fn}>
                              <AiOutlineEye />
                            </Icon>
                          ) : (
                            <Icon onClick={fn}>
                              <AiOutlineEyeInvisible />
                            </Icon>
                          )}
                        </Wrap>
                        <p> {formik.touched.password && formik.errors.password} </p>

                        {posting.isLoading ? (
                          <>
                            <DatasIsaLoading />
                          </>
                        ) : (
                          <Signupp2 type='submit'>Signin</Signupp2>
                         )}


                        <SignCover3 style={{marginBottom:"-10px"}}>Forgot Password?</SignCover3>

                        <Link style={{ textDecoration: "none" }} to={"/signup"}>
                          <SignCover3 style={{marginBottom:"10px"}}><span>Don't have an Account?</span>Signup</SignCover3>
                        </Link>

                        <div style={{display:"flex", width:"90%", justifyContent:"space-between"}}>
                          <div></div>

                          <Link to={"/"}><button style={{cursor:"pointer", background:"#8a2be2", color:"white", border:"none", height:"30px", width:"70px", borderRadius:"6px"}}>Home</button></Link>
                        </div>

                    </SignupForm2>
                </SignupRight2>

                <SignupLeft2>
                    <SignCover2></SignCover2>

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

                </SignupLeft2>

                

        </Sign2>

    </div>
  )
}

export default Signin;

const Icon = styled.div`
  color: #8a2be2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 3px;
  font-size: 18px;
  margin-right: 5px;
`;

const Wrap = styled.div`
width: 90%;
height: 37px;
padding-left: 5px;
outline: none;
border: none;
border-bottom: 2px solid #1c15e7;
border-radius: 7px;
// background: transparent;
display: flex;
justify-content: space-between;
`;

const SignCover3 = styled.div`
cursor: pointer;
font-size: 11px;
color: #1c15e7;
font-weight: 700;
// margin-top 10px;

&:hover{
  color: orange;
}

span{
  color: orange;
  cursor: not-allowed;
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
right: 70px;
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

const Signupp2 = styled.button`
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

const FullName2 = styled.input`
width: 90%;
height: 35px;
padding-left: 5px;
outline: none;
border: none;
border-bottom: 2px solid #1c15e7;
border-radius: 7px;
// background: transparent;
`;

const Up2 = styled.div`
margin: 0;
font-size: 17px;
font-weight: 600;
background: #1c15e7;
color: white;
padding: 10px 15px;
border-radius: 5px;

@media screen and (max-width: 375px) {
    font-size: 15px;
}
`;

const LogoImg4 = styled.img`
width: 140%;
`;

const Logo4 = styled.div`
width: 100px;
height: 100px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
overflow: hidden;
animation: spin 3s linear infinite;

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

const SignupForm2 = styled.form`
width: 350px;
height: 470px;
padding: 10px;
// box-shadow: 0 0 3px gray;
border-radius: 7px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;

p{
  margin: 0px;
  font-size: 8px;
}

@media screen and (max-width: 768px) {
        background: white;
        opacity: 0.8;
        z-index: 20;
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

const SignupRight2 = styled.div`
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

const SignCover2 = styled.div`
width: 100%;
height: 100%;
// top: 0;
// left: 0;
background-color: black;
opacity: 0.5;
position: absolute;
`;

const SignupLeft2 = styled.div`
width: 50%;
height: 100%;
background-image: url(${signupImg});
background-size: cover;
background-position: center;
position: relative;

@media screen and (max-width: 768px) {
    display: none;
}
`;

const Sign2 = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: space-between;
align-items: center;
overflow: hidden;

@media screen and (max-width: 768px) {
    height: 100vh;
    justify-content: center;
}
`;