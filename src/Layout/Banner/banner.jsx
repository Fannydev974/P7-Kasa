import React from 'react';
import './banner.scss';
import ImageBanner from '../../Components/imageBanner';

function Banner() {
    return (
        <div className='banner'>
            <ImageBanner />
            <h2 className='banner__text'>Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default Banner