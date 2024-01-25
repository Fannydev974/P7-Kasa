import React from 'react'
import './imageBanner.scss';
import Banner from '../../Layout/Banner/banner';


const imageBanner = () => {

    const imageBanner = 'src/assets/banner.png';
    return (
        <div>
            <Banner
                image={imageBanner}
                title="Chez vous, partout et ailleurs"
            />
        </div>
    );
};

export default imageBanner
