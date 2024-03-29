import React from 'react';
import './header.scss';
import Navbar from '../Navbar/navbar';
import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';



function Header() {
    return (
        <header className='header'>
            <NavLink to="/">
                <div>
                    <img className='logo' src={Logo} alt='logo kasa' />
                </div>

            </NavLink>
            <Navbar />

        </header>
    )
}

export default Header
//NavLink est utilisé pour créer un lien vers la page d'accueil ("/")