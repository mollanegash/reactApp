import React from 'react';
import ContactUsComponet from './ContactUsComponet';

import ApplicationComponet from './ApplicationComponet';
import AboutUsComponet from './AboutUsComponet';



class HomeComponet extends React.Component {
    constructor(props) {
        super(props);
        this.state={
                   


            CustomerInformation:[
                {fname:"molla",lname:"negash", Address:"42 Norton st.",City:"Boston",State:"MA",Item:"apple",Price:"$12.00"
                ,quantity:"2",totalCost:"24"},
                {fname:"Sami",lname:"Abebe", Address:"40 Norton st.",City:"Boston",State:"MA",Item:"banana",Price:"$13.00",
                quantity:"2",totalCost:"26"},
                {fname:"Zew",lname:"negash", Address:"39 Norton st.",City:"Boston",State:"MA",Item:"mango",Price:"$14.00",
                totalCost:"28"},
                   ]

            
        }
        // this.state={
            
        //     Tel: "301-792-065",
        //     email:"mdraya3@gmail.com",
        //     web:"www.yayobe.com", 
        // }
       
       
    }

    render() {
        return (
            <div>
                <h1 >Home</h1>
                   <table className="table"width="400" border="1" cellpadding="5">
                      <thead>
                         <tr>
                            <th>fname</th>
                            <th>lname</th>
                            <th>Address</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>totalCost</th>
                         </tr>
                      </thead>
                
                  <tbody>

                    { this.state.CustomerInformation.map((c)=>
                       <tr>
                          <td>{c.fname}</td>
                          <td>{c.lname}</td>
                          <td>{c.Address} {c.City} {c.State}</td>
                          <td>{c.Item}</td>
                          <td> {c.Price} </td>
                          <td> {c.totalCost} </td>
                      </tr> 
                    )}
                   </tbody>
                   </table>  


                    {/* <li>{c.fname} {c.lname} {c.Address} {c.city} {c.State.map()}</li>)}  */}

               <p className="p">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into 
                  electronic typesetting, remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker including versions 
                  of Lorem Ipsum.
                </p>
                <hr/> 
     <ApplicationComponet className="fieldset">
     </ApplicationComponet>

     <hr></hr>
     {/* <ContactUsComponet className="div" 
     Telephone={this.state.Tel}
     email={this.state.email}
     website={this.state.web}>        
    {/* <h6>  Contact Us</h6> */}
   {/* </ContactUsComponet> */} 

     {/* <AboutUsComponet className="div"
     Address={this.state.Address}
     st={this.state.st}
     city={this.state.city}
     zip={this.state.zip}
     Stat={this.state.Stat}
     ></AboutUsComponet>                  */}
               
    </div>
        );
    }
}

export default HomeComponet;
