import React from "react";
// import { Link } from "react-router-dom";

const Navbar = props => (
  <div className=" container-fullwidth ">
    {/* <div className="row border">
            <div className="col-9 text-center" style={{ padding: "20px", background: "orange" }}>
                <Link to="./" style={{ textDecoration: "none", color: "white" }}>
                    <h1>ModernDesign</h1>
                </Link>
            </div>
            <div className="col-3 text-center" style={{ padding: "20px", background: "brown" }}>
                <Link
                    to='./photoWidgetUploader'
                    className={window.location.pathname === "/PhotoWidgetUploader" ? "nav-link active" : "nav-link"}>
                    <button variant="raised">
                        Photo upload
                    </button>
                </Link>
            </div>
        </div>
        <div className="row border">
            <div className="col-3 border text-center" style={{ padding: "20px", background: "red" }}>
                <Link to="./modern" style={{ textDecoration: "none", color: "white" }}> */}
    {/* <button type="button" class="btn  btn-outline-warning   btn-lg">Modern</button> */}
    {/* <h3>Modern</h3>
                </Link>
            </div>
            <div className="col-3 border text-center" style={{ padding: "20px", background: "blue" }}>
                <Link to="./decor" style={{ textDecoration: "none", color: "white" }} > */}
    {/* <button type="button" class="btn  btn-outline-warning   btn-lg">Decor`</button> */}
    {/* <h3>Decor`</h3>
                </Link>
            </div> */}
    {/* <div className="col-3 border text-center" style={{ padding: "20px", background: "green" }}>
                <Link to="./luxury" style={{ textDecoration: "none", color: "white" }} >

                <h3>Luxury</h3> */}
    {/* <button type="button" class="btn  btn-outline-warning   btn-lg">Luxury</button> */}
    {/* 
                </Link> */}
    {/* </Link> */}
    {/* </div> */}
    {/* <div className="col-3 border text-center" style={{ padding: "20px", background: "yellow" }}>
                <Link to="./antique" style={{ textDecoration: "none", color: "white" }}>
                <h3>Antique</h3> */}
    {/* <button type="button" class="btn  btn-outline-warning   btn-lg">Antique</button> */}
    {/*  */}
    {/* </Link>
                
                        </div> */}
    {/* </div> */}
    {/* </Link> */}
    {/* </div> */}
    {/* </div> */}
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <h3 class="navbar-brand" href="a"><i class="fas fa-home"></i></h3>
  
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <p class="nav-item nav-link active" href="y">. <span class="sr-only">(current)</span></p>
      <p class="nav-item nav-link" href="r">Modern</p>
      <p class="nav-item nav-link" href="s">Luxury</p>
      <p class="nav-item nav-link " href="t">Decor</p>
      <p class="nav-item nav-link " href="u">Antique</p>

      <div>
      <i class="far fa-heart"></i>
  
      <i class="far fa-user"></i>
      </div>
    </div>
  </div>
</nav>
   
  </div>
);

export default Navbar;
