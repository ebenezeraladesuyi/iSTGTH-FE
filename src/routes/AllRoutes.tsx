import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom"
import { Home } from "../layout"
// import { HomeComp } from "../pages"
// import Signup from "../pages/authPages/Signup"
import { SignupLayout } from "../layout/signupLayout"
import { SigninLayout } from "../layout/signinLayout"
// import Signin from "../pages/authPages/Signin"
import { MemberLayout } from "../layout/memberLayout"
// import { Members } from "../pages/memberPages"
import { DonateLayout } from "../layout/donateLayout"
// import Donation from "../pages/donatePage/Donation"
import AboutLayout from "../layout/aboutLayout/AboutLayout"
// import { AboutMain } from "../pages/aboutPages"


const HomeComp = lazy(() => import("../pages/homePages/HomeComp"));
const Signup = lazy(() => import("../pages/authPages/Signup"));
const Signin = lazy(() => import("../pages/authPages/Signin"));
const Members = lazy(() => import("../pages/memberPages/Members"));
const Donation = lazy(() => import("../pages/donatePage/Donation"));
const AboutMain = lazy(() => import("../pages/aboutPages/AboutMain"));

export const element = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                index: true,
                element: <HomeComp />
            }
        ]
    },
    {
        path: "/signup",
        element: <SignupLayout />,
        children: [
            {
                index: true,
                element: <Signup />
            }
        ]
    },
    {
        path: "/signin",
        element: <SigninLayout />,
        children: [
            {
                index: true,
                element: <Signin />
            }
        ]
    },
    {
        path: "/members",
        element: <MemberLayout />,
        children: [
            {
                index: true,
                element: <Members />
            }
        ]
    },
    {
        path: "/donate",
        element: <DonateLayout />,
        children: [
            {
                index: true,
                element: <Donation />
            }
        ]
    },
    {
        path: "/about",
        element: <AboutLayout />,
        children: [
            {
                index: true,
                element: <AboutMain />
            }
        ]
    }
])