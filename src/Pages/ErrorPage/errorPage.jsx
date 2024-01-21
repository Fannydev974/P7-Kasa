import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/header';
import Main from '../../Layout/Main/main';
import Footer from "../../Layout/Footer/footer"
import './errorPage.scss'

export function ErrorPage() {
    return (
        <>
            <Header />
            <Main >
                <div className="error-page">
                    <div>
                        <h1>404</h1>
                        <p>Oups! La page que vous demandez n'existe pas.</p>
                    </div>
                    <Link to="/">Retourner sur la page d'accueil</Link>
                </div>

            </Main>
            <Footer />

        </>
    )
}

