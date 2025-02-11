import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { loginWithEmail, loginWithGoogle, errorMessage, setErrorMessage } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';
    console.log(from)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setErrorMessage('');
        loginWithEmail(email, password)
            .then((userCredential) => {
                form.reset();
                navigate(from);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    const handleGoogleLogin = () => {
        setErrorMessage('');
        loginWithGoogle()
            .then((userCredential) => {
                navigate(from);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen flex flex-col items-center">
            <Helmet>
                <title>Login - MealMeats</title>
            </Helmet>
            <h2 className="text-3xl my-4 font-bold">Login Now</h2>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className="form-control px-6 pb-6">
                        {/* Social Login Buttons */}
                        <button
                            onClick={handleGoogleLogin}
                            className="btn btn-outline btn-secondary flex items-center gap-2 mb-2"
                        >
                            <FaGoogle /> Continue with Google
                        </button>
                    </div>
                    <div className="form-control mt-4">
                        <p className=" my-4 text-sm text-center">
                            Don't have an Account?{" "}
                            <Link to={'/register'} className="text-blue-500 link link-hover">Register Here</Link>
                        </p>
                        {errorMessage && (
                            <div className="mt-4 text-center">
                                <p className="text-red-500">{errorMessage}</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
