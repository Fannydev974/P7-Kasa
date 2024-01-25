import React from 'react';
import './banner.scss';


const Banner = ({ image, title }) => {

    return (
        <div className="banner">
            <img src='src/assets/banner.png' />
            <h2>{title}Chez vous, partout et ailleurs</h2>
            <img src={image} />
        </div>
    );
};

export default Banner