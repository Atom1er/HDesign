import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';

class RedirectGoogleAuth extends Component {
    componentDidMount() {
        window.location.href = "http://localhost:5005/auth/google";
    }
    render() {
        return (
            <div>

                <p>Random test</p>
            </div>
        )
    }
}

export default RedirectGoogleAuth;