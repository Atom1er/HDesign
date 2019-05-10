import React, { Component } from 'react';
import queryString from "query-string";
import LOCALAPI from '../utils/local-auth';
import './signUp.css';
import { Link, Redirect } from 'react-router-dom';

class SignUp extends Component {
  
  state = {
    name: "",
    email: "",
    password: "",
    errorMessage: null
}

handleInputChange = event => {
    // copy
    let name = event.target.name;
    let value = event.target.value;
    //modify

    //setState
    this.setState({
        [name]: value
    })
}

handleFormSubmit = event => {
    event.preventDefault();
    console.log(event.target);
    LOCALAPI.signupUser({
        user_email: this.state.email,
        user_name: this.state.name,
        user_password: this.state.password
    }).then(res =>{
      console.log(res)
    });
}


  componentWillMount() {
    var query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
      this.props.history.push("/");
  }
}

  render() {
    return (
      <div className='login '>
      <div>
        <div className='container-fluid '>
      
        <div className="limiter">
  <div className="container-login100">
    <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
    <form className="login100-form validate-form">
    <span className="login100-form-title p-b-55 header">
						Login
					</span>
              <div className="wrap-input100 validate-input m-b-16">
              <label htmlFor="email">Name:</label>
                        <input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Type in name"
                        id="name"
                        />
              </div>
              <div className="wrap-input100 validate-input m-b-16">
              <label htmlFor="email">Email:</label>
                        <input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="Type in Email"
                        id="email"
                        />
              </div>

              <div className="wrap-input100 validate-input m-b-16">
              <label htmlFor="password">Password:</label>
                        <input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Type in Password"
                        id="password"
                        />
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                <label class="custom-control-label" for="customCheck1">Remember password</label>
              </div>
              <button class=" log btn btn-lg btn-primary btn-block text-uppercase" onClick={this.handleFormSubmit} type="submit">Sign in</button>
              <hr class="my-4" />
              <button class="  btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
            </form>
            {this.state.errorMessage}
          </div>
        </div>
      </div>
    </div>
  </div>
        
{/************************************ Google SignIn *******************************/}
        <a href="/auth/google" className="button">
          <div>
            <span className="svgIcon t-popup-svg">
              <svg
                className="svgIcon-use"
                width="25"
                height="37"
                viewBox="0 0 25 25"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
                    fill="#34A853"
                  />
                  <path
                    d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
                    fill="#EA4335"
                  />
                </g>
              </svg>
            </span>
            <span className="button-label">Sign in with Google</span>
          </div>
        </a>
{/************************************ Google SignIn *******************************/}
      </div>
    );
  }
}
export default SignUp;
