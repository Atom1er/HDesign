import React from "react";
import "./Footer.css";

const Footer = props => (
    <div>
        <div className="row">
            <div className="col-12 text-center">
                <h5>Created @ Rutgers Coding Bootcamp</h5>
                <p>Culinary Conference Center: 161 Newkirk St, Jersey City, NJ 07306</p>
            </div>
        </div>
        <hr />
        <div className="row text-center">
            <div className="col-2"></div>
            <div className="col-2">
                <h6>Dorothy<a href=""><i class="fab fa-github"></i></a></h6>
            </div>
            <div className="col-2">
                <h6>Thomas<a href=""><i class="fab fa-github"></i></a></h6>
            </div>
            <div className="col-2">
                <h6>William<a href=""><i class="fab fa-github"></i></a></h6>
            </div>
            <div className="col-2">
                <h6>Ry<a href="https://github.com/rnakada" target="_blank"><i class="fab fa-github"></i></a></h6>
            </div>
            <div className="col-2"></div>
        </div>
    </div>
)

export default Footer;