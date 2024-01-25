import React from 'react';
import './banner.scss';


const Banner = ({ image, title }) => {

    return (
        <div className="banner">
            <img src={image} />
            <h2>{title}</h2>
        </div>
    );
};

export default Banner