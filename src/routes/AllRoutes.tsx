import { createBrowserRouter } from "react-router-dom"
import { Home } from "../layout"
import { HomeComp } from "../pages"
// import Signup from "../pages/authPages/Signup"
import { SignupLayout } from "../layout/signupLayout"
import { SigninLayout } from "../layout/signinLayout"
import Signin from "../pages/authPages/Signin"
import { MemberLayout } from "../layout/memberLayout"
import { Members } from "../pages/memberPages"
import SignUp2 from "../pages/authPages/Signup2"


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
                element: <SignUp2 />
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
    }
])