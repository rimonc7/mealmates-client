import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hook/useAxiosSecure";

const MyFood = () => {
    const { user, loading } = useContext(AuthContext);
    const email = user?.email;
    const [foods, setFoods] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Do you want to delete?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `Don't Delete`
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://meal-mates-server.vercel.app/foods/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            const remaining = foods.filter((food) => food._id !== id);
                            setFoods(remaining);
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting food:", error);
                    });

                Swal.fire("Deleted", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Not Deleted", "", "info");
            }
        });
    };

    useEffect(() => {
        // if (email) {
        //     setDataLoading(true);
        //     fetch(`https://meal-mates-server.vercel.app/foods?email=${email}`)
        //         .then((res) => res.json())
        //         .then((data) => {
        //             setFoods(data);
        //             setDataLoading(false);
        //         })
        //         .catch((error) => {
        //             console.error("Error fetching data:", error);
        //             setDataLoading(false);
        //         });
        // } else {
        //     setDataLoading(false);
        // }
        axiosSecure.get(`/foods?email=${email}`)
            .then(res => {
                setFoods(res.data);
                setDataLoading(false);
            })

    }, [email]);

    if (loading || dataLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-infinity w-20"></span>
            </div>
        );
    }

    return (
        <div className="p-4 justify-center">
            {foods.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-screen space-y-6">
                    <p className="text-3xl uppercase font-bold text-center text-red-400">
                        You Haven't Added Any Food Yet.
                    </p>
                    <Link
                        to="/addFood"
                        className="btn text-xl text-white bg-blue-500 font-semibold hover:bg-blue-700"
                    >
                        Add Food
                    </Link>
                </div>
            ) : (
                <div>
                    <h2 className="text-4xl font-bold text-center my-6">
                        Your Added Foods
                    </h2>
                    <div className="space-y-4">
                        {foods.map((food) => {
                            const { _id, foodName, foodQuantity, expiredDateTime, foodImage } = food;
                            return (
                                <div
                                    key={_id}
                                    className="flex flex-col sm:flex-row items-start sm:items-center bg-white p-4 rounded-lg shadow-md space-y-4 sm:space-y-0 sm:space-x-4"
                                >
                                    <div className="w-full sm:w-auto">
                                        <img
                                            src={foodImage}
                                            alt={foodName}
                                            className="h-24 w-24 object-cover rounded-md"
                                        />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <p className="font-bold text-lg">{foodName}</p>
                                        <p className="text-sm text-gray-600">
                                            Quantity: <span className="font-medium">{foodQuantity}</span>
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Exp. Date:{" "}
                                            <span className="font-medium">
                                                {new Date(expiredDateTime).toLocaleDateString()}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleDelete(_id)}
                                            className="btn btn-ghost text-red-500 hover:text-red-700 p-2 rounded-full"
                                        >
                                            <MdDelete size={20} />
                                        </button>
                                        <Link
                                            to={`/updateFood/${_id}`}
                                            className="btn btn-ghost text-blue-500 hover:text-blue-700 p-2 rounded-full"
                                        >
                                            <FaRegEdit size={20} />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyFood;
