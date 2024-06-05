import React from "react";
import logo from "../assets/logo new.png"
import '../styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Carousel from '../components/carousel/carousel'





const Home = () => {

    const tracks = [
        { img: require("../assets/tracks/1y.png"), title: "Data Science and Artificial Intelligence" },
        { img: require("../assets/tracks/2y.png"), title: "Biomedical Engineering" },
        { img: require("../assets/tracks/3y.png"), title: "Chemical Engineering" },
        { img: require("../assets/tracks/4y.png"), title: "Civil Engineering" },
        { img: require("../assets/tracks/5y.png"), title: "Environmental Engineering" },
        { img: require("../assets/tracks/6y.png"), title: "Electronic Engineering" },
        { img: require("../assets/tracks/7y.png"), title: "Signal Processing" },
        { img: require("../assets/tracks/8y.png"), title: "Materials Science and Engineering" },
        { img: require("../assets/tracks/9y.png"), title: "Mechanical Engineering Systems" },
        { img: require("../assets/tracks/10y.png"), title: "Micro/Nano Electro Mechanical Systems, Mechatronics, and Micromechatronics" },
        { img: require("../assets/tracks/11y.png"), title: "Mining and Mineral Exploration" },
        { img: require("../assets/tracks/12y.png"), title: "Electrical Machines & Solid State Drives" },
        { img: require("../assets/tracks/13y.png"), title: "Robotics and Intelligent Systems" },
        { img: require("../assets/tracks/14y.png"), title: "Software Engineering and Cloud Computing" },
        { img: require("../assets/tracks/15y.png"), title: "Sustainable Energy" },
        { img: require("../assets/tracks/16y.png"), title: "Textile and Apparel" },
        { img: require("../assets/tracks/17y.png"), title: "Technology Management" },
        { img: require("../assets/tracks/18y.png"), title: "Transportation Engineering and Logistics" },
        // add more track objects here...
      ];

    return(
        <div>
            <section  className="hero">
                <div className="hero-content">
                <img src={logo} alt="" id="hero-content" />
                <h4>
                    Moratuwa Engineering Research Conference 2024 (MERCon 2024) is the 10<sup>th</sup> international conference
                    organized by the Engineering Research
                    Unit, University of Moratuwa. MERCon solicits research papers
                    describing significant and innovative research contributions in all
                    disciplines of engineering
                </h4>
                {/* <p style="font-family: 'Poppins', sans-serif; font-weight: 600;">8<sup>th</sup> , 9<sup>th</sup> August 2024</p> */}
                
                <div className="dateBox">
                    <div style={{marginTop: '10px', color: 'orange'}}>         
                        <i className="fas fa-calendar" style={{marginRight: '5px', color: 'white'}}></i>  8<sup>th</sup> to 10<sup>th</sup> August 2024
                        <div>
                            <i className="fas fa-map-marker-alt" style={{marginRight: '5px', color: 'white'}}></i> University of Moratuwa, Sri Lanka.
                        </div>         
                    </div>
                </div>
                
                
                {/* <i id="arrowdown" className="fas fa-arrow-down fa-2x"></i> */}
                </div>
            </section>
            <section id="call_for_papers" className="text-center">
                <div className="width-fixed">
                {/* <h2 className="text-heading text-underline">Call for Papers</h2> */}
                <p>
                    MERCon 2024 solicits research papers<br />
                    describing significant & innovative research contributions to
                    following areas of engineering. We will invite submissions on a wide range
                    of research topics.
                </p>
                <button
                    className="btn btn-primary"
                    onClick='location.href="./assets/pdf/Call for papers.pdf";'
                    >
                    Download Guidelines
                    </button>
                </div>

                <h4 className="text-heading">
                Papers can be submitted to the conference under the following regular
                tracks.
                </h4>
                <div className="tracks">
                    {tracks.map((track, index) => (
                        <div key={index}>
                            <a href="/call-for-papers.html" style={{textDecoration: 'none'}}>
                                <div className="card track">
                                    <img src={track.img} alt={track.title}  />
                                </div>
                        <h4 className="text-center-title">{track.title}</h4>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
            <section id="gallery" className="text-center">
                <h1 className="text-heading text-underline">Gallery</h1>
                {/* carousel */}
                <div className="owl-carousel">
                    <Carousel/>
                </div>
            </section>
            <section id="organized_by" className="text-center">
                <h1 className="text-heading text-underline">Organized By</h1>
                <div className="grid grid-sponsor">
                    <div className="img-container bg-white">
                        <img src={require('../assets/logos/1.png')} alt="" class="grid-img" />
                    </div>
                    <div className="img-container bg-white">
                        <img src={require('../assets/logos/2.png')} alt="" class="grid-img" />
                    </div>
                    <div className="img-container bg-white">
                        <img src={require('../assets/logos/3.png')} alt="" class="grid-img" />
                    </div>
                </div>
            </section>

            <section id="venue" className="text-center">
                <h1 className="text-heading text-underline">Event Venue</h1>
                <p className="text-center">Event venue location info and gallery</p>

                <div className="grid grid-venue">
                    <div className="mapouter gmap_canvas">
                        <div className="gmap_canvas">
                        <iframe width="100%" height="100%" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=university of moratuwa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
                            href="https://2yu.co"></a><br />
                        <a href="https://embedgooglemap.2yu.co/"></a>
                        </div>
                    </div>
                    <div className="bg-secondary-c venue-info">
                        <h2 className="text-yellow">University of Moratuwa</h2>
                        <p >
                        University of Moratuwa, a leading technological university in the
                        region welcomes you to witness a truly unique experience!
                        </p>
                    </div>
                    <div className="img-container">
                        <img src={require("../assets/UoM/img1.jpg")} alt="" className="grid-img" />
                    </div>
                    <div className="img-container">
                        <img src={require("../assets/UoM/img2.jpg")} alt="" className="grid-img" />
                    </div>
                    <div className="img-container">
                        <img src={require("../assets/UoM/img3.jpg")} alt="" className="grid-img" />
                    </div>
                    <div className="img-container">
                        <img src={require("../assets/UoM/img4.jpg")} alt="" className="grid-img" />
                    </div>
                    <div className="img-container">
                        <img src={require("../assets/UoM/img5.jpg")} alt="" className="grid-img" />
                    </div>
                    <div className="img-container">
                        <img src={require("../assets/UoM/img6.jpg")} alt="" className="grid-img" />
                    </div>
                    <div className="img-container">
                        <img src={require("../assets/UoM/img10.jpg")} alt="" className="grid-img" />
                    </div>
                    <div className="img-container">
                        <img src={require("../assets/UoM/img11.jpg")} alt="" className="grid-img" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;