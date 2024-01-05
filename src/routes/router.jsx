import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import HomePage from "../Page/HomePage";
import Footer from "../Layout/Footer";
import Navbar from "../components/Navbar";
import AppartementPage from "../Page/AppartementPage";



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
        errorElement: <h1>404 not found</h1>,
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
                element: <h1>A propos</h1>
            },
        ],
    },
])
/* J'ai un élement qui s'appel HeaderFooterLayout qui prend une Navbar,Footer Outlet. Outlet c'est l'element que l'on lui passe dans ses children*/
/*function router() {
    return <div></div>

}*/

export default router;
