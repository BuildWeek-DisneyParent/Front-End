import React from "react";
import title from "./components/img/title.png";
import mom from "./components/img/Mom_holding_baby.png";
import lines from "./components/img/Vector2.png";
import smiling1 from "./components/img/Woman_smiling.png";
import smiling2 from "./components/img/Woman_Smiling_2.png";
import smiling3 from "./components/img/Woman_smiling_3.png";
import phone from "./components/img/phone.png";
import Linzy from "./components/img/Linzy.png";
import Michael from "./components/img/Michael.png";
import twitter from './components/img/twitter.png';
import facebook from './components/img/facebook.png';
import github from './components/img/github.png';
import {Link} from "react-router-dom";
import {HomeStyle} from "./components/Styling/HomeStyling"

export const Home = () => {
    return (
        <HomeStyle>
    <header>
    <Link to="/"><img className="logo" src={title} alt="pic of Disney Parent" /></Link>

        <nav>
            <Link to="/ourstory">Our Story</Link>
            <Link to="/register">Sign Up</Link>
            <Link to="/login">Sign In</Link>
        </nav>
    </header>

    <section className="block_one">
        <div className="info">
            <h2> The Babysitting App that maximizes the fun for the family.</h2>
            <p> Disney Parent allows communication between Parents and volunteer experienced business owners to babysit other parents' children while parents can go on the rides of their choosing.</p>
        </div>

        <div className=" images">
            <img className="top" src={mom} alt="Mom holding baby." />
            <img className="lines" src={lines} alt="lines pointing to pictures" />

            <div className="bottom">
                <img src={smiling1} alt="Lady in red sweater smiling" />
                <img src={smiling2} alt="Woman in white tank top smiling" />
                <img src={smiling3} alt="Woman in brown shirt smiling." />
            </div>
        </div>        
    </section>

    <section className="block_two">
        <h4>Disney Parent allows you to create posts and receive responses back from certified Disneysitters</h4>
        <div>
            <img src={phone} alt="pic of Disney Parent on mobile phone." />

            <div className="features">
                <h4>Features</h4>
                <p>• Register family profile</p>
                <p>• Create, delete, edit and receive posts </p>
                <p>• Notifies you when you receive a response back</p>
                <p>• Search for current and past posts</p>
            </div>
        </div>
    </section>

    <section className="block_three">
        <div className="linzy">
            <img src={Linzy} alt="profile pic of Linzy" />
            <p>"I work, and I'm a mom.  When we vacation at Disneyland every years, I can never go on my favorite rides.  Disney Parent really is that eady to sign up for and you find the perfect match for a DisneySitter"<br />
            -Linzy, 29 from Los Angeles, California</p>
        </div>

        <div className="michael">
            <img src={Michael} alt="profile pic of Michael" />
            <p>"As a stay at home dad, I couldn't put my kids down when at Disneyland.  Then I tried Disney Parent.  Now I can have fun and be a responsible parent."<br />-Michael, 34, from Seattle, Washington</p>
        </div>
    </section>

    <section className="block_four">
        <div className="parent">
            <h3>Are you a Parent?</h3>
            <Link to="/register"><button>Start Here</button></Link> 
        </div>

        <div className="sitter">
            <h3>Are you a Volunteer Business Owner?</h3>
            <Link to="/vbo-register"><button>Start Here</button></Link>            
        </div>
    </section>  
    
    <footer>
        <div>
            <img src={twitter} alt="twitter icon" />
            <img src={facebook} alt="facebook icon" />
            <img src={github} alt="github icon" />
        </div>

        <nav>
            <Link to="/ourstory">Our Story</Link>
            <Link to="/register">Sign Up</Link>
            <Link to="/login">Sign In</Link>
        </nav>

        <p>Team Disney Parent 2019</p>
    </footer>
    </HomeStyle>
    )
}