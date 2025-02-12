import { useLoaderData } from "react-router-dom";
import FoodDonationCard from "../Home/FoodDonationCard";
import { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FiCalendar, FiRepeat } from "react-icons/fi";
import { ThemeContext } from "../../Provider/ThemeProvider";

const AvailableFoods = () => {
    const { darkTheme } = useContext(ThemeContext); 
    const foods = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");

    const [layout, setLayout] = useState(() => {
        const savedLayout = localStorage.getItem("layout");
        return savedLayout ? JSON.parse(savedLayout) : false;
    });

    const [sortOrder, setSortOrder] = useState(false);

    useEffect(() => {
        localStorage.setItem("layout", JSON.stringify(layout));
    }, [layout]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredFood = foods.filter(food =>
        food.foodName.toLowerCase().includes(searchQuery)
    );

    const handleSort = () => {
        setSortOrder(!sortOrder);
    };

    const sortedFood = [...filteredFood].sort((a, b) => {
        const dateA = new Date(a.expiredDateTime);
        const dateB = new Date(b.expiredDateTime);
        return sortOrder ? dateA - dateB : dateB - dateA;
    });

    return (
        <div className={`min-h-screen ${darkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-900"} transition-all duration-300`}>
            <Helmet>
                <title>Available Foods - MealMeats</title>
            </Helmet>

            <h2 className="text-4xl font-bold text-center my-10">Explore the Available Food Donations</h2>

            <div className="flex flex-wrap items-center justify-center lg:justify-between mx-6 md:mx-24 my-5">
                {/* Search Input */}
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search Food"
                    className={`p-3 w-fit border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#459e94] 
                        ${darkTheme ? "bg-gray-800 text-white border-gray-600" : "bg-white text-gray-900 border-gray-300"}`}
                />

                <div className="flex flex-col lg:flex-row gap-3 mt-3 md:mt-0">
                    {/* Toggle Layout */}
                    <button
                        onClick={() => setLayout(!layout)}
                        className="flex items-center gap-2 px-5 py-2 text-white bg-[#048c7c] hover:bg-[#459e94] focus:ring-2 focus:ring-[#459e94] focus:outline-none transition-all duration-200 rounded-lg"
                    >
                        <FiRepeat />
                        Toggle Layout
                    </button>

                    {/* Sort by Expiration */}
                    <button
                        onClick={handleSort}
                        className="flex items-center gap-2 px-5 py-2 text-white bg-[#048c7c] hover:bg-[#459e94] focus:ring-2 focus:ring-[#459e94] focus:outline-none transition-all duration-200 rounded-lg"
                    >
                        <FiCalendar />
                        {sortOrder ? "Sorted By Expiration" : "Sort By Expiration"}
                    </button>
                </div>
            </div>

            {/* Food Grid */}
            <div
                className={`my-10 ${
                    layout
                        ? "grid grid-cols-2 gap-5"
                        : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                }`}
            >
                {sortedFood.map((food) => (
                    <FoodDonationCard key={food._id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default AvailableFoods;
