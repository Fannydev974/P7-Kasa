import React from 'react'
import Navbar from "./components/Navbar.jsx";
import "./App.scss";
import Banner from "./Layout/Banner.jsx";
import AppartementGrid from "./components/AppartementGrid.jsx";
import Main from "./Layout/Main.jsx";
import Footer from "./Layout/Footer.jsx";


function App() {
  return (<div>
    <Navbar />
    <Main>
      <Banner />
      <AppartementGrid />
    </Main>
    <Footer />
  </div>
  );
}

export default App;


