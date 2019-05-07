import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Images from './Images1';
import axios from "axios";
// import "./admin.css";


class Users extends Component {
    // Initialize the state
    state = {
        users: []
    }

    // Fetch the list on first mount
    componentDidMount = () => {
        // const { modern } = this.props.match.params;
        this.getUsers();
        // this.setState({email: this.props.user.email});
    }


    getUsers = () => {
        axios.get('/api/db/users')
            .then(res => {
                this.setState({ users: res.data});
                console.log(res.data);
                // let result = res.data;
                console.log(this.state.users);
            })
            .catch(function (error) {
                console.log(error);
             });
            

    }

    render() {
        const arr = this.state.users;
        return (
            <div className="container-admin">
                <div className='new-photo-admin'>
                    <h3><strong>Users</strong></h3>
                    <hr></hr>
                    <p>Make sure to include "Luxury" tag in "advance options" when upload new photo</p>
                    <div className="back-btn-admin">

                    </div>

                </div>
                <div className="photo-container-admin">
                    {arr.map(user => (
                    <table>
                    <tr>
                        <td>{user.user_name}</td>
                    </tr>
                    <tr>
                        <td>{user.user_email}</td>
                    </tr>
                    
                    </table>))}
                </div>
            </div>
        );


    }

}

export default Users;