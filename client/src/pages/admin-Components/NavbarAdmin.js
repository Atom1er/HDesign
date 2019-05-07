import React from "react";
import { Link } from "react-router-dom";
// import './navbar-main.css';


const NavbarAdmin = (props) => (
    <div className='nav-bar-admin'>
        <div>

            <p className="nav-item-admin">
                <Link to="/modernadmin"
                    className="nav-link-2"
                    style={{ textDecoration: "none", color: "black" }}>
                    <p className="nav-hover-2">Modern</p>
                </Link>
            </p>
            <hr/>
            <p className="nav-item-admin">
                <Link to="/luxuryadmin"
                    className="nav-link-2"
                    style={{ textDecoration: "none", color: "black" }}>
                    <p className="nav-hover-2">Luxury</p>
                </Link>
            </p>
            <hr/>
            <p className="nav-item-admin">
                <Link to="/decoradmin"
                    className="nav-link-2"
                    style={{ textDecoration: "none", color: "black" }}>
                    <p className="nav-hover-2">Decor</p>
                </Link>
            </p>
            <hr/>
            <p className="nav-item-admin">
                <Link to="/antiqueadmin"
                    className="nav-link-2"
                    style={{ textDecoration: "none", color: "black" }}>
                    <p className="nav-hover-2">Antique</p>
                </Link>
            </p>
            <hr/>
            <p className="nav-item-admin">
                <Link to="#"
                    className="nav-link-2"
                    style={{ textDecoration: "none", color: "black" }}>
                    <p className="nav-hover-2">Users</p>
                </Link>
            </p>

        </div>
    </div>
);

export default NavbarAdmin;