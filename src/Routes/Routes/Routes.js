import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Courses from "../../Pages/Courses/Courses";
import CoursesDetails from "../../Pages/CoursesDetails/CoursesDetails";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router=createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[

            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/home',
                loader: ()=> fetch(`https://assignment-10-server-side-ebon.vercel.app/courses`),
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            
            {
                path: '/courses',
                element:<Courses></Courses>
            },
            {
                path: '/courses/:id',
                loader: ({params})=> fetch(`https://assignment-10-server-side-ebon.vercel.app/courses/${params.id}`),
                element:<CoursesDetails></CoursesDetails>
            },
            {
                path:'/checkout/:id',
                loader: ({params})=> fetch(`https://assignment-10-server-side-ebon.vercel.app/courses/${params.id}`),
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            }
        ]
    }
]) 