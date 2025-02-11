import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="min-h-screen">
            <div className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('https://img.freepik.com/free-photo/person-being-donated-food_23-2148613181.jpg?t=st=1739293938~exp=1739297538~hmac=878c9165156f2714f1138281f7a2dcc5942719c8dc33f8ea0a6eeffe94b1ddcc&w=996')" }}>
                <div className="bg-black bg-opacity-50 p-6 text-center rounded-lg">
                    <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">About Meal Mates</h1>
                    <p className="text-lg text-gray-200 mt-2">Bridging the gap between surplus food and those in need.</p>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Mission</h2>
                <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                    At <span className="text-[#048c7c] font-semibold">Meal Mates</span>, we believe that no food should go to waste while people go hungry. 
                    Our platform connects food donors with individuals and communities who need it most.
                </p>
            </div>

            <div className="bg-[#F1E4C3] py-12">
                <div className="container mx-auto px-6 md:px-12">
                    <h2 className="text-3xl font-bold text-gray-800 text-center">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-[#048c7c]">Step 1: Donate</h3>
                            <p className="text-gray-700 mt-2">Restaurants, individuals, and grocery stores list surplus food.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-[#048c7c]">Step 2: Request</h3>
                            <p className="text-gray-700 mt-2">People in need browse available food and make a request.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-[#048c7c]">Step 3: Pickup</h3>
                            <p className="text-gray-700 mt-2">Food is picked up or delivered to ensure zero waste.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center">What People Say</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 italic">"Meal Mates has helped our community access fresh meals while reducing food waste. It's a game-changer!"</p>
                        <h3 className="text-lg font-semibold text-[#048c7c] mt-4">- Sarah, Community Leader</h3>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 italic">"I was struggling to find meals for my family, and this platform made all the difference. Thank you, Meal Mates!"</p>
                        <h3 className="text-lg font-semibold text-[#048c7c] mt-4">- James, Beneficiary</h3>
                    </div>
                </div>
            </div>

            <div className="bg-[#06b5a2] py-12 text-center text-white">
                <h2 className="text-3xl font-bold">Join the Movement</h2>
                <p className="mt-4 text-lg">Become a donor or a recipient today. Together, we can make a difference.</p>
                <div className="mt-6">
                    <Link to="/register" className="bg-white text-[#048c7c] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default About;
