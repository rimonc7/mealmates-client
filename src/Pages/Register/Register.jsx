import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ThemeContext } from "../../Provider/ThemeProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    const { createUserWithEmail, loginWithGoogle, setErrorMessage, errorMessage } = useContext(AuthContext);
    const { darkTheme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        setErrorMessage("");

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage("Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter.");
            return;
        }

        createUserWithEmail(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return updateProfile(user, { displayName: name, photoURL: photo });
            })
            .then(() => {
                form.reset();
                navigate("/");
            })
            .catch((error) => setErrorMessage(error.message));
    };

    const handleGoogleLogin = () => {
        setErrorMessage("");
        loginWithGoogle()
            .then(() => navigate("/"))
            .catch((error) => setErrorMessage(error.message));
    };

    return (
        <div className={`py-16 min-h-screen flex flex-col items-center justify-center transition-all duration-300 
            ${darkTheme ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}>
            
            <Helmet>
                <title>Register - MealMeats</title>
            </Helmet>

            <div className={`w-full max-w-md p-8 rounded-lg shadow-xl transition-all duration-300 
                ${darkTheme ? "bg-gray-700 border border-gray-600" : "bg-white border border-gray-300"}`}>

                <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

                {/* Registration Form */}
                <form onSubmit={handleRegister} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className={`${darkTheme ? "text-white" : "text-gray-700"}`}>Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            className={`input input-bordered w-full transition-all duration-200 
                                ${darkTheme ? "bg-gray-700 text-white border-gray-300" : "bg-white text-gray-900 border-gray-300"}`}
                            required
                        />
                    </div>

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
                            <span className={`${darkTheme ? "text-white" : "text-gray-700"}`}>Photo URL</span>
                        </label>
                        <input
                            name="photo"
                            type="url"
                            placeholder="Enter profile photo URL"
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
                    </div>

                    <button className="btn bg-[#048c7c] hover:bg-[#459e94] text-white w-full transition-all duration-200">
                        Register Now
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

                {/* Login Link */}
                <p className="text-center text-sm mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">Log in here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
