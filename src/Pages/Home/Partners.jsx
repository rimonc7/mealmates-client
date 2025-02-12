import { FaHandsHelping, FaHeart, FaGlobe, FaUtensils, FaSeedling, FaHandHoldingHeart } from "react-icons/fa";

const Partners = () => {
  const partners = [
    { name: "UNICEF", icon: <FaHandsHelping className="text-blue-500" /> },
    { name: "Red Cross", icon: <FaHeart className="text-red-500" /> },
    { name: "Feeding America", icon: <FaUtensils className="text-green-600" /> },
    { name: "World Food Program", icon: <FaGlobe className="text-indigo-600" /> },
    { name: "Food For The Poor", icon: <FaHandHoldingHeart className="text-rose-500" /> },
    { name: "Action Against Hunger", icon: <FaSeedling className="text-lime-600" /> },
  ];

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Partners & Sponsors</h2>
        <p className="text-lg text-gray-600 mb-10">
          We collaborate with global organizations to fight hunger and support food security.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 px-6 md:px-0">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl">{partner.icon}</div>
              <p className="text-lg font-semibold">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
