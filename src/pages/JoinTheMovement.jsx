import React from "react";
import ContactBanner from "../assets/contact-banner.png";
import Contact1 from "../assets/contact-1.png";
import Contact2 from "../assets/contact-2.png";
import Thumbnail from "../assets/Thumbnail.png";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const JoinTheMovement = () => {
    return(
        <>
            <div className="container-fluid" id="contact-page">
                <div className="row">
                    <div className="col-md-7 px-0 d-flex justify-content-center align-items-center">
                        <div className="about-us-content">
                            <span>get involved</span>
                            <h2>join the movement</h2>
                            <p>She the People is creating a politics we have not yet seen. We believe in a politics grounded in  love, justice, and belonging. </p>
                            <form>
                                <div className="form-group">
                                    <label className="label" htmlFor="InputFirstName">first name</label>
                                    <input type="text" className="form-control" placeholder="First name" id="InputFirstName" />
                                </div>
                                <div className="form-group">
                                    <label className="label" htmlFor="InputLastName">last name</label>
                                    <input type="password" className="form-control" placeholder="Last name" id="InputLastName" />
                                </div>
                                <div className="form-group">
                                    <label className="label" htmlFor="InputZipCode">ZIP/POSTAL CODE</label>
                                    <input type="text" className="form-control" placeholder="Zip/Postal code" id="InputZipCode" />
                                </div>
                                <div className="form-group">
                                    <label className="label" htmlFor="InputEmail">Email address</label>
                                    <input type="email" className="form-control" placeholder="Email" id="InputEmail" />
                                </div>
                                <div className="form-group">
                                    <label className="label" htmlFor="InputNumber">mobile number</label>
                                    <input type="text" className="form-control" placeholder="Mobile Number" id="InputNumber" />
                                </div>
                                <button type="submit" className="btn-ready">i'm ready</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-5 px-0 vh-100 d-flex justify-content-end">
                        <img src={ContactBanner} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <img src={Thumbnail} className="img-fluid" alt="thumbnail" />
                    </div>
                </div>
            </div>

            <div id="contact-desk">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-6 d-flex justify-content-center align-items-center p-5 order-md-1 order-2">
                            <img src={Contact1} className="img-fluid p-md-5" alt="" />
                        </div>
                        <div className="col-md-6 d-flex justify-content-center flex-column align-items-start order-md-2 order-1">
                            <h3>1. Donate</h3>
                            <p>We are building unprecedented power through a politics of love, justice, and belonging. Are you in? </p>
                            <div className="in-btn">i'm in! →</div>
                        </div>
                    </div>

                    <div className="row py-5">
                        <div className="col-md-6 d-flex justify-content-center flex-column align-items-start my-5">
                            <h3>2. join us on social media</h3>
                            <p>We have power in numbers. Follow our journey in activating and centering our voices in the political process.  </p>
                            <div className="icons">
                                <a href="http://twitter.com/@famefli" target="_blank" className="icon"><TwitterIcon /></a>
                                <a href="https://instagram.com/famefli?r=nametag" target="_blank" className="icon"><InstagramIcon /></a>
                                <a href="https://www.linkedin.com/company/famefli" target="_blank" className="icon"><LinkedInIcon /></a>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center p-5">
                            <img src={Contact2} className="img-fluid p-md-5" alt="" />
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-6 d-flex justify-content-center flex-column align-items-start">
                            <h3>3. GET YOUR ORGANIZATION INVOLVED</h3>
                            <p>Our vision for this political home for one million women of color will only be possible with the partnership of organizations like yours. She the People invites your organization to join us as a She the People 2020 Partner to connect women of color in your network into our national home.  As She the People 2020 Partners, local groups and leaders will be deeply informed about issues that impact women of color, gain increased national visibility, and engage with national events. C3 and C4 partnership opportunities are available. </p>
                            <div className="in-btn">sign my organisation up! →</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="quotation">
                <div className="container">
                    <div className="row">
                        <div className="col quote">
                            <h4>
                            "I STOOD AT THE BORDER, STOOD AT THE EDGE AND CLAIMED IT AS CENTRAL. I CLAIMED IT AS CENTRAL AND LET THE REST OF THE WORLD MOVE OVER TO WHERE I WAS." <br /><br /> - TONI MORRISON </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact-us">
                <div className="container py-5">
                    <div className="row">
                    <div className="col-md-7 py-5">
                        <span className="small-heading">contact us</span>
                        <h3>WE’D LOVE TO <br /> HEAR FROM YOU!</h3>
                        <span className="small-heading">PRESS INQUIRIES</span>
                        <p>For press inquiries, please use this form to contact us.</p>
                        <button className="contact-btn">contact us →</button> <br /><br />
                        <span className="small-heading">PARTNERSHIP INQUIRIES</span>
                        <p>For partnership inquiries, please refer to the form above. If you have additional questions, please use this form to contact us. .</p>
                        <button className="contact-btn">contact us →</button>
                    </div>
                    <div className="col-md-5 py-5">
                        <span className="small-heading">GENERAL INQUIRIES</span>
                        <form>
                            <div className="form-group">
                                <label className="label" htmlFor="InputName">Name*</label>
                                <div className="row">
                                    <div className="col">
                                    <input type="text" className="form-control" placeholder="First name" />
                                    </div>
                                    <div className="col">
                                    <input type="text" className="form-control" placeholder="Last name" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="label" htmlFor="InputEmail">Email address*</label>
                                <input type="email" className="form-control" id="InputEmail" />
                            </div>
                            <div className="form-group">
                                <label className="label" htmlFor="InputSubject">Subject*</label>
                                <input type="text" className="form-control" id="InputSubject" />
                            </div>
                            <div class="form-group">
                                <label className="label" for="InputMessage">Message*</label>
                                <textarea class="form-control" id="InputMessage" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn-submit">Submit →</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JoinTheMovement;