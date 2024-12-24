import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
    },
]);

export default router;