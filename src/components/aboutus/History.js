import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import hisImg from './hisReact.JPG'


class History extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               
                <nav>
                    <ul className="pure-menu pure-menu-horizontal">
                        <li className="pure-menu-item"><Link className="pure-menu-link" to="/">
                        <img src={hisImg} alt="Home" className="homeIcon" /> Home</Link></li>
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
                    <img src={hisImg} className="pressIcon" alt="About Us"/>

                    <h5>React is a JavaScript library for building user interfaces.<br></br>
                        It is maintained by Facebook and a community
                         of individual<br></br> developers and companies.
                          React can be used as a base in the<br></br> development
                         of single-page or mobile applications, as it is <br></br>optimal for fetching rapidly changing data that
                          needs to be recorded.
                    </h5>
                </section>
            </div>
        );
    }
}

export default History;