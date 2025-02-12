import { Link } from "react-router-dom";
import { motion } from "motion/react"

const FoodDonationCard = ({ food }) => {
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
    <div
      className="card card-bordered shadow-lg w-full max-w-xs mx-auto bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <motion.figure
        whileHover={{ scale: 1.1 }}
        className="relative">
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
          <span className="text-sm text-gray-500">
            Expires: {new Date(expiredDateTime).toLocaleString()}
          </span>
          <span
            className={`font-semibold ${foodStatus === "available" ? "text-[#048c7c] border px-1 capitalize" : "text-red-500 border px-1 capitalize"}`}
          >
            {foodStatus}
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-2">Additional Notes: {additionalNotes}</p>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img
              src={donatorImage}
              alt=''
              className="w-10 h-10 rounded-full border-2 border-gray-300"
            />
            <div className="ml-2">
              <p className="font-semibold text-sm">{donatorName}</p>
              <p className="text-xs text-gray-500">{donatorEmail}</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Quantity: {foodQuantity}</p>
          <p className="text-sm text-gray-500">Pickup Location: {pickupLocation}</p>
        </div>

        <Link to={`/food/${_id}`} className="btn w-full mt-4 py-2 rounded-lg text-white font-semibold bg-[#048c7c] hover:bg-[#459e94] focus:outline-none focus:ring-2 focus:ring-blue-400">
          Food Details
        </Link>
      </div>
    </div>
  );
};

export default FoodDonationCard;
