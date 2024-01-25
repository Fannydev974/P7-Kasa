import React from 'react';
import './homePage.scss';
import Gallery from '../../Components/Gallery/gallery';
import Banner from '../../Layout/Banner/banner';


function HomePage() {
    return (
        <div className='home'>
            <Banner />
            <Gallery />
        </div>
    );
}

export default HomePage
