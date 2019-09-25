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
        <img src={title} alt="Disney Parent logo" />

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
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar non sem maecenas dictum congue faucibus vitae eget. Tristique id iaculis elementum in arcu. Nibh pellentesque feugiat erat velit eu congue cursus magnis turpis. Tortor aliquam cras scelerisque lectus nulla egestas. A porttitor etiam velit, id facilisis. Metus amet at elementum ac. Ac velit pretium pulvinar donec diam. Nisl risus molestie diam, faucibus erat urna mauris. Sapien sed lorem vel, pulvinar aliquam. Feugiat risus volutpat sit gravida donec at. Dictum fermentum aliquet phasellus donec vulputate ut. Posuere dolor et congue amet, lobortis consectetur id cursus neque. Vulputate tincidunt blandit vel, laoreet pretium lectus.</p>
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
        <p>Jarvise Billups-Brown<br />Backedn Developer</p>
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
        <a href="/">Sign Up</a>
        <a href="/">Sign In</a>
    </nav>

    <p>Team Disney Parent 2019</p>
</footer>
</body>
    )
}