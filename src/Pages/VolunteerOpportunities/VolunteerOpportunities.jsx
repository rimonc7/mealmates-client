import { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaSignInAlt } from "react-icons/fa";
import { ThemeContext } from "../../Provider/ThemeProvider";

const VolunteerOpportunities = () => {
  const [opportunities, setOpportunities] = useState([]);
  const { darkTheme } = useContext(ThemeContext); 

  useEffect(() => {
    const fetchedOpportunities = [
      { id: 1, title: "Food Donation Distribution", description: "Help distribute food to those in need.", location: "New York", date: "2025-02-15" },
      { id: 2, title: "Community Cleanup", description: "Join us in cleaning up the local park.", location: "Los Angeles", date: "2025-02-18" },
      { id: 3, title: "Food Packaging Event", description: "Assist in packing food for distribution.", location: "Chicago", date: "2025-02-20" }
    ];
    setOpportunities(fetchedOpportunities);
  }, []);

  return (
    <div className={`min-h-screen py-12 transition-all duration-300 ${darkTheme ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"}`}>
      <Helmet>
        <title>Volunteer Opportunities - MealMeats</title>
      </Helmet>

      {/* Title */}
      <h2 className={`text-4xl font-bold mb-6 text-center ${darkTheme ? "text-white" : "text-gray-800"}`}>
        Volunteer Opportunities
      </h2>

      <div className={`w-full max-w-4xl mx-auto rounded-lg shadow-lg p-8 space-y-6 ${darkTheme ? "bg-gray-700" : "bg-white"}`}>
        {opportunities.length === 0 ? (
          <p className={`text-center ${darkTheme ? "text-gray-300" : "text-gray-600"}`}>
            No volunteer opportunities available at the moment.
          </p>
        ) : (
          opportunities.map((opportunity) => (
            <div key={opportunity.id} className={`p-6 rounded-lg shadow-md mb-4 ${darkTheme ? "bg-gray-600" : "bg-gray-100"}`}>
              <h3 className={`text-2xl font-semibold ${darkTheme ? "text-white" : "text-gray-800"}`}>
                {opportunity.title}
              </h3>
              <p className={`text-gray-600 ${darkTheme ? "text-gray-300" : "text-gray-600"}`}>
                {opportunity.description}
              </p>
              <p className={`text-sm ${darkTheme ? "text-gray-400" : "text-gray-500"}`}>Location: {opportunity.location}</p>
              <p className={`text-sm ${darkTheme ? "text-gray-400" : "text-gray-500"}`}>Date: {opportunity.date}</p>
            </div>
          ))
        )}

        {/* Call Us Button */}
        <div className="mt-6">
          <p className={`text-lg ${darkTheme ? "text-gray-300" : "text-gray-700"} mb-4`}>
            Want to be a volunteer? Please call us now:
          </p>
          <a
            href="tel:+18001234567"
            className={`btn w-full py-2 text-white ${darkTheme ? "bg-[#048c7c] hover:bg-[#459e94]" : "bg-[#048c7c] hover:bg-[#459e94]"}`}
          >
            Call Us: +1 (800) 123-4567
          </a>
        </div>
      </div>
    </div>
  );
};

export default VolunteerOpportunities;
