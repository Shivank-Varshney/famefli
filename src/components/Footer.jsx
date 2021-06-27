import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { NavHashLink } from "react-router-hash-link";
const curryear = new Date().getFullYear();

const Footer = () => {
    return(
        <>
            <div id="footer">
                <div className="container-fluid">
                    <div className="row py-5">
                        <div className="col-md-3 col-sm-6 my-md-0 my-5">
                            <div className="join-the-movement-btn">+91 62903-54294</div>
                        </div>

                        <div className="col-md-3 col-sm-6 my-md-0 my-5">
                            <h5 className="footer-heading">follow us</h5>
                            <div className="icons">
                                <a href="http://twitter.com/@famefli" target="_blank" className="icon"><TwitterIcon /></a>
                                <a href="https://instagram.com/famefli?r=nametag" target="_blank" className="icon"><InstagramIcon /></a>
                                <a href="https://www.linkedin.com/company/famefli" target="_blank" className="icon"><LinkedInIcon /></a>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 my-md-0 my-5">
                            <h5 className="footer-heading">info</h5>
                            <NavHashLink to="/about-us#" className="footer-links">about us</NavHashLink><br />
                            <NavHashLink to="/about-us#" className="footer-links">about the founder</NavHashLink><br />
                            <NavHashLink to="/" className="footer-links">our declaration</NavHashLink><br />
                            <NavHashLink to="/in-the-news#" className="footer-links">newsroom</NavHashLink><br />
                            <NavHashLink to="/contact-us#" className="footer-links">contact us</NavHashLink><br />

                            <h5 className="footer-heading mt-5">action</h5>
                            <NavHashLink to="/join-the-movement#" className="footer-links">join the movement</NavHashLink><br />
                            <NavHashLink to="/" className="footer-links">donate</NavHashLink><br />
                            <NavHashLink to="/" className="footer-links">become a partner</NavHashLink><br />
                        </div>
                        
                        <div className="col-md-3 col-sm-6 my-md-0 my-5">
                            <h5 className="footer-heading">© {curryear} FAMEFLI.</h5>
                            <h6>All rights reserved.</h6>
                            <NavHashLink to="/" className="footer-links">donate</NavHashLink><br />
                            {/* <h6>Web design by: </h6>
                            <h5 className="footer-heading">shivank varshney</h5><br />
                            <h6>Art by: </h6>
                            <h5 className="footer-heading">tarun aggarwal</h5><br /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;