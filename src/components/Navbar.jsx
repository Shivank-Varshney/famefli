import React from "react";
import Logo from "../assets/logo.png";
import { NavHashLink } from "react-router-hash-link";
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    return(
        <>
            <div className="container-fluid">
               <div className="row">
                   <div className="col p-0">
                      <nav className="navbar navbar-expand-lg px-5">
                        <NavHashLink className="navbar-brand" to="/">
                            <img src={Logo} className="logo" alt="" /><span>FAMEFLI</span>
                        </NavHashLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <MenuIcon />
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <NavHashLink className="nav-link gradient" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">about us</NavHashLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <DropList link="/about-us#" linkname="about famefli"/>
                                <DropList link="/jobs#" linkname="jobs"/>
                                <DropList link="/contact-us#" linkname="contact us"/>
                                </div>
                                </li>
                                <List link="/our-work#" linkname="Our Work"/>
                                <li className="nav-item dropdown">
                                <NavHashLink className="nav-link gradient" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">newsroom</NavHashLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <DropList link="/in-the-news#" linkname="In the News"/>
                                <DropList link="/blog#" linkname="blog"/>
                                <DropList link="/press-releases#" linkname="press releases"/>
                                </div>
                                </li>
                                <List link="/join-the-movement#" linkname="join the movement"/>
                                <List link="/" linkname="donate"/>
                            </ul>
                        </div>
                      </nav>
                   </div>
               </div>
           </div>
        </>
    );
}

const List = (props) => {
    return(
        <>
            <li className="nav-item">
                <NavHashLink activeClassName="activecls" className="nav-link mx-2" to={props.link} data-toggle="collapse" data-target=".navbar-collapse.show">{props.linkname }</NavHashLink>
            </li>
        </>
    );
}

const DropList = (props) => {
    return(
        <>
             <NavHashLink activeClassName="activecls" className="nav-link dropdown" to={props.link} data-toggle="collapse" data-target=".navbar-collapse.show">{props.linkname }</NavHashLink>
        </>
    );
}

export default Navbar;