import React from "react";
import { Link } from "react-router-dom";
import './navbar-main.css';


const Navbar = props => (
  <nav className='nav-main navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar"'>
    <ul>
      <li className="nav-item"
        style={{ borderLeft: "1px solid black" }}>
        <Link to="./modern"
          className="nav-link nav-link1"
          style={{ textDecoration: "none", color: "black" }}>
          <span className="nav-hover">Modern</span>
            </Link>
      </li>

      <li className="nav-item"
        style={{ borderLeft: "1px solid black" }}>
        <Link to="./luxury"
          className="nav-link nav-link1"
          style={{ textDecoration: "none", color: "black" }} >
          <span className="nav-hover">Luxury</span>
            </Link>
      </li>

      <li className="nav-item"
        style={{ borderLeft: "1px solid black" }}>
        <Link to="./decor"
          className="nav-link nav-link1"
          style={{ textDecoration: "none", color: "black" }} >
          <span className="nav-hover">Decor</span>
            </Link>
      </li>

      <li className="nav-item"
        style={{ borderLeft: "1px solid black", borderRight: "1px solid black" }}>
        <Link to="./antique"
          className="nav-link nav-link1"
          style={{ textDecoration: "none", color: "black" }}>
          <span className="nav-hover">Antique</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;