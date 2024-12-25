import React from 'react';
import Banner from './Banner';
import Testimonial from './Testimonial';
import NewsletterSubscription from './NewsletterSubscription';
import FeaturedFood from './FeaturedFood';

const HomeLayOut = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFood></FeaturedFood>
            <Testimonial></Testimonial>
            <NewsletterSubscription></NewsletterSubscription>
        </div>
    );
};

export default HomeLayOut;