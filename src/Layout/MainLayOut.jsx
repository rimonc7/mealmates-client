import { Outlet } from "react-router-dom";
import Nav from "../Pages/Shared/Nav";
import Footer from "../Pages/Shared/Footer";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeProvider";

const MainLayOut = () => {
    const { darkTheme } = useContext(ThemeContext); 

    return (
        <div className={`${darkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} flex flex-col min-h-screen mx-auto transition-all duration-300`}>
            <Nav />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer /> 
        </div>
    );
};

export default MainLayOut;
