import React from "react";
import { Link } from "react-router-dom";
import './Navbar-user.css';
import Search from "../../pages/Search";

import Axios from "axios";


class NavbarUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true

    };
  }

  update = (e) => {
    console.log(e.target.value);
    this.props.onUpdate(e.target.value);
    this.setState({name: e.target.value});
  };

  render() {

    return (
      <nav className='nav-user'> 

        <Link to="/"
          className="navbar-logo navbar-brand mr-0 mr-md-2 mt-0"
          aria-label="Bootstrap"
          style={{ textDecoration: "none", color: "black" }}>
          <span className="md"><img className="md-logo" src="./hdesign.png" width="100px" height="50px" alt="hdesign logo"></img></span>
        </Link>
        

        <ul>
          <Search />
        {(!this.props.user ? (<li className="nav-item"> <Link to="/signup" className="nav-link" style={{ textDecoration: "none", color: "black" }}> <p className="nav-hover"><i className="far fa-user"></i>Sign Up</p> </Link> </li>):"")}
          {(!this.props.user ? (<li className="nav-item"><Link to="/login-local" className="nav-link" style={{ textDecoration: "none", color: "black" }}> <p className="nav-hover"><i className="far fa-user"></i> Log In</p> </Link> </li>) : "")}
          {(this.props.user.name === 'Admin' ? (<li className="nav-item"><Link to="/admin"className="nav-link"style={{ textDecoration: "none", color: "black" }}><p className="nav-hover"><strong>{this.props.user.name}</strong></p> </Link></li>) : "" )}
          {(this.props.user.name !== 'Admin' ? (<li className="nav-item"><Link to="/personal-account"className="nav-link"style={{ textDecoration: "none", color: "black" }}><p className="nav-hover"><strong>{this.props.user.name}</strong></p> </Link></li>) : "" )}
          {(this.props.user ? (<li className="nav-item"><Link className="nav-link" style={{ textDecoration: "none", color: "black" }}> <p onClick={this.props.logOut}className="nav-hover"><i className="far fa-user"></i> Log Out</p> </Link></li>) : "")}

        </ul>
      </nav>
    )
  }



}





export default NavbarUser;



