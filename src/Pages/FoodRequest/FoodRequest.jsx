import { MdSend } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";

const FoodRequest = () => {
    const { user } = useContext(AuthContext);
    const [foodReqData, setFoodReqData] = useState([]);
    const axiosSecure = useAxiosSecure();
    const handleRequest = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const foodReqData = Object.fromEntries(formData.entries());
        fetch("http://localhost:5000/foodReq", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(foodReqData),
            credentials: "include"
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

    useEffect(() => {
        // fetch(`http://localhost:5000/foodReq?email=${user.email}`,{
        //     credentials: "include"
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setFoodReqData(data);
        //     })
        //     .catch((error) => {
        //         console.error("Error fetching food requests:", error);
        //     });

        axiosSecure.get(`/foodReq?email=${user.email}`)
            .then(res => setFoodReqData(res.data))

    }, [user.email]);

    const handleStatusUpdate = (e, id) => {
        const data = {
            status: e.target.value,
        };

        fetch(`http://localhost:5000/foodRequest/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                Swal.fire({
                    title: "Food Request Data Updated",
                    icon: "success",
                    draggable: true,
                });
            });
    };

    return (
        <div className="p-8 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6">Food Request Form</h1>
            <form onSubmit={handleRequest} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-2">Donor Name</label>
                    <input
                        type="text"
                        name="donar_name"
                        className="input input-bordered w-full"
                        placeholder="Enter Donor Name"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Pickup Location</label>
                    <input
                        type="text"
                        name="location"
                        className="input input-bordered w-full"
                        placeholder="Enter Pickup Location"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Expire Date</label>
                    <input type="date" name="expire_date" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Request Date</label>
                    <input type="date" name="req_date" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input readOnly defaultValue={user.email} type="email" name="email" className="input input-bordered w-full" />
                </div>
                <button className="btn btn-primary w-full flex justify-center items-center gap-2">
                    Submit Request <MdSend className="text-xl" />
                </button>
            </form>

            {foodReqData.length === 0 ? (
                <p className="text-center mt-10 text-gray-500">No food requests available.</p>
            ) : (
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4">Your Food Requests</h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full bg-white rounded-lg shadow-lg border border-gray-200">
                            <thead className="bg-gray-100 text-sm">
                                <tr>
                                    <th className="px-4 py-2 text-left">Pickup Location</th>
                                    <th className="px-4 py-2 text-left">Request Date</th>
                                    <th className="px-4 py-2 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {foodReqData.map((singleFoodReqData) => (
                                    <tr
                                        key={singleFoodReqData._id}
                                        className="border-b last:border-none hover:bg-gray-50 text-sm"
                                    >
                                        <td className="px-4 py-2">{singleFoodReqData.location}</td>
                                        <td className="px-4 py-2">{singleFoodReqData.req_date}</td>
                                        <td className="px-4 py-2">
                                            <select
                                                onChange={(e) => handleStatusUpdate(e, singleFoodReqData._id)}
                                                defaultValue={singleFoodReqData.status || "Change Status"}
                                                className="select select-bordered w-full sm:w-auto"
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
