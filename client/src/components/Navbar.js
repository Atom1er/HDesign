import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (

    <div className="container-fluid">



<nav class="navbar fixed-top navbar-light bg-light">


  <a class="navbar-brand" href="a">
  <Link to="./" style={{textDecoration: "none",  color: "black", textAlign:"center"}}>
                    <h1  style={{ textAlign:"center"}}> 
                    ModernDesign</h1>
                </Link>
  </a>


</nav>
        {/* <div className="row border"> */}
            {/* <div className="col-12 text-center" style={{ padding: "20px", background: "orange" }}> */}
                {/* <Link to="./" style={{textDecoration: "none", color: "white"}}>
                    <h1>ModernDesign</h1>
                </Link> */}
            {/* </div>
        </div> */}



        <div className="row border">
            {/* <div className="col-3 border text-center" style={{ padding: "20px", background: "red" }}>
                <Link to="./modern" style={{textDecoration: "none", color: "white"}}> */}
                    {/* <button type="button" class="btn  btn-outline-warning   btn-lg">Modern</button> */}
                    {/* <h3>Modern</h3> */}
                {/* </Link>
            </div> */}
            {/* <div className="col-3 border text-center" style={{ padding: "20px", background: "blue" }}>
                <Link to="./decor" style={{textDecoration: "none", color: "white"}}> */}
                    {/* <button type="button" class="btn  btn-outline-warning   btn-lg">Decor`</button> */}
                    {/* <h3>Decor`</h3> */}
                {/* </Link>
            </div> */}
            {/* <div className="col-3 border text-center" style={{ padding: "20px", background: "green" }}>
                <Link to="./luxury" style={{textDecoration: "none", color: "white"}}> */}
                    {/* <button type="button" class="btn  btn-outline-warning   btn-lg">Luxury</button> */}
                    {/* <h3>Luxury</h3>
                </Link> */}
            </div>
            {/* <div className="col-3 border text-center" style={{ padding: "20px", background: "yellow" }}>
                <Link to="./antique" style={{textDecoration: "none", color: "white"}}> */}
                    {/* <button type="button" class="btn  btn-outline-warning   btn-lg">Antique</button> */}
                    {/* <h3>Antique</h3> */}
                {/* </Link>
            </div> */}
        {/* </div> */}
    </div>

)

export default Navbar;