import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from "../App";
import Footer from "../Layout/Footer";
import Navbar from '../components/Navbar';


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
                element: <App />
            },
            {
                path: "/Appartement",
                element: <h1>Nos appartements</h1>
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
    return (
        <div>

        </div>
    )
}*/

export default router;
