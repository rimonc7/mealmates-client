import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
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
    } = useLoaderData();


    const handleUpdate = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const foodData = Object.fromEntries(formData.entries());
        fetch(`http://localhost:5000/updateFood/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(foodData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Food Data Updated!",
                        icon: "success",
                        draggable: true
                    });
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "There was an error updating the food data.",
                        icon: "error",
                        draggable: true
                    });
                }
            })
    };



    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold text-center mb-6">Update Food Information</h1>

            <form onSubmit={handleUpdate} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-xl text-gray-700 mb-4">Food Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Food Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered"
                                name="foodName"
                                defaultValue={foodName}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Food Image URL</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered"
                                name="foodImage"
                                defaultValue={foodImage}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Food Quantity</span>
                            </label>
                            <input
                                type="number"
                                className="input input-bordered"
                                name="foodQuantity"
                                defaultValue={foodQuantity}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Pickup Location</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered"
                                name="pickupLocation"
                                defaultValue={pickupLocation}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Expiration Date and Time</span>
                            </label>
                            <input
                                type="datetime-local"
                                className="input input-bordered"
                                name="expiredDateTime"
                                defaultValue={expiredDateTime}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Additional Notes</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered"
                                name="additionalNotes"
                                placeholder="Add any additional notes here"
                                defaultValue={additionalNotes}
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-xl text-gray-700 mb-4">Donator Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Donator Image URL</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered"
                                name="donatorImage"
                                defaultValue={donatorImage}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Donator Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered"
                                name="donatorName"
                                defaultValue={donatorName}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Donator Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered"
                                name="donatorEmail"
                                defaultValue={donatorEmail}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Food Status</span>
                            </label>
                            <select
                                name="foodStatus"
                                className="select select-bordered"
                                defaultValue={foodStatus}
                            >
                                <option value="available">Available</option>
                                <option value="unavailable">Unavailable</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-control mt-4">
                    <button
                        type="submit"
                        className="btn btn-primary w-full py-3 text-white font-semibold rounded-lg hover:bg-blue-700"
                    >
                        Update Food Information
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateFood;
