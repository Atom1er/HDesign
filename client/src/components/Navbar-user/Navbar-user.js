import React from "react";
import { Link } from "react-router-dom";
import './Navbar-user.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSignInAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faSignInAlt)


// const NavbarUser = props => (
class NavbarUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: true
        
        };
      }
  
      render(){

        let isLoggedIn = this.state.loggedIn;
        let icon;

        if (isLoggedIn) { 
            
        }
        else{
            icon= <FontAwesomeIcon icon={faSignInAlt} />
        }

          return(
<nav className='nav-user  '>
<span > 1</span>
<span className='nav-logo'>hdesign</span>
 



<ul>
<li>
    <Link  
      to="./modern"
      className='nav-link' >
      <i className='far fa-heart'></i>
      
    </Link>
  </li> 
  <li>
    <Link  
      to="./modern"
      className='nav-link' >
     
     {icon}
    </Link>
  </li> 

</ul>
 

</nav>
          )
      }

          
     

}



   


export default NavbarUser;



