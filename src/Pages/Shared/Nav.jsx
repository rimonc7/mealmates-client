import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import './Nav.css';

const Nav = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const links =
        <>
            <li>
                <NavLink className="nav-link px-3 py-1 transition-all duration-300 ease-in-out hover:bg-[#06b5a2] hover:text-white rounded-md" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="nav-link px-3 py-1 transition-all duration-300 ease-in-out hover:bg-[#06b5a2] hover:text-white rounded-md" to="/availableFoods">Available Foods</NavLink>
            </li>
            <li>
                <NavLink className="nav-link px-3 py-1 transition-all duration-300 ease-in-out hover:bg-[#06b5a2] hover:text-white rounded-md" to="/myFood">My Food</NavLink>
            </li>
            <li>
                <NavLink className="nav-link px-3 py-1 transition-all duration-300 ease-in-out hover:bg-[#06b5a2] hover:text-white rounded-md" to="/foodRequest">Food Pickup</NavLink>
            </li>
            <li>
                <NavLink className="nav-link px-3 py-1 transition-all duration-300 ease-in-out hover:bg-[#06b5a2] hover:text-white rounded-md" to="/addFood">Add Food</NavLink>
            </li>
        </>

    return (
        <div className="navbar bg-gradient-to-r from-[#FAF3E0] to-[#F1E4C3] shadow-md py-2 min-h-[55px] flex items-center lg:px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#06b5a2]"
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
                        className="menu menu-sm dropdown-content bg-white rounded-lg z-[1] mt-2 w-48 p-2 shadow-md transition-all duration-300">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="flex flex-col items-center text-center ml-10 lg:ml-0">
                    <h1 className="text-[1.5rem] md:text-[1.7rem] font-bold tracking-wide text-gray-800">
                        M E A L
                    </h1>
                    <h2 className="text-[1rem] md:text-[1.2rem] font-semibold tracking-[0.4em] text-[#06b5a2]">
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
                        <img src={user?.photoURL || "https://i.ibb.co/4pDNDk1/user-placeholder.png"} alt="User" className="w-8 h-8 rounded-full border border-[#06b5a2]" />
                        <button onClick={logOutUser} className="btn bg-[#048c7c] hover:bg-[#459e94] text-white px-3 py-1 rounded-md transition-all duration-300 ease-in-out">
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <Link to="/register" className="  btn bg-[#048c7c] hover:bg-[#459e94] text-white px-3 py-1 rounded-md transition-all duration-300">Register</Link>
                        <Link to='/login' className="  btn bg-[#048c7c] hover:bg-[#459e94] text-white px-3 py-1 rounded-md transition-all duration-300">Sign In</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Nav;
