import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
    const food = useLoaderData();
    const {
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
    } = food;

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
        </div>
    );
};

export default FoodDetails;
