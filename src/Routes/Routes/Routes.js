import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Home from "../../Pages/Home/Home/Home"

import ImageGallery from "../../Pages/Home/ImageGallery/ImageGallery"
import LogIn from "../../Authentication/LogIn/LogIn"
import SignUp from "../../Authentication/SignUp/SignUp"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import DashboardLayout from "../../Layout/DashboardLayout"
import MyOrder from "../../Pages/Dashboard/MyOrder"

const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Main></Main>,
       
        children: [
  
          {
            path: '/',
            element: <Home />
  
          },
          {
            path: '/login',
            element: <LogIn></LogIn>
          },
          {
            path: '/signup',
            element: <SignUp></SignUp>
          },
          {
            path: '/gallery',
            element: <ImageGallery></ImageGallery>
          },
          
        ]
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        
        children: [
          {
            path: '/dashboard',
            element: <MyOrder></MyOrder>
          },
         
         
          
         
         
        ]
      }
    ]
    )
    export default router