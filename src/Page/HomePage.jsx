import React from 'react'
import "./HomePage.scss";
import Banner from "../Layout/Banner.jsx";
import AppartementGrid from "../components/AppartementGrid.jsx";
import HomeContainer from "../Layout/HomeContainer.jsx";



function HomePage() {
  return (
    <HomeContainer>
      <Banner />
      <AppartementGrid />
    </HomeContainer>
  );
}

export default HomePage;


