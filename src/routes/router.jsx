import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../Pages/HomePage/homePage";
import Header from "../Components/Header/header";
import Footer from "../Layout/Footer/footer";
import Main from "../Layout/Main/main";
import Logement from "../Pages/Logement/logement";
import About from "../Pages/About/about";
import { ErrorPage } from "../Pages/ErrorPage/errorPage";


const HeaderFooterLayout = () => {
    return <>
        <Header />
        <Main>
            <Outlet />
        </Main>
        <Footer />
    </>
};

export const router = createBrowserRouter([
    {
        element: <HeaderFooterLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/logement/:id",
                element: <Logement />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    },
])