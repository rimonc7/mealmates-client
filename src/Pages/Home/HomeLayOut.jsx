import React from 'react';
import Banner from './Banner';
import Testimonial from './Testimonial';
import NewsletterSubscription from './NewsletterSubscription';

const HomeLayOut = () => {
    return (
        <div>
            <Banner></Banner>
            <Testimonial></Testimonial>
            <NewsletterSubscription></NewsletterSubscription>
        </div>
    );
};

export default HomeLayOut;