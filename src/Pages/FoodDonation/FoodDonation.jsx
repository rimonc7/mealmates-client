import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { ThemeContext } from "../../Provider/ThemeProvider";

const FoodDonation = () => {
  const { user } = useContext(AuthContext);
  const { darkTheme } = useContext(ThemeContext);  

  return (
    <div className={`min-h-screen flex flex-col items-center py-12 transition-all duration-300 ${darkTheme ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"}`}>
      <Helmet>
        <title>Food Donation - MealMeats</title>
      </Helmet>

      <h2 className={`text-4xl font-bold mb-6 ${darkTheme ? "text-white" : "text-gray-800"}`}>Food Donation</h2>
      <div className={`w-full max-w-4xl rounded-lg shadow-lg p-8 space-y-6 ${darkTheme ? "bg-gray-700" : "bg-white"}`}>
        <h3 className={`text-xl font-semibold ${darkTheme ? "text-white" : "text-gray-800"}`}>Donate Food Today</h3>
        <p className={`text-gray-600 ${darkTheme ? "text-gray-300" : "text-gray-600"}`}>
          Your donation can make a real difference in someone's life. Please help those in need by donating your food. Simply
          fill out the form and let us know what you want to donate!
        </p>

        <div className={`text-gray-600 space-y-4 ${darkTheme ? "text-gray-300" : "text-gray-600"}`}>
          <p>If you are logged in, you can donate your food directly.</p>
          <p>If you are not logged in, please register or log in first.</p>
        </div>

        <div className="mt-6">
          {user ? (
            <Link
              className={`btn w-full py-3 text-lg font-semibold ${darkTheme ? "bg-[#048c7c] hover:bg-[#459e94]" : "bg-[#048c7c] hover:bg-[#459e94]"} text-white`}
            >
              Add Food
            </Link>
          ) : (
            <div className="text-center">
              <p className={`text-lg mb-4 ${darkTheme ? "text-gray-300" : "text-gray-700"}`}>Please log in or register to donate food.</p>
              <Link
                className={`btn w-full py-3 flex items-center justify-center gap-2 ${darkTheme ? "bg-[#048c7c] hover:bg-[#459e94]" : "bg-[#048c7c] hover:bg-[#459e94]"} text-white`}
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
