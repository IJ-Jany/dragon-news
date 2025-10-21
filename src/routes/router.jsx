import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../components/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                path:'/',
                Component:HomePage
            },
            {
            path:'/category/:id',
             Component:CategoryNews,
            loader:()=> fetch("/news.json"),
            hydrateFallbackElement:<p>categories are loading</p>
            }
             ]
    },



    {
        path:'/auth',
       Component:AuthLayout,
        children:[
            {
                path:"/auth/login",
                Component:Login
            },
            {
                path:"/auth/register",
                Component:Register
                            }
                        ]
                    },
    {
        path:"/news-details/:id",
        element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader:()=> fetch("/news.json"),
        hydrateFallbackElement:<p>categories are loading</p>
    },
    {
        path:"/*",
        element:<h2>Error404</h2>
    }
])
 export default router