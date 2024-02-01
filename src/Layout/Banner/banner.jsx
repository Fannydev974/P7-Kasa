import React from 'react';
import './banner.scss';


const Banner = ({ image, title }) => {

    return (
        <div className="banner">
            <img src={image} />
            <h1>{title}</h1>
        </div>
    );
};

export default Banner