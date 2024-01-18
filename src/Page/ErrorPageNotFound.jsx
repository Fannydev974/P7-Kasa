import React from 'react'
import './ErrorPageNotFound.scss';
import Navbar from "../components/Navbar/Navbar.jsx";
import { Link } from "react-router-dom";
import Footer from '../Layout/Footer/Footer.jsx';

export function ErrorPageNotFound() {
    return (
        <>
            <Navbar />
            <div className="error__page">
                <h1>404</h1>
                <h2>Oops! la page que vous demandez n'hexiste pas</h2>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </>
    )
}


