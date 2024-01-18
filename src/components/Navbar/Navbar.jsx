import React from 'react'
import "./Navbar.scss";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return <nav className='navbar'>
        <div className='navbar__logo'>
            <img src="public/LOGO (3).png" alt="Logo" />
        </div>
        <NavLink to="/">
            <div>Accueil</div>
        </NavLink>
        <NavLink to="/A propos">
            <div>A propos</div>
        </NavLink>
    </nav>;
}

export default Navbar;