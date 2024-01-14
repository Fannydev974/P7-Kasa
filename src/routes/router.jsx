import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import HomePage from "../Page/HomePage.jsx";
import Footer from "../Layout/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import AppartementPage from "../Page/AppartementPage.jsx";
import APropos from '../Page/APropos.jsx';
import { ErrorPageNotFound } from '../Page/ErrorPageNotFound.jsx';

const HeaderFooterLayout = () => {
    return <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
}
export const router = createBrowserRouter([
    {
        element: <HeaderFooterLayout />,
        errorElement: <ErrorPageNotFound />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/Appartement",
                element: <AppartementPage />
            },
            {
                path: "/A propos",
                element: <APropos />
            },
        ],
    },
])
/* J'ai un élement qui s'appel HeaderFooterLayout qui prend une Navbar,Footer Outlet. Outlet c'est l'element que l'on lui passe dans ses children*/
/*function router() {
    return <div></div>

}*/

export default router;
