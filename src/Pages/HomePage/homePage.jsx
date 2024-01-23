import React from 'react';
import './homePage.scss';
import Banner from '../..//Layout/Banner/banner';
import Gallery from '../../Components/Gallery/gallery';


function HomePage({ imageUrl }) {
    return (
        <div className='home'>
            {/* <Banner />*/}
            <Banner image={imageUrl} />
            <Gallery />
        </div>
    );
}

export default HomePage
