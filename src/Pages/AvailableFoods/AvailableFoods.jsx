import { useLoaderData } from "react-router-dom";
import FoodDonationCard from "../Home/FoodDonationCard";
import { useState, useEffect } from "react";

const AvailableFoods = () => {
    const foods = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");

    const [layout, setLayout] = useState(() => {
        const savedLayout = localStorage.getItem("layout");
        return savedLayout ? JSON.parse(savedLayout) : false;
    });
    useEffect(() => {
        localStorage.setItem("layout", JSON.stringify(layout));
    }, [layout]);


    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredFood = foods.filter(food =>
        food.foodName.toLowerCase().includes(searchQuery)
    );

    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-10">Explore the Available Food Donations</h2>
            <div className="flex justify-center my-5">
                <button
                    onClick={() => setLayout(!layout)}
                    className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200 rounded-lg shadow-lg"
                >
                    Layout
                </button>
            </div>
            <div className="my-4 w-11/12 mx-auto">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search Food"
                    className="p-2 w-fit border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div
                className={`${layout
                    ? "grid grid-cols-2 gap-5 my-10"
                    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10"
                    }`}
            >
                {filteredFood.map((food) => (
                    <FoodDonationCard key={food._id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default AvailableFoods;
