import { MdSend } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { ThemeContext } from "../../Provider/ThemeProvider";
const FoodRequest = () => {
  const { user } = useContext(AuthContext);
  const { darkTheme } = useContext(ThemeContext);
  const axiosSecure = useAxiosSecure();

  const handleRequest = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const foodReqData = Object.fromEntries(formData.entries());

    fetch("https://meal-mates-server.vercel.app/foodReq", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(foodReqData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Food Pickup Request Sent!",
          icon: "success",
          draggable: true,
        });
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "There was an error adding the food request.",
          icon: "error",
          draggable: true,
        });
      });
  };

  const { isPending, data: foodReqData } = useQuery({
    queryKey: ['foodReqData', user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/foodReq?email=${user.email}`);
      return response.data;
    },
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-infinity w-20"></span>
      </div>
    );
  }

  return (
    <div className={`p-8 min-h-screen transition-all duration-300 ${darkTheme ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"}`}>
      <Helmet>
        <title>Food Request - MealMeats</title>
      </Helmet>
      <h1 className={`text-4xl font-bold text-center mb-6 ${darkTheme ? "text-white" : "text-gray-800"}`}>Food Request Form</h1>

      <form onSubmit={handleRequest} className={`max-w-lg mx-auto p-6 rounded-lg shadow-lg space-y-6 ${darkTheme ? "bg-gray-700 text-white" : "bg-white"}`}>
        <div>
          <label className="block text-sm font-medium mb-2">Donor Name</label>
          <input
            type="text"
            name="donar_name"
            className={`input input-bordered w-full border-gray-300 focus:ring-[#048c7c] focus:border-[#048c7c] ${darkTheme ? "bg-gray-600 text-white" : "bg-white"}`}
            placeholder="Enter Donor Name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Pickup Location</label>
          <input
            type="text"
            name="location"
            className={`input input-bordered w-full border-gray-300 focus:ring-[#048c7c] focus:border-[#048c7c] ${darkTheme ? "bg-gray-600 text-white" : "bg-white"}`}
            placeholder="Enter Pickup Location"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Expire Date</label>
          <input
            type="date"
            name="expire_date"
            className={`input input-bordered w-full border-gray-300 focus:ring-[#048c7c] focus:border-[#048c7c] ${darkTheme ? "bg-gray-600 text-white" : "bg-white"}`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Request Date</label>
          <input
            type="date"
            name="req_date"
            className={`input input-bordered w-full border-gray-300 focus:ring-[#048c7c] focus:border-[#048c7c] ${darkTheme ? "bg-gray-600 text-white" : "bg-white"}`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            readOnly
            defaultValue={user.email}
            type="email"
            name="email"
            className={`input input-bordered w-full border-gray-300 focus:ring-[#048c7c] focus:border-[#048c7c] ${darkTheme ? "bg-gray-600 text-white" : "bg-white"}`}
          />
        </div>
        <button
          type="submit"
          className={`btn w-full bg-[#048c7c] hover:bg-[#459e94] text-white flex justify-center items-center gap-2 p-3 text-lg font-semibold rounded-md ${darkTheme ? "bg-[#048c7c]" : "bg-[#048c7c]"}`}
        >
          Submit Request <MdSend className="text-xl" />
        </button>
      </form>

      {foodReqData?.length === 0 ? (
        <p className="text-center mt-10 text-gray-500">No food requests available.</p>
      ) : (
        <div className="mt-10">
          <h2 className={`text-2xl font-semibold mb-4 ${darkTheme ? "text-white" : "text-gray-800"}`}>Your Food Requests</h2>
          <div className="overflow-x-auto">
            <table className={`table-auto w-full rounded-lg shadow-lg border border-gray-200 ${darkTheme ? "bg-gray-800 text-white" : "bg-white"}`}>
              <thead className={`${darkTheme ? "bg-gray-700" : "bg-gray-100"} text-sm`}>
                <tr>
                  <th className="px-4 py-2 text-left">Pickup Location</th>
                  <th className="px-4 py-2 text-left">Request Date</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {foodReqData?.map((singleFoodReqData) => (
                  <tr
                    key={singleFoodReqData._id}
                    className="border-b last:border-none hover:bg-gray-50 text-sm"
                  >
                    <td className={`px-4 py-2 ${darkTheme ? 'text-white' : 'text-gray-700'}`}>{singleFoodReqData.location}</td>
                    <td className={`px-4 py-2 ${darkTheme ? 'text-white' : 'text-gray-700'}`}>{singleFoodReqData.req_date}</td>
                    <td className="px-4 py-2">
                      <select
                        onChange={(e) => handleStatusUpdate(e, singleFoodReqData._id)}
                        defaultValue={singleFoodReqData.status || "Change Status"}
                        className={`select select-bordered w-full sm:w-auto text-gray-700 ${darkTheme ? "bg-gray-700 text-white" : "bg-white"}`}
                      >
                        <option disabled>Change Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Completed">Completed</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodRequest;
