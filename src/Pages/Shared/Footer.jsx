import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#FAF3E0] to-[#F1E4C3] text-gray-800 py-10 px-6 lg:px-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <nav>
                    <h6 className="text-lg font-bold uppercase mb-4">Our Services</h6>
                    <ul className="space-y-2">
                        <Link className="hover:text-[#048c7c] transition-all" to='/food-donation'>Food Donation</Link>
                        <li><a className="hover:text-[#048c7c] transition-all" href="#">Volunteer Opportunities</a></li>
                        <li><a className="hover:text-[#048c7c] transition-all" href="#">Community Outreach</a></li>
                        <li><a className="hover:text-[#048c7c] transition-all" href="#">Emergency Relief</a></li>
                    </ul>
                </nav>

                <nav>
                    <h6 className="text-lg font-bold uppercase mb-4">About Us</h6>
                    <ul className="space-y-2">
                        <li><a className="hover:text-[#048c7c] transition-all" href="#">Our Mission</a></li>
                        <li><a className="hover:text-[#048c7c] transition-all" href="#">Team</a></li>
                        <li><a className="hover:text-[#048c7c] transition-all" href="#">Success Stories</a></li>
                        <li><a className="hover:text-[#048c7c] transition-all" href="#">Contact Us</a></li>
                    </ul>
                </nav>

                <nav>
                    <h6 className="text-lg font-bold uppercase mb-4">Connect with Us</h6>
                    <div className="flex space-x-4">
                        <a href="https://twitter.com" aria-label="Twitter" className="transition-transform transform hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="fill-current text-[#1DA1F2]">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-0.951 0.564-2.005 0.974-3.127 1.195-0.897-0.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-0.205-7.719-2.165-10.148-5.144-1.29 2.213-0.669 5.108 1.523 6.574-0.806-0.026-1.566-0.247-2.229-0.616-0.054 2.281 1.581 4.415 3.949 4.89-0.693 0.188-1.452 0.232-2.224 0.084 0.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646 0.962-0.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a href="https://youtube.com" aria-label="YouTube" className="transition-transform transform hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="fill-current text-[#FF0000]">
                                <path d="M19.615 3.184c-3.604-0.246-11.631-0.245-15.23 0-3.897 0.266-4.356 2.62-4.385 8.816 0.029 6.185 0.484 8.549 4.385 8.816 3.6 0.245 11.626 0.246 15.23 0 3.897-0.266 4.356-2.62 4.385-8.816-0.029-6.185-0.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a href="https://facebook.com" aria-label="Facebook" className="transition-transform transform hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="fill-current text-[#1877F2]">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l0.358-4h-4v-1.667c0-0.955 0.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
                © {new Date().getFullYear()} Meal Mates. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
