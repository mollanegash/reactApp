import React from 'react';

class NavComponet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="home">SMS</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarColor02">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="home">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="aboutus">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contactus">Contact Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="history">History</a>
                </li>
              </ul>
              
            </div>
          </nav>
         
        );
    }
}

export default NavComponet;