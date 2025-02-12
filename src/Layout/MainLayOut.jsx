import { Outlet } from "react-router-dom";
import Nav from "../Pages/Shared/Nav";
import Footer from "../Pages/Shared/Footer";

const MainLayOut = () => {
    return (
        <div className="flex flex-col min-h-screen mx-auto">
            <Nav />
            <main className="flex-grow">
                <Outlet />
            </main>
            
            <Footer /> 
        </div>
    );
};

export default MainLayOut;
