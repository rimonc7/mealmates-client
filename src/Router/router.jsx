import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import MyFood from "../Pages/MyFood/MyFood";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import PrivateRoute from "./PrivateRoute";
import HomeLayOut from "../Pages/Home/HomeLayOut";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path:'/',
                element:<HomeLayOut></HomeLayOut>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addFood',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/myFood',
                element: <PrivateRoute><MyFood></MyFood></PrivateRoute>
            },
            {
                path: '/availableFoods',
                element: <AvailableFoods></AvailableFoods>
            }
        ]
    },
]);

export default router;