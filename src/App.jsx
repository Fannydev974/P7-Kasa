import React from 'react'
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import Banner from "./components/Banner.jsx";
import AppartementGrid from "./components/AppartementGrid.jsx";
import Main from "./components/Main.jsx";


function App() {
  return (<div>
    <Navbar />
    <Main>
      <Banner />
      <AppartementGrid />
    </Main>
  </div>
  );
}

export default App;


