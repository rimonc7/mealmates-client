import { useContext } from "react";
import { ThemeContext } from "../../Provider/ThemeProvider";

const Banner = () => {
    const { darkTheme } = useContext(ThemeContext);

    return (
        <div className="carousel w-full mt-10">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co/Bw4HDWt/1521564484257.jpg"
                    className="w-full object-cover h-[500px]"
                    alt="Slide 1"
                />
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 
                    ${darkTheme ? "bg-black bg-opacity-70" : "bg-black bg-opacity-50"}
                `}>
                    <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
                        Join Us in <span className="text-red-500">Sharing Meals</span>
                    </h2>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co/zQDynvq/6447f7ea620f06599792bc47-5ed609baf722b825410adb9c-5ec3714af9aaf9787943a936-sharing-a-meal-opti.jpg"
                    className="w-full object-cover h-[500px]"
                    alt="Slide 2"
                />
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 
                    ${darkTheme ? "bg-black bg-opacity-70" : "bg-black bg-opacity-50"}
                `}>
                    <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
                        Celebrate the <span className="text-blue-500">Joy of Sharing</span>
                    </h2>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co/Jt3zYbh/1-VNSld-Oni-B-mf-GM-tgtl-Qa-A.jpg"
                    className="w-full object-cover h-[500px]"
                    alt="Slide 3"
                />
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 
                    ${darkTheme ? "bg-black bg-opacity-70" : "bg-black bg-opacity-50"}
                `}>
                    <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
                        Build a <span className="text-green-500">Community Through Food</span>
                    </h2>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
