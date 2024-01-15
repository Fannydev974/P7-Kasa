import React from 'react'
import "./Footer.scss";


function Footer({ image }) {
    return (
        <div className="Footer">
            <img src={image} alt="Footer" />
        </div>
    );
}

export default Footer;
