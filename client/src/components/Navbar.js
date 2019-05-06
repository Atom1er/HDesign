import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
  <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">

      <Link to="./"
            className="navbar-brand mr-0 mr-md-2"
            aria-label="Bootstrap" 
            style={{ textDecoration: "none", color: "black" }}>
        <i className="fa" 
            // style={{ fontSize: "30px", color: "black" }}
            >
            &#xf015;
            </i>
      </Link>


      {/* <div className="navbar-nav-scroll"> */}
        <ul className="navbar-nav bd-navbar-nav flex-row">

          <li className="nav-item">
            <Link to="./modern"
              className="nav-link"
              style={{ textDecoration: "none", color: "black" }}>
              <p>Modern</p>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="./luxury"
              className="nav-link"
              style={{ textDecoration: "none", color: "black" }} >
              Luxury
            </Link>
          </li>

          <li className="nav-item">
            <Link to="./decor"
              className="nav-link"
              style={{ textDecoration: "none", color: "black" }} >
              Decor
            </Link>
          </li>

          <li className="nav-item">
            <Link to="./antique"
              className="nav-link"
              style={{ textDecoration: "none", color: "black" }}>
              Antique
            </Link>
          </li>

        </ul>

        <ul className="navbar-nav flex-row ml-md-auto d-md-flex">

          <li className="nav-item">
            <Link to="./login"
              className="nav-link"
              style={{ textDecoration: "none", color: "black" }}>
              <i className="far fa-user"></i> Log In
            </Link>
          </li>

          <li className="nav-item">
            <Link to="./signup"
              className="nav-link"
              style={{ textDecoration: "none", color: "black" }}>
              Sign Up Now!
            </Link>
          </li>

        </ul>

      {/* </div> */}

  </nav>

);

export default Navbar;