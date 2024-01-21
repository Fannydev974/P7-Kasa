import React from 'react';
import './homePage.scss';
import Banner from '../..//Layout/Banner/banner';
import Gallery from '../../Components/Gallery/gallery';

function HomePage() {
    return (
        <div className='home'>
            <Banner />
            <Gallery />
        </div>
    );
}

export default HomePage
