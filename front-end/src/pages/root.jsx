


import Header from '@/components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

function Root(props) {
    return (
        <div>
            <Header />
            <Outlet />
            
            
        </div>
    );
}

export default Root;