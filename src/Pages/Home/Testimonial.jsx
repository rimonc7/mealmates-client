import React, { useState } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
    {
        name: "Brian Fitz",
        text: "Sharing my recipes on this platform has been an amazing experience! The community is so supportive, and I've discovered so many unique dishes from around the world.",
    },
    {
        name: "Sarah Doe",
        text: "This website has become my go-to for finding quick and delicious meal ideas. I love how easy it is to share my own recipes and get feedback from others!",
    },
    {
        name: "John Smith",
        text: "A fantastic platform for food lovers! I've connected with people who share my passion for cooking, and we've even exchanged family recipes. Highly recommended!",
    },
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <div
            className="relative bg-cover bg-center py-20 px-6 text-white"
            style={{
                backgroundImage: "url('https://salumipasini.com/wp-content/uploads/Vino-Marzemino-Ca-Lustra-WINE13-mood2-2.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative max-w-2xl mx-auto text-center z-10">
                <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
                <FaQuoteLeft className="text-4xl text-[#048c7c] mx-auto mb-4" />
                <p className="text-lg italic mb-6">
                    {testimonials[currentIndex].text}
                </p>
                <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                <div className="flex justify-center gap-4 mt-6">
                    <button
                        className="btn btn-circle btn-outline text-white font-bold hover:bg-[#048c7c]"
                        onClick={handlePrev}
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        className="btn btn-circle btn-outline text-white font-bold hover:bg-[#048c7c]"
                        onClick={handleNext}
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
