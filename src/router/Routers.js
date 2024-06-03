import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "../pages/Home";
import ErrorPage from './error-page';



const Routers = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element : <Home/>,
            errorElement: <ErrorPage />,
        },
    ]);

    return (
        <RouterProvider router={router}/>
    );
}

export default Routers;
