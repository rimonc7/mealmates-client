import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const FoodDonation = () => {
  const { user } = useContext(AuthContext);
  

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-12">
      <Helmet>
        <title>Food Donation - MealMeats</title>
      </Helmet>

      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Food Donation</h2>

      {/* Content Section */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Donate Food Today</h3>
        <p className="text-gray-600">
          Your donation can make a real difference in someone's life. Please help those in need by donating your food. Simply
          fill out the form and let us know what you want to donate!
        </p>

        {/* Donation Instructions */}
        <div className="text-gray-600 space-y-4">
          <p>If you are logged in, you can donate your food directly.</p>
          <p>If you are not logged in, please register or log in first.</p>
        </div>

        {/* Call to Action / Button */}
        <div className="mt-6">
          {user ? (
            <Link
              className="btn bg-[#048c7c] hover:bg-[#459e94] text-white w-full py-3 text-lg font-semibold"
            >
              Add Food
            </Link>
          ) : (
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-4">Please log in or register to donate food.</p>
              <Link
                className="btn bg-[#048c7c] hover:bg-[#459e94] text-white w-full py-3 flex items-center justify-center gap-2"
              >
                Register Now <FaSignInAlt />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodDonation;
