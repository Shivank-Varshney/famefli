import React from "react";
import BlogCard from "../components/BlogCard";
import BlogData from "../components/BlogData";

const PressReleases = () => {
    return(
        <>
            <div id="featured">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>Press releases: </h4>
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

export default PressReleases;