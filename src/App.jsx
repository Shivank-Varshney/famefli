import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Preloader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Jobs from "./pages/jobs";
import Work from "./pages/Work";
import Newsroom from "./pages/Newsroom";
import Blog from "./pages/Blog";
import PressReleases from "./pages/PressReleases";
import JoinTheMovement from "./pages/JoinTheMovement";
import Donate from "./pages/Donate";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/our-work" component={Work} />
        <Route exact path="/in-the-news" component={Newsroom} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/press-releases" component={PressReleases} />
        <Route exact path="/join-the-movement" component={JoinTheMovement} />
        <Route exact path="/donate" component={Donate} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;