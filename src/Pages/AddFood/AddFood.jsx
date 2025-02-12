import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { ThemeContext } from "../../Provider/ThemeProvider";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const { darkTheme } = useContext(ThemeContext);  

  const handleAddFood = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const foodData = Object.fromEntries(formData.entries());
    
    fetch('https://meal-mates-server.vercel.app/foods', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(foodData)
    })
      .then(res => res.json())
      .then(data => {
        Swal.fire({
          title: "Food Data Added!",
          icon: "success",
          draggable: true
        });
        e.target.reset();
      })
      .catch(error => {
        Swal.fire({
          title: "Error!",
          text: "There was an error adding the food data.",
          icon: "error",
          draggable: true
        });
      });
  };

  return (
    <div className={`min-h-screen flex flex-col items-center py-10 transition-all duration-300 ${darkTheme ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"}`}>
      <Helmet>
        <title>Add Food - MealMeats</title>
      </Helmet>
      
      <h2 className={`text-4xl font-bold mb-8 ${darkTheme ? "text-white" : "text-gray-800"}`}>Add Food</h2>
      
      <div className={`w-full max-w-4xl rounded-lg shadow-lg p-8 ${darkTheme ? "bg-gray-700" : "bg-white"}`}>
        <form onSubmit={handleAddFood} className="space-y-6">
          <div className="form-control w-full">
            <label className={`label font-semibold ${darkTheme ? "text-white" : "text-gray-700"}`}>Food Name</label>
            <input
              name="foodName"
              type="text"
              placeholder="Enter food name"
              className={`input input-bordered w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#048c7c] ${darkTheme ? "bg-gray-600 text-white" : "bg-white"}`}
              required
            />
          </div>

          <div className="form-control w-full">
            <label className={`label font-semibold ${darkTheme ? "text-white" : "text-gray-700"}`}>Food Image</label>
            <input
              name="foodImage"
              type="url"
              placeholder="Enter food image URL"
              className={`input input-bordered w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#048c7c] ${darkTheme ? "bg-gray-600 text-white" : "bg-white"}`}
              required
            />
          </div>

          <div className="form-control w-full">
            <label className={`label font-semibold ${darkTheme ? "text-white" : "text-gray-700"}`}>Food Quantity</label>
            <input
              name="foodQuantity"
              type="number"
              placeholder="Enter food quantity"
              className={`input input-bordered w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#048c7c] ${darkTheme ? "bg-gray-600 text-white" : "bg-white"}`}
              required
            />
          </div>

          <div className="form-control w-full">
            <label className={`label font-semibold ${darkTheme ? "text-white" : "text-gray-700"}`}>Pickup Location</label>
            <input
              name="pickupLocation"
              type="text"
              placeholder="Enter pickup location"
              className={`input input-bordered w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#048c7c] ${darkTheme ? "bg-gray-600 text-white" : "bg-white"}`}
              required
            />
          </div>

          <div className="form-control w-full">
            <label className={`label font-semibold ${darkTheme ? "text-white" : "text-gray-700"}`}>Expired Date/Time</label>
            <input
              name="expiredDateTime"
              type="datetime-local"
              className={`input input-bordered w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#048c7c] ${darkTheme ? "bg-gray-600 text-white" : "bg-white"}`}
              required
            />
          </div>

          <div className="form-control w-full">
            <label className={`label font-semibold ${darkTheme ? "text-white" : "text-gray-700"}`}>Additional Notes</label>
            <textarea
              name="additionalNotes"
              placeholder="Enter any additional notes"
              className={`textarea textarea-bordered w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#048c7c] ${darkTheme ? "bg-gray-600 text-white" : "bg-white"}`}
            ></textarea>
          </div>

          <h3 className={`text-xl font-semibold mt-6 ${darkTheme ? "text-white" : "text-gray-800"}`}>Donator Information</h3>

          <div className="form-control w-full">
            <label className={`label font-semibold ${darkTheme ? "text-white" : "text-gray-700"}`}>Donator Image</label>
            <input
              readOnly
              defaultValue={user.photoURL}
              name="donatorImage"
              type="url"
              placeholder="Enter donator image URL"
              className={`input input-bordered w-full  border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#048c7c] ${darkTheme ? "bg-gray-600 text-white" : "bg-white"}`}
              required
            />
          </div>

          <div className="form-control w-full">
            <label className={`label font-semibold ${darkTheme ? "text-white" : "text-gray-600"}`}>Donator Name</label>
            <input
              readOnly
              defaultValue={user.displayName}
              name="donatorName"
              type="text"
              placeholder="Enter donator name"
              className={`input input-bordered w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#048c7c] ${darkTheme ? "bg-gray-600 text-white" : "bg-white"}`}
              required
            />
          </div>

          <div className="form-control w-full">
            <label className={`label font-semibold ${darkTheme ? "text-white" : "text-gray-600"}`}>Donator Email</label>
            <input
              readOnly
              defaultValue={user.email}
              name="donatorEmail"
              type="email"
              placeholder="Enter donator email"
              className={`input input-bordered w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#048c7c] ${darkTheme ? "bg-gray-600 text-white" : "bg-white"}`}
              required
            />
          </div>

          <div className="form-control w-full">
            <label className={`label font-semibold ${darkTheme ? "text-white" : "text-gray-600"}`}>Food Status</label>
            <input
              name="foodStatus"
              type="text"
              value="available"
              readOnly
              className={`input input-bordered w-full border-gray-300 bg-gray-100 focus:outline-none ${darkTheme ? "bg-gray-600 text-white" : "bg-gray-100"}`}
            />
          </div>

          <div className="form-control mt-6">
            <button className={`btn w-full py-3 text-lg text-white font-semibold ${darkTheme ? "bg-[#048c7c] hover:bg-[#459e94]" : "bg-[#048c7c] hover:bg-[#459e94]"}`}>Add Food</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
