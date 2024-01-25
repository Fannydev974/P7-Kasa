import React from 'react';
import './homePage.scss';
import Gallery from '../../Components/Gallery/gallery';
import Banner from '../../Layout/Banner/banner';
import bannerImage from '../../assets/banner.png';



function HomePage({ bannerTitle }) {

    bannerTitle = 'Chez vous, partout et ailleurs';

    return (
        <div className='home'>
            <Banner image={bannerImage}
                title={bannerTitle}
            />
            <Gallery />
        </div>
    );
}

export default HomePage
