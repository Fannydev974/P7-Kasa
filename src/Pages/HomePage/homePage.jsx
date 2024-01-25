import React from 'react';
import './homePage.scss';
import Gallery from '../../Components/Gallery/gallery';
import Banner from '../../Layout/Banner/banner';


function HomePage() {
    const bannerImage = 'src/assets/banner.png';
    const bannerTitle = 'Chez vous, partout et ailleurs';

    return (
        <div className='home'>
            <Banner image={bannerImage} title={bannerTitle} />
            <Gallery />
        </div>
    );
}

export default HomePage
