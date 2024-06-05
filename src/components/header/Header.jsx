import React from "react";
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import logo from '../../assets/logo new.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'


const Header = () => {
    return(
       <div>
            <nav className="navbar header-bg" id="navbar">
                <a href="./index.html"><img src={logo} alt="" className="nav-image"/></a>

            <ul className="nav">
                <li className="nav-item"><a className="nav-link" href="./">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="./keynote-speakers.html">Keynotes</a></li>
        
                {/* <li style={{cursor: 'default'}}>
                    <input type="checkbox" id="attendies" style={{display: 'none'}} />
                    <label htmlFor="attendies" className="dropbtn">
                    For Attendees <i className="fa fa-caret-down" aria-hidden="true"></i
                    ></label>
                    <ul className="dropdown">
                    <li><a href="./program.html">Program</a></li>
                    <li><a href="./uc.html">Travel InhtmlFormation</a></li>
                    <li><a href="./registration.html">Registration</a></li>
                    </ul>
                </li> */}
        
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="https://example.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Committee
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {/* <a className="dropdown-item" href="./organizing-committee.html">Organizing Committee</a> */}
                        <a className="dropdown-item" href="https://example.com">Organizing Committee</a>
                        {/* <a className="dropdown-item" href="./technical-programming-committee.html">Technical Program Committee</a> */}
                        <a className="dropdown-item" href="https://example.com">Technical Program Committee</a>
                    </div>
                </li> 

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="https://example.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        For Authors <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="https://example.com">Call for Papers</a>
                        <a className="dropdown-item" href="https://example.com">Important Dates</a>
                        <a className="dropdown-item" href="https://example.com">Author Instruction</a>
                        {/* <a className="dropdown-item" href="./call-for-papers.html">Call for Papers</a>
                        <a className="dropdown-item" href="./important_dates.html">Important Dates</a>
                        <a className="dropdown-item" href="./author-instructions.html">Author Instruction</a> */}
                        {/* <a className="dropdown-item" href="./camera_ready_paper_instructions.html">Camera Ready Paper Instructions</a>
                        <a className="dropdown-item" href="./presenter_Information.html">Presenter Information</a> */}
                    </div>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="https://example.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Explore Programs <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="https://example.com">Workshops</a>
                        <a className="dropdown-item" href="https://example.com">Special Sessions</a>
                        {/* <a className="dropdown-item" href="./workshops_updated.html">Workshops</a>
                        <a className="dropdown-item" href="./special_sessions.html">Special Sessions</a> */}
                    </div>
                </li> 

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="https://example.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Past Proceedings <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="https://ieeexplore.ieee.org/xpl/conhome/10355380/proceeding">2023</a>
                        <a className="dropdown-item" href="https://ieeexplore.ieee.org/xpl/conhome/9906100/proceeding">2022</a>
                        <a className="dropdown-item" href="https://ieeexplore.ieee.org/xpl/conhome/9525629/proceeding">2021</a>
                        <a className="dropdown-item" href="https://ieeexplore.ieee.org/xpl/conhome/9179991/proceeding">2020</a>
                        <a className="dropdown-item" href="https://ieeexplore.ieee.org/xpl/conhome/8807126/proceeding">2019</a>
                        <a className="dropdown-item" href="https://ieeexplore.ieee.org/xpl/conhome/8410204/proceeding">2018</a>
                        <a className="dropdown-item" href="https://ieeexplore.ieee.org/xpl/conhome/7972818/proceeding">2017</a>
                        <a className="dropdown-item" href="https://ieeexplore.ieee.org/xpl/conhome/7469533/proceeding">2016</a>
                        <a className="dropdown-item" href="https://ieeexplore.ieee.org/xpl/conhome/7105793/proceeding">2015</a>
                    </div>
                </li>
            </ul>
    </nav>

       </div>
    );
}

export default Header