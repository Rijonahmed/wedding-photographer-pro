import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Home from "../../Pages/Home/Home/Home"
import LogIn from "../../LogIn/LogIn"
import SignUp from "../../SignUp/SignUp"
import ImageGallery from "../../Pages/Home/ImageGallery/ImageGallery"

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
      }
    ]
    )
    export default router