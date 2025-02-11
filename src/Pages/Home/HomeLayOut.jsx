import React from 'react';
import Banner from './Banner';
import Testimonial from './Testimonial';
import NewsletterSubscription from './NewsletterSubscription';
import FeaturedFood from './FeaturedFood';
import { Helmet } from 'react-helmet-async';

const HomeLayOut = () => {
    return (
        <div>
            <Helmet>
                <title>Home - MealMeats</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedFood></FeaturedFood>
            <Testimonial></Testimonial>
            <NewsletterSubscription></NewsletterSubscription>
        </div>
    );
};

export default HomeLayOut;