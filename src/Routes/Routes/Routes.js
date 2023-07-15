import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Home from "../../Pages/Home/Home/Home"

import ImageGallery from "../../Pages/Home/ImageGallery/ImageGallery"
import LogIn from "../../Authentication/LogIn/LogIn"
import SignUp from "../../Authentication/SignUp/SignUp"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import DashboardLayout from "../../Layout/DashboardLayout"
import MyOrder from "../../Pages/Dashboard/MyOrder"
import Services from "../../Pages/Home/Services/Services"
import CheckoutPage from "../../Pages/Dashboard/CheckoutPage"
import AddPhoto from "../../Pages/Dashboard/AddPhoto"

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
          {
            path: '/services',
            element: <Services></Services>
          },
          {
            path: '/checkout/:checkoutId',
            element: <PrivateRoute><CheckoutPage></CheckoutPage></PrivateRoute>,
         
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
          {
            path: '/dashboard/addphoto',
            element: <AddPhoto></AddPhoto>
          },
       
         
         
          
         
         
        ]
      }
    ]
    )
    export default router