import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-screen flex flex-col items-center">
            <h2 className="text-3xl my-4 font-bold">Login Now</h2>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
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
                            className="btn btn-outline btn-secondary flex items-center gap-2 mb-2"
                        >
                            <FaGoogle /> Continue with Google
                        </button>
                        <button
                            className="btn btn-outline btn-secondary flex items-center gap-2 mb-2"
                        >
                            <FaFacebook /> Continue with Facebook
                        </button>
                        <button
                            className="btn btn-outline btn-secondary flex items-center gap-2"
                        >
                            <FaGithub /> Continue with GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;