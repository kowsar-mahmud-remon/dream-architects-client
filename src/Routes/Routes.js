import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import AddService from "../Pages/Services/AddService";
import Review from "../Pages/Services/Review";
import ReviewUpdate from "../Pages/Services/ReviewUpdate";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/details/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/review',
        element: <Review></Review>
      },
      {
        path: '/update/:id',
        element: <ReviewUpdate></ReviewUpdate>,
        loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`)
      },
      {
        path: '/create',
        element: <AddService></AddService>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
]);