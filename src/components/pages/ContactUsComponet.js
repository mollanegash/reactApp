import React from 'react';

const ContactUsComponet=(props)=>{

        return (

           
            <div className="div">  
            <h1 >Contact us</h1>           
              {/* {props.children}

          <br>Tel: "301-792-065",</br>
          <br> email:"mdraya3@gmail.com",</br>
          <br> web:"www.yayobe.com",</br>  */}
              
 <br/>Telephone:{props.tel}
 <br/>email:{props.email}
 <br/>website:{props.website} 


            </div>
        );
    }



export default ContactUsComponet;