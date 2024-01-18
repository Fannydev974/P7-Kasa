import React from 'react'
import '../Page/APropos.scss';
import Banner from "../Page/Banner.jsx";
import { Collapse } from '../components/Collapse/Collapse.jsx';
import ImageBanner from '../assets/Images/AProposBanner.png';
import Footer from '../Layout/Footer/Footer.jsx';
import FooterImage from '../assets/Images/logo_footer.png';

function APropos() {
    return (
        <>
            <Banner image={ImageBanner} />
            <div className="aPropos__container">
                <Collapse />
                <Collapse />
                <Collapse />
                <Collapse />
            </div>
            <Footer image={FooterImage} />
        </>
    );
}
export default APropos

