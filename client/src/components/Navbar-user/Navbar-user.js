import React from "react";
import { Link } from "react-router-dom";
import './Navbar-user.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

// library.add(faSignInAlt)



// const NavbarUser = props => (
class NavbarUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true

    };
  }

  render() {

    let isLoggedIn = this.state.loggedIn;
    // let icon;

    if (isLoggedIn) {

    }
    else {
      // icon = <FontAwesomeIcon icon={faSignInAlt} />

    }

    return (
      <nav className='nav-user'>

        <Link to="./"
          className="navbar-brand mr-0 mr-md-2"
          aria-label="Bootstrap"
          style={{ textDecoration: "none", color: "black" }}>
          <span className="md">MD</span>
        </Link>




        <ul>
          <li className="nav-item">
            <Link to="/login-local"
              className="nav-link"
              style={{ textDecoration: "none", color: "black" }}>
              <p className="nav-hover"><i className="far fa-user"></i> Log In</p>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="./signup"
              className="nav-link"
              style={{ textDecoration: "none", color: "black" }}>
              <p className="nav-hover">Sign Up</p>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/personal-account"
              className="nav-link"
              style={{ textDecoration: "none", color: "black" }}>
              <p className="nav-hover">User Favorites</p>
            </Link>
          </li>

        </ul>


      </nav>
    )
  }




}






export default NavbarUser;