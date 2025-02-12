import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

const VolunteerOpportunities = () => {
    const [opportunities, setOpportunities] = useState([]);

    // Fetching the volunteer opportunities (you can replace this with a real API call)
    useEffect(() => {
        // Sample data for volunteer opportunities
        const fetchedOpportunities = [
            { id: 1, title: "Food Donation Distribution", description: "Help distribute food to those in need.", location: "New York", date: "2025-02-15" },
            { id: 2, title: "Community Cleanup", description: "Join us in cleaning up the local park.", location: "Los Angeles", date: "2025-02-18" },
            { id: 3, title: "Food Packaging Event", description: "Assist in packing food for distribution.", location: "Chicago", date: "2025-02-20" }
        ];
        setOpportunities(fetchedOpportunities);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <Helmet>
                <title>Volunteer Opportunities - MealMeats</title>
            </Helmet>

            {/* Title */}
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Volunteer Opportunities</h2>

            {/* List of Opportunities */}
            <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-6">
                {opportunities.length === 0 ? (
                    <p className="text-center text-gray-600">No volunteer opportunities available at the moment.</p>
                ) : (
                    opportunities.map((opportunity) => (
                        <div key={opportunity.id} className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
                            <h3 className="text-2xl font-semibold text-gray-800">{opportunity.title}</h3>
                            <p className="text-gray-600">{opportunity.description}</p>
                            <p className="text-sm text-gray-500">Location: {opportunity.location}</p>
                            <p className="text-sm text-gray-500">Date: {opportunity.date}</p>
                        </div>
                    ))
                )}

                {/* Call Us Button */}
                <div className="mt-6">
                    <p className="text-lg text-gray-700 mb-4">Want to be a volunteer? Please call us now:</p>
                    <a href="tel:+18001234567" className="btn bg-[#048c7c] hover:bg-[#459e94] w-full py-2 text-white">
                        Call Us: +1 (800) 123-4567
                    </a>
                </div>

            </div>
        </div>
    );
};

export default VolunteerOpportunities;
