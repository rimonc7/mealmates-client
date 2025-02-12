import { useEffect, useState, useContext } from "react";
import FoodDonationCard from "./FoodDonationCard";
import { motion } from "motion/react";
import { easeOut } from "motion";
import { ThemeContext } from "../../Provider/ThemeProvider";

const FeaturedFood = () => {
    const [foods, setFoods] = useState([]);
    const { darkTheme } = useContext(ThemeContext); 

    useEffect(() => {
        fetch("http://localhost:5000/foods?limit=6")
            .then((res) => res.json())
            .then((data) => {
                setFoods(data);
            })
            .catch((error) => {
                console.error("Error fetching foods:", error);
            });
    }, []);

    return (
        <div className={`${darkTheme ? "bg-gray-900 text-white" : "bg-white text-gray-900"} p-6`}>
            <motion.h2
                whileHover={{ scale: 1.1 }}
                className="text-4xl font-bold text-center my-6 mx-5"
            >
                Featured Food Donations
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {foods.map((food) => (
                    <FoodDonationCard key={food._id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedFood;
