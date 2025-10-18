import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import CategoryNews from "../pages/CategoryNews";

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
                loader:()=> fetch("/news.json")
            }
        ]
    },
])
 export default router