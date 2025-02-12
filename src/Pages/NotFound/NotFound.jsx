import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>
      <h1 className="text-6xl font-bold text-[#048c7c] mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Oops! Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-6">
        The page you are looking for might have been removed or does not exist.
      </p>
      <Link
        to="/"
        className="bg-[#048c7c] hover:bg-[#459e94] text-white px-6 py-3 rounded-lg text-lg transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
