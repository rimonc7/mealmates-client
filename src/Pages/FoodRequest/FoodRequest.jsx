import { MdSend } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";

const FoodRequest = () => {
    const { user } = useContext(AuthContext);
    const [foodReqData, setFoodReqData] = useState([]);

    const handleRequest = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const foodReqData = Object.fromEntries(formData.entries());
        fetch('http://localhost:5000/foodReq', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(foodReqData)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: "Food Pickup Request Sent!",
                    icon: "success",
                    draggable: true
                });
                e.target.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    title: "Error!",
                    text: "There was an error adding the food request.",
                    icon: "error",
                    draggable: true
                });
            });
    }

    useEffect(() => {
        fetch(`http://localhost:5000/foodReq?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log("Fetched Food Requests:", data); // Log fetched data to verify
                setFoodReqData(data);
            })
            .catch(error => {
                console.error('Error fetching food requests:', error);
            });
    }, [user.email]);

    console.log("Food Request Data:", foodReqData); // Log the state after setting

    return (
        <div>
            <div className="p-8 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold text-center mb-6">Food Request Form</h1>
                <form onSubmit={handleRequest} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Donor Name</label>
                        <input
                            type="text"
                            name="donar_name"
                            className="input input-bordered w-full"
                            placeholder="Enter Donor Name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Pickup Location</label>
                        <input
                            type="text"
                            name="location"
                            className="input input-bordered w-full"
                            placeholder="Enter Pickup Location"
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

                {/* Render Food Requests */}
                {foodReqData.length === 0 ? (
                    <p>No food requests available.</p> // Add a message when there are no requests
                ) : (
                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold mb-4">Your Food Requests</h2>
                        <div className="overflow-x-auto">
                            <table className="table w-full bg-white rounded-lg shadow-lg">
                                <thead>
                                    <tr>
                                        <th>Pickup Location</th>
                                        <th>Request Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {foodReqData.map((singleFoodReqData) => (
                                        <tr key={singleFoodReqData._id}>
                                            <td>{singleFoodReqData.location}</td>
                                            <td>{singleFoodReqData.req_date}</td>
                                            <td>
                                                <select
                                                    value={singleFoodReqData.status}
                                                    className="select select-bordered"
                                                >
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
        </div>
    );
};

export default FoodRequest;
