import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { ThemeContext } from "../../Provider/ThemeProvider";

const Mission = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen p-8 ${darkTheme ? "bg-gray-800" : "bg-gray-50"}`}>
      <Helmet>
        <title>Our Mission - MealMeats</title>
      </Helmet>

      <div className={`text-center mb-12 ${darkTheme ? "text-white" : "text-gray-800"}`}>
        <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
        <p className={`text-lg mb-10 ${darkTheme ? "text-gray-300" : "text-gray-700"}`}>
          At MealMeats, we are dedicated to fighting hunger and reducing food waste
          through a network of passionate volunteers and generous donors.
        </p>
      </div>

      <div className={`p-8 rounded-lg shadow-lg mb-12 ${darkTheme ? "bg-gray-700" : "bg-white"}`}>
        <h2 className={`text-3xl font-semibold mb-4 ${darkTheme ? "text-[#48b2b7]" : "text-[#048c7c]"}`}>Our Purpose</h2>
        <p className={`text-lg mb-6 ${darkTheme ? "text-gray-300" : "text-gray-700"}`}>
          Our mission is to bridge the gap between food donors and those in need by
          creating a sustainable system for food distribution. We strive to ensure
          that no one goes hungry while also minimizing food waste in our communities.
        </p>
      </div>

      <div className={`p-8 rounded-lg shadow-lg mb-12 ${darkTheme ? "bg-gray-700" : "bg-white"}`}>
        <h2 className={`text-3xl font-semibold mb-4 ${darkTheme ? "text-[#48b2b7]" : "text-[#048c7c]"}`}>Our Vision</h2>
        <p className={`text-lg mb-6 ${darkTheme ? "text-gray-300" : "text-gray-700"}`}>
          We envision a world where food is shared freely, where hunger is eradicated,
          and where the community comes together to support one another. MealMeats is
          committed to creating a more sustainable future for all, one meal at a time.
        </p>
      </div>

      <div className={`p-8 rounded-lg shadow-lg mb-12 ${darkTheme ? "bg-gray-700" : "bg-white"}`}>
        <h2 className={`text-3xl font-semibold mb-4 ${darkTheme ? "text-[#48b2b7]" : "text-[#048c7c]"}`}>Our Goals</h2>
        <ul className={`list-disc list-inside text-lg ${darkTheme ? "text-gray-300" : "text-gray-700"}`}>
          <li>Reduce food waste and ensure surplus food reaches those in need.</li>
          <li>Build strong community partnerships to foster a culture of giving.</li>
          <li>Raise awareness about the global hunger crisis and encourage action.</li>
          <li>Empower volunteers to make a difference in their communities.</li>
          <li>Provide sustainable solutions to food insecurity through innovative models.</li>
        </ul>
      </div>

      <div className={`text-white text-center py-6 mt-12 rounded-lg ${darkTheme ? "bg-[#48b2b7]" : "bg-[#048c7c]"}`}>
        <h3 className="text-2xl font-semibold mb-4">Join Us in Our Mission</h3>
        <p className={`text-lg mb-6 ${darkTheme ? "text-gray-100" : "text-gray-200"}`}>
          Want to help us achieve our mission? Your contribution, whether through
          donating food or volunteering, can make a significant impact on the lives
          of those in need.
        </p>
        <a
          href="tel:+18001234567"
          className={`px-6 py-3 rounded-lg text-xl transition-all ${darkTheme ? "bg-[#48b2b7] hover:bg-[#459e94]" : "bg-[#048c7c] hover:bg-[#459e94]"}`}
        >
          Call Us: +1 (800) 123-4567
        </a>
      </div>
    </div>
  );
};

export default Mission;
