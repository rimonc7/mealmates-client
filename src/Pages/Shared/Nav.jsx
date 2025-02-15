import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ThemeContext } from "../../Provider/ThemeProvider";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Nav = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const { toggleTheme, darkTheme } = useContext(ThemeContext);

    const links = (
        <>
            <li>
                <NavLink className="nav-link px-3 py-1 transition-all duration-300 ease-in-out hover:bg-[#048c7c] hover:text-white rounded-md" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="nav-link px-3 py-1 transition-all duration-300 ease-in-out hover:bg-[#048c7c] hover:text-white rounded-md" to="/availableFoods">Available Foods</NavLink>
            </li>
            {user && (
                <>
                    <li>
                        <NavLink className="nav-link px-3 py-1 transition-all duration-300 ease-in-out hover:bg-[#048c7c] hover:text-white rounded-md" to="/myFood">My Food</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link px-3 py-1 transition-all duration-300 ease-in-out hover:bg-[#048c7c] hover:text-white rounded-md" to="/foodRequest">Food Pickup</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link px-3 py-1 transition-all duration-300 ease-in-out hover:bg-[#048c7c] hover:text-white rounded-md" to="/addFood">Add Food</NavLink>
                    </li>

                </>
            )}
            <li>
                <NavLink className="nav-link px-3 py-1 transition-all duration-300 ease-in-out hover:bg-[#048c7c] hover:text-white rounded-md" to="/about">About</NavLink>
            </li>
            <>
                <Link to="/register" className=" flex lg:hidden btn bg-[#048c7c] hover:bg-[#459e94] text-white px-3 py-1 mb-1 rounded-md transition-all duration-300">Register</Link>
                <Link to='/login' className=" flex lg:hidden btn bg-[#048c7c] hover:bg-[#459e94] text-white px-3 py-1 rounded-md transition-all duration-300">Sign In</Link>
            </>
        </>
    );

    return (
        <div className={`navbar sticky top-0 z-50 py-2 min-h-[55px] flex items-center lg:px-16 
            ${darkTheme ? "bg-gray-900 shadow-lg text-white" : "bg-gradient-to-r from-[#FAF3E0] to-[#F1E4C3] shadow-md text-gray-800"}
        `}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${darkTheme ? "text-white" : "text-[#048c7c]"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className={`menu menu-sm dropdown-content rounded-lg z-[1] mt-2 w-48 p-2 shadow-md transition-all duration-300
                        ${darkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-800"}
                    `}>
                        {links}
                    </ul>
                </div>
                <Link to="/" className="flex flex-col items-center text-center ml-10 lg:ml-0">
                    <h1 className="text-[1.5rem] md:text-[1.7rem] font-bold tracking-wide">
                        M E A L
                    </h1>
                    <h2 className={`text-[1rem] md:text-[1.2rem] font-semibold tracking-[0.4em] ${darkTheme ? "text-[#9CE1DB]" : "text-[#048c7c]"}`}>
                        MATES
                    </h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-3 space-x-3">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {user ? (
                    <div className="flex items-center space-x-2">
                        <img src={user?.photoURL || "https://i.ibb.co/4pDNDk1/user-placeholder.png"} alt="User" className="w-10 h-10 rounded-full border-2 border-[#048c7c]" />
                        <button onClick={logOutUser} className="btn bg-[#048c7c] hover:bg-[#459e94] text-white px-3 py-1 rounded-md transition-all duration-300 ease-in-out">
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <Link to="/register" className=" hidden lg:flex btn bg-[#048c7c] hover:bg-[#459e94] text-white px-3 py-1 rounded-md transition-all duration-300">Register</Link>
                        <Link to='/login' className=" hidden lg:flex btn bg-[#048c7c] hover:bg-[#459e94] text-white px-3 py-1 rounded-md transition-all duration-300">Sign In</Link>
                    </>
                )}
                <button
                    onClick={toggleTheme}
                    className={`flex items-center gap-3 px-5 py-2 rounded-full shadow-lg transition-all duration-300 ease-in-out
                        ${darkTheme ? "bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500" : "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-400"}
                    `}
                >
                    {darkTheme ? (
                        <MdLightMode className="text-yellow-400" size={22} />
                    ) : (
                        <MdDarkMode className="text-blue-300" size={22} />
                    )}
                    <span className="font-medium hidden lg:block">{darkTheme ? "Light Mode" : "Dark Mode"}</span>
                </button>
            </div>
        </div>
    );
};

export default Nav;
