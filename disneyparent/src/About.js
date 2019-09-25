import React from "react";
import chris from "./components/img/chris.png"
import daniel from "./components/img/daniel.png"
import evans from "./components/img/evans.png"
import jarvise from "./components/img/jarvis.png"
import mary from "./components/img/mary.png"
import jen from "./components/img/jen.jpg"
import title from "./components/img/title.png";
import twitter from './components/img/twitter.png';
import facebook from './components/img/facebook.png';
import github from './components/img/github.png';
import {Link} from "react-router-dom";

export const About = () => {
    return (
        <body>

    <header>
    <Link to="/home"><img src={title} alt="Disney Parent logo" /></Link>

        <nav>
            <Link to="/home">Home</Link>
            <a href="/register">Sign Up</a>
            <a href="/login">Sign In</a>
        </nav>  
    </header>

<section className="top_heading">
    <h1>Our Story</h1>
</section>

<section className="description">
    <p>Imagine a day at Disney. You are enjoying your time with your kids having fun on the rides and meeting characters. Then you come to a ride you have always wanted to go on. Only there is one problem. Your kids are too small to go on. The disappointment is overwhelming, and you wish that you could visit Disney alone to just go on the one ride.</p>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<h3><span className="disney">Disney Parent</span> is the answer!!</h3>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<p>With Disney Parent you can go on those rides that you have always wanted to go on while still being a responsible parent.</p>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<p>• Find other parents who also need childcare
<br></br>
• Leave your children with other responsible adults while you get to enjoy those "BIG KID" rides
<br></br>
• Feel assurred that all Disney Sitters are safe and have had a background check
<br></br>
• See reviews of the Disney Sitter you are wanting to care for your children.</p>
</section>

<section className="profilepicstop">
    <div className="chris">
        <img src={chris} alt="pic of chris" />
        <p>Chris Dalao<br /> Project Lead</p>
        <i className="fab fa-github fa-3x"></i>
        <i className="far fa-envelope fa-3x"></i>
    </div>

    <div className-="jen">
        <img src={jen} alt="pic of jen" />
        <p>Jen Chartier<br />UI Developer</p>
        <i className="fab fa-github fa-3x"></i>
        <i className="far fa-envelope fa-3x"></i>
    </div>

    <div className="mary">
        <img src={mary} alt="pic of mary" />
        <p>Mary Clayton<br />Frontend Developer/Designer</p>
        <i className="fab fa-github fa-3x"></i>
        <i className="far fa-envelope fa-3x"></i>
    </div>
</section>

<section className="profilepicsbottom">
    <div>
        <img src={evans} alt="pic of evans"/>
        <p>Evans Ibok<br />Frontend Developer</p>
        <i className="fab fa-github fa-3x"></i>
        <i className="far fa-envelope fa-3x"></i>
    </div>

    <div>
        <img src={daniel} alt="pic of daniel"/>
        <p>Daniel Ferrer<br />Frontend Framework Developer</p>
        <i className="fab fa-github fa-3x"></i>
        <i className="far fa-envelope fa-3x"></i>
    </div>

    <div>
        <img src={jarvise} alt="pic of jarvise"/>
        <p>Jarvise Billups-Brown<br />Backend Developer</p>
        <i className="fab fa-github fa-3x"></i>
        <i className="far fa-envelope fa-3x"></i>
    </div>
</section>

<footer>
    <div>
        <img src={twitter} alt="twitter icon" />
        <img src={facebook} alt="facebook icon" />
        <img src={github} alt="github icon" />
    </div>

    <nav>
        <Link to ="/home">Home</Link>
        <a href="/register">Sign Up</a>
        <a href="/login">Sign In</a>
    </nav>

    <p>Team Disney Parent 2019</p>
</footer>
</body>
    )
}