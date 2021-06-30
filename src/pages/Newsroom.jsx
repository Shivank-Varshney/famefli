import React from "react";
// import NewsroomBanner from "../assets/newsroom-banner.png";
import NewsroomBanner1 from "../assets/girlChild.png";
import BlogCard from "../components/BlogCard";
import BlogData from "../components/BlogData";

const Newsroom = () => {
    return(
        <>
            <div className="container-fluid" id="newsroom-page">
                <div className="row">
                    <div className="col-md-7 px-0 vh-100 d-flex justify-content-center align-items-center">
                        <div className="about-us-content">
                            <span>NEWSROOM</span>
                            <h2 className='text-secondary'> FAMEFLI IN THE NEWS</h2>
                            <p>She the People has worked to elevate the national narrative on the political role of women of color.</p>
                        </div>
                    </div>
                    <div className="col-md-5 px-0 vh-100 d-flex">
                        <img src={NewsroomBanner1} className="img-fluid" style={{maxHeight: '60vh', marginTop: '15vh'}} alt="" />
                    </div>
                </div>
            </div>

            <div id="featured">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>Featured: </h4>
                        </div>
                    </div>
                    <div className="row">
                            { BlogData.map((val,index)=>
                                <BlogCard 
                                key = {index}
                                imgsrc = {val.imgsrc}
                                desc = {val.desc}
                                heading = {val.heading}
                                btntext = {val.btntext}
                                />)
                            }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Newsroom;