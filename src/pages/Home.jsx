import React from "react";
import HeaderBanner from "../assets/header-banner.png";
import FeatureBanner from "../assets/feature-banner.png";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.jpeg";
import Img5 from "../assets/img5.jpeg";
import Img6 from "../assets/img6.jpeg";
import { NavHashLink } from "react-router-hash-link";

const Home = () => {
    return(
        <>
            <div className="container-fluid" id="header">
                <div className="row">
                    <div className="col-md-7">
                        <div className="header-content">
                        <h1 className="header-heading">A social media for all <br />But, <br />By women, of women</h1>
                        <div className="header-btn">let meet them → </div>
                        </div>
                    </div>
                    <div className="col-md-5 px-0 d-md-flex d-none justify-content-center">
                        <img src={HeaderBanner} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>

            <div id="banner">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-4 my-md-0 my-4 d-flex justify-content-center flex-column align-items-center">
                            <img src={Img1} className="img-fluid" alt="" />
                            <h5 className="banner-front-text">Access</h5>
                        </div>
                        <div className="col-md-4 my-md-0 my-4 d-flex justify-content-center flex-column align-items-center">
                            <img src={Img2} className="img-fluid" alt="" />
                            <h5 className="banner-front-text">Awareness</h5>
                        </div>
                        <div className="col-md-4 my-md-0 my-4 d-flex justify-content-center flex-column align-items-center">
                            <img src={Img3} className="img-fluid" alt="" />
                            <h5 className="banner-front-text">Advocacy</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div id="gallary">
                <div className="container-fluid">
                    <div className="row py-5">
                        <div className="col-md-3 col-sm-6">
                            <img src={Img4} className="img-fluid m-3" alt="" />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <img src={Img5} className="img-fluid m-3" alt="" />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <img src={Img6} className="img-fluid m-3" alt="" />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <img src={Img4} className="img-fluid m-3" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center pb-5">
                            <img src={FeatureBanner} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-6 p-md-5 p-sm-4 py-4 px-2 d-flex justify-content-center flex-column">
                            <h3>Features</h3>
                            <ul type="square">
                                <li>No cyber bullying or digital harassment against women.</li>
                                <li>Say no to digital teasing.</li>
                                <li>The most safe app for women.</li>
                                <li>Advertisement free Social Media.</li>
                            </ul>
                            <p>We are using special algorithms and artificial intelligence to stop all this unwanted activities on social media.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="join-the-movement">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-sm-12 d-flex justify-content-center flex-column align-items-center">
                            <h2>WE CAN’T DO THIS <br /> WITHOUT YOU.</h2>
                            <p>Join us in creating a country of love, justice, and belonging. Join us in creating our political home.</p>
                            <NavHashLink to="/join-the-movement#" className="join-the-movement-btn">join the movement → </NavHashLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;