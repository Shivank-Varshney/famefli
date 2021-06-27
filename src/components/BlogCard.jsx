import React from "react";

const BlogCard = (props) => {
    return(
        <>
            <div className="col-md-6 p-3">
                <div className="card">
                    <img src={props.imgsrc} className="img-fluid" alt="" />
                    <div className="card-body p-3">
                        <div className="card-desc">
                            <span>{props.desc}</span>
                        </div>
                        <div className="card-heading">
                            <h4>{props.heading}</h4>
                        </div>
                        <button className="card-btn">{props.btntext} →</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogCard;