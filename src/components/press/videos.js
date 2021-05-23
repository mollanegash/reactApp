import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom';
import pressImg from "./press_release.png";
class pressCoponet4 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                   
            <nav>
                <ul className="pure-menu pure-menu-horizontal">
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/">
                    <img src={pressImg} alt="Home" className="homeIcon" /> Home</Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/about">About</Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/News">News </Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/Professors">Professors </Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/Students">Students </Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/History">History</Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/ContactUs">Contact Us</Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/Mail">Mail</Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/GoogleMap">Google Map</Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/chatRoom">Chat Now</Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/twitter">twitter</Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/registration">registration</Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/press">Press Release</Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/publications">publications</Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/Headline">Headlines</Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/Archives">Archives</Link></li>
                    <li className="pure-menu-item"><Link className="pure-menu-link" to="/videos">videos</Link></li>
                </ul> 
            </nav>
            <section className="pad15">
                <img src={pressImg} className="pressIcon" alt="About Us"/>

              
                
                
    
            </section>
            <section>

            <h5>click here!</h5>                 
                   
                   <a href="https://www.youtube.com/watch?v=4RZj-hF2f0s" target="_blank">press release.</a>
                     
               </section>
        </div>
        );
    }
}

export default pressCoponet4;