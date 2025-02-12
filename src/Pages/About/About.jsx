import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ThemeContext } from "../../Provider/ThemeProvider";

const About = () => {
    const { user } = useContext(AuthContext);
    const { darkTheme } = useContext(ThemeContext);

    return (
        <div className={`min-h-screen transition-all duration-300 ${darkTheme ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>

            <div className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('https://img.freepik.com/free-photo/person-being-donated-food_23-2148613181.jpg?t=st=1739293938~exp=1739297538~hmac=878c9165156f2714f1138281f7a2dcc5942719c8dc33f8ea0a6eeffe94b1ddcc&w=996')" }}>
                <div className="bg-black bg-opacity-50 p-6 text-center rounded-lg">
                    <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">About Meal Mates</h1>
                    <p className="text-lg text-gray-200 mt-2">Bridging the gap between surplus food and those in need.</p>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    At <span className="text-[#048c7c] font-semibold">Meal Mates</span>, we believe that no food should go to waste while people go hungry.
                    Our platform connects food donors with individuals and communities who need it most.
                </p>
            </div>

            <div className={`py-12 transition-all duration-300 ${darkTheme ? "bg-gray-800" : "bg-[#F1E4C3]"}`}>
                <div className="container mx-auto px-6 md:px-12">
                    <h2 className="text-3xl font-bold text-center">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        {[
                            { step: "Step 1: Donate", text: "Restaurants, individuals, and grocery stores list surplus food." },
                            { step: "Step 2: Request", text: "People in need browse available food and make a request." },
                            { step: "Step 3: Pickup", text: "Food is picked up or delivered to ensure zero waste." }
                        ].map((item, index) => (
                            <div key={index} className={`p-6 rounded-lg shadow-md text-center transition-all duration-300 
                                ${darkTheme ? "bg-gray-700 border border-gray-600 text-white" : "bg-white text-gray-800"}`}>
                                <h3 className="text-xl font-semibold text-[#048c7c]">{item.step}</h3>
                                <p className="mt-2">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-12">
                <h2 className="text-3xl font-bold text-center">What People Say</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {[
                        { text: "Meal Mates has helped our community access fresh meals while reducing food waste. It's a game-changer!", name: "Sarah, Community Leader" },
                        { text: "I was struggling to find meals for my family, and this platform made all the difference. Thank you, Meal Mates!", name: "James, Beneficiary" }
                    ].map((testimonial, index) => (
                        <div key={index} className={`p-6 rounded-lg shadow-md transition-all duration-300 
                            ${darkTheme ? "bg-gray-700 border border-gray-600 text-white" : "bg-white text-gray-800"}`}>
                            <p className="italic">"{testimonial.text}"</p>
                            <h3 className="text-lg font-semibold text-[#048c7c] mt-4">- {testimonial.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#06b5a2] py-12 text-center text-white">
                <h2 className="text-3xl font-bold">Join the Movement</h2>
                <p className="mt-4 text-lg">Become a donor or a recipient today. Together, we can make a difference.</p>
                {!user && (
                    <div className="mt-6">
                        <Link
                            to="/register"
                            className="bg-white text-[#048c7c] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all"
                        >
                            Get Started
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default About;
