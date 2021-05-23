import React from 'react';
import HomeComponet from './HomeComponet';
import HistoryComponet from './HistoryComponet';

const AboutUsComponet = (props) => {
    return (
        <div className="div">
            
             <h1>About Us</h1>
             <img src="http://localhost:3000/AboutUs.JPG"></img>     
           
{/* <br/>Address:{props.Address}
 <br/>st:{props.st}
 <br/>city:{props.city}
 <br/>zip:{props.zip}
 <br/>State:{props.Stat}
 <hr></hr> */}
 <HistoryComponet Address={props.Address}></HistoryComponet>
 </div>
        
    );
}

export default AboutUsComponet;