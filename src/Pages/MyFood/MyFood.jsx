import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const MyFood = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const email = user?.email; // Ensure `user` exists
    const [foods, setFoods] = useState([]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/foods/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    const remaining = foods.filter((food) => food._id !== id);
                    setFoods(remaining);
                }
            });
    };

    useEffect(() => {
        if (email) {
            setLoading(true);
            fetch(`http://localhost:5000/foods?email=${email}`)
                .then((res) => res.json())
                .then((data) => {
                    setFoods(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setLoading(false);
                });
        }
    }, [email, setLoading]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-infinity w-20"></span>
            </div>
        );
    }

    return (
        <div>
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
                    <h2 className="text-4xl font-bold text-center my-14">
                        Your Added Foods
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Food</th>
                                    <th>Quantity</th>
                                    <th>Exp. Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {foods.map((food) => {
                                    const { _id, foodName, foodQuantity, expiredDateTime, foodImage } = food;
                                    return (
                                        <tr key={_id}>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={foodImage}
                                                                alt={foodName}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{foodName}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge badge-ghost badge-sm">{foodQuantity}</span>
                                            </td>
                                            <td>{new Date(expiredDateTime).toLocaleDateString()}</td>
                                            <th>
                                                <button
                                                    onClick={() => handleDelete(_id)}
                                                    className="btn btn-ghost text-2xl text-red-500 hover:text-red-700"
                                                >
                                                    <MdDelete />
                                                </button>
                                            </th>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyFood;
