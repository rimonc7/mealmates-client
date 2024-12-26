import { useLoaderData } from "react-router-dom";
import FoodDonationCard from "../Home/FoodDonationCard";

const AvailableFoods = () => {
    const foods = useLoaderData();
    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-10">Explore the Available Food Donations</h2>
            <div className="grid grid-cols-3 gap-5 my-10">
                {
                    foods.map(food => (
                        <FoodDonationCard key={food._id} food={food} />
                    ))
                }
            </div>
        </div>
    );
};

export default AvailableFoods;