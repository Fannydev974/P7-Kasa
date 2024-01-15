import React from 'react'
import "./AppartementPage.scss";
import Banner from "../Layout/Banner.jsx";
import ImageBanner from "../assets/Images/AppartementLocation.png";
import { AppartementHeader } from '../components/AppartementHeader.jsx';
import { DescriptionCollapse } from "../components/DescriptionCollapse.jsx";
import { useLocation } from "react-router-dom";
import Footer from '../Layout/Footer.jsx';
import FooterImage from '../assets/Images/logo_footer.png';


function AppartementPage() {
    const location = useLocation();
    console.log("location:", location);
    return (
        <div className="Appartement-page">
            <Banner image={ImageBanner} />
            <AppartementHeader />
            <DescriptionCollapse />
            <Footer image={FooterImage} />
        </div>
    )
}

export default AppartementPage
