import React from "react";
import HeaderBanner from "../assets/header-banner.png";
import FeatureBanner from "../assets/feature-banner.png";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import img1 from "../assets/home1.png";
import img2 from "../assets/home2.png";
import img3 from "../assets/home3.png";
import img4 from "../assets/home4.png";
import { NavHashLink } from "react-router-hash-link";

const Home = () => {
    const showOne = () => {
        document.getElementById("access").innerHTML="<span style='color:white;'> 3 MILLIONS </span> <br /> <span style='color:white;font-size:25px; text-align:center;'> Period Products Distributed <span>";
    }
    const hideOne = () => {
        document.getElementById("access").innerHTML="Access";
    }

    const showTwo = () => {
        document.getElementById("awareness").innerHTML="<span style='color:white'> 70,000+ </span> <br /> <span style='color:white;font-size:25px; text-align:center;'> Women reached in MHM Sessions <span>";
    }
    const hideTwo = () => {
        document.getElementById("awareness").innerHTML="Awareness";
    }

    const showThree = () => {
        document.getElementById("advocacy").innerHTML="<span style='color:white'> 500+ </span> <br /> <span style='color:white;font-size:25px; text-align:center;'> Youth Members Engaged <span>";
    }
    const hideThree = () => {
        document.getElementById("advocacy").innerHTML="Advocacy";
    }
    return(
        <>
            <div className="container-fluid" id="header">
                <div className="row">
                    <div className="col-md-7">
                        <div className="header-content">
                        <h1 className="header-heading">A social media for all <br />But, <br />By women, of women</h1>
                        <div className="header-btn">Download app → </div>
                        </div>
                    </div>
                    <div className="col-md-5 px-0 d-md-flex d-none justify-content-center">
                        <img src={HeaderBanner} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>

            <div id="banner">
                <div className="container">
                <h1 style={{color: 'white'}}>HERE'S OUR IMPACT SO FAR :</h1>
                    <div className="row py-5">
                        <div style={{transition: 'width 2s, height 2s'}} className="col-md-4 my-md-0 my-4 d-flex justify-content-center flex-column align-items-center pb-5">
                            <img src={Img1} className="img-fluid" alt="" />
                            <h5 id='access' onMouseEnter={showOne} onMouseLeave={hideOne} style={{position: 'absolute', marginTop: '70%'}} className="banner-front-text" >Access</h5> 
                            </div>
                        <div className="col-md-4 my-md-0 my-4 d-flex justify-content-center flex-column align-items-center pb-5">
                            <img src={Img2} className="img-fluid" alt="" />
                            <h5 className="banner-front-text" style={{position: 'absolute', marginTop: '70%'}} id="awareness" onMouseEnter={showTwo} onMouseLeave={hideTwo}>Awareness</h5>
                        </div>
                        <div className="col-md-4 my-md-0 my-4 d-flex justify-content-center flex-column align-items-center pb-5">
                            <img src={Img3} className="img-fluid" alt="" />
                            <h5 className="banner-front-text" style={{position: 'absolute', marginTop: '70%'}} id="advocacy" onMouseEnter={showThree} onMouseLeave={hideThree}>Advocacy</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div id="gallary">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-3 col-sm-6 d-flex justify-content-center flex-column align-items-center">
                            <img src={img1} className="img-fluid m-3" alt="" />
                            <br/>
                            <div className='' style={{color: 'white',fontSize: '18px',textTransform: "uppercase", textAlign: "center"}}>
                                LACK OF AWARENESS
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 d-flex justify-content-center flex-column align-items-center">
                            <img src={img2} className="img-fluid m-3" alt="" />
                            <br/>
                            <div className='text-center' style={{color: 'white',fontSize: '18px',textTransform: "uppercase", textAlign: "center"}}>
                                patriarchal ,  sociological  stereotypes
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 d-flex justify-content-center flex-column align-items-center">
                            <img src={img3} className="img-fluid m-3" alt="" />
                            <br/>
                            <div className='text-center' style={{color: 'white',fontSize: '18px',textTransform: "uppercase", textAlign: "center"}}>
                                LACK OF Financial  Independence
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 d-flex justify-content-center flex-column align-items-center">
                            <img src={img4} className="img-fluid m-3" alt="" />
                            <br/>
                            <div className='' style={{color: 'white',fontSize: '18px',textTransform: "uppercase", textAlign: "center"}}>
                                LACK OF Women  centric policies
                            </div>
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
                            <h3>APP Features</h3>
                            <ul type="square">
                                <li>No cyber bullying or digital harassment against women.</li>
                                <li>Say no to digital teasing.</li>
                                <li>The most safe app for women.</li>
                                <li>Advertisement free Social Media.</li>
                            </ul>
                            <p>We are using special algorithms and artificial intelligence to stop all these unwanted activities on social media.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="join-the-movement">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-sm-12 d-flex justify-content-center flex-column align-items-center">
                            <h2>WE CAN’T DO THIS <br /> WITHOUT YOU.</h2>
                            <p>Join us in creating a country of love, justice, and belonging.</p>
                            <NavHashLink to="/join-the-movement#" className="join-the-movement-btn">join the movement → </NavHashLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;