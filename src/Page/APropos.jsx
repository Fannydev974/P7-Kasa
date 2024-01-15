import React from 'react'
import '../Page/APropos.scss';
import Banner from "../Layout/Banner.jsx";
import { DescriptionCollapse } from '../components/DescriptionCollapse.jsx';
import ImageBanner from '../assets/Images/AProposBanner.png';
import Footer from '../Layout/Footer.jsx';
import FooterImage from '../assets/Images/logo_footer.png';

function APropos() {
    return (
        <>
            <Banner image={ImageBanner} />
            <div className="aPropos__container">
                <DescriptionCollapse />
                <DescriptionCollapse />
                <DescriptionCollapse />
                <DescriptionCollapse />
            </div>
            <Footer image={FooterImage} />
        </>
    );
}
export default APropos

