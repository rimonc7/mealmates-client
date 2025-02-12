import { Helmet } from "react-helmet-async";

const Mission = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Helmet>
        <title>Our Mission - MealMeats</title>
      </Helmet>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold  mb-6">Our Mission</h1>
        <p className="text-lg text-gray-700 mb-10">
          At MealMeats, we are dedicated to fighting hunger and reducing food waste
          through a network of passionate volunteers and generous donors.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold  mb-4">Our Purpose</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is to bridge the gap between food donors and those in need by
          creating a sustainable system for food distribution. We strive to ensure
          that no one goes hungry while also minimizing food waste in our communities.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold  mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700 mb-6">
          We envision a world where food is shared freely, where hunger is eradicated,
          and where the community comes together to support one another. MealMeats is
          committed to creating a more sustainable future for all, one meal at a time.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Goals</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Reduce food waste and ensure surplus food reaches those in need.</li>
          <li>Build strong community partnerships to foster a culture of giving.</li>
          <li>Raise awareness about the global hunger crisis and encourage action.</li>
          <li>Empower volunteers to make a difference in their communities.</li>
          <li>Provide sustainable solutions to food insecurity through innovative models.</li>
        </ul>
      </div>

      {/* Call to Action - Volunteer Section */}
      <div className="bg-[#048c7c] hover:bg-[#459e94] text-white text-center py-6 mt-12 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Join Us in Our Mission</h3>
        <p className="text-lg mb-6">
          Want to help us achieve our mission? Your contribution, whether through
          donating food or volunteering, can make a significant impact on the lives
          of those in need.
        </p>
        <a
          href="tel:+18001234567"
          className="bg-[#048c7c] hover:bg-[#459e94] px-6 py-3 rounded-lg text-xl transition-all"
        >
          Call Us: +1 (800) 123-4567
        </a>
      </div>
    </div>
  );
};

export default Mission;
