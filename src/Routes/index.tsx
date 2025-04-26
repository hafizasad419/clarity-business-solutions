import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Fallback from '@src/Components/Fallback';

const Home=  lazy(() => import('@src/Pages/Home'))


function AuthRoutes() {

    return (
        <Suspense fallback={<Fallback />}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/fallback' element={<Fallback />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </Suspense>
    )
}

export default AuthRoutes