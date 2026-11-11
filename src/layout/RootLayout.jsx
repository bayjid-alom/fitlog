import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/shared/Footer';

const RootLayout = () => {
    return (
        <>


            <Navbar></Navbar>

            <div>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>


        </>
    );
};

export default RootLayout;