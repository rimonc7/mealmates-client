import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { ThemeContext } from "../../Provider/ThemeProvider";

const FoodDetails = () => {
    const { user } = useContext(AuthContext);
    const { darkTheme } = useContext(ThemeContext); 
    const [food, setFood] = useState([]);
    const { id } = useParams();
    const formRef = useRef();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/foods/${id}`)
            .then(res => setFood(res.data));
    }, [id, axiosSecure]);

    const handleUpdateFood = (e) => {
        e.preventDefault();
        const additionalNotes = formRef.current.additionalNotes.value;
        const data = { additionalNotes };

        fetch(`http://localhost:5000/foods/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(() => {
                toast.success("Food Data Updated", { autoClose: 1000 });
            });
    };

    return (
        <div className={`max-w-4xl mx-auto my-8 p-6 rounded-lg transition-all duration-300 ${darkTheme ? "bg-gray-800 text-white shadow-lg" : "bg-base-100 shadow-xl"}`}>
            <Helmet>
                <title>Food Details - MealMeats</title>
            </Helmet>

            <h2 className={`text-4xl font-bold text-center mb-6 ${darkTheme ? "text-white" : "text-gray-800"}`}>{food.foodName}</h2>

            <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/2">
                    <img src={food.foodImage} alt={food.foodName} className="w-full h-64 object-cover rounded-lg" />
                </div>

                <div className="lg:w-1/2 space-y-4">
                    <p className="text-lg"><strong>Quantity:</strong> {food.foodQuantity}</p>
                    <p className="text-lg"><strong>Pickup Location:</strong> {food.pickupLocation}</p>
                    <p className="text-lg">
                        <strong>Expires On:</strong> {food.expiredDateTime ? new Date(food.expiredDateTime).toLocaleString() : "N/A"}
                    </p>
                    <p className="text-lg">
                        <strong>Status:</strong>{" "}
                        <span className={`font-semibold ${food.foodStatus === "available" ? "text-green-500" : "text-red-500"}`}>
                            {food.foodStatus}
                        </span>
                    </p>
                    <p className="text-lg"><strong>Additional Notes:</strong> {food.additionalNotes}</p>

                    <div className="flex items-center gap-4 mt-6">
                        <img src={food.donatorImage} alt={food.donatorName} className="w-16 h-16 rounded-full border-2 border-gray-300" />
                        <div>
                            <p className="text-lg font-semibold">{food.donatorName}</p>
                            <p className="text-sm text-gray-500">{food.donatorEmail}</p>
                        </div>
                    </div>
                </div>
            </div>

            <button
                onClick={() => document.getElementById("my_modal_1").showModal()}
                className={`btn w-full mt-4 py-2 rounded-lg text-white font-semibold ${darkTheme ? "bg-[#048c7c] hover:bg-[#459e94]" : "bg-[#048c7c] hover:bg-[#459e94]"}`}
            >
                Update Food Details
            </button>

            {/* Modal for Updating Food Details */}
            <dialog id="my_modal_1" className="modal">
                <div className={`modal-box ${darkTheme ? "bg-gray-700 text-white" : "bg-white text-gray-800"}`}>
                    <h3 className="font-bold text-lg">Request Food Details</h3>
                    <form ref={formRef} className="card-body">
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-600 mb-2">Food Information (Not Editable)</h4>

                            {[ 
                                { label: "Food Name", value: food.foodName },
                                { label: "Food Image", value: food.foodImage },
                                { label: "Food ID", value: food._id },
                                { label: "Food Donator Email", value: user?.email },
                                { label: "Food Donator Name", value: user?.displayName }
                            ].map((item, index) => (
                                <div key={index} className="form-control">
                                    <label className="label"><span className="label-text">{item.label}</span></label>
                                    <input
                                        type="text"
                                        className="input input-bordered bg-gray-100 text-gray-500 cursor-not-allowed"
                                        readOnly
                                        defaultValue={item.value}
                                    />
                                </div>
                            ))}
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-600 mb-2">Editable Fields</h4>
                            <div className="form-control">
                                <label className="label"><span className="label-text">Additional Notes</span></label>
                                <textarea
                                    className="textarea textarea-bordered"
                                    placeholder="Add any additional notes here"
                                    defaultValue={food.additionalNotes}
                                    name="additionalNotes"
                                ></textarea>
                            </div>
                        </div>

                        <div className="form-control mt-4">
                            <button
                                onClick={handleUpdateFood}
                                type="button"
                                className={`btn ${darkTheme ? "bg-[#048c7c] hover:bg-[#459e94]" : "bg-[#048c7c] hover:bg-[#459e94]"} text-white`}
                            >
                                Request Change
                            </button>
                        </div>
                    </form>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <ToastContainer />
        </div>
    );
};

export default FoodDetails;
