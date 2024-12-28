import { useContext, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FoodDetails = () => {
    const { user } = useContext(AuthContext);
    const food = useLoaderData();
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
        foodStatus,
    } = food;

    const formRef = useRef();

    const handleUpdateFood = (e, id) => {
        e.preventDefault();
        const form = formRef.current;
        const additionalNotes = form.additionalNotes.value;
        const data = {
            additionalNotes: additionalNotes
        }
        fetch(`http://localhost:5000/foods/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("Food Data Updated", {
                    autoClose: 1000,
                });
            });
    };

    return (
        <div className="max-w-4xl mx-auto my-8 p-6 bg-base-100 shadow-xl rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-6">{foodName}</h2>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/2">
                    <img
                        src={foodImage}
                        alt={foodName}
                        className="w-full h-64 object-cover rounded-lg"
                    />
                </div>
                <div className="lg:w-1/2 space-y-4">
                    <p className="text-lg">
                        <strong>Quantity:</strong> {foodQuantity}
                    </p>
                    <p className="text-lg">
                        <strong>Pickup Location:</strong> {pickupLocation}
                    </p>
                    <p className="text-lg">
                        <strong>Expires On:</strong>{" "}
                        {new Date(expiredDateTime).toLocaleString()}
                    </p>
                    <p className="text-lg">
                        <strong>Status:</strong>{" "}
                        <span
                            className={`font-semibold ${foodStatus === "available" ? "text-green-500" : "text-red-500"
                                }`}
                        >
                            {foodStatus}
                        </span>
                    </p>
                    <p className="text-lg">
                        <strong>Additional Notes:</strong> {additionalNotes}
                    </p>
                    <div className="flex items-center gap-4 mt-6">
                        <img
                            src={donatorImage}
                            alt={donatorName}
                            className="w-16 h-16 rounded-full border-2 border-gray-300"
                        />
                        <div>
                            <p className="text-lg font-semibold">{donatorName}</p>
                            <p className="text-sm text-gray-500">{donatorEmail}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={() => document.getElementById("my_modal_1").showModal()}
                className="btn btn-primary w-full mt-4 py-2 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Update Food Details
            </button>

            {/* Modal Details */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Request Food Details</h3>
                    <form ref={formRef} className="card-body">
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-600 mb-2">Food Information (Not Editable)</h4>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered bg-gray-100 text-gray-500 cursor-not-allowed"
                                    readOnly
                                    defaultValue={foodName}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Image</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered bg-gray-100 text-gray-500 cursor-not-allowed"
                                    readOnly
                                    defaultValue={foodImage}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food ID</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered bg-gray-100 text-gray-500 cursor-not-allowed"
                                    readOnly
                                    defaultValue={_id}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Donator Email</span>
                                </label>
                                <input
                                    type="email"
                                    className="input input-bordered bg-gray-100 text-gray-500 cursor-not-allowed"
                                    readOnly
                                    defaultValue={user.email}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Donator Name</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered bg-gray-100 text-gray-500 cursor-not-allowed"
                                    readOnly
                                    defaultValue={user.displayName}
                                />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-600 mb-2">Editable Fields</h4>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Additional Notes</span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered"
                                    placeholder="Add any additional notes here"
                                    defaultValue={additionalNotes}
                                    name="additionalNotes"
                                ></textarea>
                            </div>
                        </div>
                        <div className="form-control mt-4">
                            <button
                                onClick={(e) => handleUpdateFood(e, _id)}
                                type="button"
                                className="btn btn-primary"
                            >
                                Request Change
                            </button>
                        </div>
                    </form>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* Close button */}
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
