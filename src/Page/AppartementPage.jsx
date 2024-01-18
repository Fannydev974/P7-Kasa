import React from 'react'
import "./AppartementPage.scss";
import Banner from "../Page/Banner.jsx";
import ImageBanner from "../assets/Images/AppartementLocation.png";
import { AppartementHeader } from '../components/AppartementHeader/AppartementHeader.jsx';
import { Collapse } from "../components/Collapse/Collapse.jsx";
import { useLocation } from "react-router-dom";
import Footer from '../Layout/Footer/Footer.jsx';
import FooterImage from '../assets/Images/logo_footer.png';


function AppartementPage() {
    const location = useLocation();
    console.log("location:", location);
    return (
        <div className="Appartement-page">
            <Banner image={ImageBanner} />
            <AppartementHeader />
            <Collapse />
            <Footer image={FooterImage} />
        </div>
    )
}

export default AppartementPage