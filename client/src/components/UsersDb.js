import React, { Component } from 'react';
import axios from 'axios';


class UsersDb extends Component {
    // Initialize the state
    state = {
        usersFav:[]
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getUsers();
    }

    // Retrieves the list of items from the Express app
    getUsers = () => {
        axios.get('/api/db/favorites')
        .then(res => {
            console.log(res);
            this.setState({usersFav: res.data[0]});
        });
        // fetch('/api/db/favorites')
        //     .then(res => {
        //         console.log(res)
        //         this.setState({ usersFav: usersFav[0] })
        //     }) //res.json
        //     // .then(usersFav => );
       
    }

    render() {
        console.log(this.state.usersFav);
        return <ul>
            <li>{this.state.usersFav.user_name}</li>
            <li>{this.state.usersFav.user_email}</li>
        </ul>
    }
}

export default UsersDb;