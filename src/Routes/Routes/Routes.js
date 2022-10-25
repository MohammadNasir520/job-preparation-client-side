import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Courses from "../../Pages/Courses/Courses";
import CoursesDetails from "../../Pages/CoursesDetails/CoursesDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const router=createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[

            {
                path: '/',
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
                loader: ({params})=> fetch(`http://localhost:5000/courses/${params.id}`),
                element:<CoursesDetails></CoursesDetails>
            },
            
        ]
    }
]) 