


import Footer from '@/components/footer';
import Header from '@/components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

function Root(props) {
    return (
        <div className='text-gray-800'>
            <Header />
            <Outlet />
            <Footer/>
            
        </div>
    );
}

export default Root;