import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

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
        <div className="hero min-h-screen flex flex-col items-center">
            <h2 className="text-3xl my-4 font-bold">Add Food</h2>
            <div className="hero-content w-full flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-4xl shadow-2xl">
                    <form onSubmit={handleAddFood} className="card-body space-y-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Food Name</span>
                            </label>
                            <input name="foodName" type="text" placeholder="Enter food name" className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Food Image</span>
                            </label>
                            <input name="foodImage" type="url" placeholder="Enter food image URL" className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Food Quantity</span>
                            </label>
                            <input name="foodQuantity" type="number" placeholder="Enter food quantity" className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Pickup Location</span>
                            </label>
                            <input name="pickupLocation" type="text" placeholder="Enter pickup location" className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Expired Date/Time</span>
                            </label>
                            <input name="expiredDateTime" type="datetime-local" className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Additional Notes</span>
                            </label>
                            <textarea name="additionalNotes" placeholder="Enter any additional notes" className="textarea textarea-bordered w-full"></textarea>
                        </div>

                        <h3 className="text-lg font-semibold mt-4">Donator Information</h3>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Donator Image</span>
                            </label>
                            <input readOnly defaultValue={user.photoURL} name="donatorImage" type="url" placeholder="Enter donator image URL" className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Donator Name</span>
                            </label>
                            <input readOnly defaultValue={user.displayName} name="donatorName" type="text" placeholder="Enter donator name" className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Donator Email</span>
                            </label>
                            <input readOnly defaultValue={user.email} name="donatorEmail" type="email" placeholder="Enter donator email" className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Food Status</span>
                            </label>
                            <input name="foodStatus" type="text" value="available" readOnly className="input input-bordered w-full bg-gray-100" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">Add Food</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFood;
