import React from "react";

import Router from "../router/Router";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = () =>{
    return(
        <div>
            <Header/>
            <Router/>
            <Footer/>
        </div>

    );
}

export default Layout;