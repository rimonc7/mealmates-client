import React, { useContext } from "react";
import Banner from "./Banner";
import Testimonial from "./Testimonial";
import NewsletterSubscription from "./NewsletterSubscription";
import FeaturedFood from "./FeaturedFood";
import { Helmet } from "react-helmet-async";
import Partners from "./Partners";
import { ThemeContext } from "../../Provider/ThemeProvider";

const HomeLayOut = () => {
    const { darkTheme } = useContext(ThemeContext); 

    return (
        <div className={`${darkTheme && " bg-gray-900"}`}>
            <Helmet>
                <title>Home - MealMeats</title>
            </Helmet>
            <Banner />
            <FeaturedFood />
            <Testimonial />
            <Partners />
            <NewsletterSubscription />
        </div>
    );
};

export default HomeLayOut;
