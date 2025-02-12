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
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import FoodRequest from "../Pages/FoodRequest/FoodRequest";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import About from "../Pages/About/About";
import FoodDonation from "../Pages/FoodDonation/FoodDonation";
import VolunteerOpportunities from "../Pages/VolunteerOpportunities/VolunteerOpportunities";
import Contact from "../Pages/Contact/Contact";
import Mission from "../Pages/Mission/Mission";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <HomeLayOut></HomeLayOut>
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
                path: '/foodRequest',
                element: <PrivateRoute><FoodRequest></FoodRequest></PrivateRoute>
            },
            {
                path: '/availableFoods',
                element: <AvailableFoods></AvailableFoods>,
                loader: () => fetch('http://localhost:5000/foods')
            },
            {
                path: '/food/:id',
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
                // loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: '/updateFood/:id',
                element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
                // loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/food-donation',
                element:<FoodDonation></FoodDonation>
            },
            {
                path:'/volunteer-opportunities',
                element:<VolunteerOpportunities></VolunteerOpportunities>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/mission',
                element:<Mission></Mission>
            }
        ]
    },
]);

export default router;