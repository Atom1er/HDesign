import React from "react";
import { Link } from "react-router-dom";
import './navbar-main.css';








const Navbar = props => (
<nav className='nav-main'>
  <ul>
    <li>
      <Link  
        to="./modern"
        className='nav-link' >
          Modern
      </Link>
    </li> 
    <li>
      <Link  
        to="./modern"
        className='nav-link' >
        Decor
      </Link>
    </li> 
    <li>
      <Link  
        to="./modern"
        className='nav-link' >
        Luxury
      </Link>
    </li> 
    <li>
      <Link  
        to="./modern"
        className='nav-link' >
          Antique
      </Link>
    </li> 
  </ul>
</nav> 
);

export default Navbar;
