import React from 'react';
import { Script } from 'vm';

class ApplicationComponet extends React.Component {
  constructor(props) {
  


    super(props);

    this.state={
      FullName: "",
      itemName: "",
      itemPrice: "",
      quantity:"",
      cost: "",
    
    }
  }
      display = (e) => {
        let updatedName = e.target.value;
        let updatedName2 = e.target.value;
        let updatedName3 = e.target.value;
        let updatedName4 = e.target.value;
        let updatedName5 = e.target.value;

        this.setState({FullName: updatedName});
        this.setState({itemName: updatedName2});
        this.setState({itemPrice: updatedName3});
        this.setState({quantity: updatedName4});
        this.setState({cost: updatedName5});
    }
    
  
  //  totalCost=(t) =>{
  
  // var x=[],
  // var size=4,
  // this.cost=0,

  // for (const iterator of object) {
    
  // }(this.cost<size){


  // }
  //    this.cost=quantity*itemPrice
  //    </Script> 
  //   }
   
   


render() {
 
    return ( 
      
      <div>
         <form>
             <label>Full Name</label>
                 <input type="text" name="FullName" onChange={this.display}  placeholder="enter your full name please"/>
                 {/* <button type="button" value="button" onSubmit={e=>this.state.display(e)}> sumit me </button>                  */}
                 <input type = "reset" value = "clear"/>
                 {/* <p>Full name: {this.state.FullName}</p> */}
                   
          </form>


          <form>
             <label>Item</label>
                 <input type="text" name="iName" onChange={this.display}  placeholder="enter item name"/>
                 {/* <button type="button" value="button" onSubmit={e=>this.state.display(e)}> sumit me </button>                  */}
                 <input type = "reset" value = "clear"/>
                 {/* <p>Item name: {this.state.itemName}</p> */}
                   
          </form>

          <form>
             <label>Item price</label>
                 <input type="text" name="iName" onChange={this.display}  placeholder="enter item name"/>
                 {/* <button type="button" value="button" onSubmit={e=>this.state.display(e)}> sumit me </button>                  */}
                 <input type = "reset" value = "clear"/>
                 {/* <p>Item Price: {this.state.itemPrice}</p> */}
                   
          </form>

          <form>
             <label>Quantity</label>
                 <input type="text" name="iName" onChange={this.display}  placeholder="enter quantity"/>
                 {/* <button type="button" value="button" onSubmit={e=>this.state.display(e)}> sumit me </button>                  */}
                 <input type = "reset" value = "clear"/>
                 {/* <p>Item Price: {this.state.quantity}</p> */}
                   
          </form>
          <form>
             <label>Total Cost</label>
                 <input type="text" name="iName" onChange={this.display}  placeholder="enter item name"/>
                                 
                 <input type = "reset" value = "clear"/>
                   
                 {/* <p>Total Cost: {(this.itemPrice)*(this.quantity)}</p> */}
                    <button type="button" value="button" onClick="totalCost()"> sumit me </button>
          </form>

         
      </div>
    )

    }  
}


export default ApplicationComponet;