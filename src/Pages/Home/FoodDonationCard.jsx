import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/ThemeProvider";

const FoodDonationCard = ({ food }) => {
  const { darkTheme } = useContext(ThemeContext);

  const {
    _id,
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
    donatorImage,
    donatorName,
    donatorEmail,
    foodStatus
  } = food;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`card card-bordered shadow-lg w-full max-w-xs mx-auto rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out ${
        darkTheme ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900"
      }`}
    >
      <motion.figure whileHover={{ scale: 1.05 }} className="relative">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
          <h3 className="text-lg font-semibold">{foodName}</h3>
        </div>
      </motion.figure>

      <div className="card-body p-4">
        <div className="flex justify-between items-center mb-2">
          <span className={`text-sm ${darkTheme ? "text-gray-300" : "text-gray-500"}`}>
            Expires: {expiredDateTime ? new Date(expiredDateTime).toLocaleDateString() : "N/A"}
          </span>
          <span
            className={`px-2 py-1 text-xs font-semibold rounded-lg ${
              foodStatus === "available"
                ? "bg-green-100 text-green-600 border border-green-400"
                : "bg-red-100 text-red-600 border border-red-400"
            }`}
          >
            {foodStatus}
          </span>
        </div>

        {additionalNotes && (
          <p className={`text-sm mb-2 ${darkTheme ? "text-gray-300" : "text-gray-600"}`}>
            <strong>Notes:</strong> {additionalNotes}
          </p>
        )}

        <div className="flex items-center gap-3 mb-4">
          <img
            src={donatorImage}
            alt={donatorName}
            className="w-10 h-10 rounded-full border-2 border-gray-300"
          />
          <div>
            <p className="font-semibold text-sm">{donatorName}</p>
            <p className={`text-xs ${darkTheme ? "text-gray-400" : "text-gray-500"}`}>
              {donatorEmail}
            </p>
          </div>
        </div>

        <div className="mb-4 text-sm">
          <p className="font-semibold">Quantity: {foodQuantity}</p>
          <p className={`${darkTheme ? "text-gray-300" : "text-gray-500"}`}>📍 {pickupLocation}</p>
        </div>

        <Link
          to={`/food/${_id}`}
          className="block text-center w-full py-2 rounded-lg text-white font-semibold bg-[#048c7c] hover:bg-[#459e94] transition-all duration-200"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default FoodDonationCard;
