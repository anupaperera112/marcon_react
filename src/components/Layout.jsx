import React from "react";

import Routers from "../router/Routers";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = () =>{
    return(
        <div>
            <Header/>
            <Routers/>
            <Footer/>
        </div>

    );
}

export default Layout;