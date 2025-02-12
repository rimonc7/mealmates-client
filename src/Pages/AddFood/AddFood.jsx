import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const handleAddFood = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const foodData = Object.fromEntries(formData.entries());
    
    fetch('http://localhost:5000/foods', {
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
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-12">
      <Helmet>
        <title>Add Food - MealMeats</title>
      </Helmet>
      
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Add Food</h2>
      
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <form onSubmit={handleAddFood} className="space-y-6">
          {/* Food Name */}
          <div className="form-control w-full">
            <label className="label text-gray-700 font-semibold">Food Name</label>
            <input
              name="foodName"
              type="text"
              placeholder="Enter food name"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#048c7c]"
              required
            />
          </div>

          {/* Food Image */}
          <div className="form-control w-full">
            <label className="label text-gray-700 font-semibold">Food Image</label>
            <input
              name="foodImage"
              type="url"
              placeholder="Enter food image URL"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#048c7c]"
              required
            />
          </div>

          {/* Food Quantity */}
          <div className="form-control w-full">
            <label className="label text-gray-700 font-semibold">Food Quantity</label>
            <input
              name="foodQuantity"
              type="number"
              placeholder="Enter food quantity"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#048c7c]"
              required
            />
          </div>

          {/* Pickup Location */}
          <div className="form-control w-full">
            <label className="label text-gray-700 font-semibold">Pickup Location</label>
            <input
              name="pickupLocation"
              type="text"
              placeholder="Enter pickup location"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#048c7c]"
              required
            />
          </div>

          {/* Expired Date/Time */}
          <div className="form-control w-full">
            <label className="label text-gray-700 font-semibold">Expired Date/Time</label>
            <input
              name="expiredDateTime"
              type="datetime-local"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#048c7c]"
              required
            />
          </div>

          {/* Additional Notes */}
          <div className="form-control w-full">
            <label className="label text-gray-700 font-semibold">Additional Notes</label>
            <textarea
              name="additionalNotes"
              placeholder="Enter any additional notes"
              className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#048c7c]"
            ></textarea>
          </div>

          <h3 className="text-xl font-semibold mt-6 text-gray-800">Donator Information</h3>

          {/* Donator Image */}
          <div className="form-control w-full">
            <label className="label text-gray-700 font-semibold">Donator Image</label>
            <input
              readOnly
              defaultValue={user.photoURL}
              name="donatorImage"
              type="url"
              placeholder="Enter donator image URL"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#048c7c]"
              required
            />
          </div>

          {/* Donator Name */}
          <div className="form-control w-full">
            <label className="label text-gray-700 font-semibold">Donator Name</label>
            <input
              readOnly
              defaultValue={user.displayName}
              name="donatorName"
              type="text"
              placeholder="Enter donator name"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#048c7c]"
              required
            />
          </div>

          {/* Donator Email */}
          <div className="form-control w-full">
            <label className="label text-gray-700 font-semibold">Donator Email</label>
            <input
              readOnly
              defaultValue={user.email}
              name="donatorEmail"
              type="email"
              placeholder="Enter donator email"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#048c7c]"
              required
            />
          </div>

          {/* Food Status */}
          <div className="form-control w-full">
            <label className="label text-gray-700 font-semibold">Food Status</label>
            <input
              name="foodStatus"
              type="text"
              value="available"
              readOnly
              className="input input-bordered w-full bg-gray-100 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn bg-[#048c7c] hover:bg-[#459e94] w-full py-3 text-lg text-white font-semibold">Add Food</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
