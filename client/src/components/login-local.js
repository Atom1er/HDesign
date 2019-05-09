import React, { Component } from 'react';
import LOCALAPI from '../utils/local-auth';
import { Link, Redirect } from 'react-router-dom';
import './local.css';

class LoginLocal extends Component{
    state = {
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
        LOCALAPI.loginUser({
            user_email: this.state.email,
            user_password: this.state.password
        }).then( response => {
            let user = response.data;
            // make sure we have an email
            if(user && user.email){
                this.props.setUser(user);
                this.setState({
                    errorMessage: null
                });
            }
            else{
                this.setState({
                    errorMessage: "Could not log in"
                });
            }
            
        }).catch( error => {
            this.setState({
                errorMessage: "Could not log in"
            });
        })
    }


    // componentDidMount = () => {
    //     // AUTHAPI.getUserData().then( userResponse => {
    //     //     if(userResponse.data){
    //     //         this.props.setUser(userResponse.data);
    //     //     }
    //     // })
    // }
    render() {
        if(this.props.user && this.props.user.email){
            return this.props.user.name == 'Admin' ? (<Redirect to="/admin"/>) :(<Redirect to="/"/>);
        }
        return (
            <div class="container ">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5 bg-light">
            <div class="card-body">
            <h5 class="card-title text-center" >Log In</h5>
                <form className="form-signin">
                    <div className="form-label-group">
                        <div>Email:</div>
                        <label htmlFor="email" />
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
                    <div className="form-label-group">
                        <div>Password:</div>
                        <label htmlFor="password" />
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
                                    
                    <button type="submit" onClick={this.handleFormSubmit} className="mt-2 btn-sm btn-primary text-uppercase">
                        LogIn
                        </button>
                    </form>
                    {this.state.errorMessage}
            </div>
            </div>
            </div>
        </div>
        );
    }
}

export default LoginLocal;