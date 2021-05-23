import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom';
import homeImg from '../landing/home.png';
import profimg from './professor.JPG';

class Professors extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                   
                <nav>
                    <ul className="pure-menu pure-menu-horizontal">
                        <li className="pure-menu-item"><Link className="pure-menu-link" to="/">
                            <img src={profimg} alt="Home" className="homeIcon" /> Home</Link></li>
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
                    <img src={profimg} className="pressIcon" alt="About Us"/>

                    <h5>Hello students!</h5>
                </section>
            </div>
        );
    }
}

export default Professors;