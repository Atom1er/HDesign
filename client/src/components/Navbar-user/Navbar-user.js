import React from "react";
import { Link } from "react-router-dom";
import './Navbar-user.css';

const NavbarUser = props => (



<nav className='nav-user'>
<span>MD</span>
 



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
     
      <i className='far fa-user-circle'></i>
    </Link>
  </li> 

</ul>
 

</nav>

   
 
);

export default NavbarUser;
