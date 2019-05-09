import React from "react";
import { Link } from "react-router-dom";
import './Navbar-user.css';
import Search from "../../pages/Search";



// const NavbarUser = props => (
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

    let isLoggedIn = this.state.loggedIn;

    if (isLoggedIn) {

    }
    else {

    }

    return (
      <nav className='nav-user'> 

        <Link to="./"
          className="navbar-brand mr-0 mr-md-2"
          aria-label="Bootstrap"
          style={{ textDecoration: "none", color: "black" }}>
          <span className="md">MD</span>
        </Link>
        

        <ul>{(this.props.user.name ? (<li className="nav-item"><Link to="/personal-account"className="nav-link"style={{ textDecoration: "none", color: "black" }}><p className="nav-hover"><strong>{this.props.user.name}</strong></p> </Link></li>) : "" )}
         
          <div>
              <Search/>
            </div>
            <li className="nav-item">
            <Link to="/login-local"
              className="nav-link"
              style={{ textDecoration: "none", color: "black" }}>
              <p className="nav-hover"><i className="far fa-user"></i> Log In</p>
            </Link>
          </li>
          <li className="nav-item">
            <div
              className="nav-link"
              style={{ textDecoration: "none", color: "black" }}>
              <p onClick={this.props.logOut}className="nav-hover"><i className="far fa-user"></i> Log Out</p>
            </div>
          </li>

          <li className="nav-item">
            <Link to="./signup"
              className="nav-link"
              style={{ textDecoration: "none", color: "black" }}>
              <p className="nav-hover">Sign Up</p>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavbarUser;