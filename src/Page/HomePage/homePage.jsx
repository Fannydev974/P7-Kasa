import React from 'react'
import "./HomePage.scss";
import Banner from "../Banner.jsx";
import HomeContainer from "../../Layout/HomeContainer/HomeContainer.jsx";
import AppartementGrid from '../../components/AppartementGrid/AppartementGrid.jsx';
import bannerImage from "../../assets/Images/HomePageBanner.png";
import Footer from '../../Layout/Footer/Footer.jsx';
import FooterImage from '../../assets/Images/logo_footer.png';


function HomePage() {
    return (
        <HomeContainer>
            <Banner image={bannerImage} title="Chez vous, partout et ailleurs" />
            <AppartementGrid />
            <Footer image={FooterImage} />
        </HomeContainer>
    );
}

export default HomePage;