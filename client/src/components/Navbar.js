import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
  <div className=" container-fullwidth ">

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <Link to="./" style={{ textDecoration: "none", color: "white" }}>
        <h3 className="navbar-brand" href="a"><i className="fas fa-home"></i></h3>
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">

          <Link to="./modern" style={{ textDecoration: "none", color: "white" }}>
            <p className="nav-item nav-link">Modern</p>
          </Link>
          <Link to="./luxury" style={{ textDecoration: "none", color: "white" }} >
            <p className="nav-item nav-link">Luxury</p>
          </Link>
          <Link to="./decor" style={{ textDecoration: "none", color: "white" }} >
            <p className="nav-item nav-link">Decor</p>
          </Link>
          <Link to="./antique" style={{ textDecoration: "none", color: "white" }}>
            <p className="nav-item nav-link">Antique</p>
          </Link>

          <div>
            <i className="far fa-heart"></i>

            <i className="far fa-user"></i>
          </div>
        </div>
      </div>

    </nav>

  </div>
);

export default Navbar;
