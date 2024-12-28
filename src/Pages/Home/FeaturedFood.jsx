import { useEffect, useState } from "react";
import FoodDonationCard from "./FoodDonationCard";

const FeaturedFood = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods?limit=6')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
            })
            .catch(error => {
                console.error("Error fetching foods:", error);
            });
    }, []);

    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-6 mx-5">Featured Food Donations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {
                    foods.map(food => (
                        <FoodDonationCard key={food._id} food={food} />
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturedFood;
