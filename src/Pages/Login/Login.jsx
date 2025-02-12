import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { ThemeContext } from "../../Provider/ThemeProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { loginWithEmail, loginWithGoogle, errorMessage, setErrorMessage } = useContext(AuthContext);
    const { darkTheme } = useContext(ThemeContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setErrorMessage("");

        loginWithEmail(email, password)
            .then(() => {
                form.reset();
                navigate(from);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    const handleGoogleLogin = () => {
        setErrorMessage("");
        loginWithGoogle()
            .then(() => {
                navigate(from);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 
            ${darkTheme ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}>
            
            <Helmet>
                <title>Login - MealMeats</title>
            </Helmet>

            <div className={`w-full max-w-md p-8 rounded-lg shadow-xl transition-all duration-300 
                ${darkTheme ? "bg-gray-700 border border-gray-700" : "bg-white border border-gray-300"}`}>

                <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className={`${darkTheme ? "text-white" : "text-gray-700"}`}>Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className={`input input-bordered w-full transition-all duration-200  
                                ${darkTheme ? "bg-gray-700 text-white border-gray-300" : "bg-white text-gray-900 border-gray-300"}`}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className={`${darkTheme ? "text-white" : "text-gray-700"}`}>Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className={`input input-bordered w-full transition-all duration-200 
                                ${darkTheme ? "bg-gray-700 text-white border-gray-300" : "bg-white text-gray-900 border-gray-300"}`}
                            required
                        />
                        <label className="label">
                            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                        </label>
                    </div>

                    <button className="btn bg-[#048c7c] hover:bg-[#459e94] text-white w-full transition-all duration-200">
                        Login
                    </button>
                </form>

                <div className="divider my-6">OR</div>

                {/* Social Login */}
                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline btn-secondary w-full flex items-center gap-2 transition-all duration-200"
                >
                    <FaGoogle /> Continue with Google
                </button>

                {/* Error Message */}
                {errorMessage && (
                    <p className="text-red-500 text-center mt-4">{errorMessage}</p>
                )}

                <p className="text-center text-sm mt-4">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
