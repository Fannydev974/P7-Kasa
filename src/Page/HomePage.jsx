import React from 'react'
import "./HomePage.scss";
import Banner from "../Layout/Banner.jsx";
import AppartementGrid from "../components/AppartementGrid.jsx";
import HomeContainer from "../Layout/HomeContainer.jsx";
import bannerImage from "../assets/Images/HomePageBanner.png";
import Footer from '../Layout/Footer.jsx';
import FooterImage from '../assets/Images/logo_footer.png';


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


