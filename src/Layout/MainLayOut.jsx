import { Outlet } from "react-router-dom";
import Nav from "../Pages/Shared/Nav";
import Footer from "../Pages/Shared/Footer";

const MainLayOut = () => {
    return (
        <div>
            <div className=" mx-auto ">
                <Nav></Nav>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;