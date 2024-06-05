import React from "react";
import "./footer.css"
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () =>{
    return(
        <div>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div>
                            <div className="footer-contact">
                                <h2>Contact Us</h2>
                                <p>
                                    Engineering Research Unit, Faculty of Engineering, University of Moratuwa, Sri Lanka<br />
                                    <strong>Telephone:</strong> <a href="tel:+94112650301" cm_dontconvertlink="true" style={{color: 'white', marginLeft: '5px'}}>+94 11 265 0301</a>
                                    , <strong> ext:</strong> 3044 (Office)
                                    , <strong> Email:</strong> <a href="mailto:mercon@uom.lk" style={{color: 'white', marginLeft: '5px'}}>mercon@uom.lk</a>
                                </p>

                                <div className="social-links">
                                    <a href="https://twitter.com/merconeru" target="_blank" className="twitter" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/pg/erumercon" target="_blank" className="facebook" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                                    <a href="https://www.linkedin.com/showcase/erumercon" target="_blank" className="linkedin" rel="noopener noreferrer" ><i className="fa fa-linkedin"></i ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                    <div className="copyright">
                        &copy;<strong> 2024 University of Moratuwa,</strong> developed by
                        <a style={{fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.89)'}} href="mailto:mailtonativecode@gmail.com" ><strong> NativeCode </strong></a>
                        All Rights Reserved
                    </div>
                </div>
                </div>

                
            </footer>

       </div>
    );
}

export default Footer;